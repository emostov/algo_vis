// Virtual Tree class add takes in a grid and grid and start point. Using the 
// start point as a root it creates a tree representin the grid in a bfs manner.
// N.B. it creates a tree that is not a graph
// If not start position is given, one is randomly generated
class VirtualTree {
  constructor(grid, startPos = null) {
    this.grid = grid;

    this.visited = new Set();
    this.orderedVisit = [];

    this.startPos = (startPos) || this.grid.randomPosGenerator();
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
    const queue = [startTile];
    this.visited.add(startTile.pos.toString());

    while (!queue.length < 1) {
      const curTile = queue.shift();
      const tiles = this.grid.adjacentTiles(curTile.pos);
      for (let i = 0; i < tiles.length; i += 1) {
        if (this.validPos(tiles[i])) {
          const tile = this.grid.getTile(tiles[i]);
          tile.assignParent(curTile);
          queue.push(tile);
          this.visited.add(tile.pos.toString());
        }
      }
    }
  }
}

module.exports = VirtualTree;
