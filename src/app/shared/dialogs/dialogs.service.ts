/* eslint-disable no-console */
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslocoService } from '@ngneat/transloco';
import { concatMap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DialogsService {
  constructor(
    private readonly alertController: AlertController,
    private readonly translocoService: TranslocoService
  ) {}

  presentAlert$({
    headerKey,
    messageKey,
  }: {
    headerKey: string;
    messageKey: string;
  }) {
    return this.translocoService
      .selectTranslateObject({
        [headerKey]: null,
        [messageKey]: null,
        ok: null,
      })
      .pipe(
        first(),
        concatMap(
          ([header, message, ok]) =>
            new Promise<void>(resolve => {
              console.log(header, message);
              this.alertController
                .create({
                  header,
                  message,
                  buttons: [{ text: ok }],
                })
                .then(alert => {
                  alert.onDidDismiss().then(() => resolve());
                  return alert.present();
                });
            })
        )
      );
  }

  presentError$(error: unknown) {
    return this.translocoService
      .selectTranslateObject({
        [`error.${error instanceof Error ? error.name : 'UnknownError'}`]: null,
        ok: null,
      })
      .pipe(
        first(),
        concatMap(
          ([header, ok]) =>
            new Promise<unknown>(resolve => {
              console.error(error);
              this.alertController
                .create({
                  header,
                  message:
                    error instanceof Error
                      ? error.message
                      : JSON.stringify(error),
                  buttons: [{ text: ok }],
                })
                .then(alert => {
                  alert.onDidDismiss().then(() => resolve(error));
                  return alert.present();
                });
            })
        )
      );
  }

  presentConfirmation$({
    headerKey,
    messageKey,
  }: {
    headerKey: string;
    messageKey: string;
  }) {
    return this.translocoService
      .selectTranslateObject({
        [headerKey]: null,
        [messageKey]: null,
        ok: null,
        cancel: null,
      })
      .pipe(
        first(),
        concatMap(
          ([header, message, ok, cancel]) =>
            new Promise<boolean>(resolve => {
              console.log(header, message);
              this.alertController
                .create({
                  header,
                  message,
                  buttons: [
                    {
                      text: ok,
                      handler: () => resolve(true),
                    },
                    {
                      text: cancel,
                      handler: () => resolve(false),
                      role: 'cancel',
                    },
                  ],
                  backdropDismiss: false,
                })
                .then(alert => alert.present());
            })
        )
      );
  }
}
