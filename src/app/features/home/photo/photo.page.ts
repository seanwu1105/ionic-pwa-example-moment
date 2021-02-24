import { Component } from '@angular/core';
import { JunctureRepository } from '../../../shared/data/juncture/juncture-repository.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage {
  readonly junctures$ = this.junctureRepository.all$;

  readonly photoSlidesOptions = {
    resistanceRatio: 0,
  };

  constructor(private readonly junctureRepository: JunctureRepository) {}
}
