
{
    let number = process.argv[2];
    function writeInword (){
        if(number==1){
        console.log("one");
        }
        else if (number==2) {
        console.log("Two");
        }
        else if (number==3){
        console.log("Three");
        }
        else if(number==4){
        console.log("four");
        }
        else if(number==5){
        console.log("five");
        }
        else{
        console.log("Enter Number Between 1 to 5")
        }
    }
}
   writeInword();