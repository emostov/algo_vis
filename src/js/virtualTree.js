const Grid = require('./grid.js');

class VirtualTree {
  constructor(grid, startPos = null) {
    this.grid = grid;

    this.visited = new Set;
    this.orderedVisit = [];

    this.startPos = (startPos) ? startPos : this.grid.randomPosGenerator();
    this.startTile = this.grid.getTile(this.startPos);
    this.grid.placeStartTile(this.startPos);
  }

  validPos(pos) {
    if (this.grid.validPos(pos) && !this.visited.has(pos.toString())) {
      return true;
    }
    return false;
  }

  createTree(startTile) {
    console.log("start tile in createTree", startTile);
    let queue = [startTile];
    this.visited.add(startTile.pos.toString())

    while (!queue.length < 1) {
      let curTile = queue.shift()
      let tiles = this.grid.adjacentTiles(curTile.pos)
      for (let i = 0; i < tiles.length; i++) {

        if (this.validPos(tiles[i])) {
          let tile = this.grid.getTile(tiles[i])
          tile.assignParent(curTile)
          queue.push(tile)
          this.visited.add(tile.pos.toString())
        }

      }
    }
  }
}

spotTest();

function spotTest() {
  const g = new Grid(10, 10)
  const v = new VirtualTree(g, [0, 0])
  // console.log(g.adjacentTiles([1, 2]))
  const t = v.createTree(v.startTile)
  console.log(g.board);
}