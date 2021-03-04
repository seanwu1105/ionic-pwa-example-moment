import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CameraPageRoutingModule } from './camera-routing.module';
import { CameraPage } from './camera.page';

@NgModule({
  imports: [SharedModule, CameraPageRoutingModule],
  declarations: [CameraPage],
})
export class CameraPageModule {}
