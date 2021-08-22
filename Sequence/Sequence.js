//case 1 : to get sigle digit Number.
let randsigleDigit = Math.floor(Math.random()*10);
console.log(randsigleDigit);

// case 2 : Use random to get random number between 1 to 6.
let randDiceNum = Math.floor(Math.random()*10%6+1);
console.log(randDiceNum);

// case 3 :Add two Random Dice Number and Print the Result
let randDigit1 = Math.floor(Math.random()*99);
let randDigit2 = Math.floor(Math.random()*99);
let addition = randDigit1+randDigit2;
console.log("Addition of two random num :"+addition);

//case 4 : Find sum and average of 5 random 2 digit numbers
let sum=0;    
let count = 5;
for(let i = 1; i<= count;i++){
    let rand = Math.floor(Math.random()*89+11);
    sum+=rand;
}
console.log("Sum is :"+sum);
console.log("Avarage is: " +sum/5);

// Unit conversion
//a. 1ft = 12 in then 42 in = ? ft
let ft = 12;
res = 42 / ft;
console.log("Feet is:" + res);

//b. Rectangular Plot of 60 feet x 40 feet in meters
let feet = 60 * 40;
let meter = 0.3048;
 let res1 = (feet * 0.3048);
console.log("Meter is:" + res1);

//c. Calculate area of 25 such plots in acres
let acre = (25 * res1)/4046.8;
console.log("area of 25 such plots = "+acre+" acres");