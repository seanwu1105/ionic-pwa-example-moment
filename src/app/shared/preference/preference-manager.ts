import { InjectionToken } from '@angular/core';
import { Preferences } from './preferences';

export interface PreferenceManager {
  getPreferences<T extends string>(id: string): Preferences<T>;
}

export const PREFERENCE_MANAGER = new InjectionToken<PreferenceManager>(
  'PREFERENCE_MANAGER'
);
