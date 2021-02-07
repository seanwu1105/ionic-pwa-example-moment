import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { PhotoPageRoutingModule } from './photo-routing.module';
import { PhotoPage } from './photo.page';

@NgModule({
  imports: [SharedModule, PhotoPageRoutingModule],
  declarations: [PhotoPage],
})
export class PhotoPageModule {}
