// case 1 read single digit number and write in word.
let ranNum = (Math.floor(Math.random()*10)%10);
switch(ranNum){
    case 1:
        console.log("one");
        break;
    case 2:
         console.log("Two");
        break;    
     case 3:
       console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;    
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    case 0 :
        console.log("Zero");    
    }
    
// case 2
let ranNum2 = (Math.floor(Math.random()*10)%7);

switch(ranNum2) {
    case 1:
        console.log("Manday");
        text = "Manday";
    case 2:
        text = "Tuesday";
        break;    
     case 3:
       text = "Wensday";
         break;
    case 4:
        text = "Thusday";
        break;
    case 5:
        text ="Friday";
        break;    
    case 6:
        text = "Saturday";
        break;
    case 0:
       text ="Sunday";
        break;
    default :
        text = "Whatever";     
    }