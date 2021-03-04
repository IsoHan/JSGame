import * as readline from 'readline';

console.log("What is your name?");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.close();