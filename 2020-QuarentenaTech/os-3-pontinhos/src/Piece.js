class Piece {
  constructor({ x = width / 2, y = 0, initialShape, color } = {}) {
    this.x = x;
    this.y = y;

    this.color = color || this._randomColor();
    this.blocks = this._initBlocks(initialShape);

    this.size = 4;
  }

  _randomColor() {
    function decToHex() {
      return Math.floor(random(255)).toString(16);
    }

    return `#${decToHex()}${decToHex()}${decToHex()}`;
  }

  _initBlocks(model) {
    const blocks = [];

    model.forEach((line, yIndex) => {
      const blockLine = [];

      line.forEach((item, xIndex) => {
        const block = item
          ? new Block({
              x: this.x + xIndex * BLOCK_SIZE,
              y: this.y + yIndex * BLOCK_SIZE,
              color: this.color,
            })
          : null;

        blockLine.push(block);
      });

      blocks.push(blockLine);
    });

    return blocks;
  }

  _forBlock(callback, onlyNotNull = true) {
    this.blocks.forEach((line, lineIndex) =>
      line.forEach((block, index) => {
        (!onlyNotNull || block) && callback({ block, index, line, lineIndex });
      })
    );
  }

  moveHorizontally(direction = 1) {
    this.x += direction * BLOCK_SIZE;

    this._forBlock(({ block }) => {
      block.moveHorizontally(direction);
      //block.show();
    });
  }

  rotate() {
    const { length } = this.blocks[0];
    const newMatrix = Array.from({ length }).map(() => []);

    this._forBlock(
      ({ block, index }) => newMatrix[index].unshift(block),
      false
    );

    this.blocks = newMatrix;

    this._forBlock(({ block, index, lineIndex }) => {
      block.x = this.x + index * BLOCK_SIZE;
      block.y = this.y + lineIndex * BLOCK_SIZE;
    });

    this.checkPieceInBoard();
  }

  show() {
    this._forBlock(({ block }) => block.show());
  }

  update() {
    this.y += BLOCK_SIZE;
    this._forBlock(({ block }) => block.update());
  }

  checkSideEdges() {
    const pieceWidth = this.blocks[0].length;

    if (this.x == BLOCK_SIZE) {
      return "l";
    }
    if (this.x + pieceWidth * BLOCK_SIZE - BLOCK_SIZE == width) {
      return "r";
    }
  }

  checkPieceInBoard() {
    const pieceWidth = this.blocks[0].length;
    console.log(this.x + pieceWidth * BLOCK_SIZE - BLOCK_SIZE);
    if (this.x + pieceWidth * BLOCK_SIZE - BLOCK_SIZE > width) {
      this.moveHorizontally(-1);
      if (this.x + pieceWidth * BLOCK_SIZE - BLOCK_SIZE > width) {
        this.moveHorizontally(-1);
        if (this.x + pieceWidth * BLOCK_SIZE - BLOCK_SIZE > width) {
          this.moveHorizontally(-1);
        }
      }
    }
  }

  checkBottomEdge() {
    const pieceHeight = this.blocks.length;
    if (this.y + pieceHeight * BLOCK_SIZE == height) {
      noLoop();
      return true;
    }
  }
}
