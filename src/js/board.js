const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        // cell.setAttribute("id", `${row}${col}`)
        // cell.innerText = (c + 1);
        container.appendChild(cell).className = 'grid-item';
        container.appendChild(cell).idName = ''

    };
};

function grid() {
    let length = 525;
    let width = 6;

    let colors = ["red", "orange", "yellow", "green", "blue", "purple"]
    // for (let i = 0; i < length; i++) {
    let i = 0;
    // debugger
    function loopStep() {
        if (i === length) {
            return
        }
        setTimeout(function () {
            // setTimeout(function() {
            // debugger
            const tile = document.getElementsByClassName("grid-item")[i]
            tile.style.backgroundColor = colors[0]
            // .style.backgroundColor = colors[0]
            colors.rotateRight(1)
            loopStep();
            // }, 0); 
            i++;
        }, 50);
    }

    loopStep();
    // }
}

Array.prototype.rotateRight = function (n) {
    for (let i = 0; i < n; i++) {
        let color = this.shift()
        this.push(color);
    }
    // return this
}




makeRows(29, 60);

grid();