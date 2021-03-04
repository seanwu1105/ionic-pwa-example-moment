import { Component } from '@angular/core';
import { IonSelect } from '@ionic/angular';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { version } from '../../../../../package.json';
import { LanguagesService } from '../../../shared/languages/languages.service';
import { ThemesService } from '../../../shared/themes/themes.service';
import { languages } from '../../../shared/transloco/transloco-root.module';

@UntilDestroy()
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  readonly themes = ThemesService.THEMES;

  readonly theme$ = this.themesService.theme$;

  readonly languages = languages;

  readonly language$ = this.languagesService.language$;

  readonly version = version;

  constructor(
    private readonly themesService: ThemesService,
    private readonly languagesService: LanguagesService
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
}
