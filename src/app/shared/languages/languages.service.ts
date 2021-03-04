import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PreferenceManager } from '../preference/preference-manager.service';
import { PreferenceServiceBase } from '../preference/preference-service-base';
import { languages } from '../transloco/transloco-root.module';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService extends PreferenceServiceBase<PreferenceKey> {
  readonly language$ = this.getString$(
    'language',
    Object.keys(languages)[0]
  ) as Observable<LanguageValue>;

  constructor(
    preferenceManager: PreferenceManager,
    private readonly translocoService: TranslocoService
  ) {
    super(preferenceManager, LanguagesService.name);
  }

  initialize$() {
    return this.language$.pipe(
      tap(language => this.translocoService.setActiveLang(language))
    );
  }

  setLanguage$(value: LanguageValue) {
    return this.setString$('language', value);
  }
}

type PreferenceKey = 'language';
type LanguageValue = keyof typeof languages;
