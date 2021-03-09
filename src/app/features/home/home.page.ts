import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Moment } from '../../shared/moment/moment';
import { MomentRepository } from '../../shared/moment/moment-repository.service';
import { isNonNullable } from '../../utils/rx-operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  readonly moments$ = this.momentRepository.all$;

  private readonly _ionContent$ = new BehaviorSubject<IonContent | undefined>(
    undefined
  );

  private readonly ionContent$ = this._ionContent$.pipe(
    isNonNullable(),
    distinctUntilChanged()
  );

  @ViewChild(IonContent)
  set ionContent(value: IonContent) {
    this._ionContent$.next(value);
  }

  private readonly _scrollEvent$ = new Subject<Event>();

  private readonly scrollEvent$ = this._scrollEvent$.pipe(
    distinctUntilChanged()
  );

  readonly noFooterBorder$ = combineLatest([
    this.ionContent$,
    this.scrollEvent$,
  ]).pipe(switchMap(([ionContent]) => this.detectBottom(ionContent)));

  constructor(private readonly momentRepository: MomentRepository) {}

  onScroll(event: Event) {
    this._scrollEvent$.next(event);
  }

  private async detectBottom(ionContent: IonContent) {
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
