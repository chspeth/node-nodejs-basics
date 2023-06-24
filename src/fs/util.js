import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const ERROR_TEXT = "FS operation failed";

const getPath = (importMetaUrl, ...args) => {
  const __dirname = dirname(fileURLToPath(importMetaUrl));
  const path = join(__dirname, ...args);
  return path;
};

export {ERROR_TEXT, getPath};