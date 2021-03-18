import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class DialogsService {
  constructor(private readonly alertController: AlertController) {}

  async presentError(error: unknown) {
    // eslint-disable-next-line no-console
    console.error(error);
    const alert = await this.alertController.create({
      header: error instanceof Error ? error.name : 'Unknown Error',
      message: error instanceof Error ? error.message : JSON.stringify(error),
      buttons: [{ text: 'ok' }],
    });
    await alert.present();
  }
}
