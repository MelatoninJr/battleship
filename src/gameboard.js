

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
                columnGrab[i].classList.add('ship')
                this.otherArray[x][y] = 1
                columnGrab[i].classList.add(classname)
                columnGrab[i].style.backgroundColor = color
            }
        }
    }

    this.nodeCheckTwo = function(x, y, color, board, classname) {
        const columnGrab = document.querySelector(board).querySelectorAll('.column')
        for(let i = 0; i < columnGrab.length; i++) {
            if(Number(columnGrab[i].dataset.xaxis) === x && Number(columnGrab[i].dataset.yaxis) === y) {
                this.otherArray[x][y] = 1
                columnGrab[i].classList.add(classname)
                columnGrab[i].style.backgroundColor = color
            }
        }
    }

    this.nodeCheckThree = function(x, y, color, board, classname) {
        const columnGrab = document.querySelector(board).querySelectorAll('.column')
        for(let i = 0; i < columnGrab.length; i++) {
            if(Number(columnGrab[i].dataset.xaxis) === x && Number(columnGrab[i].dataset.yaxis) === y) {
                if(columnGrab[i].classList.contains('ship')) {

                    //columnGrab[i].style.backgroundColor = 'black'
                }else {columnGrab[i].style.backgroundColor = color}
               
            }
        }
    }

//Uses X and Y coordinates to place ship on 2D gameboard Array
    this.placeship = function(x, y, board) {
        this.nodeCheck(x, y, 'black', board)
}
    this.countervalue = 0
    this.counter = function() {

        this.countervalue++
        return this.countervalue
    }

//Uses X and Y to check if a ship is present
    this.receiveAttack = function(x, y, board) {
        if(this.otherArray[x][y] === 1) {
            this.counter()
            this.nodeCheckTwo(Number(x), Number(y), 'red', board, 'hit')
            this.otherArray[x][y] = 2
    



//Make sure to call Ship.hit() but we need a way of knowing which ship it is?
//Below will mark a hit/ship spot

        } else if(this.otherArray[x][y] === 0) {
            this.nodeCheckTwo(Number(x), Number(y), 'green', board, 'miss')
            this.otherArray[x][y] = 3

//Need to mark with hit/missed class
//Below will mark a hit/missed spot.
        }
    }
    this.usedArray = [['','']]
    this.usedCoords = function (x, y) {
        let numberone = Number(x)
        let numbertwo = Number(y)




        for(let i = 0; i < this.usedArray.length; i++) {
            for (let j = 0; j < 1; j++) {
                if(this.usedArray[i][j] === numberone && this.usedArray[i][j + 1] === numbertwo) {
                    return 1

                } else {

                }

            }

        }
        this.usedArray.push([numberone, numbertwo])


    }



    this.shipArray = [[1, 2, 3, 4, 5],
                        [1, 2, 3, 4],
                        [1, 2, 3],
                        [1, 2, 3],
                        [1, 2]
]
    this.countertwo = 5
    this.placeAllShips = function(x, y, board) {
        const selector = document.querySelector('.directionbutton')

        
        if(selector.classList.contains('horizontal')) {
            for(let i = 0; i < this.shipArray[0].length; i++) {
                if(((y + this.shipArray[0].length - 1) >= 10) || ((x + this.shipArray[0].length - 1) >= 10)) {
                    return
                }else {
                    this.placeship(x, y + i, board)
                }
    
            }
        } else if(selector.classList.contains('vertical')) {
            for(let i = 0; i < this.shipArray[0].length; i++) {
                if(((y + this.shipArray[0].length - 1) >= 10) ||(x + this.shipArray[0].length - 1) >= 10) {
                    return
                }else {
                    this.placeship(x + i, y, board)
                }

            }
        }

        this.shipArray.shift()
        return
    }


    this.populateComputerShips = function() { 

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }  
        let targetselect = document.querySelector('.directionbutton') 

       let firstnumber = (10 - Number(this.shipArray[0].length))
       let secondnumber = (9)
       let thirdnumber = getRandomInt(firstnumber)
       let fourthnumber = getRandomInt(secondnumber)
       console.log(this.shipArray)
       console.log(thirdnumber, firstnumber)
       /*
       for(let j = 0; j < this.shipArray[0].length; j++) {
        if(this.otherArray[thirdnumber][fourthnumber + j] === 1){
            return
        }else {
            for(let i = 0; i < this.shipArray[0].length; i++) {
                this.placeship(thirdnumber, fourthnumber + i, '.secondboard')
                
            
           }
        }
        this.shipArray.shift()
       }*/

       this.placeAllShips(thirdnumber, fourthnumber, '.secondboard')

    } 




    this.availableArray = []
    this.populateArray = function() {
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j< 10; j++) {
                this.availableArray.push([i, j])
            }
        }
    }
    this.populateArray()

    this.removeFromArray = function(x,y) {
        let numberone = Number(x)
        let numbertwo = Number(y)




        for(let i = 0; i < this.availableArray.length; i++) {
            for (let j = 0; j < 1; j++) {
                if(this.availableArray[i][j] === numberone && this.availableArray[i][j + 1] === numbertwo) {
                    this.availableArray.splice(i, 1)


                } else {

                }

            }

        }
        this.usedArray.push([numberone, numbertwo])
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