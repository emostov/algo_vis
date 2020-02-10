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

eval("// make board\n// give board to virtual tree to make virtualTree\n// get orderTraversal from bfs by giving it root of virtual tree\n// get pathBack from BFS\nconst Board = __webpack_require__(/*! ./js/board.js */ \"./js/board.js\");\nconst Grid = __webpack_require__(/*! ./js/grid.js */ \"./js/grid.js\");\nconst VirtualTree = __webpack_require__(/*! ./js/virtualTree.js */ \"./js/virtualTree.js\");\n\nconst Visualize = __webpack_require__(/*! ./js/visualize.js */ \"./js/visualize.js\");\nconst BFS = __webpack_require__(/*! ./js/bfs.js */ \"./js/bfs.js\");\n\n\nconst b1 = new Board(30, 75);\nb1.makeRows();\nb1.addSomeTilesClasses();\n\nfunction spotTest() {\n  const grid = new Grid(30, 75);\n  const virtualTree = new VirtualTree(grid, [15, 37]);\n\n  // console.log(g.adjacentTiles([1, 2]))\n  const t = virtualTree.createTree(virtualTree.startTile);\n  // console.log(virtualTree)\n  const b = new BFS(virtualTree.startTile, [6, 6]);\n  // console.log(g.board);\n  // const endTile = b.breadthFirstSearch()\n  const travelPath = b.createPathBack();\n  const visualize = new Visualize(b.orderedTravesal, b.travelPath, 5);\n  visualize.visualizeAlgorithm();\n  // console.log(\"ordered traversal is: \", b.orderedTravesal)\n\n  // console.log(\"travel path is: \", b.travelPath)\n\n  // console.log(\"orderd traversal positions: \", orderedTravesal)\n}\n\n\nspotTest();\n\n\n//# sourceURL=webpack:///./app.js?");

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

/***/ "./js/grid.js":
/*!********************!*\
  !*** ./js/grid.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const TreeTile = __webpack_require__(/*! ./treetile.js */ \"./js/treetile.js\");\n\nclass Grid {\n  constructor(row, col) {\n    // baseline settup - nothing before here\n    this.board = new Array(row).fill(null).map(() => new Array(col).fill(null));\n    this.height = row;\n    this.width = col;\n\n    // secondary setup\n    this.placeTiles();\n  }\n\n  placeTiles() {\n    for (let i = 0; i < this.height; i += 1) {\n      for (let j = 0; j < this.width; j += 1) {\n        const newTile = new TreeTile([i, j], 'fourtwenty');\n        this.board[i][j] = newTile;\n      }\n    }\n  }\n\n  randomPosGenerator() {\n    const row = Math.floor(Math.random() * this.height);\n    const col = Math.floor(Math.random() * this.width);\n    return [row, col];\n  }\n\n  placeStartTile(pos) {\n    const tile = this.getTile(pos);\n    tile.color = 'white';\n  }\n\n  getTile(pos) {\n    const row = pos[0];\n    const col = pos[1];\n    const tile = this.board[row][col];\n    return tile;\n  }\n\n  validPos(pos) {\n    const pX = pos[0];\n    const pY = pos[1];\n    if (pX < this.height && pY < this.width && pX >= 0 && pY >= 0) {\n      return true;\n    }\n    return false;\n  }\n\n  adjacentTiles(pos) {\n    const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];\n    const adjTiles = [];\n    const pX = pos[0];\n    const pY = pos[1];\n\n    for (let i = 0; i < deltas.length; i += 1) {\n      const delt = deltas[i];\n      const dX = delt[0];\n      const dY = delt[1];\n      const newPosX = pX + dX;\n      const newPosY = pY + dY;\n      const newPos = [newPosX, newPosY];\n      if (this.validPos(newPos)) {\n        adjTiles.push(newPos);\n      }\n    }\n    return adjTiles;\n  }\n}\n\n\nmodule.exports = Grid;\n\n\n//# sourceURL=webpack:///./js/grid.js?");

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

eval("// const Grid = require('./grid.js');\n// const VirtualTree = require('./virtualTree.js')\n\n\nclass Visualize {\n  constructor(orderedTravesal, travelPath, timeout) {\n    this.orderedTravesal = orderedTravesal;\n    this.travelPath = travelPath;\n    this.traversed = [];\n    this.timeout = timeout;\n  }\n\n  visualizeAlgorithm() {\n    const colors = ['red', 'yellow', 'orange', 'purple'];\n    let i = 0;\n    console.log('this is orderedtraversal.length', this.orderedTravesal.length);\n    console.log(this.orderedTravesal);\n    const loopStep = () => {\n      // console.log(\"i at the top of loopstep:\", i)\n      if (i === this.orderedTravesal.length) {\n        this.visualizeTravelPath();\n        return;\n      }\n      const nextPos = this.orderedTravesal[i].parsePos();\n      // Finish the base case for breaking out of the loop\n      setTimeout(() => {\n        const tile = document.getElementById(nextPos);\n        // tile.style.backgroundColor = colors[0]\n        tile.style.backgroundColor = colors[0];\n        colors.rotateRight(1);\n        this.traversed.push(nextPos);\n        loopStep();\n        i += 1;\n      }, this.timeout);\n    };\n    loopStep();\n  }\n\n  visualizeTravelPath() {\n    let i = 0;\n\n    const loopStep = () => {\n      if (i === this.travelPath.length) {\n        return;\n      }\n      const nextPos = this.travelPath[i].parsePos();\n      setTimeout(() => {\n        const tile = document.getElementById(nextPos);\n        tile.style.backgroundColor = 'black';\n        loopStep();\n        i += 1;\n      }, this.timeout);\n    };\n    loopStep();\n  }\n}\n\nArray.prototype.parsePos = function () {\n  const x = this[0];\n  const y = this[1];\n\n  return `${x}-${y}`;\n};\n\nArray.prototype.rotateRight = function (n) {\n  for (let i = 0; i < n; i++) {\n    const color = this.shift();\n    this.push(color);\n  }\n  // return this\n};\n\nmodule.exports = Visualize;\n\n\n//# sourceURL=webpack:///./js/visualize.js?");

/***/ })

/******/ });