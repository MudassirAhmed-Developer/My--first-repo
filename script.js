let userinput = +prompt();
if(userinput >= 80){

    if(userinput > 100){
        console.log("invalid number please enter a number to range 100 to 0");
    }
    else{console.log("A1 grade")}
}
else if (userinput >= 70 && userunput <= 79){
    console.log("A grade")
}
else if (userinput >= 60 && userinput <= 69){
    console.log("B grade")
    }
    else if (userinput >= 50 && userinput <= 59){
        console.log(" you are fail")
    }
    