'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
     const min = 2;
     const max = 1000000;
     let isInValley = false;
     let valleys = 0; path = (typeof path === "string") ? path.split('') : path;
 
     if (path.length >= min
          && path.length <= max
          && steps === parseInt(steps, 0)
          && steps >= min
          && steps <= max 
          && steps === path.length) {
          
          path.map(step => ((step === "U") ? 1 : -1))
               .reduce((prev, next) => {
                    if (prev < 0 && !isInValley) {
                         isInValley = true;
                    }
                    if ((prev + next) === 0 && isInValley) {
                         valleys++;
                         isInValley = false;
                    }

                    return prev + next;    
               });
     } 
     
     return valleys; 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
