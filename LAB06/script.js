var redBlock, blueBlock, yellowBlock;

var myGameArea = {
    canvas:document.createElement("canvas"),
    start:function(){
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 50);
    },
    clear:function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function onStart(){
    redBlock = new block(75, 75, "red", 10, 10, 3, 0);
    blueBlock = new block(75, 75, "blue", 10, 70, 3, -3);
    yellowBlock = new block(75, 75, "yellow", 50, 50, 3, 3);
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

}

function blueBlockOnMove(){
    if(blueBlock.x + 75 > 480 || blueBlock.x < 0)
        blueBlock.moveX *= -1;

    if(blueBlock.y + 75 > 270 || blueBlock.y < 0)
        blueBlock.moveY *= -1;

    blueBlock.x += blueBlock.moveX;
    blueBlock.y += blueBlock.moveY;
    console.log("blueX:", blueBlock.moveX);
    console.log("blueY:", blueBlock.moveY); 
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
    console.log("yellowX:", yellowBlock.moveX);
    console.log("yellowY:", yellowBlock.moveY);  
}

function updateGameArea(){
    myGameArea.clear();
    blueBlockOnMove();
    redBlockOnMove();
    yellowBlockOnMove();
    redBlock.update();
    blueBlock.update();
    yellowBlock.update();
}