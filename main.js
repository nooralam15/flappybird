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
    squareMaster()
    floorMover()
    gameStateController()
    
    requestAnimationFrame(loop)
}

//will control the gameState logic
function gameStateController() {
    if (gameState) {
        drawTrue()
        pipeMover() 
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
    font("50px 'Anton', sans-serif")
    fill("beige")
    shadowThickness(10)
    shadowShade("black")
    text("GAME OVER", 32/0.23, 100, "fill")
    font("50px 'Anton', sans-serif")
    fill("beige")
    text("Your Score", 32/0.23, 200, "fill")
    font("50px 'Anton', sans-serif")
    fill("beige")
    text(score, cnv.width/2.2, 275, "fill")
    font("30px 'Anton', sans-serif")
    fill("beige")
    text("Press Enter to Restart", 32/0.30, 400, "fill")

}


//event listeners
document.addEventListener("keydown", keyDownHandler)
document.addEventListener("keyup", keyUpHandler)


function keyDownHandler(event) {
    if(gameState) {
        if(!event.repeat) {
            if(event.code == "Space" || event.code == "ArrowUp") {
                square.yV -= 14
            }
        }
    }
    else {
        if(event.code == "Enter") {
            gameState = true
        }
    }
}

function keyUpHandler(event) {
    if(gameState) {
        if(!event.repeat) {
            if(event.code == "Space" || event.code == "ArrowUp") {
                keyPressed = false
            }
        }
    }
    else {
        if(event.code == "Enter") {
            location.reload()
        }
    }
}

