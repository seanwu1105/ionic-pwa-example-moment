import { Injectable } from '@angular/core';
import { BehaviorSubject, defer, Observable } from 'rxjs';
import {
  catchError,
  concatMapTo,
  distinctUntilChanged,
  first,
  map,
  mapTo,
  pairwise,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs/operators';
import {
  finalizeLast,
  ignoreComplete,
  isNonNullable,
} from '../../utils/rx-operators';

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  private readonly mediaStream$ = defer(() =>
    navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' },
    })
  ).pipe(
    ignoreComplete(),
    finalizeLast(mediaStream => {
      mediaStream.getTracks().forEach(track => track.stop());
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

  readonly capturedImageUrl$ = this._capturedImageUrl$.pipe(
    isNonNullable(),
    distinctUntilChanged(),
    revokePreviousImageUrl()
  );

  connectPreview$(videoElement: HTMLVideoElement) {
    return this.mediaStream$.pipe(
      isNonNullable(),
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
      catchError(async (err: unknown) => {
        if (
          err instanceof DOMException &&
          (err.name === 'InvalidStateError' ||
            err.name === 'UnknownError' ||
            err.name === 'OperationError')
        ) {
          return undefined;
        }
        throw err;
      }),
      isNonNullable()
    );
  }
}

function revokePreviousImageUrl() {
  return (source$: Observable<string>) =>
    source$.pipe(
      pairwise(),
      tap(([previous]) => URL.revokeObjectURL(previous)),
      concatMapTo(source$)
    );
}
