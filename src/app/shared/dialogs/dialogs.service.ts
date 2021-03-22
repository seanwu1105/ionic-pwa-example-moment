/* eslint-disable no-console */
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root',
})
export class DialogsService {
  constructor(
    private readonly alertController: AlertController,
    private readonly translocoService: TranslocoService
  ) {}

  async presentAlert({
    headerKey,
    messageKey,
  }: {
    headerKey: string;
    messageKey: string;
  }) {
    const header = this.translocoService.translate(headerKey);
    const message = this.translocoService.translate(messageKey);
    console.log(header, message);
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [{ text: 'ok' }],
    });
    await alert.present();
  }

  async presentError(error: unknown) {
    console.error(error);
    const alert = await this.alertController.create({
      header: this.translocoService.translate(
        `error.${error instanceof Error ? error.name : 'UnknownError'}`
      ),
      message: error instanceof Error ? error.message : JSON.stringify(error),
      buttons: [{ text: 'ok' }],
    });
    await alert.present();
  }
}
