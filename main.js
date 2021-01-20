//Flappy Bird CS20 portfolio project by Noor Alam

//set up and initialize a canvas
let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d")
cnv.width = 500
cnv.height = 650

//global variables 
let 
let backgroundImg = document.getElementById("background")
let floorImg = document.getElementById("floor")
let square = {
    x: 20,
    y: 0,
    w: 32,
    h: 32,
    xV: 0,
    yV: 0
}
let gamestate = true
let pipes = [{
    x: 0,
    y: 0,
    w: 0,
    h: 0

}]

function gameControl(currentState) {


}

requestAnimationFrame(loop) 

function loop() {
    image(backgroundImg, 0, 0, cnv.width, 550)
    image(floorImg, 0, 540, cnv.width, 150)
    image(floorImg, 490, 540, cnv.width, 150)

    requestAnimationFrame(loop)
}




