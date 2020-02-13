/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// make board\n// give board to virtual tree to make virtualTree\n// get orderTraversal from bfs by giving it root of virtual tree\n// get pathBack from BFS\nconst Board = __webpack_require__(/*! ./js/board.js */ \"./js/board.js\");\nconst Grid = __webpack_require__(/*! ./js/grid.js */ \"./js/grid.js\");\nconst VirtualTree = __webpack_require__(/*! ./js/virtualTree.js */ \"./js/virtualTree.js\");\nconst ReturnP = __webpack_require__(/*! ./js/pso.js */ \"./js/pso.js\")\nconst Visualize = __webpack_require__(/*! ./js/visualize.js */ \"./js/visualize.js\");\nconst BFS = __webpack_require__(/*! ./js/bfs.js */ \"./js/bfs.js\");\nconst UserController = __webpack_require__(/*! ./js/controllerUI/userController.js */ \"./js/controllerUI/userController.js\")\n\n\nconst b1 = new Board(30, 75);\nb1.makeRows();\nb1.addSomeTilesClasses();\nconst controller = new UserController()\n\n\n\nfunction spotTest() {\n\n  // const grid = new Grid(30, 75);\n  // const virtualTree = new VirtualTree(grid, [15, 37]);\n  \n  //-----------------------------\n  //SWARM ALGORITHM\n  // const r = new ReturnP();\n  // r.returnValue();\n  //-----------------------------\n\n  // const t = virtualTree.createTree(virtualTree.startTile);\n\n  // const b = new BFS(virtualTree.startTile, [6, 6]);\n\n  // const endTile = b.breadthFirstSearch()\n  // const travelPath = b.createPathBack();\n\n\n  // const visualize = new Visualize(r.positions, [[1, 2],[2, 2]], 50);\n  // visualize.visualizeAlgorithm();\n\n}\n\n\n// spotTest();\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./js/bfs.js":
/*!*******************!*\
  !*** ./js/bfs.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const VirtualTree = require('./virtualTree.js');\n// const Grid = require('./grid.js');\n\nclass BFS {\n  constructor(root, endPos) {\n    this.root = root;\n    this.endPos = endPos;\n    this.orderedTravesal = [];\n    this.travelPath = [];\n  }\n\n  breadthFirstSearch() {\n    let queue = [this.root];\n    let endTile;\n    while (queue.length > 0) {\n      const curTile = queue.shift();\n\n      this.orderedTravesal.push(curTile.pos);\n      if (curTile.pos.toString() === this.endPos.toString()) {\n        endTile = curTile;\n        break;\n      }\n      queue = queue.concat(curTile.children);\n    }\n\n    return endTile;\n  }\n\n  createPathBack() {\n    const traversal = this.breadthFirstSearch();\n    let currentNode = traversal;\n    this.travelPath.push(currentNode.pos);\n\n    while (currentNode !== this.root) {\n      this.travelPath.push(currentNode.parent.pos);\n      currentNode = currentNode.parent;\n    }\n\n    return this.travelPath;\n  }\n}\n\nmodule.exports = BFS;\n\n\n//# sourceURL=webpack:///./js/bfs.js?");

/***/ }),

/***/ "./js/board.js":
/*!*********************!*\
  !*** ./js/board.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Board {\n  constructor(row, col) {\n    this.rowLen = row;\n    this.colLen = col;\n  }\n\n  makeRows() {\n    const container = document.getElementsByClassName('board-container')[0]\n    for (let i = 0; i < this.rowLen; i += 1) {\n      const row = document.createElement('div');\n      row.className = 'grid-row';\n      container.appendChild(row);\n\n      for (let j = 0; j < this.colLen; j += 1) {\n        const cell = document.createElement('div');\n        cell.className = 'grid-item';\n        row.appendChild(cell);\n        cell.id = `${i}-${j}`;\n      }\n    };\n  }\n\n  addSomeTilesClasses() {\n    const classes = ['start-tile', 'target-tile', 'unvisited-tile', 'wall-tile', 'shortest-path-tile', 'visited-tile'];\n\n    for (let i = 0; i < this.rowLen; i += 3) {\n      for (let j = 0; j < this.colLen; j += 3) {\n        const curEl = document.getElementById(`${i}-${j}`);\n        // const ranNum = (Math.floor((Math.random() * 10) / 1));\n        // curEl.classList.add(classes[ranNum]);\n      }\n    }\n  }\n}\n\nmodule.exports = Board;\n\n// b1 = new Board(30, 75);\n// b1.makeRows();\n// b1.addSomeTilesClasses()\n\n\n//# sourceURL=webpack:///./js/board.js?");

/***/ }),

