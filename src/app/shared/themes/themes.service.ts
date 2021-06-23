import { Inject, Injectable } from '@angular/core';
import { combineLatest, fromEvent, Observable } from 'rxjs';
import { pluck, startWith, tap } from 'rxjs/operators';
import {
  PreferenceManager,
  PREFERENCE_MANAGER,
} from '../preference/preference-manager';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  static readonly THEMES = ['system', 'light', 'dark'] as const;

  private readonly preferences = this.preferenceManager.getPreferences<PreferenceKey>(
    'ThemesService'
  );

  readonly theme$ = this.preferences.getString$(
    'theme',
    ThemesService.THEMES[0]
  ) as Observable<ThemeValue>;

  private readonly systemDarkScheme$ = fromEvent<MediaQueryListEvent>(
    matchMedia('(prefers-color-scheme: dark)'),
    'change'
  ).pipe(
    pluck('matches'),
    startWith(matchMedia('(prefers-color-scheme: dark)').matches)
  );

  readonly initialize$ = combineLatest([
    this.theme$,
    this.systemDarkScheme$,
  ]).pipe(
    tap(([theme, systemDarkScheme]) => {
      if (theme === 'system')
        document.body.classList.toggle('dark', systemDarkScheme);
      else if (theme === 'dark') document.body.classList.toggle('dark', true);
      else document.body.classList.toggle('dark', false);
    })
  );

  constructor(
    @Inject(PREFERENCE_MANAGER)
    private readonly preferenceManager: PreferenceManager
  ) {}

  setTheme$(value: ThemeValue) {
    return this.preferences.setString$('theme', value);
  }
}

type PreferenceKey = 'theme';
type ThemeValue = typeof ThemesService.THEMES[number];
