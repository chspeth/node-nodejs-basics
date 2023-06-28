import * as fs from 'fs/promises';
import {ERROR_TEXT, getPath} from '../util.js';

const pathToFileFolder = getPath(import.meta.url, 'files');

const list = async () => {
    try {
        const filesArray = await fs.readdir(pathToFileFolder);
        console.log(filesArray);
    } catch {
        throw new Error(ERROR_TEXT);
    }
};

await list();