/***/ "./js/controllerUI/userController.js":
/*!*******************************************!*\
  !*** ./js/controllerUI/userController.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//This will allow the user to make walls\n\n\nclass Controller {\n\n    constructor() {\n        this.buttonHash = {\n            \"Start Tile\": true,\n            \"Target Tile\": false,\n            \"Wall Tile\": false\n        };  \n        document.getElementById('start-tile').addEventListener('click', () => {\n            this.buttonReset(\"Start Tile\");\n        });\n        document.getElementById('target-tile').addEventListener('click', () => {\n            this.buttonReset(\"Target Tile\");\n        });\n        document.getElementById('wall-tile').addEventListener('click', () => {\n            this.buttonReset(\"Wall Tile\");\n        });\n        this.changeTiles();\n    };\n\n    reset(button) {\n        Object.keys(this.buttonHash).forEach((tile) => {\n            if (tile !== button) this.buttonHash[tile] = false;\n        });\n    };\n    \n    buttonReset(button){\n        if (this.buttonHash[button] === false) {\n            this.buttonHash[button] = true\n            this.reset(button)\n            console.log(this.buttonHash)\n        };\n    };\n\n    changeTiles() {\n        let currentButton;\n        // debugger\n        Object.keys(this.buttonHash).forEach((el) => {\n            if(this.buttonHash[el] === true) currentButton = el;\n        }) \n\n        if (currentButton === 'Start Tile') {\n            window.addEventListener('mousedown', (el) => {\n                const t = el.currentTarget\n                console.log(t)\n            });\n        };\n\n        if (currentButton === 'Target Tile') {\n\n        }\n\n        if (currentButton === 'Wall Tile') {\n\n        }\n\n    }\n}\nmodule.exports = Controller\n\n//# sourceURL=webpack:///./js/controllerUI/userController.js?");

/***/ }),

/***/ "./js/grid.js":
/*!********************!*\
  !*** ./js/grid.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const TreeTile = __webpack_require__(/*! ./treetile.js */ \"./js/treetile.js\");\n\nclass Grid {\n  constructor(row, col) {\n    // baseline settup - nothing before here\n    this.board = new Array(row).fill(null).map(() => new Array(col).fill(null));\n    this.height = row;\n    this.width = col;\n\n    // secondary setup\n    this.placeTiles();\n  }\n\n  placeTiles() {\n    for (let i = 0; i < this.height; i += 1) {\n      for (let j = 0; j < this.width; j += 1) {\n        const newTile = new TreeTile([i, j], 'fourtwenty');\n        this.board[i][j] = newTile;\n      }\n    }\n  }\n\n  randomPosGenerator() {\n    const row = Math.floor(Math.random() * this.height);\n    const col = Math.floor(Math.random() * this.width);\n    return [row, col];\n  }\n\n  placeStartTile(pos) {\n    const tile = this.getTile(pos);\n    tile.color = 'white';\n  }\n\n  getTile(pos) {\n    const row = pos[0];\n    const col = pos[1];\n    const tile = this.board[row][col];\n    return tile;\n  }\n\n  validPos(pos) {\n    const pX = pos[0];\n    const pY = pos[1];\n    if (pX < this.height && pY < this.width && pX >= 0 && pY >= 0) {\n      return true;\n    }\n    return false;\n  }\n\n  adjacentTiles(pos) {\n    const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];\n    const adjTiles = [];\n    const pX = pos[0];\n    const pY = pos[1];\n\n    for (let i = 0; i < deltas.length; i += 1) {\n      const delt = deltas[i];\n      const dX = delt[0];\n      const dY = delt[1];\n      const newPosX = pX + dX;\n      const newPosY = pY + dY;\n      const newPos = [newPosX, newPosY];\n      if (this.validPos(newPos)) {\n        adjTiles.push(newPos);\n      }\n    }\n    return adjTiles;\n  }\n}\n\n\nmodule.exports = Grid;\n\n\n//# sourceURL=webpack:///./js/grid.js?");

/***/ }),

