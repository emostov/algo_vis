
## structure overview
- TreeTile: acts as a tree node and tile in board
- Grid: generate a board of treeTiles to specified dimensions
- VirtualTree: generate a tree based on a specified grid and a starting position. 
Uses BFS like strategy to create tree started with nearest neighbours. 
- BFS: accepts a root node (that should be the start tile from the virtual tree)
and an endPos that is simply a cordinate on the board.


## Setting up our linter
> https://scotch.io/tutorials/linting-and-formatting-with-eslint-in-vs-code

### commands to run if do not have node modules
- npm install eslint -g
- eslint --init

### vscode extensions
- ESLint

