import { Component, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Moment } from '../../../shared/moment/moment';

@Component({
  selector: 'app-moment-thumbnail',
  templateUrl: './moment-thumbnail.component.html',
  styleUrls: ['./moment-thumbnail.component.scss'],
})
export class MomentThumbnailComponent {
  private readonly _moment$ = new ReplaySubject<Moment>(1);

  readonly moment$ = this._moment$.pipe(
    distinctUntilChanged((x, y) => x.id === y.id)
  );

  @Input() set moment(value: Moment) {
    this._moment$.next(value);
  }
}
