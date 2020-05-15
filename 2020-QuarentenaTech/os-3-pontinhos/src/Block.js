class Block {
  constructor({ x = 0, y = 0, size = BLOCK_SIZE, color = "#fff" } = {}) {
    this.x = x;
    this.y = y;

    this.size = size;
    this.color = color;
  }

  show() {
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
  }

  update() {
    this.y += this.size;

    if (this.y >= height) {
      this.y = height - BLOCK_SIZE;
    }
    if (this.x <= 0) {
      this.x += BLOCK_SIZE;
    }
    if (this.x >= width) {
      this.x -= BLOCK_SIZE;
    }
  }
}
