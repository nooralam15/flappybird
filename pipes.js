//this file will deal with code related to the pipe logic

//this file will cause the pipes to move (is the main pipe function)
function pipeMover() {
    for (let i = 0; i < pipes.length; i++) {
        pipes[i].x -= 10
        pipes[i].x2 -= 10
        pipeTester(i)
    }
}

//this function will tets whether or not the pipes are going off the screen
function pipeTester(index) {
    if(pipes[index].x + 100 < 0 && pipes[index].x + 100 > -5) {
        score++
    }
}



//this function will create 2 pipes (top and bottom), and return them as an object
function randomPipes() {
    //creates a random height for the bottom pipe
    let randHeight = Math.random()*200 + 255
    //this variable will look at the x position of the last pipe object and will determine the new x position 
    let newX = pipes[pipes.length -1].x + 1250
    return {
        x: newX,
        y: 0,
        w: 100,
        h: randHeight - 155,
        x2: newX,
        y2: randHeight,
        w2: 100,
        h2: 300
    }
}


//timer - will add a new pipe object
setInterval(addPipes, 800) 

function addPipes() {
    pipes.push(randomPipes())
}
