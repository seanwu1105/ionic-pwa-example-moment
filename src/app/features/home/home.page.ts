import { Component, ViewChild } from '@angular/core';
import { IonContent, PopoverController } from '@ionic/angular';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';
import { isNonNullable } from '../../utils/rx-operators';
import { SettingsComponent } from './settings/settings.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private readonly _ionContent$ = new BehaviorSubject<IonContent | undefined>(
    undefined
  );
  readonly ionContent$ = this._ionContent$.pipe(
    isNonNullable(),
    distinctUntilChanged()
  );
  @ViewChild(IonContent)
  set ionContent(value: IonContent) {
    this._ionContent$.next(value);
  }
  private readonly _scrollEvent$ = new Subject<Event>();
  private readonly scrollEvent$ = this._scrollEvent$.pipe(
    distinctUntilChanged()
  );
  readonly noFooterBorder$ = combineLatest([
    this.ionContent$,
    this.scrollEvent$,
  ]).pipe(switchMap(([ionContent]) => this.detectBottom(ionContent)));

  constructor(private readonly popoverController: PopoverController) {}

  onScroll(event: Event) {
    this._scrollEvent$.next(event);
  }

  private async detectBottom(ionContent: IonContent) {
    const scrollElement = await ionContent.getScrollElement();
    return (
      scrollElement.scrollTop ===
      scrollElement.scrollHeight - scrollElement.clientHeight
    );
  }

  async presentSettings(event: Event) {
    const settingsPopover = await this.popoverController.create({
      component: SettingsComponent,
      event,
    });
    return await settingsPopover.present();
  }
}
