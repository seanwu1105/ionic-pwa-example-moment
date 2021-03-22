import { Preferences } from './preferences';

export interface PreferenceManager {
  getPreferences(id: string): Preferences;
}
