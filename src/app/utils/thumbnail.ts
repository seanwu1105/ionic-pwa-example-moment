import ImageBlobReduce from 'image-blob-reduce';

const imageBlobReduce = new ImageBlobReduce();

export async function makeThumbnail({
  image,
  maxSize,
}: {
  image: Blob;
  maxSize: number;
}) {
  return imageBlobReduce.toBlob(image, { max: maxSize });
}
