import { Component } from '@angular/core';
import { IonSelect } from '@ionic/angular';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { version } from '../../../../../package.json';
import { SettingsService } from '../../../shared/settings/settings.service';

@UntilDestroy()
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  readonly themes = SettingsService.THEMES;

  readonly theme$ = this.settingsService.theme$;

  readonly version = version;

  constructor(private readonly settingsService: SettingsService) {}

  onChangeDarkTheme(event: Event) {
    return this.settingsService
      .setTheme$((event as CustomEvent<IonSelect>).detail.value)
      .pipe(untilDestroyed(this))
      .subscribe();
  }
}
