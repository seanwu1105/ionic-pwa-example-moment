import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslocoModule, TranslocoTestingModule } from '@ngneat/transloco';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import enUs from '../../assets/i18n/en-US.json';
import zhTw from '../../assets/i18n/zh-TW.json';
import { TestingDatabase } from './database/database-testing.service';
import { Database } from './database/database.service';
import { SharedModule } from './shared.module';
import { languages } from './transloco/transloco-root.module';
@NgModule({
  imports: [
    SharedModule,
    RouterTestingModule,
    HttpClientTestingModule,
    TranslocoTestingModule.forRoot({
      langs: { enUs, zhTw },
      translocoConfig: {
        availableLangs: Object.keys(languages),
        defaultLang: Object.keys(languages)[0],
        fallbackLang: Object.keys(languages)[0],
        missingHandler: { useFallbackTranslation: true },
      },
    }),
  ],
  providers: [
    {
      provide: Database,
      useClass: TestingDatabase,
    },
  ],
  exports: [
    SharedModule,
    RouterTestingModule,
    TranslocoModule,
    TranslocoLocaleModule,
  ],
})
export class SharedTestingModule {}
