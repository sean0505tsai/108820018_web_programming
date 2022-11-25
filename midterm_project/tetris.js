const COLS = 10;
const ROWS = 20;
let score = 0;
let tetrisArray = []

const tetrominos = {
    1: [            // I
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],

    2: [            // J
        [2, 0, 0],
        [2, 2, 2],
        [0, 0, 0],
    ],

    3: [            // L
        [0, 0, 3],
        [3, 3, 3],
        [0, 0, 0],
    ],

    4: [            // O
        [4, 4],
        [4, 4],
    ],

    5: [            // S
        [0, 5, 5],
        [5, 5, 0],
        [0, 0, 0],
    ],

    6: [            // Z
        [6, 6, 0],
        [0, 6, 6],
        [0, 0, 0],
    ],

    7: [            // T
        [0, 7, 0],
        [7, 7, 7],
        [0, 0, 0],
    ],

    8: [          // C
        [8, 8, 8],
        [8, 0, 0],
        [8, 8, 8]
    ],

    9: [         // S1
        [9, 9, 9, 9, 9],
        [9, 0, 0, 0, 0],
        [9, 9, 9, 9, 9],
        [0, 0, 0, 0, 9],
        [9, 9, 9, 9, 9]
    ],

    10: [          // E
        [10, 10, 10, 10, 10],
        [10, 0,  0,  0,  0 ],
        [10, 10, 10, 10, 10],
        [10, 0,  0,  0,  0 ],
        [10, 10, 10, 10, 10]
    ]

};

// color of each tetromino
const colors = {
    1: "#F94144",
    2: '#F3722C',
    3: '#F8961E',
    4: '#F9844A',
    5: '#F9C74F',
    6: '#90BE6D',
    7: '#43AA8B',
    8: "#4D908E",
    9: '#577590',
    10: '#277DA1'
};

let gameArea = {
    canvas: document.getElementById('game'),
    scoreBoard : document.getElementById('score'),
    start: function () {
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(updateGameArea, 1000);
        // this.scoreBoard = document.write(toString(score));
        this.context.fillStyle = "#FF359A";
        this.context.fillRect(0, 0, 30, 30);
        initializeArray();

        // console.log(tetrisArray);  // return the 2D array
        // console.log(tetrisArray.length);

        window.addEventListener('keydown', function (e) {
            if(e.code === "ArrowLeft"){
                moveLeft();
            }
            if(e.code === "ArrowRight"){
                moveRight();
            }
            if(e.code === "ArrowDown"){
                moveDown();
            }
            if(e.code === "ArrowUp"){
                rotate();
            }
        })

        window.addEventListener('keyup', function (e) {

        })
    },

    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

}

let tetromino = {
    isAlive: false,
    matrix,
    color,
}

function initializeArray(){
    for (var i = 0; i < 20; i++) {  // row loop
        var row = [];
        for (var j = 0; j < 10; j++) {  // col loop
            row[j] = 0;  // 
        }
        tetrisArray[i] = row;  // asign row array to 2D array
    }
}

function onLoad() {
    gameArea.start();
}

function play() {
    console.log("play");
}

function moveLeft() {
    console.log("arrow left");
}

function moveRight() {
    console.log("arrow Right");
}

function moveDown() {
    console.log("move down");
}

function rotate(){
    // tetromino.
}

function rotateMatrix(matrix) {      // rotate clockwise
    console.log("rotate");
    return rowReverse(transpose(matrix));    
}

function transpose(matrix){
    let row = matrix.length;
    let col = matrix[0].length;
    let temp = 0;
    for(let i = 0; i < row; i++){       // transpose
        for(let j = i; j < col; j++){
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    return matrix;
}

function rowReverse(matrix){
    row = matrix.length;
    col = matrix[0].length;
    for (let i = 0; i < row; i++) {
        matrix[i].reverse();
    }
    return matrix;
}

function reset() {
    console.log("reset");
    gameArea.clear();
    initializeArray();
    score = 0;
}

function getRandomInt() {
    min = Math.ceil(1);
    max = Math.floor(10);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNextTetromino(){
    num = getRandomInt();
    let matrix = tetrominos[num];
    let color = colors[num];

    return{
        matrix: matrix,
        color: color
    }
}

function drawBlock(matrix, color, startRow, startCol, ctx){
    row = matrix.length;
    col = matrix[0].length;
    endRow = startRow + col;
    endCol = startCol + row;
    for(let i = startRow; i < endRow; i++){
        for(let j = startCol; j < endCol; j++){
            ctx.fillStyle = colors[color];
            ctx.fillRect(32*col + 1 , 32*row + 1, 30, 30);
        }
    }
}

function updateScore(){
    let val = 0;
    for(let row = 0; row < 20; row++){
        for(let col = 0; col < 10; col++){
            if(tetrisArray[row][col] === 0){
                break;
            }
        }
    }
}

function showGameOver(){
    ctx = document.getElementById('game').getContext('2d');
    ctx.font = "40px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Game Over", 50, 300);
}

function showScore(ctx){
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Score: "+score, 5, 20);
}

function updateGameArea() {         // main game loop
    gameArea.clear();
    let ctx = document.getElementById('game').getContext('2d');
    // for(let row = 0; row < 20; row++){
    //     for(let col = 0; col < 10; col++){
    //         ctx.fillStyle = colors[getRandomInt()];
    //         ctx.fillRect(32*col + 1 , 32*row + 1, 30, 30);
    //     }
    // }
    drawBlock(tetrominos[6], colors[6], 5, 7, ctx);
    showScore(ctx);
}