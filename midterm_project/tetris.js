const COLS = 10;
const ROWS = 20;
let score = 0;
let tetrisArray = []
let ctx = document.getElementById('game').getContext('2d');
const PLAY = 1;
const PAUSE = 0;

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

    gameStatus : PAUSE,
    canvas: document.getElementById('game'),
    scoreBoard : document.getElementById('score'),

    start: function () {
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(updateGameArea, 50);
        initializeArray();

        window.addEventListener('keydown', function (e) {
            console.log(e.code);
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
            if(e.code === "Space"){

            }
        })
    },

    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    playGame: function(){
        this.gameStatus = PLAY;
    },

    pauseGame: function(){
        this.gameStatus = PAUSE;
    },
}

let tetromino = {
    matrixNum : 0,
    currentRow : 0,        // upper left index
    currentCol : 0,
    matrix,

    moveLeft: function(){
        if(isValidMove(tetrominos[this.matrixNum]), this.row, this.col - 1){
            this.col -= 1;
        }
    },

    moveRight: function(){
        if(isValidMove(tetrominos[this.matrixNum], this.row, this.col + 1)){
            this.col += 1;
        }
    },

    moveDown: function(){
        if(isValidMove(tetrominos[this.matrixNum], row, col)){
            this.row += 1;
        }
    },

    onMove: function(){
        this.row += 1;
    },

    rotateMatrix: function(){
        this.matrix = rotateMatrix(this.matrix);
    },

    getNextTetromino: function(){
        this.matrixNum = getRandomInt();
    }
    
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
    gameArea.playGame();
    console.log("play");
}

function moveLeft() {
    tetromino.moveLeft();
    console.log("arrow left");
}

function moveRight() {
    tetromino.moveRight();
    console.log("arrow Right");
}

function moveDown() {
    tetromino.moveDown();
    console.log("move down");
}

function rotate(){
    tetromino.rotateMatrix();
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

function isValidMove(matrix, startRow, startCol) {
    rows = matrix.length;
    cols = matrix[0].length;

    if((startRow + rows - 1) > B.length || startRow < 0) return false;      // check if out of right edge
    
    for (let row = 0; row < rows; row++) {                                  // check if collision
        for (let col = 0; col < cols; col++) {
            if (matrix[row][col] && tetrisArray[startRow + row][startCol + col]) return false;
        }
    }
    return true;
}

function drawBlock(matrix, startRow, startCol){
    row = matrix.length;
    col = matrix[0].length;
    endRow = startRow + row;
    endCol = startCol + col;

    for(let i = startRow; i < endRow; i++){
        for(let j = startCol; j < endCol; j++){
            if(matrix[i - startRow][j - startCol] !== 0){
                ctx.fillStyle = colors[matrix[i - startRow][j - startCol]];
                ctx.fillRect(32*j + 1 , 32*i + 1, 30, 30);
            }
        }
    }
}

function drawGameArea(){
    for(let row = 0; row < ROWS; row++){
        for(let col = 0; col < COLS; col++){
            if(tetrisArray[row][col] !== 0){
                ctx.fillStyle = colors[tetrisArray[row][col]];
                ctx.fillRect(32*col + 1 , 32*row + 1, 30, 30);
            }
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

function moveToBottomAndPut(){
    for(let i = )
}

function writeTetromino(matrix, startRow, startCol){
    row = matrix.length;
    col = matrix[0].length;

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            tetrisArray[i + startRow][j + startCol] = matrix[i][j];
        }
    }
}

function showGameOver(){
    gameArea.pauseGame();
    ctx = document.getElementById('game').getContext('2d');
    ctx.font = "40px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Game Over", 50, 300);
}

function showScore(){
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Score: "+score, 5, 20);
}

function updateGameArea() {         // main game loop
    gameArea.clear();
    drawGameArea(ctx);

    drawBlock(tetrominos[1], 3, 5);
    showScore(ctx);
}