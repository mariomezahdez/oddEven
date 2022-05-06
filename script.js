var first = "#006494";
var second = "#7b2cbf";

function isPair(){
    var number = document.getElementById("num");
    var sign = document.getElementById("sign");
    var page = document.body;
    var bor = document.getElementById("main");
    var spa = document.getElementById("span");

    if(number.value == ""){
        spa.innerHTML = "Please a Number!!";
    }
    else if (number.value % 2 == 0){
        page.style.backgroundColor = first;
        sign.innerHTML = "Odd";
        bor.style.border = "2px #1f363d solid";
        spa.innerHTML = "Perfect, once more";
        
    }
    else{
        console.log("Unpair");
        page.style.backgroundColor = second;
        sign.innerHTML = "Even";
        bor.style.border = "2px #3c096c solid";
        spa.innerHTML = "Excelent, try again";
    }
}           