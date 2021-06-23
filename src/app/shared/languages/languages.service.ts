import { Inject, Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  PreferenceManager,
  PREFERENCE_MANAGER,
} from '../preference/preference-manager';
import { languages } from '../transloco/transloco-root.module';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  private readonly preferences = this.preferenceManager.getPreferences<PreferenceKey>(
    'LanguagesService'
  );

  readonly language$ = this.preferences.getString$(
    'language',
    Object.keys(languages)[0]
  ) as Observable<LanguageValue>;

  readonly initialize$ = this.language$.pipe(
    tap(language => this.translocoService.setActiveLang(language))
  );

  constructor(
    @Inject(PREFERENCE_MANAGER)
    private readonly preferenceManager: PreferenceManager,
    private readonly translocoService: TranslocoService
  ) {}

  setLanguage$(value: LanguageValue) {
    return this.preferences.setString$('language', value);
  }
}

type PreferenceKey = 'language';
type LanguageValue = keyof typeof languages;
