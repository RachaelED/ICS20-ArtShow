let sceneNum = 0;
let dot = new Mover();
let dots = [];

let r = 255;
let g = 255;
let b = 255;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 4000; i++) {
    dots[i] = new Mover();
  }
}

function draw() {
  mouseClicked = function() {
    sceneNum++;
  }
  if (sceneNum === 0) {
  background(125, 0, 0);
  fill(255, 255, 255);
  rect(65, 150, 290, 75);
  textSize(20);
  fill(0, 0, 0);
  ellipse(200, 100, 300, 50);
  fill(255, 255, 255);
  text("Circle and Square Art", 100, 105);
  textSize(50);
  fill(0, 0, 0);
  text("click to start", 75, 200);
} else if (sceneNum == 1) {
    background(r, g, b);
  // make background colours random, between 0 and 30
  r = random(0, 30);
  g = random(0, 100);
  b = random(0, 30);

    for (let i = 0; i < 4000; i++) {
      dots[i].update();
      dots[i].show();
    }

    ellipse(this.x - 100, mouseY, 10, 10);
  } else if (sceneNum == 2) {
    background(50, 200, 140);
    textSize(30);
    text("Thank you for watching!", 20, 150);
    text("Click to restart", 20, 200);
  } else if (sceneNum = 3) {
    // make code loop around back to the beginning (back to when sceneNum = 0)
  sceneNum = 0;
  }


}
