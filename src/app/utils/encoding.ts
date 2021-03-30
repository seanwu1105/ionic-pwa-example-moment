export function arrayBufferToHex(arrayBuffer: ArrayBuffer) {
  return (
    [...new Uint8Array(arrayBuffer)]
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
  );
}
