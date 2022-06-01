const prompt = require('prompt-sync')({ sigint: true });

let x = Number(prompt(`Enter x: `));
let y = Number(prompt(`Enter y: `));


while (x % y !== 0) {
    console.log(x)
    x++
    // This apparently is not needed! So im commenting it out!
    // if (x % y === 0) {
    // console.log(`${x} is divisible by ${y}`)
    // }
}

console.log(`${x} is divisible by ${y}`)

