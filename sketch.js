var x = 50;
var y = 200;
var speed = 5;

var sound, amplitude;

function preload() {
  sound = loadSound('https://res.cloudinary.com/doutwyts6/video/upload/v1476769079/1-01_Just_Dance_Feat._Colby_O_Donis_cmi2jz.mp3');
  sound1 = loadSound('https://res.cloudinary.com/doutwyts6/video/upload/v1476795864/90081__jivatma07__sinebd-short-w-click_y20ghx.wav');
  sound2 = 
loadSound('https://res.cloudinary.com/doutwyts6/video/upload/v1476795867/322758__mishicu__75-drums6-sq8l_ed0vjc.wav');
}


function setup () {
  createCanvas(windowWidth, windowHeight);
  sound.play();
  amplitude = new p5.Amplitude();
}

function draw () {
  background(0,0,255,95);
  noStroke();
  car();
}


function car() {
  push();
  fill(255,0,0);
  rect(x+35,y-20,30,30,50);
  fill(0,200,0);
  rect(x,y,100,55,25);
  pop(); 
  
  push();
  fill('black');
  ellipse(x, y+50, 50, 50);
  ellipse(x+100, y+50, 50, 50);  
  pop();
  
  x = x + speed;
  
  
  if (x > 700) {
    speed = speed*-1;
  }
  
  if (x < 0) {
    speed = speed*-1;
  }
  
}

function keyTyped() {
recentKey = key;
  switch (key) {
    case 'a':
      sound1.play();
      background(255);
      break;
    case 'l':
      sound2.play();
      background(0);
      break;
  }
  
 
  
}