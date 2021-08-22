
/************************************************************
 * Selection practice problems
 * @author Ganesh Gavhad
 * @Since 20-08-2021
 ************************************************************/

//Case 1 Min and Max among 5 three digit random numbers
var randomNumbers = new Array(5);
for(let i=0;i<randomNumbers.length;i++){
    randomNumbers[i]=Math.floor(Math.random()*(999-100+1)+100);
}
randomNumbers.forEach(element => console.log(element))
var max=randomNumbers[0]; var min = randomNumbers[0];
randomNumbers.forEach(element => {max = Math.max(max,element); min=Math.min(min,element)})
console.log("Maximum number is : "+max);
console.log("Minumum element is : "+min);

//Case 2 Prints true if day of month between March 20 and June 20 otherwise false
let date = process.argv[2];
let month = process.argv[3];
function checkDate(date, month) {
    if (month < 3 || month > 6) {
        return false;
    } else if (month == 3 && date < 20) {
        return false;
    } else if (month == 6 && date > 20) {
        return false;
    } else {
        return true;
    }
}
let check = checkDate(date,month)
console.log(check);

//Case 4 : Simulate Flip coin
let checkHeadsOrTails = Math.random();
if(checkHeadsOrTails < 0.5)
    console.log("HEADS")
else
    console.log("TAILS")

{
 //selection case 3 : Check if leap year or not
    let year = process.argv[2]
    function checkIfLeapYear() {
        if ((year % 4==0) && (year % 100 !=0) || (year % 400==0)) {
            console.log("Leap year");
        } else {
            console.log("Not leap year");
        }
    }
    checkIfLeapYear();
}

