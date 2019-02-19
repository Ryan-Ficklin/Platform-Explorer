var TF1, TF2, random1, random2;
var upMovement, downMovement, leftMovement, rightMovement = false;
var r, g, b, yel;
var score = 0;
var characterX = 500;
var characterY = 500;
var characterSize = 5;
var z = 50;
var pos = 50;
var rotation = 0;
var rotationSpeed = .05;
var op = 255;
var op1 = 0;

function setup() {
    createCanvas(1000, 1000);
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
    translate(characterX, characterY);
    rotate(rotation);
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
    ellipse(characterX, characterY, z, z);
    fill(0);
    ellipse(characterX - 10, characterY - 10, z / 5, z / 5);
    ellipse(characterX + 10, characterY - 10, z / 5, z / 5);
    ellipse(characterX, characterY + 10, z / 3, z / 4);
	
    }

function characterMove(){
 if (rightMovement === true) {
            characterX += s;
            rotation += ts;
    }

    if (leftMovement === true) {
            characterX -= s;
            rotation += ts;
        }
    

    if (upMovement === true) {
            characterX -= s;
            rotation += ts;
        }
    

    if (downMovement === true) {
            characterX += s;
            rotation += ts;
        }
	
    if (keyIsPressed) {
        if (key == 'd') {
            rightMovement = true;
        }
    }

    if (keyIsPressed) {
        if (key == 'a') {
            leftMovement = true;
        }
    }

    if (keyIsPressed) {
        if (key == 'w') {
            upMovement = true;
        }
    }

    if (keyIsPressed) {
        if (key == 's') {
            downMovement = true;
        }
    }

    if (keyIsPressed) {
        if (key == 'p') {
            characterX += 0;
            characterY += 0;
            rotation += ts;
        }	

}
    //x = constrain(x, 0, screen.width);
	//y = constrain(y,0,sceen.height);
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
    if (((random1 - 10 < characterX + 50) && (random1 + 10 > characterX - 50)) && ((random2 - 10 < characterY + 50) && (random2 + 10 > characterY - 50))) {
        random1 = random(0, 700);
        random2 = random(0, 400);
        TF1 = random(1, 3);
        TF2 = random(1, 3);
        score += 1;
        op1 = 255;
    }
}

function draw() {
	background(0,200,255);
    drawCharacter();
    drawSquares();
    drawInstructions();
    collisions();
	characterMove();
}
