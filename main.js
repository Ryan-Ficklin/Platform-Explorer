function setup() {
    createCanvas(800, 600);
    noStroke();
}

function draw() {
    background(255);
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 80, 80);
}

void setup(){

   size(screen.width+260,screen.height);

   //background(100,155,255);

}



int score = 0;

int x = 500;

int y = 500;

int s = 5;

int z = 50;

int pos = 50;

float t = 0;

float ts = .05;

int TF1 = random(1,3);

int TF2 = random(1,3);

int random1 = random(0,700);

int random2 = random(0,400);

int op = 255;

int op1 = 0;

color r = color(255,0,0);

color g = color(0,255,0);

color b = color(0,0,255);

color yel = color(255,255,0);



void drawCharacter(){

   background(100,155,255);

   noStroke();

   pushMatrix();

   translate(x,y);

   rotate(t);

   fill(0);

   rectMode(CENTER);

   rect(0,0,100,100);

   fill(yel);

   rect(pos,pos,z,z);

   fill(r);

   rect(pos,-pos,z,z);

   fill(g);

   rect(-pos,pos,z,z);

   fill(b);

   rect(-pos,-pos,z,z);

   popMatrix();

   fill(255);

   ellipse(x,y,z,z);

   fill(0);

   ellipse(x-10,y-10,z/5,z/5);

   ellipse(x+10,y-10,z/5,z/5);

   ellipse(x,y+10,z/3,z/4);

   if(keyPressed){

      if(key == 'd'){

         x+=s;

         t+=ts;

      }

   }

   if(keyPressed){

      if(key == 'a'){

         x-=s;

         t+=ts;

      }

   }

   if(keyPressed){

      if(key == 'w'){

         y-=s;

         t+=ts;

      }

   }

   if(keyPressed){

      if(key == 's'){

         y+=s;

         t+=ts;

      }

   }

   if(keyPressed){

      if(key == 'p'){

         x+=0;

         y+=0;

         t+=ts;

      }

   }

   constrain(x,0,screen.width);

}



void drawSquares(){

   if((TF1 > 2) && (TF2 < 2)){ 

      fill(r);  

   } else if((TF1 < 2) && (TF2 > 2)){

      fill(g);

   } else if((TF1 < 2) && (TF2 < 2)){

      fill(b);

   } else{

      fill(yel);

   }

   rect(random1,random2,20,20);

}



void drawInstructions(){

   fill(255,op);

   textSize(32);

   text("Tap to start. Use W,A,S,D to move and P to roatate in place", 10, 50); 

   fill(255);

   text("Score: " + score, 875, 50);

   op--;

   fill(g,op1);

   text("+1", 958, 80);	

   op1-=3;

   

}



void collisions(){

   if(((random1-10 < x+50) && (random1+10 > x-50)) &&((random2-10 < y+50) && (random2+10 > y-50))){

      random1 = random(0,700);

      random2 = random(0,400);

      TF1 = random(1,3);

      TF2 = random(1,3);

      score+=1;

      op1 = 255;

   }

}



void draw(){

   drawCharacter();

   drawSquares();

   drawInstructions();

   collisions();

   

}