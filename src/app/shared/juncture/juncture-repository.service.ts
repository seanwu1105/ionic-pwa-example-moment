import { Injectable } from '@angular/core';
import { RxCollection } from 'rxdb';
import { combineLatest, defer, Observable } from 'rxjs';
import { concatMap, first, map, pluck, shareReplay } from 'rxjs/operators';
import { sha256WithBlob } from '../../utils/crypto';
import { Database } from '../database/database.service';
import { GeolocationService } from '../geolocation/geolocation.service';
import { Juncture, JunctureIndex, schema } from './juncture';

@Injectable({
  providedIn: 'root',
})
export class JunctureRepository {
  private readonly collection$: Observable<
    RxCollection<JunctureIndex>
  > = this.database.main$.pipe(
    concatMap(database =>
      database.addCollections({
        [COLLECTION_NAME]: { schema },
      })
    ),
    pluck(COLLECTION_NAME),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  readonly all$ = this.collection$.pipe(
    concatMap(c => c.find().sort({ timestamp: 'desc' }).$),
    map(documents => documents.map(d => new Juncture(d)))
  );

  constructor(
    private readonly database: Database,
    private readonly geolocationService: GeolocationService
  ) {}

  add$(value: { data: Blob }) {
    return defer(() => sha256WithBlob(value.data)).pipe(
      concatMap(id => this._add$({ id, data: value.data })),
      map(attachment => new Juncture(attachment.doc))
    );
  }

  private _add$({ id, data }: { id: string; data: Blob }) {
    return combineLatest([
      this.collection$,
      this.geolocationService.currentPositionOrUndefined$,
    ]).pipe(
      first(),
      concatMap(([collection, currentPosition]) =>
        collection.insert({
          id,
          timestamp: Date.now(),
          geolocationPosition: {
            latitude: currentPosition?.coords.latitude,
            longitude: currentPosition?.coords.longitude,
          },
        })
      ),
      concatMap(document =>
        document.putAttachment({ id, data, type: data.type }, true)
      )
    );
  }

  remove$(id: string) {
    return this.collection$.pipe(concatMap(c => c.bulkRemove([id])));
  }
}

const COLLECTION_NAME = 'junctures';
