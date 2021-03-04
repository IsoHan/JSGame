//const readline = require('readline');
import * as readline from 'readline';
import { RPSGen } from './Generator.js';
//console.log(RPSGen(0))
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Paper[0], Scissors[1], Rock[2]");

rl.question("Select option 0, 1 or 2", (answer) => {
    console.log(`You selected: ${answer}`);
    var x = RPSGen(answer);
    console.log(x);
    rl.close();
})