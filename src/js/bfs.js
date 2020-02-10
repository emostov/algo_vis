// const VirtualTree = require('./virtualTree.js');
// const Grid = require('./grid.js');

class BFS {
  constructor(root, endPos) {
    this.root = root;
    this.endPos = endPos;
    this.orderedTravesal = [];
    this.travelPath = [];
  }

  breadthFirstSearch() {
    let queue = [this.root];
    let endTile;
    while (queue.length > 0) {
      const curTile = queue.shift();

      this.orderedTravesal.push(curTile.pos);
      if (curTile.pos.toString() === this.endPos.toString()) {
        endTile = curTile;
        break;
      }
      queue = queue.concat(curTile.children);
    }

    return endTile;
  }

  createPathBack() {
    const traversal = this.breadthFirstSearch();
    let currentNode = traversal;
    this.travelPath.push(currentNode.pos);

    while (currentNode !== this.root) {
      this.travelPath.push(currentNode.parent.pos);
      currentNode = currentNode.parent;
    }

    return this.travelPath;
  }
}

module.exports = BFS;
