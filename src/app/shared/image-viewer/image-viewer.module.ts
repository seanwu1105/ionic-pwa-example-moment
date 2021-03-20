import { NgModule } from '@angular/core';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { SharedModule } from '../shared.module';
import { ImageViewerPageRoutingModule } from './image-viewer-routing.module';
import { ImageViewerPage } from './image-viewer.page';

@NgModule({
  imports: [SharedModule, ImageViewerPageRoutingModule, PinchZoomModule],
  declarations: [ImageViewerPage],
})
export class ImageViewerPageModule {}
