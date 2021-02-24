import * as PouchdbAdapterMemory from 'pouchdb-adapter-memory';
import { addRxPlugin, createRxDatabase } from 'rxdb';
import { defer } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

export const database$ = defer(() => {
  addRxPlugin(PouchdbAdapterMemory);
  return createRxDatabase({
    name: DATABASE_NAME,
    adapter: 'memory',
  });
}).pipe(shareReplay({ bufferSize: 1, refCount: true }));

const DATABASE_NAME = 'main';
