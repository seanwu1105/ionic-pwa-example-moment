import { RxDocument, RxJsonSchema } from 'rxdb';
import { defer, iif } from 'rxjs';
import { concatMap, map, pluck, shareReplay } from 'rxjs/operators';
import UAParser from 'ua-parser-js';
import { isNonNullable } from '../../utils/rx-operators';
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

  readonly mimeType$ = defer(async () => this.getAttachment('original')).pipe(
    isNonNullable(),
    pluck('type')
  );

  readonly timestamp = this.document.timestamp;

  readonly geolocationPosition = this.document.geolocationPosition;

  readonly photo$ = defer(() => this.getAttachment('original')?.getData()).pipe(
    isNonNullable()
  );

  readonly photoUrl$ = this.photo$.pipe(
    map(blob => URL.createObjectURL(blob)),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  readonly thumbnailUrl$ = defer(async () =>
    this.getAttachment('thumbnail')
  ).pipe(
    concatMap(attachment =>
      iif(
        () => !!attachment,
        defer(() => attachment?.getData()),
        defer(async () => {
          const photo = this.getAttachment('original');
          if (!photo) return undefined;
          const thumbnail = await makeThumbnail({
            image: await photo.getData(),
            width: 300,
          });
          await this.document.putAttachment({
            id: Moment.THUMBNAIL_ATTACHMENT_ID,
            data: thumbnail,
            type: photo.type,
          });
          return thumbnail;
        })
      )
    ),
    isNonNullable(),
    map(blob => URL.createObjectURL(blob)),
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
    return this.document.getAttachment(id);
  }
}
