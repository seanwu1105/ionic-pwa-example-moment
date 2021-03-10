import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, combineLatest, defer } from 'rxjs';
import {
  catchError,
  distinctUntilChanged,
  first,
  map,
  pairwise,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs/operators';
import { MomentRepository } from '../../../shared/moment/moment-repository.service';
import { concatTap, isNonNullable } from '../../../utils/rx-operators';

@UntilDestroy()
@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnDestroy {
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
      return undefined;
    }),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  private readonly imageCapture$ = this.mediaStream$.pipe(
    isNonNullable(),
    map(mediaStream => mediaStream.getVideoTracks()[0]),
    isNonNullable(),
    map(track => new ImageCapture(track)),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  private readonly _capturedImageUrl$ = new BehaviorSubject<string | undefined>(
    undefined
  );

  private readonly revokePreviousImageUrl$ = this._capturedImageUrl$.pipe(
    pairwise(),
    tap(([previous]) => {
      if (previous) URL.revokeObjectURL(previous);
    })
  );

  readonly capturedImageUrl$ = this._capturedImageUrl$.pipe(
    isNonNullable(),
    distinctUntilChanged()
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
    private readonly alertController: AlertController,
    private readonly momentRepository: MomentRepository
  ) {
    this.revokePreviousImageUrl$.pipe(untilDestroyed(this)).subscribe();
    this.cameraPreview$.pipe(untilDestroyed(this)).subscribe();
  }

  capture() {
    this.imageCapture$
      .pipe(
        first(),
        switchMap(imageCapture => imageCapture.takePhoto()),
        tap(imageBlob => {
          this._capturedImageUrl$.next(URL.createObjectURL(imageBlob));
        }),
        concatTap(imageBlob => this.momentRepository.add$(imageBlob)),
        catchError(async (err: unknown) => {
          if (
            err instanceof DOMException &&
            (err.name === 'InvalidStateError' ||
              err.name === 'UnknownError' ||
              err.name === 'OperationError')
          ) {
            return undefined;
          }
          return this.presentErrorDialog(err);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async presentErrorDialog(err: unknown) {
    // eslint-disable-next-line no-console
    console.error(err);
    const alert = await this.alertController.create({
      header: err instanceof Error ? err.name : 'Unknown Error',
      message: err instanceof Error ? err.message : JSON.stringify(err),
      buttons: [{ text: 'ok' }],
    });
    await alert.present();
  }

  ngOnDestroy() {
    this.mediaStream$
      .pipe(
        isNonNullable(),
        first(),
        tap(mediaStream =>
          mediaStream.getTracks().forEach(track => track.stop())
        )
      )
      .subscribe();
  }
}
