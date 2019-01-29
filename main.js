var TF1, TF2, random1, random2;
var r, g, b, yel;
var score = 0;
var x = 500;
var y = 500;
var s = 5;
var z = 50;
var pos = 50;
var t = 0;
var ts = .05;
var op = 255;
var op1 = 0;

function setup() {
    createCanvas(800, 600);
    noStroke();
    TF1 = random(1, 3);
    TF2 = random(1, 3);
    random1 = random(0, 700);
    random2 = random(0, 400);
    r = color(255, 0, 0);
    g = color(0, 255, 0);
    b = color(0, 0, 255);
    yel = color(255, 255, 0);
}

function drawCharacter() {
    noStroke();
    push();
    translate(x, y);
    rotate(t);
    fill(0);
    rectMode(CENTER);
    rect(0, 0, 100, 100);
    fill(yel);
    rect(pos, pos, z, z);
    fill(r);
    rect(pos, -pos, z, z);
    fill(g);
    rect(-pos, pos, z, z);
    fill(b);
    rect(-pos, -pos, z, z);
    pop();
    fill(255);
    ellipse(x, y, z, z);
    fill(0);
    ellipse(x - 10, y - 10, z / 5, z / 5);
    ellipse(x + 10, y - 10, z / 5, z / 5);
    ellipse(x, y + 10, z / 3, z / 4);
    
    if (keyIsPressed) {
        if (key == 'd') {
            x += s;
            t += ts;
        }
    }

    if (keyIsPressed) {
        if (key == 'a') {
            x -= s;
            t += ts;
        }
    }

    if (keyIsPressed) {
        if (key == 'w') {
            y -= s;
            t += ts;
        }
    }

    if (keyIsPressed) {
        if (key == 's') {
            y += s;
            t += ts;
        }
    }

    if (keyIsPressed) {
        if (key == 'p') {
            x += 0;
            y += 0;
            t += ts;
        }
    }

    constrain(x, 0, screen.width);
}



function drawSquares() {
    if ((TF1 > 2) && (TF2 < 2)) {
        fill(r);
    } else if ((TF1 < 2) && (TF2 > 2)) {
        fill(g);
    } else if ((TF1 < 2) && (TF2 < 2)) {
        fill(b);
    } else {
        fill(yel);
    }
    rect(random1, random2, 20, 20);
}

function drawInstructions() {
    fill(255, op);
    textSize(32);
    text("Tap to start. Use W,A,S,D to move and P to roatate in place", 10, 50);
    fill(255);
    text("Score: " + score, 875, 50);
    op--;
    fill(g, op1);
    text("+1", 958, 80);
    op1 -= 3;
}

function collisions() {
    if (((random1 - 10 < x + 50) && (random1 + 10 > x - 50)) && ((random2 - 10 < y + 50) && (random2 + 10 > y - 50))) {
        random1 = random(0, 700);
        random2 = random(0, 400);
        TF1 = random(1, 3);
        TF2 = random(1, 3);
        score += 1;
        op1 = 255;
    }
}

function draw() {
	background(255);
    drawCharacter();
    drawSquares();
    drawInstructions();
    collisions();
}
