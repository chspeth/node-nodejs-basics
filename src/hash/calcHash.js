import { createHash } from "crypto";
import { readFile } from 'fs/promises';
import { getPath } from '../fs/util.js';

const filePath = getPath(import.meta.url, 'files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const buff = await readFile(filePath);
    const hash = createHash('sha256').update(buff).digest('hex');
    console.log(hash);
};

await calculateHash();