import { defer, from, Observable, of } from 'rxjs';
import {
  catchError,
  concatMap,
  filter,
  finalize,
  mapTo,
  tap,
} from 'rxjs/operators';

export function isNonNullable<T>() {
  return (source$: Observable<null | undefined | T>) =>
    source$.pipe(
      filter((v): v is NonNullable<T> => v !== null && v !== undefined)
    );
}

export function concatTapTo<T>(observable$: Observable<any> | Promise<any>) {
  return (source$: Observable<T>) =>
    source$.pipe(concatMap(value => from(observable$).pipe(mapTo(value))));
}

export function concatTap<T>(
  func: (value: T) => Observable<any> | Promise<any>
) {
  return (source$: Observable<T>) =>
    source$.pipe(concatMap(value => from(func(value)).pipe(mapTo(value))));
}

export function finalizeLast<T>(callback: (value: T) => void) {
  return (source$: Observable<T>) =>
    defer(() => {
      let lastValue: T | undefined;
      return source$.pipe(
        tap(value => (lastValue = value)),
        finalize(() => {
          if (lastValue) callback(lastValue);
        })
      );
    });
}

export function ignoreError<T>(cls: any) {
  return (source$: Observable<T>) =>
    source$.pipe(
      catchError((err: unknown) => {
        if (err instanceof cls) return of(undefined);
        throw err;
      }),
      isNonNullable()
    );
}
