import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraPage } from './camera.page';

const routes: Routes = [
  {
    path: '',
    component: CameraPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CameraPageRoutingModule {}
