import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, RouterTestingModule, HttpClientTestingModule],
  exports: [SharedModule, RouterTestingModule],
})
export class SharedTestingModule {}
