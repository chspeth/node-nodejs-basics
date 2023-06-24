const neededArguments = process.argv;
const arr = [];

const parseArgs = () => {
    for (let i = 0; i < neededArguments.length; i++) {
        if (neededArguments[i].startsWith("--")) {
            arr.push(neededArguments[i].slice(2) + " is " + neededArguments[i+1])
        }
    }
    console.log(arr.join(", "));
};

parseArgs();