import { createReadStream } from 'fs';
import { getPath } from '../util.js';

const filePath = getPath(import.meta.url, 'files/fileToRead.txt');

const readStream = createReadStream(filePath);

const read = async () => {
    readStream.pipe(process.stdout);
};

await read();