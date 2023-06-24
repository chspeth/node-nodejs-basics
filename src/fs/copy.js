import * as fs from 'fs/promises';
import {ERROR_TEXT, getPath} from './util.js';

const folderPath = getPath(import.meta.url, 'files');
const folderCopyPath = getPath(import.meta.url, 'files_copy');

const copy = async () => {
    try {
        await fs.cp(folderPath, folderCopyPath, {
            recursive: true,
            force: false,
            errorOnExist: true,
        });
    } catch {
        throw new Error(ERROR_TEXT);
      }
};

await copy();
