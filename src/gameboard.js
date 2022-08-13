



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
    this.placeship = function(x, y, board, color) {
        this.nodeCheck(x, y, color, board)

}
    this.countervalue = 0
    this.counter = function() {

        this.countervalue++
        console.log(this.countervalue)
        return this.countervalue
    }

//Uses X and Y to check if a ship is present
    this.receiveAttack = function(x, y, board) {
        if(this.otherArray[x][y] === 1) {
            this.counter()
            this.nodeCheckTwo(Number(x), Number(y), '#FF160C', board, 'hit')
            this.otherArray[x][y] = 2
    



//Make sure to call Ship.hit() but we need a way of knowing which ship it is?
//Below will mark a hit/ship spot

        } else if(this.otherArray[x][y] === 0) {
            this.nodeCheckTwo(Number(x), Number(y), '#B0FC38', board, 'miss')
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
    this.placeAllShips = function(x, y, board, color) {
        const selector = document.querySelector('.directionbutton')


   
        
        if(selector.classList.contains('horizontal')) {
            for(let i = 0; i < this.shipArray[0].length; i++) {

                    this.placeship(x, y + i, board, color)
                
    
            }
        } else if(selector.classList.contains('vertical')) {
            for(let i = 0; i < this.shipArray[0].length; i++) {
               
                    this.placeship(x + i, y, board, color)
                }

            
        }

        this.shipArray.shift()
        return
    }

    this.computerArray = [
        [0, 1, 2, 3, 4, 5],
        [0, 1, 2, 3, 4, 5, 6],
        [0, 1, 2, 3, 4, 5, 6, 7],
        [0, 1, 2, 3, 4, 5, 6, 7, 8]
    ]
    this.xarray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.yarray = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    this.tryarray = []
    
    this.populateComputerShips = function() { 

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }  
       let targetselect = document.querySelector('.directionbutton') 

       let number1 = getRandomInt(this.computerArray[0].length)
       let number2 = this.computerArray[0][number1]
          console.log(number1, number2)

        this.placeship(0, number2, '.secondboard', 'white')
        this.placeship(0, number2 + 1, '.secondboard', 'white')
        this.placeship(0, number2 + 2, '.secondboard', 'white')
        this.placeship(0, number2 + 3, '.secondboard', 'white')
        this.placeship(0, number2 + 4, '.secondboard', 'white')

        let number3 = getRandomInt(this.computerArray[1].length)
        let number4 = this.computerArray[1][number3]


        this.placeship(7, number4, '.secondboard', 'white')
        this.placeship(7, number4 + 1, '.secondboard', 'white')
        this.placeship(7, number4 + 2, '.secondboard', 'white')
        this.placeship(7, number4 + 3, '.secondboard', 'white')

        let number5 = getRandomInt(this.computerArray[2].length)
        let number6 = this.computerArray[2][number5]

        this.placeship(4, number6, '.secondboard', 'white')
        this.placeship(4, number6 + 1, '.secondboard', 'white')
        this.placeship(4, number6 + 2, '.secondboard', 'white')

        let number7 = getRandomInt(this.computerArray[2].length)
        let number8 = this.computerArray[2][number7]

        this.placeship(8, number8, '.secondboard', 'white')
        this.placeship(8, number8 + 1, '.secondboard', 'white')
        this.placeship(8, number8 + 2, '.secondboard', 'white')

        let number9 = getRandomInt(this.computerArray[3].length)
        let number10 = this.computerArray[3][number9]

        this.placeship(2, number10, '.secondboard', 'white')
        this.placeship(2, number10 + 1, '.secondboard', 'white')
   
   




       /*
        const number1 = getRandomInt(this.xarray.length)
        const number3 = this.xarray[number1]
        const number2 = getRandomInt(6)
        //this.tryarray.push(number3)


        console.log(number1, number2)
        this.placeship(number3, number2, '.secondboard', 'blue')
        this.placeship(number3, number2 + 1, '.secondboard', 'blue')
        this.placeship(number3, number2 + 2, '.secondboard', 'blue')
        this.placeship(number3, number2 + 3, '.secondboard', 'blue')
        this.placeship(number3, number2 + 4, '.secondboard', 'blue')
        this.xarray.splice(number3, 1)

        const number4 = getRandomInt(this.xarray.length)
        const number5 = this.xarray[number4]
        const number6 = getRandomInt(7)



  
        this.placeship(number5, number6, '.secondboard', 'blue')
        this.placeship(number5, number6 + 1, '.secondboard', 'blue')
        this.placeship(number5, number6 + 2, '.secondboard', 'blue')
        this.placeship(number5, number6 + 3, '.secondboard', 'blue')
        this.xarray.splice(number5, 1)

        const number7 = getRandomInt(this.xarray.length)
        const number8 = this.xarray[number7]
        const number9 = getRandomInt(8)



  
        this.placeship(number7, number8, '.secondboard', 'blue')
        this.placeship(number7, number8 + 1, '.secondboard', 'blue')
        this.placeship(number7, number8 + 2, '.secondboard', 'blue')
        this.xarray.splice(number7, 1)





        /*
        let number3 = getRandomInt(9)
        const number4 = getRandomInt(7)
        console.log(number3, number4)
        for(let i = 0; i < this.tryarray.length; i++) {
            if(number3 === this.tryarray[i]) {
        
                console.log(number3)
                number3 = getRandomInt(9)
                console.log('test')
                console.log(number3)
                return
            }else if (number3 !== this.tryarray[i]){
                console.log('test2')

                this.placeship(number3, number4, '.secondboard', 'blue')
                this.placeship(number3, number4 + 1, '.secondboard', 'blue')
                this.placeship(number3, number4 + 2, '.secondboard', 'blue')
                this.placeship(number3, number4 + 3, '.secondboard', 'blue')
            }
        }*/

 /*
            let firstIndex = getRandomInt(this.yarray.length)
            let firstnumber = this.yarray[firstIndex]
            let secondIndex = getRandomInt(this.computerArray[0].length + 1)
            let secondnumber = this.computerArray[0][secondIndex]
            let fifthnumber = getRandomInt(this.xarray.length)
            let sixthnumber = this.xarray[fifthnumber]
            console.log(fifthnumber)
            console.log(sixthnumber, secondnumber)
                    this.placeship(sixthnumber, secondnumber, '.secondboard', 'blue')
                    this.placeship(sixthnumber, secondnumber + 1, '.secondboard', 'blue')
                    this.placeship(sixthnumber, secondnumber + 2, '.secondboard', 'blue')
                    this.placeship(sixthnumber, secondnumber + 3, '.secondboard', 'blue')
                    this.placeship(sixthnumber, secondnumber + 4, '.secondboard', 'blue')
            this.yarray.splice(firstIndex, 1)
            this.xarray.splice(sixthnumber, 1)


        


            let thirdIndex = getRandomInt(this.yarray.length) 
            let thirdnumber = this.yarray[thirdIndex]
            let fourthIndex = getRandomInt(this.computerArray[1].length + 1)
            let fourthnumber = this.computerArray[1][thirdIndex]
            let seventhnumber = getRandomInt(this.xarray.length)
            let eighthnumber = this.xarray[seventhnumber]
            console.log(seventhnumber)
            console.log(eighthnumber, fourthnumber)
            this.placeship(eighthnumber, fourthnumber, '.secondboard', 'blue')
            this.placeship(eighthnumber, fourthnumber + 1, '.secondboard', 'blue')
            this.placeship(eighthnumber, fourthnumber + 2, '.secondboard', 'blue')
            this.placeship(eighthnumber, fourthnumber + 3, '.secondboard', 'blue')

                this.yarray.splice(thirdIndex, 1)
                this.xarray.splice(eighthnumber, 1)





            console.log(thirdnumber)

            console.log(thirdnumber)
     */
         

     /*
            let firstIndex = getRandomInt(this.xarray.length - 1)
            let thirdnumber = getRandomInt(this.computerArray[1].length + 1)
            let fourthnumber =this.xarray[firstIndex]
                    console.log(thirdnumber, fourthnumber)
                    this.placeship(thirdnumber, fourthnumber, '.secondboard', 'blue')
                    this.placeship(thirdnumber, fourthnumber + 1, '.secondboard', 'blue')
                    this.placeship(thirdnumber, fourthnumber + 2, '.secondboard', 'blue')
                    this.placeship(thirdnumber, fourthnumber + 3, '.secondboard', 'blue')

            this.xarray.splice(Number(thirdnumber), 1)

            let secondIndex = getRandomInt(this.xarray.length - 1)
            let fifthnumber = getRandomInt(this.computerArray[2].length + 1)
            let sixthnumber = getRandomInt = this.xarray[secondIndex]
                    console.log(fifthnumber, sixthnumber)
                    this.placeship(fifthnumber, sixthnumber, '.secondboard', 'blue')
                    this.placeship(fifthnumber, sixthnumber + 1, '.secondboard', 'blue')
                    this.placeship(fifthnumber, sixthnumber + 2, '.secondboard', 'blue')

            this.xarray.splice(Number(fifthnumber), 1)*/
/*
            let thirdIndex = getRandomInt(this.xarray.length - 1)
            let seventhnumber = getRandomInt(this.computerArray[2].length + 1)
            let eightnumber = getRandomInt = this.xarray[thirdIndex]
                    console.log(fifthnumber, sixthnumber)
                    this.placeship(seventhnumber, eightnumber, '.secondboard', 'blue')
                    this.placeship(seventhnumber, eightnumber + 1, '.secondboard', 'blue')
                    this.placeship(seventhnumber, eightnumber + 2, '.secondboard', 'blue')
        */
        


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

    
       console.log(this.availableArray)





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