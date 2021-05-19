import { Component, ElementRef, ViewChild } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { iif, ReplaySubject } from 'rxjs';
import { catchError, concatMap } from 'rxjs/operators';
import { CameraService } from '../../../shared/camera/camera.service';
import { DialogsService } from '../../../shared/dialogs/dialogs.service';
import { MomentRepository } from '../../../shared/moment/moment-repository.service';
import { concatTap } from '../../../utils/rx-operators';

@UntilDestroy()
@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage {
  readonly videoDevices$ = this.cameraService.videoDevices$;

  private readonly videoElement$ = new ReplaySubject<HTMLVideoElement>(1);

  @ViewChild('video')
  set videoElement(value: ElementRef<HTMLVideoElement> | undefined) {
    if (value) this.videoElement$.next(value.nativeElement);
  }

  readonly capturedImageUrl$ = this.cameraService.capturedImageUrl$;

  constructor(
    private readonly dialogsService: DialogsService,
    private readonly momentRepository: MomentRepository,
    private readonly cameraService: CameraService
  ) {
    this.startPreview();
  }

  private startPreview() {
    return this.videoElement$
      .pipe(
        concatMap(videoElement =>
          this.cameraService.connectPreview$(videoElement)
        ),
        catchError((err: unknown) => this.presentError$(err)),
        untilDestroyed(this)
      )
      .subscribe();
  }

  capture() {
    return this.cameraService
      .capture$()
      .pipe(
        concatTap(imageBlob => this.momentRepository.add$(imageBlob)),
        catchError((err: unknown) => this.presentError$(err)),
        untilDestroyed(this)
      )
      .subscribe();
  }

  reverseCamera() {
    return this.videoElement$
      .pipe(
        concatMap(videoElement => this.cameraService.nextCamera$(videoElement)),
        catchError((err: unknown) => this.presentError$(err)),
        untilDestroyed(this)
      )
      .subscribe();
  }

  presentError$(error: unknown) {
    return iif(
      () => error instanceof DOMException && error.name === 'NotAllowedError',
      this.dialogsService.presentAlert$({
        headerKey: `error.${(error as DOMException).name}`,
        messageKey: 'message.cameraPermissionDenied',
      }),
      this.dialogsService.presentError$(error)
    );
  }
}
