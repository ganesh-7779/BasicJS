const prompt = require('prompt-sync')();
let number = prompt('Enter a number to check prime or not: ');
let temp=0;
		for (let i=2; i<=number-1;i++) {
			
		 if (number%i==0)
	 {
	temp=temp+1;
	}
		}
	 if(temp>0) {
		 console.log("It Is Not Prime Number");
	 }
	 else {
		 console.log("It Is Prime Number");
	   }