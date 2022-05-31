const prompt = require('prompt-sync')({ sigint: true });

let input = Number(prompt(`Enter a number: `));

while (input <= 100) {
    input = input * 2 
    console.log(input)
}

