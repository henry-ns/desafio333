let boardX = 10;
let boardY = 20;

let pixelSize = 40;
let pixel;

let timeInterval = 1000;

let piece;
let shapes = [
  [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [1, 1, 1, 1],
  ],
  [
    [null, null, null, null],
    [null, null, null, null],
    [1, null, null, null],
    [1, 1, 1, null],
  ],
  [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, 1, null],
    [1, 1, 1, null],
  ],
  [
    [null, null, null, null],
    [null, null, null, null],
    [1, 1, null, null],
    [1, 1, null, null],
  ],
  [
    [null, null, null, null],
    [null, null, null, null],
    [null, 1, 1, null],
    [1, 1, null, null],
  ],
  [
    [null, null, null, null],
    [null, null, null, null],
    [null, 1, null, null],
    [1, 1, 1, null],
  ],
  [
    [null, null, null, null],
    [null, null, null, null],
    [1, 1, null, null],
    [null, 1, 1, null],
  ],
];

function setup() {
  createCanvas(boardX * pixelSize, boardY * pixelSize);
  rectMode(CENTER);
  piece = new Piece(random(shapes), width / 2 - pixelSize, 0, pixelSize);
}

function draw() {
  background(50);
  piece.show();
}
