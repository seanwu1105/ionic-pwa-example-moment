import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PreferenceManager } from '../preference/preference-manager.service';
import { PreferenceServiceBase } from '../preference/preference-service-base';

@Injectable({
  providedIn: 'root',
})
export class SettingsService extends PreferenceServiceBase<PreferenceKey> {
  static readonly THEMES = ['system', 'light', 'dark'] as const;

  readonly theme$ = this.getString$(
    'theme',
    SettingsService.THEMES[0]
  ) as Observable<ThemeValue>;

  constructor(preferenceManager: PreferenceManager) {
    super(preferenceManager, SettingsService.name);
  }

  setTheme$(value: ThemeValue) {
    return this.setString$('theme', value);
  }
}

type PreferenceKey = 'theme';
type ThemeValue = typeof SettingsService.THEMES[number];
