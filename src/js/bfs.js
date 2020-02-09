const VirtualTree = require('./virtualTree.js');
const Grid = require('./grid.js');

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

function spotTest() {
  const g = new Grid(10, 10);
  const v = new VirtualTree(g, [0, 0]);

  v.createTree(v.startTile);

  const b = new BFS(v.startTile, [6, 6]);

  b.breadthFirstSearch();
  b.createPathBack();

  console.log('ordered traversal is: ', b.orderedTravesal);

  console.log('travel path is: ', b.travelPath);
}

spotTest();
