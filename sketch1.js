const w = innerWidth;
const h = innerHeight;
const amount = 60;
var a = 0;
var x = 900;
var y = 900;
var m = 900;
var n = 900;
var timer = 60;
var timer2 = 60;

function setup() {
  v = min(w, h);
  createCanvas(windowWidth, windowHeight);

  let col = color(188, 154, 255, 300);
  // song = loadSound("jaypark_song.mp3", loaded);
  button = createButton("PLAY");
  button.mousePressed(togglePlaying);
  button.size(100, 50);
  button.style("color:white");
  button.style("background-color", col);
  button.position(x, y);

  let col2 = color(188, 154, 255, 300);
  button2 = createButton('BACK TO MAIN PAGE');
  button2.mousePressed(gotolink);
  button2.size(160, 50);
  button2.style("color:white");
  button2.style("background-color", col2);
  button2.position(m, n);
}

function gotolink() {
	window.open('project_3.html');
}

function loaded() {
  console.log("loaded");
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.5);
    button.html("PAUSE");
  } else {
    song.pause();
    button.html("PLAY");
  }
}

//BUTTON_ANIMATION
function draw() {
  colorMode(RGB);
  noStroke();
  angleMode(degrees);
  background(0, 0, 0, 3);
  
  timer = timer - 1;
if (timer === 0) {
    button.position(random(x), random(y));
    timer = 80;
}
  
function randomLocation() {
  x = random(windowWidth)
  y = random(windowHeight)
  button.position(x, y);
}

  timer2 = timer2 - 1;
if (timer2 === 0) {
    button2.position(random(m), random(n));
    timer2 = 80;
}
  
function randomLocation() {
  m = random(windowWidth)
  n = random(windowHeight)
  button2.position(m, n);
}

  //BACKGROUND_ANIMATION
  var t = frameCount / 60 - (3 / 2) * PI;
  t += (cos(t) / 3) * 2;
  const R = v / 4;

  for (let i = 0; i < amount; i++) {
    const a = (i / amount) * PI * (sin(t) + 1) + t;
    const r = ((v / 20) * sin((i / amount) * 10 * PI) * (sin(t) + 10)) / 2;
    const x = w / 2 + (R + r) * cos(a);
    const y = h / 2 - (R + r) * cos(a);

    colorMode(HSB, 2 * PI, 100, 100);
    fill(a - t, 50, 100);
    rect(x - 5, y, v / 30, v / 100);
    rect(x - 5, y / 0.8, v / 30, v / 100);
    rect(x - 5, y / 0.5, v / 30, v / 100);
    rect(x - 5, y / 0.3, v / 30, v / 100);
    rect(x - 5, y / 0.1, v / 30, v / 100);

    //MOUSE
    fill(255);
    ellipse(mouseX, mouseY, 200, 1);
  }
}