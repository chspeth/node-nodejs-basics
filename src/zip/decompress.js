import { createReadStream, createWriteStream } from 'fs';
import { getPath } from '../util.js';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';

const fileToDecompress = getPath(import.meta.url, 'files/archive.gz');
const unzippedFile = getPath(import.meta.url, 'files/fileToCompress.txt');

const readStream = createReadStream(fileToDecompress);
const unzipStream = createGunzip();
const writeStream = createWriteStream(unzippedFile);

const decompress = async () => {
  pipeline(
    readStream,
    unzipStream,
    writeStream,
    (err) => console.log(err)
  )
};

await decompress();