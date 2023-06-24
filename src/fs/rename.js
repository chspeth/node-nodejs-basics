import {ERROR_TEXT, getPath} from './util.js';
import * as fs from 'fs/promises';

const wrongFilenamePath = getPath(import.meta.url, 'files/wrongFilename.txt');
const properFilenamePath = getPath(import.meta.url, 'files/properFilename.md');


const rename = async () => {
    try {
        await fs.rename(wrongFilenamePath, properFilenamePath);
    } catch {
        throw new Error(ERROR_TEXT);
    }
};

await rename();