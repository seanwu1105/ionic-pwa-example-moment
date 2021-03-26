import { RxDocument, RxJsonSchema } from 'rxdb';
import { defer } from 'rxjs';
import { concatMap, map, pluck, shareReplay } from 'rxjs/operators';
import UAParser from 'ua-parser-js';
import { DataNotFoundError } from '../../utils/errors';
import { ignoreError } from '../../utils/rx-operators';
import { makeThumbnail } from '../../utils/thumbnail';

export interface MemontIndex {
  readonly id: string;
  readonly timestamp: number;
  readonly geolocationPosition?: {
    readonly latitude: number;
    readonly longitude: number;
  };
  readonly userAgent: string;
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
    userAgent: {
      type: 'string',
    },
  },
  indexes: ['timestamp'],
  required: ['timestamp', 'userAgent'],
  attachments: {
    encrypted: false,
  },
};

export class Moment {
  static readonly PHOTO_ATTACHMENT_ID = 'original';

  private static readonly THUMBNAIL_ATTACHMENT_ID = 'thumbnail';

  readonly id = this.document.id;

  readonly mimeType$ = defer(async () =>
    this.getAttachment(Moment.PHOTO_ATTACHMENT_ID)
  ).pipe(ignoreError(DataNotFoundError), pluck('type'));

  readonly timestamp = this.document.timestamp;

  readonly geolocationPosition = this.document.geolocationPosition;

  readonly photo$ = defer(() =>
    this.getAttachment(Moment.PHOTO_ATTACHMENT_ID).getData()
  ).pipe(ignoreError(DataNotFoundError));

  readonly photoUrl$ = this.photo$.pipe(
    map(blob => URL.createObjectURL(blob)),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  readonly thumbnailUrl$ = this.mimeType$.pipe(
    concatMap(async mimeType => {
      const attachment = this.document.getAttachment(
        Moment.THUMBNAIL_ATTACHMENT_ID
      );
      if (attachment) return attachment.getData();
      const thumbnail = await makeThumbnail({
        image: await this.getAttachment(Moment.PHOTO_ATTACHMENT_ID).getData(),
        width: 300,
      });
      await this.document.putAttachment(
        {
          id: Moment.THUMBNAIL_ATTACHMENT_ID,
          data: thumbnail,
          type: mimeType,
        },
        true
      );
      return thumbnail;
    }),
    map(blob => URL.createObjectURL(blob)),
    ignoreError(DataNotFoundError),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  readonly userAgent = new UAParser(this.document.userAgent).getResult();

  readonly metaJson = JSON.stringify(this.document.toJSON());

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
