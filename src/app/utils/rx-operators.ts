import { from, Observable } from 'rxjs';
import { concatMap, filter, mapTo } from 'rxjs/operators';

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