/***/ "./js/pso.js":
/*!*******************!*\
  !*** ./js/pso.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Particle {\n\n    //I need to figure out if that position is relative to the node we are in and all adjacent nodes\n    constructor(position, velocity, options) {\n        this.position = position;\n        this.velocity = velocity;\n        this.bestPosition = new Array(this.position.length);\n        this.fitness = -Infinity;\n        this.bestFitness = -Infinity;\n\n        this._inertiaWeight = options.inertiaWeight;\n        this._social = options.social;\n        this._personal = options.personal;\n    }\n\n    \n    // this is going to store the current position as its current best as of now\n    storePosition() {\n        this.bestPosition = this.position.slice(0);\n    }\n    // Retrieves the particles current position\n    getPosition() {\n        return this.position.slice(0);\n    }\n    // Retrieves the particles best saved position\n    getBestPosition(){\n        return this.bestPosition.slice(0);\n    }\n\n    //Updates the particles velocity vector based on inertia,\n    //the best performing particle in the swarm and\n    // the best position of the current particle saved\n    updateVelocity(globalBest, random){\n        // !!!!!! need to find out what component is based on particles position\n        this.position.forEach((component, idx) => {\n            let inertia = this.velocity[idx] * this._inertiaWeight;\n            let socialInfluence = (globalBest.position[idx] - component) * random() * this._social;\n            let personalInfluence = (this.bestPosition[idx]- component) * random() * this._personal;\n\n            this.velocity[idx] = inertia + socialInfluence + personalInfluence;\n        }, this); \n    }\n\n    //This will apply the updated velocity\n    updatePosition(){\n        this.velocity.forEach((component, idx) => {\n            this.position[idx] += component;\n        }, this);\n    }\n    \n    static createRandom (domain, options, random) {\n        let position = domain.map((interval) => {\n            return random() * (interval.end - interval.start) + interval.start;\n        });\n        \n        let velocity = domain.map((interval) => {\n            return (random() * (interval.end - interval.start)) * 0.05\n        });\n        \n        return new Particle(position, velocity, options);\n    };\n    // CreateRandom belongs here\n    //-------------------------------------------------------------------------\n    \n    // ------------------------------------------------------------------------\n}\n\n// Used to define domains.\n// An *Interval* is anything with a *start* and an *end*.\nclass Interval {\n    constructor(start, end) {\n        this.start = start;\n        this.end = end;\n    }\n};\n// ------------------------------------------------------------------------\n// Holds particles and carries out the optimization task.\nclass Optimizer {\n    constructor() {\n        this._particles = null;\n        this._objectiveFunction = null;\n        \n        this._bestPositionEver = null;\n        this._bestFitnessEver = -Infinity;\n        \n        this._options = {\n            inertiaWeight: 0.8,\n            social: 0.4,\n            personal: 0.4,\n            pressure: 0.5\n        };\n        \n        this._async = false;\n        this._waiting = false;\n        \n        this.rng = {\n            random: Math.random,\n            setSeed: function () { }\n        };\n    }\n\n    setOptions(options){\n        // + *inertiaWeight* - is multiplied every frame with the previous velocity;\n        // takes values between 0 and 1\n        if (options.inertiaWeight !== undefined) {\n            this._options.inertiaWeight = options.inertiaWeight;\n        }\n\n        // + *social* dictates the influence of the best performing particle when updating particle velocities\n        // takes values between 0 and 1\n        if (options.social !== undefined) {\n            this._options.social = options.social;\n        }\n\n        // + *personal* dictates the influence of a particle's best encountered position\n        // takes values between 0 and 1\n        if (options.personal !== undefined) {\n            this._options.personal = options.personal;\n        }\n\n        // + *pressure* - bias in selecting the best performing particle in the swarm.\n        // Takes values between 0 and 1; 0 meaning that the best is chosen randomly and 1 that\n        // the actual best is computed at every iteration\n        if (options.pressure !== undefined) {\n            this._options.pressure = options.pressure;\n        }\n    }\n\n    setObjectiveFunction(objectiveFunction, options){\n        this._objectiveFunction = objectiveFunction;\n        this._async = options && options.async;\n    }\n\n    init(nParticles, generationOption){\n        let generator = generationOption instanceof Function ?\n            generationOption :\n            function () {\n                return Particle.createRandom(generationOption, this._options, this.rng.random);\n            }.bind(this);\n\n        this._bestPositionEver = null;\n        this._bestFitnessEver = -Infinity;\n\n        this._particles = [];\n        for (let i = 0; i < nParticles; i++) {\n            this._particles.push(generator());\n        }\n    }\n\n    _getRandomBest(except){\n        let ret = Math.floor(this.rng.random() * this._particles.length);\n\n        this._particles.forEach((particle, idx) => {\n            if (\n                this.rng.random() < this._options.pressure &&\n                this._particles[idx].fitness > this._particles[ret].fitness &&\n                idx !== except\n            ) {\n                ret = idx;\n            }\n        }, this)\n\n        return ret;\n    }\n\n    step(callback){\n        if (this._async) {\n            if (this._waiting) {\n                console.warn('Cannot step again before previous requests have been completed!');\n                return;\n            }\n            this._waiting = true;\n            let completed = 0;\n            this._particles.forEach((particle) => {\n                this._objectiveFunction(particle.position, (fitness) => {\n                    particle.fitness = fitness;\n                    completed += 1;\n                    if(completed >= this._particles.length) {\n                        this._waiting = false;\n                        this._completedStep();\n                        callback();\n                    }\n                });\n            }, this)\n        } else {\n            this._particles.forEach((particle) => {\n                particle.fitness = this._objectiveFunction(particle.position);\n            }, this);\n            this._completeStep();\n        }\n    }\n\n    _completeStep(){\n        //record the best found solutions\n        this._particles.forEach((particle) => {\n            if (particle.fitness > particle.bestFitness) {\n                particle.bestFitness = particle.fitness;\n                particle.storePosition();\n\n                if (particle.fitness > this._bestFitnessEver) {\n                    this._bestFitnessEver = particle.fitness;\n                    this._bestPositionEver = particle.getPosition();\n                }\n            }\n        }, this);\n        //update velocities\n        this._particles.forEach((particle, idx) => {\n            let randomBest = this._particles[this._getRandomBest(idx)];\n            particle.updateVelocity(randomBest, this.rng.random);\n        }, this);\n\n        //update positions\n        this._particles.forEach((particle) => {\n            particle.updatePosition();\n        });\n    }\n    // Retrieves an array of all solutions in the swarm\n    getParticles(){\n        return this._particles.map((particle) => {\n            return {\n                position: particle.getPosition(),\n                fitness: particle.fitness,\n                bestPosition: particle.getBestPosition(),\n                bestFitness: particle.bestFitness\n            };\n        });\n    }\n\n    //Retrieves the best solution ever recorded\n    getBestPosition(){\n        return this._bestPositionEver;\n    }\n    // Retrieves the best fitness ever recorded \n    getBestFitness(){\n        return this._bestFitnessEver;\n    }\n    // Retrieves the mean fitness of the entire swarm\n    getMeanFitness(){\n        let sum = this._particles.reduce((partialSum, particle) => {\n            return partialSum + particle.fitness;\n        }, 0);\n        return sum / this._particles.length;\n    }\n\n}\n\nclass ReturnP {\n    constructor() {\n        this.p = new Optimizer();\n        this.range_x = new Interval(0, 30);\n        this.range_y = new Interval(0, 75);\n        this.positions = [];\n        this.velocities = [];\n        this.fitness = [];\n        this.particles = [];\n        this.p.setObjectiveFunction(function (x) { return -(x[0] * x[0] + x[1] * x[1]); });\n        this.p.init(10, [this.range_x, this.range_y])\n    }\n\n    returnValue() {\n        for (let i = 0; i < 30; i++) {\n            this.p.step()\n            for (let j = 0; j < 10; j++) {\n                let pos = this.p._particles[j].position\n                let vel = this.p._particles[j].velocity\n                let fit = this.p._particles[j].fitness\n                this.positions.push(this.roundPos(pos))\n                this.velocities.push(vel)\n                this.fitness.push(fit)\n                this.particles.push(this.p._particles)\n            }\n        }\n    }\n    roundPos(arg) {\n        let x = arg[0]\n        let y = arg[1]\n\n        x = this.positon(Math.round(x));\n        y = this.positon(Math.round(y));\n\n        return [x, y];\n    }\n\n    positon(num) {\n        let new_num = num\n        if (num < 0) {\n            new_num = num * -1\n        } else if (num === -0) {\n            num * -1\n        }\n        return new_num\n    }\n\n\n}\n\n// const r = new ReturnP();\n// r.returnValue();\n// console.log(r.particles)\n\n\nmodule.exports = ReturnP\n\n\n\n//# sourceURL=webpack:///./js/pso.js?");

/***/ }),

