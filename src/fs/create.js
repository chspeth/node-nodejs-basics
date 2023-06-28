import { writeFile } from 'fs/promises';
import { join } from 'path';
import {ERROR_TEXT} from '../util.js';

const FILE_NAME = "fresh.txt";
const FILE_CONTENT = "I am fresh and young";

const create = async () => {
    try {
        await writeFile(join("./src/fs/files/", FILE_NAME), FILE_CONTENT, { flag: 'wx' });
    } catch (err) {
        throw new Error(ERROR_TEXT);
    }
};

await create();