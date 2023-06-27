import { fork } from 'child_process';
import { getPath } from '../util.js';

const childModule = getPath(import.meta.url, 'files/script.js');

const spawnChildProcess = async (args) => {
    fork(childModule, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(  [1, 'someArgument2'] );
