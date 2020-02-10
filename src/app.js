// make board
// give board to virtual tree to make virtualTree
// get orderTraversal from bfs by giving it root of virtual tree
// get pathBack from BFS
const Board = require('./js/board.js');
const Grid = require('./js/grid.js');
const VirtualTree = require('./js/virtualTree.js');

const Visualize = require('./js/visualize.js');
const BFS = require('./js/bfs.js');


const b1 = new Board(30, 75);
b1.makeRows();
b1.addSomeTilesClasses();

function spotTest() {
  const grid = new Grid(30, 75);
  const virtualTree = new VirtualTree(grid, [15, 37]);

  // console.log(g.adjacentTiles([1, 2]))
  const t = virtualTree.createTree(virtualTree.startTile);
  // console.log(virtualTree)
  const b = new BFS(virtualTree.startTile, [6, 6]);
  // console.log(g.board);
  // const endTile = b.breadthFirstSearch()
  const travelPath = b.createPathBack();
  const visualize = new Visualize(b.orderedTravesal, b.travelPath, 5);
  visualize.visualizeAlgorithm();
  // console.log("ordered traversal is: ", b.orderedTravesal)

  // console.log("travel path is: ", b.travelPath)

  // console.log("orderd traversal positions: ", orderedTravesal)
}


spotTest();
