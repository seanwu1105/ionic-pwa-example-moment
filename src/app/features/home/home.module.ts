import { NgModule } from '@angular/core';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { SharedModule } from '../../shared/shared.module';
import { CameraComponent } from './camera/camera.component';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { MomentThumbnailComponent } from './moment-thumbnail/moment-thumbnail.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [SharedModule, HomePageRoutingModule, NgxIonicImageViewerModule],
  declarations: [
    HomePage,
    SettingsComponent,
    CameraComponent,
    MomentThumbnailComponent,
  ],
})
export class HomePageModule {}
