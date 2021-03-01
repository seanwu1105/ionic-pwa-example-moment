import { NgModule } from '@angular/core';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { SharedModule } from '../../shared/shared.module';
import { CameraComponent } from './camera/camera.component';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { JunctureThumbnailComponent } from './juncture-thumbnail/juncture-thumbnail.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [SharedModule, HomePageRoutingModule, NgxIonicImageViewerModule],
  declarations: [
    HomePage,
    SettingsComponent,
    CameraComponent,
    JunctureThumbnailComponent,
  ],
})
export class HomePageModule {}
