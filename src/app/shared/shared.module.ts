import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslocoModule } from '@ngneat/transloco';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import { ReactiveComponentModule } from '@ngrx/component';
import { BackButtonComponent } from './back-button/back-button.component';
import { CopyClipboardComponent } from './copy-clipboard/copy-clipboard.component';
import { ExtensionPipe } from './extension/extension.pipe';
import { ImageComponent } from './image/image.component';

const declarations = [
  ImageComponent,
  BackButtonComponent,
  CopyClipboardComponent,
  ExtensionPipe,
];

const imports = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  IonicModule,
  HttpClientModule,
  ReactiveComponentModule,
  TranslocoModule,
  TranslocoLocaleModule,
];

@NgModule({
  declarations,
  imports,
  exports: [...imports, ...declarations],
})
export class SharedModule {}
