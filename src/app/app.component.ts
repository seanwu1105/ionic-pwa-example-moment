import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { combineLatest, fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SettingsService } from './shared/data/settings/settings.service';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private readonly platform: Platform,
    private readonly settingsService: SettingsService
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    this.updateTheme();
  }

  updateTheme() {
    combineLatest([
      this.settingsService.theme$,
      fromEvent<MediaQueryListEvent>(
        matchMedia('(prefers-color-scheme: dark)'),
        'change'
      ),
    ])
      .pipe(
        tap(([theme, mediaQueryListEvent]) => {
          if (theme === 'system')
            document.body.classList.toggle('dark', mediaQueryListEvent.matches);
          else if (theme === 'dark')
            document.body.classList.toggle('dark', true);
          else document.body.classList.toggle('dark', false);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
