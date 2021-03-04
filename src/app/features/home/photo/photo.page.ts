import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FeatureCollection } from 'geojson';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Moment } from '../../../shared/moment/moment';
import { MomentRepository } from '../../../shared/moment/moment-repository.service';
import { isNonNullable } from '../../../utils/rx-operators';

@UntilDestroy()
@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage {
  private readonly _ionSlides$ = new BehaviorSubject<undefined | IonSlides>(
    undefined
  );

  @ViewChild('slides') set ionSlides(value: IonSlides) {
    this._ionSlides$.next(value);
  }

  private readonly ionSlides$ = this._ionSlides$.pipe(
    isNonNullable(),
    distinctUntilChanged()
  );

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
    map(([moments, id]) => moments.findIndex(j => j.id === id)),
    distinctUntilChanged()
  );

  readonly currentMoment$ = combineLatest([
    this.moments$,
    this.currentMomentIndex$,
  ]).pipe(map(([moments, currentIndex]) => moments[currentIndex]));

  readonly address$ = this.currentMoment$.pipe(
    map(moment => moment.geolocationPosition),
    isNonNullable(),
    switchMap(position =>
      this.httpClient.get<FeatureCollection>(
        `https://nominatim.openstreetmap.org/reverse?lat=${position.latitude}&lon=${position.longitude}&format=geojson&accept-language=en-US`
      )
    ),
    map(json => {
      if (json.features.length === 0) return undefined;
      const properties = json.features[0].properties;
      if (!properties) return undefined;
      return properties['display_name'] as string | undefined;
    })
  );

  readonly mapUrl$ = this.currentMoment$.pipe(
    map(moment => moment.geolocationPosition),
    isNonNullable(),
    map(position =>
      this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://maps.google.com/maps?q=${position.latitude},${position.longitude}&z=15&output=embed`
      )
    ),
    isNonNullable()
  );

  readonly photoSlidesOptions$ = this.currentMomentIndex$.pipe(
    map(initialIndex => ({
      resistanceRatio: 0,
      initialSlide: initialIndex,
    }))
  );

  private readonly slideToMoment$ = combineLatest([
    this.ionSlides$,
    this.currentMomentIndex$,
  ]).pipe(switchMap(([slides, index]) => slides.slideTo(index)));

  constructor(
    private readonly momentRepository: MomentRepository,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly sanitizer: DomSanitizer,
    private readonly httpClient: HttpClient
  ) {
    this.slideToMoment$.pipe(untilDestroyed(this)).subscribe();
  }

  trackMoment(_: number, item: Moment) {
    return item.id;
  }

  onPhotoSlidesChanged(event: Event) {
    const ionSlides = event.target as HTMLIonSlidesElement;
    return this.moments$
      .pipe(
        switchMap(
          async moments => moments[await ionSlides.getActiveIndex()].id
        ),
        switchMap(id =>
          this.router.navigate([], {
            queryParams: { id },
            relativeTo: this.route,
            replaceUrl: true,
          })
        ),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
