import { defer, from, Observable, of, ReplaySubject } from 'rxjs';
import { concatMap, delay, filter, finalize, mapTo, tap } from 'rxjs/operators';

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

export function beforeEach<T, V>(valueBefore: V) {
  return (source$: Observable<T>) =>
    defer(() => {
      const subject$ = new ReplaySubject<V | T>(1);
      source$
        .pipe(
          // Force the source values emitted asynchronizingly.
          delay(0)
        )
        .subscribe({
          next: v => {
            subject$.next(valueBefore);
            subject$.next(v);
          },
          error: (err: unknown) => subject$.error(err),
          complete: () => subject$.complete(),
        });
      return subject$.pipe(
        // Make sure the values emitted asynchronizingly.
        concatMap(v => of(v).pipe(delay(0)))
      );
    });
}
