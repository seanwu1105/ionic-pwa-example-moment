import { Injectable } from '@angular/core';
import { RxCollection } from 'rxdb';
import { defer, Observable } from 'rxjs';
import { concatMap, first, map, pluck, shareReplay } from 'rxjs/operators';
import { sha256WithBlob } from '../../../utils/crypto';
import { database$ } from '../database';
import { Juncture, JunctureIndex, schema } from './juncture';

@Injectable({
  providedIn: 'root',
})
export class JunctureRepository {
  readonly all$ = collection$.pipe(
    concatMap(c => c.find().$),
    map(documents => documents.map(d => new Juncture(d)))
  );

  add$(value: { data: Blob }) {
    return defer(() => sha256WithBlob(value.data)).pipe(
      concatMap(id => this._add$({ id, data: value.data })),
      map(attachment => new Juncture(attachment.doc))
    );
  }

  private _add$({ id, data }: { id: string; data: Blob }) {
    return collection$.pipe(
      first(),
      concatMap(collection => collection.insert({ id })),
      concatMap(document =>
        document.putAttachment({ id, data, type: data.type }, true)
      )
    );
  }

  remove$(id: string) {
    return collection$.pipe(concatMap(c => c.bulkRemove([id])));
  }
}

const COLLECTION_NAME = 'junctures';
const collection$: Observable<RxCollection<JunctureIndex>> = database$.pipe(
  concatMap(database =>
    database.addCollections({
      [COLLECTION_NAME]: { schema },
    })
  ),
  pluck(COLLECTION_NAME),
  shareReplay({ bufferSize: 1, refCount: true })
);
