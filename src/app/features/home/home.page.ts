import { Component, ViewChild } from '@angular/core';
import { IonContent, ModalController, PopoverController } from '@ionic/angular';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';
import { JunctureRepository } from '../../shared/juncture/juncture-repository.service';
import { isNonNullable } from '../../utils/rx-operators';
import { CameraComponent } from './camera/camera.component';
import { SettingsComponent } from './settings/settings.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  readonly junctures$ = this.junctureRepository.all$;

  private readonly _ionContent$ = new BehaviorSubject<IonContent | undefined>(
    undefined
  );

  private readonly ionContent$ = this._ionContent$.pipe(
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

  constructor(
    private readonly popoverController: PopoverController,
    private readonly modalController: ModalController,
    private readonly junctureRepository: JunctureRepository
  ) {}

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

  async presentCamera() {
    const cameraModal = await this.modalController.create({
      component: CameraComponent,
    });
    return await cameraModal.present();
  }
}
