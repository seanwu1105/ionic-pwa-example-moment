import { Injectable } from '@angular/core';
import * as PouchdbAdapterMemory from 'pouchdb-adapter-memory';
import { addRxPlugin, createRxDatabase } from 'rxdb';
import { defer } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Database } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class TestingDatabase extends Database {
  readonly main$ = defer(() => {
    addRxPlugin(PouchdbAdapterMemory);
    return createRxDatabase({
      name: 'main',
      adapter: 'memory',
      ignoreDuplicate: true,
    });
  }).pipe(shareReplay({ bufferSize: 1, refCount: true }));
}
