// const Grid = require('./grid.js');
// const VirtualTree = require('./virtualTree.js')


class Visualize {
    constructor(orderedTravesal, travelPath, timeout) {
        this.orderedTravesal = orderedTravesal
        this.travelPath = travelPath
        this.traversed = []
        this.timeout = timeout
    }

    visualizeAlgorithm() {
        let colors = ["red", "yellow", "orange", "purple"]
        let i = 0;
        console.log("this is orderedtraversal.length", this.orderedTravesal.length)
        console.log(this.orderedTravesal)
        const loopStep = () => {
            // console.log("i at the top of loopstep:", i)
            if (i === this.orderedTravesal.length) {
                this.visualizeTravelPath();
                return;
            }
            let nextPos = this.orderedTravesal[i].parsePos()
            // Finish the base case for breaking out of the loop
            setTimeout(() => {
                const tile = document.getElementById(nextPos)
                // tile.style.backgroundColor = colors[0]
                tile.style.backgroundColor = colors[0]
                colors.rotateRight(1)
                this.traversed.push(nextPos)
                loopStep();
                i = i + 1
            }, this.timeout);
        }
        loopStep();
    }

    visualizeTravelPath() {
        let i = 0;
        console.log("hello")
        const loopStep = () => {
            if (i === this.travelPath.length) {
                return
            }
            let nextPos = this.travelPath[i].parsePos();
            setTimeout(() => {
                const tile = document.getElementById(nextPos)
                tile.style.backgroundColor = "black"
                loopStep();
                i+= 1
            }, this.timeout);
        }
        loopStep();
    }
}

Array.prototype.parsePos = function () {
    let x = this[0];
    let y = this[1];

    return `${x}-${y}`
}

Array.prototype.rotateRight = function (n) {
    for (let i = 0; i < n; i++) {
        let color = this.shift()
        this.push(color);
    }
    // return this
}

