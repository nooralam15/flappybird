//this file will deal with all the logic and code pertraining to the square

//this is simply a master function that stores the other functions
function squareMaster() {
    gravity()
    floorCollisionDetection()
    pipeCollisionDetection()
}

//this function will create the gravity for the square
function gravity() {
    square.yV += 8.1
    square.y = square.yV
    square.yV *= 0.97
}

//this function will deal if the square is falling through the floor
function floorCollisionDetection() {
    //collision if falling through floor
    if (square.y > 510) {
        square.y = 510
        yV = 0
        gameState = false
    }
}

//this function will deal with the pipe collision logic
function pipeCollisionDetection() {
    for (let i = 0; i < pipes.length; i++) {
        if (pipes[i].x2 + 10 < 52 && pipes[i].x2 + 110 > 20 && square.y < pipes[i].h2 || pipes[i].x + 10   < 52 && pipes[i].x + 110 > 20 && square.y + 32 > pipes[i].h ) {
            gameState = false
        }
    }
    
}
    


