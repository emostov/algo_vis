const Grid = require('./grid.js');
const VirtualTree = require('./virtualTree.js')




function spotTest() {
    const g = new Grid(10, 10)
    const v = new VirtualTree(g, [0, 0])

    // console.log(g.adjacentTiles([1, 2]))
    const t = v.createTree(v.startTile)
    // console.log(v)
    const b = new BFS(v.startTile, [6, 6])
    // console.log(g.board);
    const endTile = b.breadthFirstSearch()
    const travelPath = b.createPathBack()

    console.log("ordered traversal is: ", b.orderedTravesal)

    console.log("travel path is: ", b.travelPath)

    // console.log("orderd traversal positions: ", orderedTravesal)
}

spotTest();