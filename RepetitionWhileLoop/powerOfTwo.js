const prompt = require('prompt-sync')();
let num = prompt('Enter First Number: ');
let powerOf2;
let i = 1;
while(i <= num){
    powerOf2 = Math.pow(2,i)
    i++;
}
console.log("Power of 2 till U/I number "+num + " is : "+ powerOf2);