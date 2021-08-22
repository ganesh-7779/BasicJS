
let r1 = require('readline');
let prompts = r1.createInterface(process.stdin, process.stdout);
prompts.question("Enter value in unit format 1, 10, 100, 1000 etc: " , function(value){
    let text = "";
    switch(value){
        case 1:
            text = "unit";
            break;
        case 1:
            text = "Ten";
            break;
        case 1:
            text = "Hundred";
            break;        
        case 1:
            text = "Thousand";
            break;
    }
    console.log("The number " + value + "is:" +text + "in words");
    process.exit();
});