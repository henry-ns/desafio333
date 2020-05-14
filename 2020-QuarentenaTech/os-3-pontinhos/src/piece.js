class Piece {
  constructor(originalShape = [[]], x = width / 2, y = 0) {
    this.originalShape = originalShape;
    this.x = x;
    this.y = y;
    this.color = { r: random(255), g: random(255), b: random(255) };
    this.shape = this.fillPiece(originalShape.length);
  }

  fillPiece(pieceLenght) {
    return Array.from(new Array(pieceLenght), (x, i) =>
      Array.from(new Array(pieceLenght), (x, j) =>
        this.originalShape[i][j] === 1
          ? new Pixel(
              this.x + j * pixelSize,
              this.y + i * pixelSize,
              pixelSize,
              this.color
            )
          : null
      )
    );
  }

  show() {
    this.shape.forEach((x) =>
      x.filter((j) => j != null).forEach((pixel) => pixel.show())
    );
  }
}
