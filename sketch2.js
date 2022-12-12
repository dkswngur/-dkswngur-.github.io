let x, y;
const amount = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 1.09;
  y = height;
}

function draw() {
  noStroke();
  background(0, 0, 0, 5);

  //LINK ANIMATION
  let b = createA(
    "project_3.html",
    "."
  );
  b.position(x, y, 10, 10);
    x = x + random(-10, 10);
    y = y - 5;

  if (y < 0) {
    y = height;
  }

  
  //BACKGROUND_LIGHTING
  var t = frameCount / 120 - 1 / 2;
  for (let i = 0; i < amount; i++) {
    const a = (i / amount) * sin(t) + t;

    fill(255);
    ellipse(500, 100, 1000, a / 3);
    rect(1000, 400, 6, 6);
    rotate(90);

    //MOUSE
    fill(255);
    ellipse(mouseX, mouseY, 3, 3);
  }
}