var x;
var y;

var vel;

var xspeed;
var yspeed;

var dvd;

var r,g,b;

function preload(){
    dvd = loadImage("dvd-logo.png");
}

function setup() {
    createCanvas(800, 600);
    x = random(width);
    y = random(height);
    
    vel = 3;
    
    xspeed = vel;
    yspeed = vel;
    
}

function pickColor(){
    r = random(100, 256);
    g = random(100, 256);
    b = random(100, 256);
}

function draw() {
    background(0);
    
    // Draw the DVD logo
    tint(r,g,b)
    image(dvd, x, y);
    
    x += xspeed;
    y += yspeed;
    
    if(x + dvd.width >= width){
        xspeed = -xspeed;
        x = width - dvd.width;
        pickColor();
    }else if(x <= 0){
        xspeed = -xspeed;
        x = 0;
        pickColor();
    }
    
    if(y + dvd.height >= height){
        yspeed = -yspeed;
        y = height - dvd.height;
        pickColor();
    }else if(y <= 0){
        yspeed = -yspeed;
        y = 0;
        pickColor();
    }
}