var screen = document.getElementById("screen")
function btnClick(value){
    screen.value += value;
}

function clearScreen(){
    screen.value = "";
}

function equal(){
    var equal= eval(screen.value)
    screen.value = equal;
}

