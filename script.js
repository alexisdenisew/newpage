var img;
var smallPoint, largePoint;

function preload() {
    img = loadImage("pink.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    smallPoint = 6;
    largePoint = 2;
    imageMode(CENTER);
    noStroke();
    background(255);
    img.loadPixels();
}

function draw() {
    var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
    var x = floor(random(windowWidth));
    var y = floor(random(windowHeight));
    var pix = img.get(x, y);
    fill(pix, 7);
    ellipse(x, y, pointillize, pointillize);
}
