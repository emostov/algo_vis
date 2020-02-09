const TreeTile = require('./treetile.js');

class Grid {
  constructor(row, col) {
    // baseline settup - nothing before here
    this.board = new Array(row).fill(null).map(() => new Array(col).fill(null));
    this.height = row;
    this.width = col;

    // secondary setup
    this.placeTiles();
  }

  placeTiles() {
    for (let i = 0; i < this.height; i += 1) {
      for (let j = 0; j < this.width; j += 1) {
        const newTile = new TreeTile([i, j], 'fourtwenty');
        this.board[i][j] = newTile;
      }
    }
  }

  randomPosGenerator() {
    const row = Math.floor(Math.random() * this.height);
    const col = Math.floor(Math.random() * this.width);
    return [row, col];
  }

  placeStartTile(pos) {
    const tile = this.getTile(pos);
    tile.color = 'white';
  }

  getTile(pos) {
    const row = pos[0];
    const col = pos[1];
    const tile = this.board[row][col];
    return tile;
  }

  validPos(pos) {
    const pX = pos[0];
    const pY = pos[1];
    if (pX < this.height && pY < this.width && pX >= 0 && pY >= 0) {
      return true;
    }
    return false;
  }

  adjacentTiles(pos) {
    const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const adjTiles = [];
    const pX = pos[0];
    const pY = pos[1];

    for (let i = 0; i < deltas.length; i += 1) {
      const delt = deltas[i];
      const dX = delt[0];
      const dY = delt[1];
      const newPosX = pX + dX;
      const newPosY = pY + dY;
      const newPos = [newPosX, newPosY];
      if (this.validPos(newPos)) {
        adjTiles.push(newPos);
      }
    }
    return adjTiles;
  }
}


module.exports = Grid;
