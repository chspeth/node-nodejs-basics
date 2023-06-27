import { getPath } from '../util.js';
import { Worker } from 'worker_threads';
import { availableParallelism } from 'os';

const INITIAL_NUMBER = 10;

const workerFile = getPath(import.meta.url, 'worker.js');

const getWorkerService = (num) => new Promise(resolve => {
    const worker = new Worker(workerFile, { 
        workerData: num
    });

    worker.on('message', data => resolve({
        status: 'resolved',
        data
    }));

    worker.on('error', () => resolve({
        status: 'error',
        data: null
    }));
})

const performCalculations = async () => {
    const workerPool = Array.from({ length: availableParallelism() }, (_, i) => getWorkerService(INITIAL_NUMBER + i));
    const result = await Promise.all(workerPool);
    console.log(result);
};

await performCalculations();