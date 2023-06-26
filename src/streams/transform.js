import { Transform, pipeline } from 'stream';

const readable = process.stdin;
const writable = process.stdout;

const reverseChunk = new Transform({
        transform(chunk, enc, cb) {
        const stringifiedChunk = chunk.toString().trim();

        const reversedChunk = stringifiedChunk.split('').reverse().join('');

        this.push(reversedChunk + '\n');

        cb();
    }
});

const transform = async () => {
    pipeline(
        readable,
        reverseChunk,
        writable,
        err => {
            console.log(`Error: ${err}`);
        }
    )
};

await transform();