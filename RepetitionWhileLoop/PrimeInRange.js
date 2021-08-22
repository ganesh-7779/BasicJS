let i =0;
let num =0;
var  primeNumbers = "";
       while( i <=100) { 		  	  
        let counter=0; 	  
        for(num =i; num>=1; num--){
            if(i%num==0)
            {
             counter = counter + 1;
            }
            }
             if (counter ==2)
             {
            primeNumbers = primeNumbers + i + " ";
            }
            i++;	
        }	
console.log("Prime numbers from 1 to 100 are :");
console.log(primeNumbers);
