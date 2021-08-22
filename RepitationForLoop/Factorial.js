const prompt = require('prompt-sync')();
let number = prompt('Enter a number to find factorial: ');
let fact=1;
let i =1;
for(let i =1; i<=number;i++){
    fact=+fact*i;
}
console.log("Factorial of " +number+ " is "+ fact);