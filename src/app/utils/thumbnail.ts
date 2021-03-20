import Compressor from 'compressorjs';

export async function makeThumbnail({
  image,
  width,
}: {
  image: Blob;
  width: number;
}) {
  return new Promise<Blob>((resolve, reject) => {
    new Compressor(image, {
      quality: 0.6,
      width,
      success(result) {
        resolve(result);
      },
      error(err) {
        reject(err);
      },
    });
  });
}
