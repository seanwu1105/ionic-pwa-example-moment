import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import {
  getBrowserCultureLang,
  Translation,
  translocoConfig,
  TranslocoLoader,
  TranslocoModule,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
} from '@ngneat/transloco';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import { environment } from '../../../environments/environment';

export const languages = {
  'en-US': 'English (US)',
  'zh-TW': '繁體中文（台灣）',
} as const;

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private readonly httpClient: HttpClient) {}

  getTranslation(lang: string) {
    return this.httpClient.get<Translation>(`./assets/i18n/${lang}.json`);
  }
}

@NgModule({
  imports: [TranslocoLocaleModule.init()],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: Object.keys(languages),
        defaultLang: getBrowserCultureLang(),
        reRenderOnLangChange: true,
        fallbackLang: Object.keys(languages)[0],
        prodMode: environment.production,
      }),
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
  ],
  exports: [TranslocoModule],
})
export class TranslocoRootModule {}
