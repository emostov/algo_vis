//This will allow the user to make walls


class Controller {

    constructor() {
        this.startTile;
        this.previous;
        this.buttonHash = {
            "Start Tile": true,
            "Target Tile": false,
            "Wall Tile": false
        };  
        document.getElementById('start-tile').addEventListener('click', () => {
            this.buttonReset("Start Tile");
        });
        document.getElementById('target-tile').addEventListener('click', () => {
            this.buttonReset("Target Tile");
        });
        document.getElementById('wall-tile').addEventListener('click', () => {
            this.buttonReset("Wall Tile");
        });
        this.changeTiles();
    };

    reset(button) {
        Object.keys(this.buttonHash).forEach((tile) => {
            if (tile !== button) this.buttonHash[tile] = false;
        });
    };
    
    buttonReset(button){
        if (this.buttonHash[button] === false) {
            this.buttonHash[button] = true
            this.reset(button)
            console.log(this.buttonHash)
        };
    };

    changeTiles() {
        let currentButton;
        
        // debugger
        Object.keys(this.buttonHash).forEach((el) => {
            if(this.buttonHash[el] === true) currentButton = el;
        }) 

        if (currentButton === 'Start Tile') {
            document.getElementsByClassName('board-container')[0].addEventListener('mousedown', (el) => {
                let start = el.target;
                this.previous = document.getElementById(this.startTile)
                this.startTile = start.id;
                console.log("this is the start div:", start)
                console.log("this is the previous div:",this.previous)
                console.log(this.startTile)
                if(this.previous !== null) {
                    this.previous.classList.toggle('start-tile')
                    
                } 
                if (start !== this.start) {
                    start.classList.toggle('start-tile');
                    
                }


                // document.getElementById(`${t.id}`)
                
            });
        };

        if (currentButton === 'Target Tile') {

        }

        if (currentButton === 'Wall Tile') {

        }

    }
}
module.exports = Controller