const COLS = 10;
const ROWS = 20;

var gameArea= {
    canvas:document.getElementById('game'),
    start:function(){
        this.canvas.width = 300;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.score);
        this.interval = setInterval(updateGameArea, 50);

        window.addEventListener('keydown' , function(e){

        })
        window.addEventListener('keyup')
    },

}

const blockSquare = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 0]
]

const blockI = [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0]
]

const blockT = [
    [1, 1, 1],
    [0, 1, 0], 
    [0, 0, 0]
]

const blockS = [
    [0, 1, 0],
    [1, 1, 0],
    []
]

function onLoad(){
    gameArea.start();
}

function play(){

}

function moveLeft(){

}

function moveRight(){

}

function moveDown(){

}

function rotate(){      // rotate clockwise

}

function reset(){
    console.log("reset");
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
  
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }