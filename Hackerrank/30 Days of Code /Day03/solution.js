'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function inRange(first, last) {
    return function (num) {
        return num >= first && num <= last
    }
}
function main() {
    const N = parseInt(readLine(), 10);
    let isEven = N % 2 === 0

    if (isEven == false) {
        console.log('Weird')
    } else if ((isEven && inRange(6, 20)(N))) {
        console.log('Weird')
    } else {
        console.log('Not Weird')
    }
}
