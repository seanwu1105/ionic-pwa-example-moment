import { AfterViewInit, Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslocoService } from '@ngneat/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { defer, iif, Subject } from 'rxjs';
import { concatMapTo, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Moment } from '../../shared/moment/moment';
import { MomentRepository } from '../../shared/moment/moment-repository.service';
import { OnboardingService } from '../../shared/onboarding/onboarding.service';

@UntilDestroy()
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  readonly moments$ = this.momentRepository.all$;

  private readonly _scrollEvent$ = new Subject<Event>();

  private readonly scrollEvent$ = this._scrollEvent$.pipe(
    distinctUntilChanged()
  );

  readonly noFooterBorder$ = this.scrollEvent$.pipe(
    switchMap(event => this.detectBottom(event))
  );

  constructor(
    private readonly momentRepository: MomentRepository,
    private readonly alertController: AlertController,
    private readonly onboardingService: OnboardingService,
    private readonly translocoService: TranslocoService
  ) {}

  ngAfterViewInit() {
    this.onboardIfNecessary();
  }

  onScroll(event: Event) {
    this._scrollEvent$.next(event);
  }

  private async detectBottom(scrollEvent: Event) {
    const ionContent = scrollEvent.target as HTMLIonContentElement;
    const scrollElement = await ionContent.getScrollElement();
    return (
      scrollElement.scrollTop ===
      scrollElement.scrollHeight - scrollElement.clientHeight
    );
  }

  trackMoment(_: number, item: Moment) {
    return item.id;
  }

  private onboardIfNecessary() {
    return this.onboardingService.hasOnboarded$
      .pipe(
        switchMap(hasOnboarded =>
          iif(
            () => !hasOnboarded,
            this.translocoService
              .selectTranslateObject([])
              .pipe(concatMapTo(defer(() => this.showCrashReportOptInDialog())))
          )
        ),
        concatMapTo(this.onboardingService.onboard$),
        untilDestroyed(this)
      )
      .subscribe();
  }

  private async showCrashReportOptInDialog() {
    const alert = await this.alertController.create({
      header: this.translocoService.translate('helpUsToImproveMoment'),
      message: this.translocoService.translate('message.helpUsToImproveMoment'),
      inputs: [
        {
          type: 'checkbox',
          checked: true,
          label: this.translocoService.translate('message.iAgree'),
        },
      ],
      buttons: [{ text: this.translocoService.translate('ok') }],
    });
    return alert.present();
  }

  no() {
    throw new Error('oh no, this is a test!');
  }
}
