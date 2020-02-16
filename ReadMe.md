
# Structure Overview
- TreeTile: acts as a tree node and tile in board
- Grid: generate a board of treeTiles to specified dimensions
- VirtualTree: generate a tree based on a specified grid and a starting position. 
Uses BFS like strategy to create tree starting with nearest neighbours. 
- BFS: accepts a root node (that should be the start tile from the virtual tree)
and an endPos that is simply a cordinate on the board.
- Visualize: responsible for dom manipulation according to algorithm outputs
- App: currently just calls relevant classes. Board/ start point/ end point/ algo choice are hard coded.
In the future all board setup, alogrithm choice, start/end point etc. will be user entered.


# Future Work
## Algo's to implement
- Swarm
- A*
- DFS
- Branching paths - Done
- BFS - Done

## Maze generators to implement
- Recursive

## TODOs
- implement user maze creation by clicking on tiles
  - change grid to ignore user maze tiles
- Visualize graph
- Interactive nodes: details such as edges, position etc. on hover

## Other Notes

### linter up our linter
> [link to setup](https://scotch.io/tutorials/linting-and-formatting-with-eslint-in-vs-code)

### commands to run if do not have node modules
$ npm install eslint -g
$ eslint --init
$ npx webpack
$ webpack --watch --mode=development

<!-- ```
$ npm install eslint -g
$ eslint --init
$ webpack app.js -o bundle.js --mode=development
``` -->


