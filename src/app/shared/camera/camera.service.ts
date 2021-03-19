import { Injectable } from '@angular/core';
import { BehaviorSubject, defer, iif, Observable, ReplaySubject } from 'rxjs';
import {
  catchError,
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
import {
  concatTap,
  finalizeLast,
  isNonNullable,
} from '../../utils/rx-operators';

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  readonly videoDevices$ = defer(() =>
    navigator.mediaDevices.enumerateDevices()
  ).pipe(
    map(devices => devices.filter(d => d.kind === 'videoinput')),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  private readonly _mediaStream$ = new ReplaySubject<MediaStream>(1);

  private readonly mediaStream$ = defer(() => getEnvironmentCamera()).pipe(
    tap(mediaStream => this._mediaStream$.next(mediaStream)),
    concatMapTo(this._mediaStream$),
    shareReplay({ bufferSize: 1, refCount: true }),
    isNonNullable(),
    finalizeLast(mediaStream => {
      if (mediaStream) stopMediaStream(mediaStream);
    }),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  private readonly imageCapture$ = this.mediaStream$.pipe(
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

  reverseCamera$(videoElement: HTMLVideoElement) {
    return this.mediaStream$.pipe(
      first(),
      map(mediaStream => {
        const tracks = mediaStream.getVideoTracks();
        if (tracks.length === 0) return;
        const facingMode = tracks[0].getConstraints().facingMode;
        if (facingMode === undefined) return;

        /**
         * Stop media stream BEFORE getting new media stream to avoid
         * NotReadableError on mobile devices.
         */
        videoElement.srcObject = null;
        stopMediaStream(mediaStream);

        return facingMode;
      }),
      isNonNullable(),
      concatTap(facingMode =>
        iif(
          () => facingMode === 'environment',
          defer(async () => {
            this._mediaStream$.next(await getUserCamera());
          }),
          defer(async () => {
            this._mediaStream$.next(await getEnvironmentCamera());
          })
        )
      )
    );
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

async function getEnvironmentCamera() {
  return navigator.mediaDevices.getUserMedia({
    video: { facingMode: 'environment' },
  });
}

async function getUserCamera() {
  return navigator.mediaDevices.getUserMedia({
    video: { facingMode: 'user' },
  });
}
