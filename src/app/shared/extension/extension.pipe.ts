import { Pipe, PipeTransform } from '@angular/core';
import mime from 'mime/lite';

@Pipe({
  name: 'extension',
})
export class ExtensionPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(mimeType: string) {
    //@ts-expect-error: https://github.com/broofa/mime/issues/255
    return mime.getExtension(mimeType);
  }
}
