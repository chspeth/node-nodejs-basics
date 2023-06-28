import * as fs from 'fs/promises';
import {ERROR_TEXT, getPath} from '../util.js';

const fileToReadPath = getPath(import.meta.url, 'files/fileToRead.txt');

const read = async () => {
    try {
        const fileContent = await fs.readFile(fileToReadPath, { encoding: 'utf-8' });
        console.log(fileContent);
    } catch {
        throw new Error(ERROR_TEXT);
    }
};

await read();