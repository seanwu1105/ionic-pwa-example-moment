import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslocoModule } from '@ngneat/transloco';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import { ReactiveComponentModule } from '@ngrx/component';
import { CopyClipboardDirective } from './copy-clipboard/copy-clipboard.directive';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [ImageComponent, CopyClipboardDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    ReactiveComponentModule,
    TranslocoModule,
    TranslocoLocaleModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReactiveComponentModule,
    TranslocoModule,
    TranslocoLocaleModule,
    ImageComponent,
    CopyClipboardDirective,
  ],
})
export class SharedModule {}
