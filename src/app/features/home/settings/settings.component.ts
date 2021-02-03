import { Component } from '@angular/core';
import { IonToggle } from '@ionic/angular';
import { fromEvent } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  readonly prefersDark$ = fromEvent<MediaQueryListEvent>(
    matchMedia('(prefers-color-scheme: dark)'),
    'change'
  ).pipe(
    map(event => event.matches),
    startWith(matchMedia('(prefers-color-scheme: dark)').matches)
  );

  onToggleDarkTheme(event: Event) {
    document.body.classList.toggle(
      'dark',
      (event as CustomEvent<IonToggle>).detail.checked
    );
  }
}
