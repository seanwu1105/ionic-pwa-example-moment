import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from '../../../shared/shared.module';
import { PhotoPageRoutingModule } from './photo-routing.module';
import { PhotoPage } from './photo.page';

@NgModule({
  imports: [SharedModule, PhotoPageRoutingModule, SwiperModule],
  declarations: [PhotoPage],
})
export class PhotoPageModule {}
