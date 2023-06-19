import { writeFile } from 'fs/promises';
import { join } from 'path';

const FILE_NAME = "fresh.txt";
const FILE_CONTENT = "I am fresh and young";

const create = async () => {
    try {
        await writeFile(join("./src/fs/files/", FILE_NAME), FILE_CONTENT, { flag: 'wx' });
    } catch (err) {
        throw new Error("FS operation failed");
    }
};

await create();