import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CameraComponent } from './camera/camera.component';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [SharedModule, HomePageRoutingModule],
  declarations: [HomePage, SettingsComponent, CameraComponent],
})
export class HomePageModule {}
