import { createWriteStream } from 'fs';
import { getPath } from '../util.js';

const filePath = getPath(import.meta.url, 'files/fileToWrite.txt');

const writeStream = createWriteStream(filePath);

const write = async () => {
    process.stdin.pipe(writeStream);
};

await write();