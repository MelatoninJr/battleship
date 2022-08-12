import './style.css';
import gameboard from './gameboard.js'
import ship from './ship.js'

const bodyselect = document.getElementById('content')

const header = document.createElement('div')
header.classList.add('header')
bodyselect.append(header)

const bodycontainer = document.createElement('div')
bodycontainer.classList.add('bodycontainer')
bodyselect.append(bodycontainer)

const footer = document.createElement('div')
footer.classList.add('footer')
bodyselect.append(footer)

const bodyOne = document.createElement('div')
bodyOne.classList.add('bodyone')
const bodyTwo = document.createElement('div')
bodyTwo.classList.add('bodytwo')
bodycontainer.append(bodyOne, bodyTwo)


const directionButton = document.createElement('button')
directionButton.classList.add('directionbutton')
directionButton.textContent = 'Rotate'
directionButton.classList.add('horizontal')
directionButton.type = 'button'
bodyOne.append(directionButton)


const bodyOneContainer = document.createElement('div')
bodyOneContainer.classList.add('bodyonecontainer')
bodyOne.append(bodyOneContainer)




const popBoard = document.createElement('div')
popBoard.classList.add('popboard')
bodyOneContainer.append(popBoard)

const firstBoard = document.createElement('div')
firstBoard.classList.add('firstboard')
const secondBoard = document.createElement('div')
secondBoard.classList.add('secondboard')
bodyTwo.append(firstBoard, secondBoard)



//Call new gameboards to be created 
const popupBoard = new gameboard()
const playerBoard = new gameboard()
const computerBoard = new gameboard()

//Call gameboard method to create them visually
popupBoard.visualcreate(popBoard, popupBoard)
playerBoard.visualcreate(firstBoard, playerBoard)
computerBoard.visualcreate(secondBoard, computerBoard)




computerBoard.placeship(9,1, '.secondboard')
computerBoard.placeship(9,2, '.secondboard')
computerBoard.placeship(9,3, '.secondboard')



//popupBoard.placeship(0,0, '.popboard')
//popupBoard.placeship(1,1, '.popboard')


directionButton.addEventListener('click', function(e) {
    if(e.target.classList.contains('horizontal')) {
        e.target.classList.remove('horizontal')
        e.target.classList.add('vertical')
    } else if(e.target.classList.contains('vertical')){
        e.target.classList.remove('vertical')
        e.target.classList.add('horizontal')
    }
})

popBoard.addEventListener('mouseover', (e) => {
    let target = e.target
    let x = Number(target.dataset.xaxis)
    let y = Number(target.dataset.yaxis)

    //console.log(popupBoard.shipArray)
    //console.log(popupBoard.shipArray[0].length)

    for(let i = 0; i < popupBoard.shipArray[0].length; i++) {
        popupBoard.nodeCheckThree((x), (y + i), 'black', '.popboard')
    }



target.addEventListener("click", function(t) {
    let targettwo = t.target
    let a = Number(targettwo.dataset.xaxis)
    let b = Number(targettwo.dataset.yaxis)
    console.log(targettwo.dataset.xaxis, targettwo.dataset.yaxis, targettwo)
    popupBoard.placeAllShips(a, b, '.popboard')
    playerBoard.placeAllShips(a, b, '.firstboard')
    console.log(popupBoard.otherArray)
})


})

popBoard.addEventListener('mouseout', (e) => {
    let target = e.target
    let x = Number(target.dataset.xaxis)
    let y = Number(target.dataset.yaxis)
    //console.log(target)
    //console.log(target, x, y)
    
    if(target.classList.contains('ship')) {
        for(let i = 0; i < popupBoard.shipArray[0].length; i++) {
            popupBoard.nodeCheckThree((x), (y + i + 1), 'white', '.popboard')
        }
        return
    }else {
        for(let i = 0; i < popupBoard.shipArray[0].length; i++) {
            popupBoard.nodeCheckThree((x), (y + i), 'white', '.popboard')
        }
    }


})






//Add event listener 
secondBoard.addEventListener('click', function(e) {
    console.log(e.target)
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }      

    let randomThree = getRandomInt(computerBoard.availableArray.length)
    let randomFour =computerBoard.availableArray[randomThree][0]
    let randomFive =computerBoard.availableArray[randomThree][1]
    let target = e.target
    let board = '.firstboard'
    let boardtwo = '.secondboard'
 
        

        if(computerBoard.countervalue === 2) {
            console.log('battleship')
        }
        

        if(target.classList.contains('hit') || target.classList.contains('miss')) {
        return
        } 
        
        else {
        computerBoard.receiveAttack(target.dataset.xaxis, target.dataset.yaxis, boardtwo)
        playerBoard.receiveAttack(randomFour, randomFive, board)
        computerBoard.removeFromArray(randomFour, randomFive)
        }



})












const shipOne = new ship(1)
const shipTwo = new ship(2)
const shipThree = new ship(3)
const shipFour = new ship(4)
const shipFive = new ship(5)


