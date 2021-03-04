import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FeatureCollection } from 'geojson';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Juncture } from '../../../shared/juncture/juncture';
import { JunctureRepository } from '../../../shared/juncture/juncture-repository.service';
import { isNonNullable } from '../../../utils/rx-operators';

@UntilDestroy()
@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage {
  private readonly currentJunctureId$ = this.route.queryParamMap.pipe(
    map(params => params.get('id')),
    isNonNullable(),
    distinctUntilChanged()
  );

  readonly junctures$ = this.junctureRepository.all$;

  private readonly currentJunctureIndex$ = combineLatest([
    this.junctures$,
    this.currentJunctureId$,
  ]).pipe(map(([junctures, id]) => junctures.findIndex(j => j.id === id)));

  readonly currentJuncture$ = combineLatest([
    this.junctures$,
    this.currentJunctureIndex$,
  ]).pipe(map(([junctures, currentIndex]) => junctures[currentIndex]));

  readonly address$ = this.currentJuncture$.pipe(
    map(juncture => juncture.geolocationPosition),
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

  readonly mapUrl$ = this.currentJuncture$.pipe(
    map(juncture => juncture.geolocationPosition),
    isNonNullable(),
    map(position =>
      this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://maps.google.com/maps?q=${position.latitude},${position.longitude}&z=15&output=embed`
      )
    ),
    isNonNullable()
  );

  readonly photoSlidesOptions$ = this.currentJunctureIndex$.pipe(
    map(initialIndex => ({
      resistanceRatio: 0,
      initialSlide: initialIndex,
    }))
  );

  constructor(
    private readonly junctureRepository: JunctureRepository,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly sanitizer: DomSanitizer,
    private readonly httpClient: HttpClient
  ) {}

  trackJuncture(_: number, item: Juncture) {
    return item.id;
  }

  onPhotoSlidesChanged(event: Event) {
    const ionSlides = event.target as HTMLIonSlidesElement;
    return this.junctures$
      .pipe(
        switchMap(
          async junctures => junctures[await ionSlides.getActiveIndex()].id
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
