import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { MomentThumbnailComponent } from './moment-thumbnail/moment-thumbnail.component';

@NgModule({
  imports: [SharedModule, HomePageRoutingModule],
  declarations: [HomePage, MomentThumbnailComponent],
})
export class HomePageModule {}
