import { defer, from, Observable, ReplaySubject } from 'rxjs';
import { concatMap, filter, finalize, mapTo, tap } from 'rxjs/operators';

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
      let lastValue: T;
      return source$.pipe(
        tap(value => (lastValue = value)),
        finalize(() => callback(lastValue))
      );
    });
}

export function ignoreComplete<T>() {
  return (source$: Observable<T>) =>
    defer(() => {
      const behaviorSubject$ = new ReplaySubject<T>(1);
      source$.subscribe({
        next: v => behaviorSubject$.next(v),
        error: (err: unknown) => behaviorSubject$.error(err),
      });
      return behaviorSubject$;
    });
}
