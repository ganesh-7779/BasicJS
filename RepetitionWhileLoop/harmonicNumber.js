const prompt = require('prompt-sync')();
let num = prompt('Enter First Number: ');
let sum =0;
let i =1;
if(num>0){
    while(i <= num){
        sum=sum+(1+"/"+i+"+"+",");
        i++;
    }
    console.log(sum)
}
else{
    console.log("Invalid input Please enter grether than Zero");
}    
