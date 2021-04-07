import { Injectable } from '@angular/core';
import { combineLatest, fromEvent, Observable } from 'rxjs';
import { pluck, startWith, tap } from 'rxjs/operators';
import { PreferenceServiceBase } from '../preference/preference-service-base';
import { RxDbPreferenceManager } from '../preference/rxdb-preference-manager.service';

@Injectable({
  providedIn: 'root',
})
export class ThemesService extends PreferenceServiceBase<PreferenceKey> {
  static readonly THEMES = ['system', 'light', 'dark'] as const;

  readonly theme$ = this.getString$(
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

  constructor(preferenceManager: RxDbPreferenceManager) {
    super(preferenceManager, 'ThemesService');
  }

  setTheme$(value: ThemeValue) {
    return this.setString$('theme', value);
  }
}

type PreferenceKey = 'theme';
type ThemeValue = typeof ThemesService.THEMES[number];
