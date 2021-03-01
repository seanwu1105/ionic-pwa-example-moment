import { Injectable } from '@angular/core';
import { defer, Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private readonly geolocation$ = defer(() => of(navigator.geolocation));

  readonly currentPosition$ = this.geolocation$.pipe(
    switchMap(
      geolocation =>
        new Observable<GeolocationPosition>(observable => {
          geolocation.getCurrentPosition(
            success => {
              observable.next(success);
              observable.complete();
            },
            error => observable.error(error),
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
          );
        })
    )
  );

  readonly currentPositionOrUndefined$ = this.currentPosition$.pipe(
    catchError((err: unknown) => {
      // eslint-disable-next-line no-console
      console.error(err);
      return of(undefined);
    })
  );
}
