//Flappy Bird CS20 portfolio project by Noor Alam

//set up and initialize a canvas
let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d")
cnv.width = 500
cnv.height = 650

//global variables 
let pipeDown = document.getElementById("pipeDown")
let pipeUp = document.getElementById("pipeUp")
let backgroundImg = document.getElementById("background")
let floorImg = document.getElementById("floor")
let keyPressed = false
let score = 0
let gameState = true

//creates a player object 
let square = {
    x: 20,
    y: 0,
    w: 32,
    h: 32,
    yV: 0,
    mode: "fill"
}

//creates an associative array of pipe objects
let pipes = [{
    x: 546,
    y: 0,
    w: 100,
    h: 300,
    x2: 546,
    y2: 450, 
    w2: 100,
    h2: 300
}]

let floors = [ {
    x: 0,
    y: 540,
    w: 500,
    h: 150
}]




requestAnimationFrame(loop) 

function loop() {
    pipeMover()
    squareMaster()
    floorMover()
    gameStateController()
    


    requestAnimationFrame(loop)
}

//will control the gameState logic
function gameStateController() {
    if (gameState == true) {
        drawTrue()
    }
    else drawFalse()
}

//this will draw the images and shapes when the gamestate is true
function drawTrue() {

    image(backgroundImg, 0, 0, cnv.width, 550)

    //it will loop through the pipes array and will determine the appropriate image to add to the point
    for (let i = 0; i < pipes.length; i++) {
        image(pipeDown, pipes[i].x, pipes[i].y, pipes[i].w, pipes[i].h)
        image(pipeUp, pipes[i].x2, pipes[i].y2, pipes[i].w2, pipes[i].h2)
    }

    //it will loop through the floor array and will determine the appropriate image to add to the point
    for (let i = 0; i < floors.length; i++) {
        image(floorImg, floors[i].x, floors[i].y, floors[i].w, floors[i].h)
    }

    //draw the square player onto the canvas
    fill("red")
    rect(square.x, square.y, square.w, square.h, square.mode)

    //draws the score onto the page 
    fill("beige")
    font("50px 'Anton', sans-serif")
    text(score, cnv.width/2, 100, "fill")
}

//this function will draw the shapes and Images when the game is false 
function drawFalse() {
    //draws the endGame text  onto the page 
    text("GAME OVER", cnv.width/0.23, 100)
    font("50px 'Anton', sans-serif")
    text("Your Score", cnv.width/0.23, 200)
    font("50px 'Anton', sans-serif")
    text(score, cnv.width/2.2, 275)
    font("30px 'Anton', sans-serif")
    text("Press Enter to Restart", cnv.width/0.30, 400)
    fill("beige")

}




//event listeners
document.addEventListener("keydown", keyDownHandler)
document.addEventListener("keyup", keyUpHandler)

function keyDownHandler(event) {
    if (!event.repeat) {
        if(event.code =="Space" || event.code =="ArrowUp") {
            square.yV -= 125;
        }
    }
}

function keyUpHandler(event) {
    if(event.code =="Space" || event.code == "ArrowUp") {
        keyPressed = false
    }
}



console.log(pipes)