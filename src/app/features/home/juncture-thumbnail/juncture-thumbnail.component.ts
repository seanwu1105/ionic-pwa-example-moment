import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Juncture } from '../../../shared/juncture/juncture';
import { isNonNullable } from '../../../utils/rx-operators';

@Component({
  selector: 'app-juncture-thumbnail',
  templateUrl: './juncture-thumbnail.component.html',
  styleUrls: ['./juncture-thumbnail.component.scss'],
})
export class JunctureThumbnailComponent {
  private readonly _juncture$ = new BehaviorSubject<undefined | Juncture>(
    undefined
  );

  readonly juncture$ = this._juncture$.pipe(
    isNonNullable(),
    distinctUntilChanged((x, y) => x.id === y.id)
  );

  @Input() set juncture(value: Juncture) {
    this._juncture$.next(value);
  }
}
