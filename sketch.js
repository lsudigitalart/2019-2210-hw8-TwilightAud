var l1, l2, l3, l4;
var e1, e2, e3, e4;
var show = 0;
var legChoice, eyeChoice;


function preload() {

    l1 = loadImage("legs/1l.jpg");
    l2 = loadImage("legs/2l.jpg");
    l3 = loadImage("legs/3l.jpg");
    l4 = loadImage("legs/4l.jpg");

    e1 = loadImage("eyes/e1.jpg");
    e2 = loadImage("eyes/e2.jpg");
    e3 = loadImage("eyes/e3.jpg");
    e4 = loadImage("eyes/e4.jpg");
}


function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(100);
    if (show == 1){
    creature(100, 50, legChoice, eyeChoice);
    }
}



function mouseReleased(){
    legChoice = int(random(4));
    eyeChoice = int(random(4));

    show = 1;
}

function creature(size, head, leg, eye) {
    print(leg);
    noStroke();
    circle (width / 2, height / 2, size);
    circle(width / 2, (height / 2) - 50, head);
    if(leg == 0){
        image(l1, (width / 2) - 60, (height / 2) + 20);
        }
    if(leg == 1){
        image(l2, (width / 2) - 60, (height / 2) + 20);
        }
    if(leg == 2){
        image(l3, (width / 2) - 60, (height / 2) + 20);
        }
    if(leg == 3){
        image(l4, (width / 2) - 60, (height / 2) + 20);
        }
    
    if(eye == 0){
        image(e1, (width / 2) - 60, (height / 2) + 20);
        }
    if(eye == 1){
        image(e2, (width / 2) - 60, (height / 2) + 20);
        }
    if(eye == 2){
        image(e3, (width / 2) - 60, (height / 2) + 20);
        }
    if(eye == 3){
        image(e4, (width / 2) - 60, (height / 2) + 20);
        }
}