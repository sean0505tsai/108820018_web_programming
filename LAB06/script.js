var redBlock, blueBlock, yellowBlock;

var myGameArea = {
    canvas:document.createElement("canvas"),
    start:function(){
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 50);
        window.addEventListener('mousedown', function(e){
            myGameArea.x = e.pageX;
            myGameArea.y = e.pageY;
            console.log("mousedown", myGameArea.x, myGameArea.y);
        })
        window.addEventListener('mouseup', function(e){
            myGameArea.x = false;
            myGameArea.y = false;
        })
        window.addEventListener('touchstart', function(e){
            myGameArea.x = e.pageX;
            myGameArea.y = e.pageY;
        })
        window.addEventListener('touchend', function(e){
            myGameArea.x = false;
            myGameArea.y = false;
        })
    },
    clear:function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function onStart(){
    redBlock = new block(75, 75, "red", 10, 10, 3, 0);
    blueBlock = new block(75, 75, "blue", 10, 180, 3, -3);
    yellowBlock = new block(75, 75, "yellow", 50, 20, 3, 3);
    myGameArea.start();
}

function block(width, height, color, x, y, moveX, moveY){
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.moveX = moveX;
    this.moveY = moveY;
    this.right = this.x + this.width;
    this.bottom = this.y + this.height;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.clicked = function(){
        var left = this.x;
        var right = this.x + this.width;
        var top = this.y;
        var bottom = this.y + this.height;
        var click = false;
        if((bottom > myGameArea.y) && (top < myGameArea.y) && 
            (left < myGameArea.x) && (right > myGameArea.x)){
                click = true;
                console.log(this.color, "true");
        }
        return click;
    }

}

function blueBlockOnMove(){
    if(blueBlock.x + 75 > 480 || blueBlock.x < 0)
        blueBlock.moveX *= -1;

    if(blueBlock.y + 75 > 270 || blueBlock.y < 0)
        blueBlock.moveY *= -1;

    blueBlock.x += blueBlock.moveX;
    blueBlock.y += blueBlock.moveY;
    // console.log("blueX:", blueBlock.moveX);
    // console.log("blueY:", blueBlock.moveY); 
}

function redBlockOnMove(){
    if(redBlock.x + 75 > 480 || redBlock.x < 0)
        redBlock.moveX *= -1;
    redBlock.x += redBlock.moveX;
    
}

function yellowBlockOnMove(){
    if(yellowBlock.x + 75 > 480 || yellowBlock.x < 0)
        yellowBlock.moveX *= -1;

    if(yellowBlock.y + 75 > 270 || yellowBlock.y < 0)
        yellowBlock.moveY *= -1;

    yellowBlock.x += yellowBlock.moveX;
    yellowBlock.y += yellowBlock.moveY;
    // console.log("yellowX:", yellowBlock.moveX);
    // console.log("yellowY:", yellowBlock.moveY);  
}

function updateGameArea(){
    myGameArea.clear();
    blueBlockOnMove();
    redBlockOnMove();
    yellowBlockOnMove();
    if(myGameArea.x && myGameArea.y){
        if (redBlock.clicked()){
            start();
        }
        if (blueBlock.clicked()){
            blueBlock.moveX = 3;
            blueBlock.moveY = -3;
        }
        if (yellowBlock.clicked()){
            yellowBlock.moveX = 3;
            yellowBlock.moveY = 3;
        }
    }

    redBlock.update();
    blueBlock.update();
    yellowBlock.update();
}

function start(){
    blueBlock.moveX = 3;
    blueBlock.moveY = -3;
    redBlock.moveX = 3;
    yellowBlock.moveX = 3;
    yellowBlock.moveY = 3;
}

function stop(){
    blueBlock.moveX = 0;
    blueBlock.moveY = 0;
    redBlock.moveX = 0;
    redBlock.moveY = 0;
    yellowBlock.moveX = 0;
    yellowBlock.moveY = 0;
}

function reset(){
    blueBlock.x = 10;
    blueBlock.y = 180;
    redBlock.x = 10;
    redBlock.y = 10;
    yellowBlock.x = 50;
    yellowBlock.y = 20;
    start();
}