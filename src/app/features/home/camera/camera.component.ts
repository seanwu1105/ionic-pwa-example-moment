import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, combineLatest, defer } from 'rxjs';
import {
  catchError,
  distinctUntilChanged,
  shareReplay,
  tap,
} from 'rxjs/operators';
import { isNonNullable } from '../../../utils/rx-operators';

@UntilDestroy()
@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnDestroy {
  private readonly _videoElement$ = new BehaviorSubject<
    HTMLVideoElement | undefined
  >(undefined);

  private readonly videoElement$ = this._videoElement$.pipe(
    isNonNullable(),
    distinctUntilChanged()
  );

  @ViewChild('video')
  set videoElement(value: ElementRef<HTMLVideoElement>) {
    this._videoElement$.next(value.nativeElement);
  }

  private readonly mediaStream$ = defer(() =>
    navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' },
    })
  ).pipe(
    catchError(async (err: unknown) => {
      await this.presentErrorDialog(err);
      await this.dismiss();
      return undefined;
    }),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  private readonly cameraPreview$ = combineLatest([
    this.videoElement$,
    this.mediaStream$.pipe(isNonNullable()),
  ]).pipe(
    tap(([videoElement, mediaStream]) => {
      videoElement.srcObject = mediaStream;
    })
  );

  constructor(
    private readonly modalController: ModalController,
    private readonly alertController: AlertController
  ) {
    this.cameraPreview$.pipe(untilDestroyed(this)).subscribe();
  }

  async dismiss() {
    return this.modalController.dismiss();
  }

  async presentErrorDialog(err: unknown) {
    const alert = await this.alertController.create({
      header: 'Oops!',
      message: err instanceof Error ? err.message : JSON.stringify(err),
      buttons: [{ text: 'ok' }],
    });
    await alert.present();
  }

  ngOnDestroy() {
    this.mediaStream$
      .pipe(
        tap(mediaStream =>
          mediaStream?.getTracks().forEach(track => track.stop())
        )
      )
      .subscribe();
  }
}
