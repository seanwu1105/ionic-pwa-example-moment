import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslocoService } from '@ngneat/transloco';
import * as Sentry from '@sentry/angular';
import { Integrations } from '@sentry/tracing';
import { defer, iif } from 'rxjs';
import { concatMap, first } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { PreferenceServiceBase } from '../preference/preference-service-base';
import { RxDbPreferenceManager } from '../preference/rxdb-preference-manager.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorReportService extends PreferenceServiceBase<PreferenceKey> {
  readonly enabled$ = this.getBoolean$('enabled');

  private hasInitialized = false;

  readonly initialize$ = this.enabled$.pipe(
    concatMap(enabled =>
      iif(
        () => enabled && !this.hasInitialized,
        defer(async () => {
          Sentry.init({
            dsn:
              'https://f6829ade21fc4063ac379bb39dec7ce9@o555454.ingest.sentry.io/5686819',
            integrations: [
              new Integrations.BrowserTracing({
                routingInstrumentation: Sentry.routingInstrumentation,
              }),
            ],

            // Set tracesSampleRate to 1.0 to capture 100%
            // of transactions for performance monitoring.
            // We recommend adjusting this value in production
            tracesSampleRate: 0.5,
            enabled: environment.production,
            beforeSend: async event => {
              const enabled = await this.enabled$.pipe(first()).toPromise();
              if (enabled) return event;
              return null;
            },
          });
          this.hasInitialized = true;
        })
      )
    )
  );

  readonly showUserAgreeDialog$ = defer(() =>
    this.showErrorReportOptInDialog()
  ).pipe(concatMap(agree => this.setEnabled$(agree)));

  constructor(
    preferenceManager: RxDbPreferenceManager,
    private readonly alertController: AlertController,
    private readonly translocoService: TranslocoService
  ) {
    super(preferenceManager, ErrorReportService.name);
  }

  setEnabled$(value: boolean) {
    return this.setBoolean$('enabled', value);
  }

  private async showErrorReportOptInDialog() {
    return new Promise<boolean>(resolve => {
      this.alertController
        .create({
          header: this.translocoService.translate('helpUsToImproveMoment'),
          message: this.translocoService.translate(
            'message.helpUsToImproveMoment'
          ),
          inputs: [
            {
              type: 'checkbox',
              value: 'agree',
              checked: true,
              label: this.translocoService.translate('message.iAgree'),
            },
          ],
          buttons: [
            {
              text: this.translocoService.translate('ok'),
              handler: (data: any[]) => {
                resolve(data.length > 0 && data[0] === 'agree');
              },
            },
          ],
          backdropDismiss: false,
        })
        .then(alert => alert.present());
    });
  }
}

type PreferenceKey = 'enabled';
