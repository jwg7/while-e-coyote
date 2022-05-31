const prompt = require('prompt-sync')({ sigint: true });

let x = prompt(`Enter a string: `);

while (x.length <= 10) {
    x = x + x
    console.log(x)
}