import { NgModule } from '@angular/core';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { SharedModule } from '../../../shared/shared.module';
import { CameraPageRoutingModule } from './camera-routing.module';
import { CameraPage } from './camera.page';

@NgModule({
  imports: [SharedModule, CameraPageRoutingModule, NgxIonicImageViewerModule],
  declarations: [CameraPage],
})
export class CameraPageModule {}
