import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage {
  readonly photoSlidesOptions = {
    resistanceRatio: 0,
  };
}
