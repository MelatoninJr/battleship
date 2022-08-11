

const Gameboard = function(appendone, appendtwo) {
//
    this.otherArray = []
    this.create = function() {
        for(let i = 0; i < 10; i++) {
            let array = []
            for(let j = 0; j < 10; j++) {
                array.push(0)
            }
            this.otherArray.push(array)
            }
        }
//callas this.create on object cretion    
    this.create()


    this.visualcreate = function (x, y) {
        for(let i = 0; i < 10; i++) {
            const row = document.createElement('div')
            row.classList.add('row')
            x.append(row)
            for(let j = 0; j < 10; j++) {
                const column = document.createElement('div')
                column.classList.add('column')
                column.dataset.xaxis = i
                column.dataset.yaxis = j
                column.value = this.otherArray[i][j]
                row.append(column)
            }
    
        }
    }
//Query selects the appropriate board. Finds the correct square compared to node list and change the color of the square.
    this.nodeCheck = function(x, y, color, board, classname) {
        const columnGrab = document.querySelector(board).querySelectorAll('.column')
        for(let i = 0; i < columnGrab.length; i++) {
            if(Number(columnGrab[i].dataset.xaxis) === x && Number(columnGrab[i].dataset.yaxis) === y) {
                this.otherArray[x][y] = 1
                columnGrab[i].classList.add(classname)
                columnGrab[i].style.backgroundColor = color
            }
        }
    }

//Uses X and Y coordinates to place ship on 2D gameboard Array
    this.placeship = function(x, y, board) {
        this.nodeCheck(x, y, 'black', board)
}



//Uses X and Y to check if a ship is present
    this.receiveAttack = function(x, y, board) {
        if(this.otherArray[x][y] === 1) {
            this.nodeCheck(Number(x), Number(y), 'red', board, 'hit')
            this.otherArray[x][y] = 2
            //console.log("there is a ship present")



//Make sure to call Ship.hit() but we need a way of knowing which ship it is?
//Below will mark a hit/ship spot

        } else if(this.otherArray[x][y] === 0) {
            this.nodeCheck(Number(x), Number(y), 'green', board, 'miss')
            //console.log("there is not a ship present")
            this.otherArray[x][y] = 3

//Need to mark with hit/missed class
//Below will mark a hit/missed spot.
        }
    }




    this.isSunk = function() {
//Query select all ship objects
//Test if all query variables length = their counter. If it does that means all ships are sunk.
        const boatSelector = document.querySelectorAll('.column')

    if(1 === 1) {
        return "Yes"
    }




    }

  };





  module.exports = Gameboard;