import { AfterViewInit, Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { iif, Subject } from 'rxjs';
import { concatMapTo, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ErrorReportService } from '../../shared/error-report/error-report.service';
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

  private readonly onboardIfNecessary$ = this.onboardingService.hasOnboarded$.pipe(
    switchMap(hasOnboarded =>
      iif(
        () => !hasOnboarded,
        this.translocoService
          .selectTranslateObject([])
          .pipe(concatMapTo(this.errorReportService.showUserAgreeDialog$))
      )
    ),
    concatMapTo(this.onboardingService.onboard$)
  );

  constructor(
    private readonly momentRepository: MomentRepository,
    private readonly onboardingService: OnboardingService,
    private readonly translocoService: TranslocoService,
    private readonly errorReportService: ErrorReportService
  ) {}

  ngAfterViewInit() {
    this.onboardIfNecessary$.pipe(untilDestroyed(this)).subscribe();
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
}
