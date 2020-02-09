const TreeTile = require('./treetile.js');

class Grid {
  constructor(row, col){
    // baseline settup - nothing before here
    this.board = new Array(row).fill(null).map(() => new Array(col).fill(null));
    this.height = row;
    this.width = col;


    // secondary setup #do not change order
    this.placeTiles();

    // this.tree = this.createTree(startPosition)
  }

  placeTiles(){
    for(let i=0; i < this.height; i++){
      for (let j = 0; j < this.width; j++){
        let newTile = new TreeTile([i, j], "fourtwenty");
        this.board[i][j] = newTile;
      }
    }
  }

randomPosGenerator() {
  // console.log("randomPosGenerator height ", this.height)
  const row = Math.floor(Math.random() * this.height);
  const col = Math.floor(Math.random() * this.width);
  return [row, col];
}

  placeStartTile(pos){
    const tile = this.getTile(pos);
    // console.log("tile in place start tile: ", tile)
    tile.color = "white";
  }

  getTile(pos){
    let row, col;
    [row, col] = pos;
    // console.log("position in getTile: ", pos)
    const tile = this.board[row][col];
    // console.log("tile in getTile", tile)
    return tile
  }

  validPos(pos) {
    let p_x = pos[0]
    let p_y = pos[1]
    if (p_x < this.height && p_y < this.width && p_x >= 0 && p_y >= 0) {
      return true
    }
  }

  adjacentTiles(pos) {
    const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let adjTiles = [];
    let p_x = pos[0];
    let p_y = pos[1];

    for(let i = 0; i < deltas.length; i++) {
        let delt = deltas[i];
        let d_x = delt[0];
        let d_y = delt[1];
        let new_pos_x = p_x + d_x ;
        let new_pos_y = p_y + d_y;
        let new_pos = [new_pos_x, new_pos_y];
        if(this.validPos(new_pos)){
          adjTiles.push(new_pos);
        }
    }
    return adjTiles
  }  
}

//const Grid = require('./grid.js)
class VirtualTree {
  constructor(grid, startPos = null) {
    this.grid = grid;

    this.visited = new Set;
    this.orderedVisit = [];

    this.startPos = (startPos) ? startPos : this.grid.randomPosGenerator();
    this.startTile = this.grid.getTile(this.startPos);
    this.grid.placeStartTile(this.startPos);
  }

  validPos(pos){
    if (this.grid.validPos(pos) && !this.visited.has(pos.toString())){
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
      for(let i = 0; i < tiles.length; i++) {
        if(this.validPos(tiles[i])){
          let tile = this.grid.getTile(tiles[i])
          tile.parent = curTile
          queue.push(tile)
          this.visited.add(tile.pos.toString())
        }
      }
    }
  }
}




function spotTest(){
  const g = new Grid(10, 10)
  const v = new VirtualTree(g)
  // console.log(g.adjacentTiles([1, 2]))
  const t = v.createTree(v.startTile)
  console.log(g.board);
}

spotTest();



