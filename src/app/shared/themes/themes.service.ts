import { Injectable } from '@angular/core';
import { combineLatest, fromEvent, Observable } from 'rxjs';
import { pluck, startWith, tap } from 'rxjs/operators';
import { PreferenceManager } from '../preference/preference-manager.service';
import { PreferenceServiceBase } from '../preference/preference-service-base';

@Injectable({
  providedIn: 'root',
})
export class ThemesService extends PreferenceServiceBase<PreferenceKey> {
  static readonly THEMES = ['system', 'light', 'dark'] as const;

  readonly theme$ = this.getString$(
    'theme',
    ThemesService.THEMES[0]
  ) as Observable<ThemeValue>;

  constructor(preferenceManager: PreferenceManager) {
    super(preferenceManager, ThemesService.name);
  }

  initialize$() {
    const systemDarkScheme$ = fromEvent<MediaQueryListEvent>(
      matchMedia('(prefers-color-scheme: dark)'),
      'change'
    ).pipe(
      pluck('matches'),
      startWith(matchMedia('(prefers-color-scheme: dark)').matches)
    );

    return combineLatest([this.theme$, systemDarkScheme$]).pipe(
      tap(([theme, systemDarkScheme]) => {
        if (theme === 'system')
          document.body.classList.toggle('dark', systemDarkScheme);
        else if (theme === 'dark') document.body.classList.toggle('dark', true);
        else document.body.classList.toggle('dark', false);
      })
    );
  }

  setTheme$(value: ThemeValue) {
    return this.setString$('theme', value);
  }
}

type PreferenceKey = 'theme';
type ThemeValue = typeof ThemesService.THEMES[number];
