import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import ExifReader from 'exifreader';
import { FeatureCollection } from 'geojson';
import { omitBy } from 'lodash-es';
import mime from 'mime/lite';
import { BehaviorSubject, combineLatest, defer, iif, of } from 'rxjs';
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
import { isNonNullable } from '../../../utils/rx-operators';

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
      if (json.features.length === 0) return undefined;
      const properties = json.features[0].properties;
      if (!properties) return undefined;
      return properties['display_name'] as string | undefined;
    }),
    shareReplay({ bufferSize: 1, refCount: true }),

    /**
     * Manually detect change due to the pipe is outside of NgZone on Swiper
     * virtual scroll component.
     */
    tap(() => this.changeDetector.detectChanges())
  );

  /**
   * Recreate iframe to avoid updating src and pushing history entry into stack.
   */
  private readonly _showMapIframe$ = new BehaviorSubject(false);

  readonly showMapIframe$ = this._showMapIframe$.pipe(
    tap(() => this.changeDetector.detectChanges())
  );

  readonly mapUrl$ = this.geolocationPosition$.pipe(
    tap(() => this._showMapIframe$.next(false)),
    map(position =>
      this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://maps.google.com/maps?q=${position.latitude},${position.longitude}&z=15&output=embed`
      )
    ),
    tap(() => this._showMapIframe$.next(true))
  );

  readonly photoTags$ = this.currentMoment$.pipe(
    switchMap(moment => moment.photo$),
    switchMap(photo => photo.arrayBuffer()),
    map(arrayBuffer => ExifReader.load(arrayBuffer)),
    map(tags => {
      delete tags['MakerNote'];
      return tags;
    }),
    map(tags =>
      omitBy(tags, value => !Object.keys(value).includes('description'))
    )
  );

  private readonly _swiper$ = new BehaviorSubject<Swiper | undefined>(
    undefined
  );

  readonly swiper$ = this._swiper$.pipe(
    isNonNullable(),
    distinctUntilChanged()
  );

  readonly initialSlide$ = this.currentMomentIndex$.pipe(first());

  readonly supportShare = !!navigator['share'];

  constructor(
    private readonly momentRepository: MomentRepository,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly sanitizer: DomSanitizer,
    private readonly httpClient: HttpClient,
    private readonly languagesService: LanguagesService,
    private readonly zone: NgZone,
    private readonly changeDetector: ChangeDetectorRef,
    private readonly dialogsService: DialogsService
  ) {}

  // eslint-disable-next-line class-methods-use-this
  trackMoment(_: number, item: Moment) {
    return item.id;
  }

  onSwiperCreated(swiper: Swiper) {
    this._swiper$.next(swiper);
  }

  onPhotoSlidesChanged() {
    return this.zone.run(() =>
      combineLatest([this.swiper$, this.moments$])
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
        .subscribe()
    );
  }

  async viewImage(url: string) {
    return this.zone.run(() => this.router.navigate(['/image-viewer', url]));
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
