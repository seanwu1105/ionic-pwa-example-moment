import { Injectable } from '@angular/core';
import { defer, iif, Observable, of, ReplaySubject, throwError } from 'rxjs';
import {
  catchError,
  concatMap,
  concatMapTo,
  distinctUntilChanged,
  first,
  map,
  mapTo,
  pairwise,
  shareReplay,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';
import { finalizeLast, isNonNullable } from '../../utils/rx-operators';

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  private readonly videoStreamSelector = new VideoStreamSelector();

  readonly videoDevices$ = this.videoStreamSelector.devices$;

  private readonly mediaStream$ = this.videoStreamSelector.stream$;

  private readonly imageCapture$ = this.mediaStream$.pipe(
    map(mediaStream => mediaStream.getVideoTracks()[0]),
    isNonNullable(),
    map(track => new ImageCapture(track)),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  private readonly _capturedImageUrl$ = new ReplaySubject<string>(1);

  readonly capturedImageUrl$ = this._capturedImageUrl$.pipe(
    distinctUntilChanged(),
    revokePreviousImageUrl()
  );

  connectPreview$(videoElement: HTMLVideoElement) {
    return this.mediaStream$.pipe(
      tap(mediaStream => (videoElement.srcObject = mediaStream)),
      mapTo(videoElement)
    );
  }

  capture$() {
    return this.imageCapture$.pipe(
      first(),
      switchMap(imageCapture => imageCapture.takePhoto()),
      tap(imageBlob => {
        this._capturedImageUrl$.next(URL.createObjectURL(imageBlob));
      }),
      catchError((err: unknown) => {
        if (
          err instanceof DOMException &&
          (err.name === 'InvalidStateError' ||
            err.name === 'UnknownError' ||
            err.name === 'OperationError')
        ) {
          return of(undefined);
        }
        return throwError(err);
      }),
      isNonNullable()
    );
  }

  nextCamera$(videoElement: HTMLVideoElement) {
    return this.videoDevices$.pipe(
      first(),
      concatMap(devices =>
        iif(
          () => devices.length > 1,
          defer(async () => (videoElement.srcObject = null)).pipe(
            concatMapTo(this.videoStreamSelector.next$())
          )
        )
      )
    );
  }
}

class VideoStreamSelector {
  readonly devices$ = defer(() =>
    navigator.mediaDevices.enumerateDevices()
  ).pipe(
    map(devices => devices.filter(d => d.kind === 'videoinput')),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  private currentVideoDeviceIndex = 0;

  private readonly _stream$ = new ReplaySubject<MediaStream>(1);

  readonly stream$ = this.devices$.pipe(
    first(),
    concatMap(devices => this.getCurrentVideoMedia(devices)),
    tap(mediaStream => this._stream$.next(mediaStream)),
    concatMapTo(this._stream$),
    shareReplay({ bufferSize: 1, refCount: true }),
    isNonNullable(),
    finalizeLast(mediaStream => stopMediaStream(mediaStream)),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  next$() {
    return this.stream$.pipe(
      first(),
      tap(mediaStream => mediaStream.getVideoTracks().forEach(t => t.stop())),
      concatMapTo(this.devices$),
      tap(() => this.currentVideoDeviceIndex++),
      concatMap(devices => this.getCurrentVideoMedia(devices)),
      tap(mediaStream => this._stream$.next(mediaStream))
    );
  }

  private async getCurrentVideoMedia(devices: MediaDeviceInfo[]) {
    return navigator.mediaDevices.getUserMedia({
      video: {
        deviceId:
          devices[this.currentVideoDeviceIndex % devices.length].deviceId,
      },
    });
  }
}

function revokePreviousImageUrl() {
  return (source$: Observable<string>) =>
    source$.pipe(
      startWith(undefined),
      pairwise(),
      tap(([previous]) => {
        if (previous) URL.revokeObjectURL(previous);
      }),
      concatMapTo(source$)
    );
}

function stopMediaStream(mediaStream: MediaStream) {
  mediaStream.getVideoTracks().forEach(t => t.stop());
  return mediaStream;
}
