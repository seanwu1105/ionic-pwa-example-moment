import { Injectable } from '@angular/core';
import { Preferences } from './preferences';
import { RxdbPreferences } from './rxdb-preferences';

@Injectable({
  providedIn: 'root',
})
export class PreferenceManager {
  private readonly preferencesMap = new Map<string, Preferences>();

  getPreferences(id: string) {
    if (this.preferencesMap.has(id)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return this.preferencesMap.get(id)!;
    }
    return this.createPreferences(id);
  }

  private createPreferences(id: string) {
    const created = new RxdbPreferences(id);
    this.preferencesMap.set(id, created);
    return created;
  }
}
