import { Component, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-copy-clipboard',
  templateUrl: './copy-clipboard.component.html',
  styleUrls: ['./copy-clipboard.component.scss'],
})
export class CopyClipboardComponent {
  @Input()
  text?: string;

  constructor(
    private readonly toastController: ToastController,
    private readonly translocoService: TranslocoService
  ) {}

  async copy() {
    if (!this.text) return;
    const payload = this.text;
    const listener = (e: ClipboardEvent) => {
      const clipboard = e.clipboardData;
      clipboard?.setData('text', payload.toString());
      e.preventDefault();
    };

    document.addEventListener('copy', listener, false);
    document.execCommand('copy');
    document.removeEventListener('copy', listener, false);
    return this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.translocoService.translate('message.copiedToClipboard'),
      duration: 2000,
    });
    return toast.present();
  }
}
