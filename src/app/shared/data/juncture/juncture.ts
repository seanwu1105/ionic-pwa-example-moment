import { RxAttachment, RxDocument, RxJsonSchema } from 'rxdb';
import { defer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DataNotFoundError } from '../../../utils/errors';

export interface JunctureIndex {
  id: string;
}

export const schema: RxJsonSchema<JunctureIndex> = {
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true,
    },
  },
  attachments: {
    encrypted: false,
  },
};

export class Juncture {
  get id(): string {
    return this.document.id;
  }

  get mimeType(): string {
    return this.attachment.type;
  }

  private get attachment(): RxAttachment<JunctureIndex> {
    const attachment = this.document.getAttachment(this.id);
    if (attachment) return attachment;
    throw new DataNotFoundError(`Cannot get attachment with ID: ${this.id}`);
  }

  readonly photoUrl$ = defer(() => this.attachment.getData()).pipe(
    map(blob => URL.createObjectURL(blob)),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(private readonly document: RxDocument<JunctureIndex>) {}
}
