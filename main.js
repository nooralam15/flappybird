//Flappy Bird CS20 portfolio project by Noor Alam
//this is the main that will set up global variables, deal with setting up the canvas, the images, & players

//set up and initialize a canvas
let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d")
cnv.width = 500
cnv.height = 650

//global variables 
let square = {
    x: 20,
    y: 0,
    w: 32,
    h: 32,
    xV: 0,
    yV: 0
}
let gamestate = 0
let pipes =[]


//sets up and draws rhe 