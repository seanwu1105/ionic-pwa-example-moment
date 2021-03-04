import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Moment } from '../../../shared/moment/moment';
import { isNonNullable } from '../../../utils/rx-operators';

@Component({
  selector: 'app-moment-thumbnail',
  templateUrl: './moment-thumbnail.component.html',
  styleUrls: ['./moment-thumbnail.component.scss'],
})
export class MomentThumbnailComponent {
  private readonly _moment$ = new BehaviorSubject<undefined | Moment>(
    undefined
  );

  readonly moment$ = this._moment$.pipe(
    isNonNullable(),
    distinctUntilChanged((x, y) => x.id === y.id)
  );

  @Input() set moment(value: Moment) {
    this._moment$.next(value);
  }
}