/***/ "./js/treetile.js":
/*!************************!*\
  !*** ./js/treetile.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class TreeTile {\n  constructor(pos, color) {\n    this.parent = null;\n    this.children = [];\n    this.color = color;\n    this.pos = pos;\n  }\n\n  changeColor(newColor) {\n    this.color = newColor;\n    return newColor;\n  }\n\n  // Takes in parent node as argument\n  assignParent(node = null) {\n    if (node === null) {\n      this.parent = null;\n      return null;\n    }\n\n    if (this.parent !== null) {\n      this.deleteSelfFromParentChildren(this.parent);\n    }\n    if (!node.children.includes(this)) {\n      node.children.push(this);\n    }\n    this.parent = node;\n    return node;\n  }\n\n  // Delete receiver from the passed in nodes children\n  deleteSelfFromParentChildren(p) {\n    const parent = p;\n    for (let i = 0; i < parent.children.length; i += 1) {\n      if (parent.children[i] === this) {\n        const left = parent.children.slice(0, i);\n        const right = parent.children.slice(i + 1);\n        const newChildren = left.concat(right);\n        parent.children = newChildren;\n        return parent.children;\n      }\n    }\n    return -1;\n  }\n}\n\nmodule.exports = TreeTile;\n\n\n//# sourceURL=webpack:///./js/treetile.js?");

/***/ }),

