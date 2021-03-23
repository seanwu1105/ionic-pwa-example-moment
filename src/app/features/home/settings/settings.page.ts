import { Component } from '@angular/core';
import { IonSelect, IonToggle } from '@ionic/angular';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { version } from '../../../../../package.json';
import { ErrorReportService } from '../../../shared/error-report/error-report.service';
import { LanguagesService } from '../../../shared/languages/languages.service';
import { ThemesService } from '../../../shared/themes/themes.service';
import { languages } from '../../../shared/transloco/transloco-root.module';

@UntilDestroy()
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  readonly themes = ThemesService.THEMES;

  readonly theme$ = this.themesService.theme$;

  readonly languages = languages;

  readonly language$ = this.languagesService.language$;

  readonly errorReportEnabled$ = this.errorReportService.enabled$;

  readonly version = version;

  constructor(
    private readonly themesService: ThemesService,
    private readonly languagesService: LanguagesService,
    private readonly errorReportService: ErrorReportService
  ) {}

  onChangeTheme(event: Event) {
    return this.themesService
      .setTheme$((event as CustomEvent<IonSelect>).detail.value)
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  onChangeLanguage(event: Event) {
    return this.languagesService
      .setLanguage$((event as CustomEvent<IonSelect>).detail.value)
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  onChangeErrorReportEnabled(event: Event) {
    return this.errorReportService
      .setEnabled$((event as CustomEvent<IonToggle>).detail.checked)
      .pipe(untilDestroyed(this))
      .subscribe();
  }
}
