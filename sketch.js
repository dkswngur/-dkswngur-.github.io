const w = innerWidth;
const h = innerHeight;
const amount = 60;
var a = 0;
let b = 50;
let loc = 50;
let j = 0;
let k = -2020;
var e = -100;
var r = -100;
var z = -100;
var l = -100;
var q = 0;
var m = 0;

function setup() {
  v = min(w, h);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  colorMode(RGB);
  noStroke();
  angleMode(degrees);
  background(0, 0, 0, 25);
  
  
  //LINK_ANIMATION
  let c = createA('project3_hyperlink1.html', '*')
  c.position(e,r);
    e = width*noise(q)
    r = height*noise(q+5)
    q += 0.0005
  let n = createA('project3_hyperlink2.html', '-')
    n.position(z,l,1000,100);
    z = width*noise(m)
    l = height*noise(m+10)
    m += 0.0005

  
  //LINEUP
  rect(0,990,2000,b/50);
  textSize(40);
  text("JAY PARK    BEENZINO    ASH ISLAND    CHANGMO    PH-1    WOO WON JAE    SIMON DOMINIC    ZICO", j, 1025);

  text("JAY PARK    BEENZINO    ASH ISLAND    CHANGMO    PH-1    WOO WON JAE    SIMON DOMINIC    ZICO", k, 1025);
  
  if (j > 2020) {
  j = -2020;
} 
  
  j = j + 3;

    if (k > 2020) {
  k = -2020;
}
  
  k = k + 3;

  
  //TITLE
  textSize(100);
  textStyle(BOLD);
  fill(255);
  text ("THE CRY GROUND",50,200,mouseX,mouseY);
  
  
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
    rotate(90);
    
    b = b / 0.8;
  }
}