/***/ "./js/virtualTree.js":
/*!***************************!*\
  !*** ./js/virtualTree.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Virtual Tree class add takes in a grid and grid and start point. Using the \n// start point as a root it creates a tree representin the grid in a bfs manner.\n// N.B. it creates a tree that is not a graph\n// If not start position is given, one is randomly generated\n// const Grid = require('./grid.js');\nclass VirtualTree {\n  constructor(grid, startPos = null) {\n    this.grid = grid;\n\n    this.visited = new Set();\n    this.orderedVisit = [];\n\n    this.startPos = (startPos) || this.grid.randomPosGenerator();\n    this.startTile = this.grid.getTile(this.startPos);\n    this.grid.placeStartTile(this.startPos);\n  }\n\n  validPos(pos) {\n    if (this.grid.validPos(pos) && !this.visited.has(pos.toString())) {\n      return true;\n    }\n    return false;\n  }\n\n  createTree(startTile) {\n    const queue = [startTile];\n    this.visited.add(startTile.pos.toString());\n\n    while (!queue.length < 1) {\n      const curTile = queue.shift();\n      const tiles = this.grid.adjacentTiles(curTile.pos);\n      for (let i = 0; i < tiles.length; i += 1) {\n        if (this.validPos(tiles[i])) {\n          const tile = this.grid.getTile(tiles[i]);\n          tile.assignParent(curTile);\n          queue.push(tile);\n          this.visited.add(tile.pos.toString());\n        }\n      }\n    }\n  }\n}\n\nmodule.exports = VirtualTree;\n\n\n//# sourceURL=webpack:///./js/virtualTree.js?");

/***/ }),

/***/ "./js/visualize.js":
/*!*************************!*\
  !*** ./js/visualize.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const Grid = require('./grid.js');\n// const VirtualTree = require('./virtualTree.js')\n\n\nclass Visualize {\n  constructor(orderedTravesal, travelPath, timeout = 50) {\n    this.orderedTravesal = orderedTravesal;\n    this.travelPath = travelPath;\n    this.traversed = [];\n    this.timeout = timeout;\n  }\n\n  visualizeAlgorithm() {\n    const colors = ['aquamarine', 'red', 'blue', 'blue'];\n    let i = 0;\n    console.log('this is orderedtraversal.length', this.orderedTravesal.length);\n    console.log(this.orderedTravesal);\n    const loopStep = () => {\n      // console.log(\"i at the top of loopstep:\", i)\n      if (i === this.orderedTravesal.length) {\n        this.visualizeTravelPath();\n        return;\n      }\n      const nextPos = this.orderedTravesal[i].parsePos();\n      // Finish the base case for breaking out of the loop\n      setTimeout(() => {\n        const tile = document.getElementById(nextPos);\n        // tile.style.backgroundColor = colors[0]\n        tile.style.backgroundColor = colors[0];\n        colors.rotateRight(1);\n        this.traversed.push(nextPos);\n        loopStep();\n        i += 1;\n      }, this.timeout);\n    };\n    loopStep();\n  }\n\n  visualizeTravelPath() {\n    let i = 0;\n\n    const loopStep = () => {\n      if (i === this.travelPath.length) {\n        return;\n      }\n      const nextPos = this.travelPath[i].parsePos();\n      setTimeout(() => {\n        const tile = document.getElementById(nextPos);\n        tile.style.backgroundColor = 'black';\n        loopStep();\n        i += 1;\n      }, this.timeout);\n    };\n    loopStep();\n  }\n}\n\nArray.prototype.parsePos = function () {\n  const x = this[0];\n  const y = this[1];\n\n  return `${x}-${y}`;\n};\n\nArray.prototype.rotateRight = function (n) {\n  for (let i = 0; i < n; i++) {\n    const color = this.shift();\n    this.push(color);\n  }\n  // return this\n};\n\nmodule.exports = Visualize;\n\n\n//# sourceURL=webpack:///./js/visualize.js?");

/***/ })

/******/ });