//this file will deal with code related to the floor logic


//this file will cause the pipes to move (is the main pipe function)
function floorMover() {
    for (let i = 0; i < floors.length; i++) {
        floors[i].x -=5        
    }
}

//this function will create a random floor object and return it
function randomFloor() {
    //this variable will look at the x position of the last floor object and will determine the new x position 
    let newX = floors[floors.length -1].x + 490
    return {
        x: newX,
        y: 540,
        w: 500,
        h: 150
    }
}

//timer - will add a new pipe object
setInterval(addFloor, 100) 

function addFloor() {
    floors.push(randomFloor())
}
