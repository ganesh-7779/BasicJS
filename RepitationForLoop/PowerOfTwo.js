const prompt = require('prompt-sync')();
let num = prompt('Enter First Number: ');
let powerOf2;
for(let i=1; i<=num;i++){
    powerOf2 = Math.pow(2,i)
}
console.log("Power of 2 till U/I number "+num + " is : "+ powerOf2);