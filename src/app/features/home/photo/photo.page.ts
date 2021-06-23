import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import ExifReader from 'exifreader';
import { FeatureCollection } from 'geojson';
import { omitBy } from 'lodash-es';
import mime from 'mime/lite';
import { combineLatest, defer, iif, of, ReplaySubject } from 'rxjs';
import {
  catchError,
  concatMap,
  concatMapTo,
  distinctUntilChanged,
  first,
  map,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs/operators';
import SwiperCore, { Swiper, Virtual } from 'swiper/core';
import { DialogsService } from '../../../shared/dialogs/dialogs.service';
import { LanguagesService } from '../../../shared/languages/languages.service';
import { Moment } from '../../../shared/moment/moment';
import { MomentRepository } from '../../../shared/moment/moment-repository.service';
import { blobBufferToBlob } from '../../../utils/encoding';
import { beforeEach, isNonNullable } from '../../../utils/rx-operators';

SwiperCore.use([Virtual]);

@UntilDestroy()
@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage {
  private willBeDestroyed = false;

  private readonly currentMemontId$ = this.route.queryParamMap.pipe(
    map(params => params.get('id')),
    isNonNullable(),
    distinctUntilChanged()
  );

  readonly moments$ = this.momentRepository.all$;

  private readonly currentMomentIndex$ = combineLatest([
    this.moments$,
    this.currentMemontId$,
  ]).pipe(
    map(([moments, id]) => moments.findIndex(moment => moment.id === id)),
    distinctUntilChanged()
  );

  readonly currentMoment$ = combineLatest([
    this.moments$,
    this.currentMomentIndex$,
  ]).pipe(
    map(([moments, currentIndex]) => moments[currentIndex]),
    isNonNullable()
  );

  private readonly geolocationPosition$ = this.currentMoment$.pipe(
    map(moment => moment.geolocationPosition),
    isNonNullable()
  );

  readonly address$ = combineLatest([
    this.geolocationPosition$,
    this.languagesService.language$,
  ]).pipe(
    switchMap(([position, language]) =>
      this.httpClient.get<FeatureCollection>(
        `https://nominatim.openstreetmap.org/reverse?lat=${position.latitude}&lon=${position.longitude}&format=geojson&accept-language=${language}`
      )
    ),
    map(json => {
      if (!json.features[0]) return undefined;
      const properties = json.features[0].properties;
      if (!properties) return undefined;
      return properties['display_name'] as string | undefined;
    }),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  /**
   * Recreate iframe by setting mapUrl$ to undefined to avoid updating src and
   * pushing history entry into stack.
   */
  readonly mapUrl$ = this.geolocationPosition$.pipe(
    map(position =>
      this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://maps.google.com/maps?q=${position.latitude},${position.longitude}&z=15&output=embed`
      )
    ),
    beforeEach(undefined),
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  readonly photoTags$ = this.currentMoment$.pipe(
    switchMap(moment => moment.photo$),
    switchMap(photo => blobBufferToBlob(photo).arrayBuffer()),
    map(arrayBuffer => ExifReader.load(arrayBuffer)),
    map(tags => {
      delete tags['MakerNote'];
      return tags;
    }),
    map(tags =>
      omitBy(tags, value => !Object.keys(value).includes('description'))
    )
  );

  private readonly swiper$ = new ReplaySubject<Swiper>(1);

  readonly initialSlide$ = this.currentMomentIndex$.pipe(first());

  readonly supportShare = !!navigator['share'];

  constructor(
    private readonly momentRepository: MomentRepository,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly sanitizer: DomSanitizer,
    private readonly httpClient: HttpClient,
    private readonly languagesService: LanguagesService,
    private readonly dialogsService: DialogsService
  ) {}

  // eslint-disable-next-line class-methods-use-this
  trackMoment(_: number, item: Moment) {
    return item.id;
  }

  onSwiperCreated(swiper: Swiper) {
    this.swiper$.next(swiper);
  }

  onPhotoSlidesChanged() {
    return combineLatest([this.swiper$, this.moments$])
      .pipe(
        first(),
        map(([swiper, moments]) => moments[swiper.activeIndex]),
        isNonNullable(),
        switchMap(moment =>
          iif(
            () => !this.willBeDestroyed,
            this.router.navigate([], {
              queryParams: { id: moment.id },
              relativeTo: this.route,
              skipLocationChange: true,
            })
          )
        ),
        untilDestroyed(this)
      )
      .subscribe();
  }

  remove() {
    const action$ = this.currentMemontId$.pipe(
      first(),
      tap(() => (this.willBeDestroyed = true)),
      concatMap(id => this.momentRepository.remove$(id)),
      concatMapTo(defer(() => this.router.navigate(['..'])))
    );

    return this.dialogsService
      .presentConfirmation$({
        headerKey: 'deleteMoment',
        messageKey: 'message.deleteMoment',
      })
      .pipe(
        first(),
        concatMap(result => iif(() => result, action$)),
        untilDestroyed(this)
      )
      .subscribe();
  }

  share() {
    return this.currentMoment$
      .pipe(
        first(),
        switchMap(moment => share$(moment)),
        catchError((err: unknown) => {
          if (err instanceof DOMException && err.name === 'AbortError')
            return of(undefined);
          return this.dialogsService.presentError$(err);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}

function share$(moment: Moment) {
  return combineLatest([moment.photo$, moment.mimeType$]).pipe(
    first(),
    map(
      ([photo, mimeType]) =>
        new File(
          [photo],
          //@ts-expect-error: https://github.com/broofa/mime/issues/255
          `${moment.id}.${mime.getExtension(mimeType)}`,
          {
            type: mimeType,
            lastModified: moment.timestamp,
          }
        )
    ),
    switchMap(file =>
      navigator.share({
        text: moment.metaJson,
        // @ts-expect-error: share API level 2
        files: [file],
      })
    )
  );
}
