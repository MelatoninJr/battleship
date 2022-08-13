import './style.css';
import gameboard from './gameboard.js'
import ship from './ship.js'

const bodyselect = document.getElementById('content')

const header = document.createElement('div')
header.classList.add('header')
header.textContent = 'BattleShip'
bodyselect.append(header)

const bodycontainer = document.createElement('div')
bodycontainer.classList.add('bodycontainer')
bodyselect.append(bodycontainer)

const footer = document.createElement('div')
footer.classList.add('footer')
bodyselect.append(footer)

const footerContainer = document.createElement('div')
footerContainer.classList.add('footercontaienr')
footer.append(footerContainer)


const bodyOne = document.createElement('div')
bodyOne.classList.add('bodyone')
const bodyTwo = document.createElement('div')
bodyTwo.classList.add('bodytwo')
bodycontainer.append(bodyOne, bodyTwo)

const buttoncontainer = document.createElement('div')
buttoncontainer.classList.add('buttoncontainer')
bodyOne.append(buttoncontainer)







const bodyOneContainer = document.createElement('div')
bodyOneContainer.classList.add('bodyonecontainer')
bodyOne.append(bodyOneContainer)

const directionButton = document.createElement('button')
directionButton.classList.add('directionbutton')
directionButton.textContent = 'Rotate'
directionButton.classList.add('horizontal')
directionButton.type = 'button'
bodyOneContainer.append(directionButton)



const popBoard = document.createElement('div')
popBoard.classList.add('popboard')
bodyOneContainer.append(popBoard)

const playButton = document.createElement('button')
playButton.classList.add('playbutton')
playButton.type = 'button'
playButton.textContent = 'Play'
bodyOneContainer.append(playButton)

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





directionButton.addEventListener('click', function(e) {
    if(e.target.classList.contains('horizontal')) {
        e.target.classList.remove('horizontal')
        e.target.classList.add('vertical')
    } else if(e.target.classList.contains('vertical')){
        e.target.classList.remove('vertical')
        e.target.classList.add('horizontal')
    }
})

playButton.addEventListener('click', function(e) {
    //computerBoard.populateComputerShips()
/*
    for(let i = 0; i < computerBoard.shipArray.length; i++) {
        if(computerBoard.shipArray[0].length === undefined) {
            computerBoard.populateComputerShips()
        }else {
            computerBoard.populateComputerShips()
        }
    }*/

    computerBoard.populateComputerShips()
    let target = document.querySelector('.bodyone')
    target.remove()

})

popBoard.addEventListener('mouseover', (e) => {
    let target = e.target
    let x = Number(target.dataset.xaxis)
    let y = Number(target.dataset.yaxis)

    if(directionButton.classList.contains('horizontal')) {
        for(let i = 0; i < popupBoard.shipArray[0].length; i++) {
            popupBoard.nodeCheckThree((x), (y + i), 'black', '.popboard')
        }

    }else if(directionButton.classList.contains('vertical')) {
        for(let i = 0; i < popupBoard.shipArray[0].length; i++) {
            popupBoard.nodeCheckThree((x + i), (y), 'black', '.popboard')
        }
    }


})

popBoard.addEventListener('click', function(e) {
    let targettwo = e.target
    let a = Number(targettwo.dataset.xaxis)
    let b = Number(targettwo.dataset.yaxis)
    popupBoard.placeAllShips(a, b, '.popboard', 'black')
    playerBoard.placeAllShips(a, b, '.firstboard', 'black')


})

popBoard.addEventListener('mouseout', (e) => {
    let target = e.target
    let x = Number(target.dataset.xaxis)
    let y = Number(target.dataset.yaxis)

    
    if(target.classList.contains('ship')) {
        if(directionButton.classList.contains('horizontal')) {
            for(let i = 0; i < popupBoard.shipArray[0].length; i++) {
                popupBoard.nodeCheckThree((x), (y + i + 1), 'white', '.popboard')
            }
            return

        } else if(directionButton.classList.contains('vertical')) {
            for(let i = 0; i < popupBoard.shipArray[0].length; i++) {
                popupBoard.nodeCheckThree((x + i + 1), (y), 'white', '.popboard')
            }
            return
        }
 
        return
    }else {
        if(directionButton.classList.contains('horizontal')) {
            for(let i = 0; i < popupBoard.shipArray[0].length; i++) {
                popupBoard.nodeCheckThree((x), (y + i), 'white', '.popboard')
            }
        } else if(directionButton.classList.contains('vertical')) {
            for(let i = 0; i < popupBoard.shipArray[0].length; i++) {
                popupBoard.nodeCheckThree((x + i), (y), 'white', '.popboard')
            }

        }
    }


})






//Add event listener 
secondBoard.addEventListener('click', function(e) {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }      

    let randomThree = getRandomInt(computerBoard.availableArray.length)
    let randomFour =computerBoard.availableArray[randomThree][0]
    let randomFive =computerBoard.availableArray[randomThree][1]
    let target = e.target
    let board = '.firstboard'
    let boardtwo = '.secondboard'
 
        


        

        if(target.classList.contains('hit') || target.classList.contains('miss')) {
        return
        } 
        
        else {
        computerBoard.receiveAttack(target.dataset.xaxis, target.dataset.yaxis, boardtwo)
        playerBoard.receiveAttack(randomFour, randomFive, board)
        computerBoard.removeFromArray(randomFour, randomFive)
        if(computerBoard.countervalue === 17) {
            console.log('battleship player wins')
            const winscreen = document.createElement('div')
            winscreen.classList.add('winscreen')
            bodycontainer.append(winscreen)

            const lineone = document.createElement('div')
            lineone.classList.add('lineone')
            lineone.textContent = 'BATTLESHIP'


            const linetwo = document.createElement('div')
            linetwo.classList.add('line')
            linetwo.textContent = 'You Win!'

            const refreshbutton = document.createElement('button')
            refreshbutton.textContent = 'New'
            refreshbutton.classList.add('refreshbutton')
            refreshbutton.type = 'submit'
            winscreen.append(lineone, linetwo, refreshbutton)

            refreshbutton.addEventListener('click', function() {
                location.reload()
            })

        }
        if(playerBoard.countervalue === 17) {
            console.log('battleship computer wins')

            const winscreen = document.createElement('div')
            winscreen.classList.add('winscreen')
            bodycontainer.append(winscreen)

            const lineone = document.createElement('div')
            lineone.classList.add('lineone')
            lineone.textContent = 'BATTLESHIP'


            const linetwo = document.createElement('div')
            linetwo.classList.add('line')
            linetwo.textContent = 'You Lose :('

            const refreshbutton = document.createElement('button')
            refreshbutton.textContent = 'New'
            refreshbutton.classList.add('refreshbutton')
            refreshbutton.type = 'submit'

            winscreen.append(lineone, linetwo, refreshbutton)


            refreshbutton.addEventListener('click', function() {
                location.reload()
            })
        }
        }



})














const shipOne = new ship(1)
const shipTwo = new ship(2)
const shipThree = new ship(3)
const shipFour = new ship(4)
const shipFive = new ship(5)


