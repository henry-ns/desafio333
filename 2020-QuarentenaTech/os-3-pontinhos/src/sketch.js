let boardX = 10;
let boardY = 20;

let pixelSize = 40;
let pixel;

let timeInterval = 1000;

function setup() {
  createCanvas(boardX * pixelSize, boardY * pixelSize);
  pixel = new Pixel(width / 2 - pixelSize, 0, pixelSize);

  setInterval(() => {
    pixel.y += pixelSize;
  }, timeInterval);
}

function draw() {
  background(50);
  pixel.show();
}
