import { Component, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslocoService } from '@ngneat/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ReplaySubject } from 'rxjs';
import { concatMap, concatMapTo, first, tap } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-copy-clipboard',
  templateUrl: './copy-clipboard.component.html',
  styleUrls: ['./copy-clipboard.component.scss'],
})
export class CopyClipboardComponent {
  private readonly text$ = new ReplaySubject<string>(1);

  @Input()
  set text(value: string | undefined) {
    if (value) this.text$.next(value);
  }

  private readonly presentToast$ = this.translocoService
    .selectTranslate('message.copiedToClipboard')
    .pipe(
      first(),
      concatMap(message =>
        this.toastController.create({ message, duration: 2000 })
      ),
      concatMap(toast => toast.present())
    );

  constructor(
    private readonly toastController: ToastController,
    private readonly translocoService: TranslocoService
  ) {}

  copy() {
    return this.text$
      .pipe(
        tap(text => {
          const listener = (e: ClipboardEvent) => {
            e.clipboardData?.setData('text', text);
            e.preventDefault();
          };
          document.addEventListener('copy', listener, false);
          document.execCommand('copy');
          document.removeEventListener('copy', listener, false);
        }),
        concatMapTo(this.presentToast$),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
