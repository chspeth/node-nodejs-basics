import * as fs from 'fs/promises';
import {ERROR_TEXT, getPath} from '../util.js';

const fileToRemovePath = getPath(import.meta.url, 'files/fileToRemove.txt');

const remove = async () => {
    try {
        await fs.rm(fileToRemovePath);
    } catch {
        throw new Error(ERROR_TEXT);
    }
};

await remove();