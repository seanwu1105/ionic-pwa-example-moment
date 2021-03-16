import { NgModule } from '@angular/core';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from '../../../shared/shared.module';
import { PhotoPageRoutingModule } from './photo-routing.module';
import { PhotoPage } from './photo.page';

@NgModule({
  imports: [
    SharedModule,
    PhotoPageRoutingModule,
    NgxIonicImageViewerModule,
    SwiperModule,
  ],
  declarations: [PhotoPage],
})
export class PhotoPageModule {}
