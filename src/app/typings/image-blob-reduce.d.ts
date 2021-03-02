declare module 'image-blob-reduce' {
  export default class ImageBlobReduce {
    constructor(options?: { pica: any });

    toBlob(
      blob: Blob,
      options: {
        max: number;
        picaResizeOptions?: any;
      }
    ): Promise<Blob>;
  }
}
