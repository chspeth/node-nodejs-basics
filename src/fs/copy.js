import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const checkIfExists = async (path) => {
    try {
        await fs.access(path, constants.R_OK);
        return true;
    } catch (err) {
        return false;
    }
}

const getPath = (importMetaUrl, ...args) => {
    const __dirname = dirname(fileURLToPath(importMetaUrl));
    const path = join(__dirname, ...args);
    return path;
  };

  const folderPath = getPath(import.meta.url, 'files');
  const folderCopyPath = getPath(import.meta.url, 'files_copy');

const copy = async () => {
    try {
        const pathExists = await checkIfExists(getPath(import.meta.url, 'files_copy'));

        if (pathExists) {
            throw new Error("FS operation failed");
        }

        await fs.cp(folderPath, folderCopyPath, {
            recursive: true,
            force: false,
            errorOnExist: true,
        });
    } catch {
        throw new Error("FS operation failed");
      }
};

await copy();
