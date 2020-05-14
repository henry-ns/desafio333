class Pixel {
  constructor(x = 0, y = 0, dimension = 1, color = { r: 0, g: 0, b: 0 }) {
    this.x = x;
    this.y = y;
    this.dimension = dimension;
    this.color = color;
  }

  show() {
    let { r, g, b } = this.color;
    fill(r, g, b);
    rect(this.x, this.y, this.dimension, this.dimension);
  }

  update() {}
}
