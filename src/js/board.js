const container = document.getElementsByClassName("board-container")[0];

function makeRows(rows, cols) {
    for (i = 0; i < rows; i++) {
        
        let row = document.createElement("div");
        row.className = 'grid-row';
        container.appendChild(row);

        for (j = 0; j < cols; j++){
            let cell = document.createElement("div");
            // cell.setAttribute("id", `${row}${col}`)
            // cell.innerText = (c + 1);
            cell.className = 'grid-item';
            row.appendChild(cell)
            cell.id = `${i}-${j}`;
        }
    };
};

// function grid() {
//     let length = 525;
//     let width = 6;

//     let colors = ["red", "orange", "yellow", "green", "blue", "purple"]
//     // for (let i = 0; i < length; i++) {
//     let i = 0;
//     // debugger
//     function loopStep() {
//         if (i === length) {
//             return
//         }
//         setTimeout(function () {
//             // setTimeout(function() {
//             // debugger
//             const tile = document.getElementsByClassName("grid-item")[i]
//             tile.style.backgroundColor = colors[0]
//             // .style.backgroundColor = colors[0]
//             colors.rotateRight(1)
//             loopStep();
//             // }, 0); 
//             i++;
//         }, 50);
//     }

//     loopStep();
//     // }
// }

Array.prototype.rotateRight = function (n) {
    for (let i = 0; i < n; i++) {
        let color = this.shift()
        this.push(color);
    }
    // return this
}

makeRows(30, 75);

// grid();