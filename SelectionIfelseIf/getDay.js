    let number = process.argv[2];
    function getDay(){
        if(number==0){
        console.log("Sunday");
        }
        else if(number==1){
        console.log("Monday");
        }
        else if(number==2){
        console.log("Tuesday");
        }
        else if(number==3){
        console.log("Wensday");
        }
        else if(number==4){
        console.log("Thusday");
        }
        else if(number==5){
        console.log("Friday");
        }
        else if(number==6){
        console.log("Saturday");
        }
        else{
        console.log("enter number between 0 to 6 to get day")
        }
    }
getDay();

