import { Injectable } from '@angular/core';
import * as PouchdbAdapterIdb from 'pouchdb-adapter-idb';
import { addRxPlugin, createRxDatabase } from 'rxdb';
import { defer } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Database {
  readonly main$ = defer(() => {
    addRxPlugin(PouchdbAdapterIdb);
    return createRxDatabase({
      name: 'main',
      adapter: 'idb',
    });
  }).pipe(shareReplay({ bufferSize: 1, refCount: true }));
}
