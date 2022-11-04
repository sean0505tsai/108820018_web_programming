//write your script here
function changeWidth200px(){
    document.getElementById("score").style.width = "200px";
}

function changeWidth500px(){
    document.getElementById("score").style.width = "500px";
}

function changeBorderWidth1px(){
    // var width = document.getElementById("border1px").innerText;
    document.getElementById("score").style.borderSpacing = "1px";
    document.getElementById("score").style.border = "1px solid";
}

function changeBorderWidth10px(){
    // var width = document.getElementById("border10px").innerText;
    document.getElementById("score").style.borderSpacing = "10px";
    document.getElementById("score").style.border = "10px solid";
}

function changeBorderWidth20px(){
    // var width = document.getElementById("border20px").innerText;
    document.getElementById("score").style.borderSpacing = "20px";
    document.getElementById("score").style.border = "20px solid";
}

function changeTableBackgroundColor1(){
    // var color = document.getElementsByClassName("button color button1").style.backgroundColor;
    document.getElementById("score").style.backgroundColor = "#40e0d0";
}

function changeTableBackgroundColor2(){
   // var color = document.getElementsByClassName("button color button2").style.backgroundColor;
    document.getElementById("score").style.backgroundColor = "#00ffff";
}

function changeTableBackgroundColor3(){
    // var color = document.getElementsByClassName("button color button3").style.backgroundColor;
    document.getElementById("score").style.backgroundColor = "#9370d8";
}

function changeTableBackgroundColor4(){
    // var color = document.getElementsByClassName("button color button4").style.backgroundColor;
    document.getElementById("score").style.backgroundColor = "#ffffe0";
}

function resetStyle(){
    document.getElementById("score").style.width = "200px"
    document.getElementById("score").style.border = "1px solid"    
    document.getElementById("score").style.borderSpacing = "1px"
    document.getElementById("score").style.backgroundColor = "#ffe4b5"
}