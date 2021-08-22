let number = process.argv[2];
    function writeInWord (){
        if(number==1){
        console.log("unit");
        }
        else if (number==10) {
        console.log("ten");
        }
        else if (number==100){
        console.log("Hundred");
        }
        else{
        console.log("Enter Number 1,10,100");
        }
    }
    writeInWord();