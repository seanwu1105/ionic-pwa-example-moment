import { RxCollection, RxJsonSchema } from 'rxdb';
import { combineLatest, defer, Observable, of } from 'rxjs';
import {
  concatMap,
  distinctUntilChanged,
  map,
  pluck,
  shareReplay,
} from 'rxjs/operators';
import { isNonNullable } from '../../../utils/rx-operators';
import { database$ } from '../database';
import { Preferences } from './preferences';

export class RxdbPreferences implements Preferences {
  constructor(readonly id: string) {}

  getBoolean$(key: string, defaultValue = false): Observable<boolean> {
    return this.get$(key, defaultValue);
  }

  getNumber$(key: string, defaultValue = 0): Observable<number> {
    return this.get$(key, defaultValue);
  }

  getString$(key: string, defaultValue = ''): Observable<string> {
    return this.get$(key, defaultValue);
  }

  private get$(key: string, defaultValue: boolean): Observable<boolean>;
  private get$(key: string, defaultValue: number): Observable<number>;
  private get$(key: string, defaultValue: string): Observable<string>;
  private get$(
    key: string,
    defaultValue: SupportedValue
  ): Observable<SupportedValue> {
    return collection$.pipe(
      concatMap(collection =>
        combineLatest([
          of(collection),
          collection.findOne(this.toInternalKey(key)).$,
        ])
      ),
      concatMap(([collection, found]) => {
        if (found) return found.get$('value');
        return defer(() =>
          collection.insert({
            key: this.toInternalKey(key),
            value: defaultValue,
          })
        ).pipe(concatMap(document => document.get$('value')));
      }),
      isNonNullable(),
      distinctUntilChanged()
    );
  }

  setBoolean$(key: string, value: boolean): Observable<boolean> {
    return this.set$(key, value);
  }

  setNumber$(key: string, value: number): Observable<number> {
    return this.set$(key, value);
  }

  setString$(key: string, value: string): Observable<string> {
    return this.set$(key, value);
  }

  private set$(key: string, value: boolean): Observable<boolean>;
  private set$(key: string, value: number): Observable<number>;
  private set$(key: string, value: string): Observable<string>;
  private set$(key: string, value: SupportedValue): Observable<SupportedValue> {
    return collection$.pipe(
      concatMap(collection =>
        collection.atomicUpsert({ key: this.toInternalKey(key), value })
      ),
      map(document => document.value)
    );
  }

  private toInternalKey(key: string) {
    return `${this.id}_${key}`;
  }
}

type SupportedValue = boolean | number | string;

interface Preference {
  key: string;
  value: SupportedValue;
}

const schema: RxJsonSchema<Preference> = {
  version: 0,
  type: 'object',
  properties: {
    key: {
      type: 'string',
      primary: true,
    },
    value: {
      type: ['boolean', 'number', 'string'],
    },
  },
  required: ['value'],
};

const COLLECTION_NAME = 'preferences';
const collection$: Observable<RxCollection<Preference>> = database$.pipe(
  concatMap(database =>
    database.addCollections({ [COLLECTION_NAME]: { schema } })
  ),
  pluck(COLLECTION_NAME),
  shareReplay({ bufferSize: 1, refCount: true })
);
