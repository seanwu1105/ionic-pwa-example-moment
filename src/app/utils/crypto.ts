import { arrayBufferToHex } from './encoding';

export async function sha256WithBlob(blob: Blob) {
  const digested = await crypto.subtle.digest(
    'SHA-256',
    await blob.arrayBuffer()
  );
  return arrayBufferToHex(digested);
}
