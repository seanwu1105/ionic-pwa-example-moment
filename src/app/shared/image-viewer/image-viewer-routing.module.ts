import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageViewerPage } from './image-viewer.page';

const routes: Routes = [
  {
    path: '',
    component: ImageViewerPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageViewerPageRoutingModule {}
