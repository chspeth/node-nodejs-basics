import { createReadStream, createWriteStream } from 'fs';
import { getPath } from '../util.js';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

const fileToCompress = getPath(import.meta.url, 'files/fileToCompress.txt');
const zippedFile = getPath(import.meta.url, 'files/archive.gz');

const readStream = createReadStream(fileToCompress);
const zipStream = createGzip();
const writeStream = createWriteStream(zippedFile);

const compress = async () => {
  pipeline(
    readStream,
    zipStream,
    writeStream,
    (err) => console.log(err)
  )
};

await compress();