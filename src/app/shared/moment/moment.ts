import { RxDocument, RxJsonSchema } from 'rxdb';
import { defer, of } from 'rxjs';
import { concatMap, map, shareReplay } from 'rxjs/operators';
import { DataNotFoundError } from '../../utils/errors';
import { makeThumbnail } from '../../utils/thumbnail';

export interface MemontIndex {
  readonly id: string;
  readonly timestamp: number;
  readonly geolocationPosition?: {
    readonly latitude: number;
    readonly longitude: number;
  };
}

export const schema: RxJsonSchema<MemontIndex> = {
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true,
    },
    timestamp: { type: 'number' },
    geolocationPosition: {
      type: 'object',
      properties: {
        latitude: { type: 'number' },
        longitude: { type: 'number' },
      },
      required: ['latitude', 'longitude'],
    },
  },
  indexes: ['timestamp'],
  required: ['timestamp'],
  attachments: {
    encrypted: false,
  },
};

export class Moment {
  static readonly PHOTO_ATTACHMENT_ID = 'original';

  private static readonly THUMBNAIL_ATTACHMENT_ID = 'thumbnail';

  readonly id = this.document.id;

  readonly mimeType = this.getAttachment(Moment.PHOTO_ATTACHMENT_ID).type;

  readonly timestamp = this.document.timestamp;

  readonly geolocationPosition = this.document.geolocationPosition;

  readonly photoUrl$ = defer(() =>
    this.getAttachment(Moment.PHOTO_ATTACHMENT_ID).getData()
  ).pipe(
    map(blob => URL.createObjectURL(blob)),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  readonly thumbnailUrl$ = defer(() =>
    of(this.document.getAttachment(Moment.THUMBNAIL_ATTACHMENT_ID))
  ).pipe(
    concatMap(async attachment => {
      if (attachment) return attachment.getData();
      const thumbnail = await makeThumbnail({
        image: await this.getAttachment(Moment.PHOTO_ATTACHMENT_ID).getData(),
        maxSize: 300,
      });
      await this.document.putAttachment(
        {
          id: Moment.THUMBNAIL_ATTACHMENT_ID,
          data: thumbnail,
          type: this.mimeType,
        },
        true
      );
      return thumbnail;
    }),
    map(blob => URL.createObjectURL(blob)),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(private readonly document: RxDocument<MemontIndex>) {}

  private getAttachment(
    id:
      | typeof Moment.PHOTO_ATTACHMENT_ID
      | typeof Moment.THUMBNAIL_ATTACHMENT_ID
  ) {
    const attachment = this.document.getAttachment(id);
    if (attachment) return attachment;
    throw new DataNotFoundError(`Cannot get the attachment with ID: ${id}`);
  }
}
