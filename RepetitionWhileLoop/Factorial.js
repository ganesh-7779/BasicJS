const prompt = require('prompt-sync')();
let number = prompt('Enter a number to find factorial: ');
let fact=1;
let i =1;

while( i <= number ) {  
    fact = fact * i;   
    i++;   
    }    
console.log("Factorial of " +number+ " is "+ fact);