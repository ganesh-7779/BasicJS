const prompt = require('prompt-sync')();
let num = prompt('Enter First Number: ');
let sum =0;
if(num>0){
    for(let i=1;i<=num;i++){
        sum=sum+(1+"/"+i+"+"+",");
    }
    console.log(sum)
}
else{
    console.log("Invalid input Please enter grether than Zero");
}    
