const VirtualTree = require('./virtualTree.js')

const Grid = require('./grid.js');

class BFS{

    constructor(root, endPos) {
        this.root = root;
        this.endPos = endPos;
        this.orderedTravesal = []
        this.travelPath = []
    }

    breadthFirstSearch(){

        let queue = [this.root]
        let endTile;
        console.log("queue length:", queue.length)
        while (queue.length > 0){
            // console.log("q in bfs", queue)
            let curTile = queue.shift();

            this.orderedTravesal.push(curTile.pos)
            if (curTile.pos.toString() === this.endPos.toString()){
                console.log("currtile ::::",curTile)
                endTile = curTile
                break
            }
            queue = queue.concat(curTile.children)
        }
        console.log("endtile:::::::::", endTile)
        return endTile
    }

    createPathBack() {
        let traversal = this.breadthFirstSearch()
        let currentNode = traversal
        console.log("this is the current node", currentNode)
        this.travelPath.push(currentNode.pos)

        while (currentNode !== this.root) {
            this.travelPath.push(currentNode.parent.pos)
            currentNode = currentNode.parent
        }
        
        return this.travelPath
    }
}

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