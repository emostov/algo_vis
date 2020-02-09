class Board {
  constructor(row, col) {
    this.rowLen = row;
    this.colLen = col;
  }

  makeRows() {
    const container = document.getElementsByClassName('board-container')[0]
    for (let i = 0; i < this.rowLen; i += 1) {
      const row = document.createElement('div');
      row.className = 'grid-row';
      container.appendChild(row);

      for (let j = 0; j < this.colLen; j += 1) {
        const cell = document.createElement('div');
        cell.className = 'grid-item';
        row.appendChild(cell);
        cell.id = `${i}-${j}`;
      }
    };
  }

  addSomeTilesClasses() {
    const classes = ['start-tile', 'target-tile', 'unvisited-tile', 'wall-tile', 'shortest-path-tile', 'visited-tile'];

    for (let i = 0; i < this.rowLen; i += 3) {
      for (let j = 0; j < this.colLen; j += 3) {
        const curEl = document.getElementById(`${i}-${j}`);
        // const ranNum = (Math.floor((Math.random() * 10) / 1));
        // curEl.classList.add(classes[ranNum]);
      }
    }
  }
}

// module.exports = Board;

// b1 = new Board(30, 75);
// b1.makeRows();
// b1.addSomeTilesClasses()
