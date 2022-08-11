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


const firstBoard = document.createElement('div')
firstBoard.classList.add('firstboard')
const secondBoard = document.createElement('div')
secondBoard.classList.add('secondboard')
bodycontainer.append(firstBoard, secondBoard)

//Call new gameboards to be created 
const playerBoard = new gameboard()
const computerBoard = new gameboard()

//Call gameboard method to create them visually
playerBoard.visualcreate(firstBoard, playerBoard)
computerBoard.visualcreate(secondBoard, computerBoard)


playerBoard.placeship(0,0, '.firstboard')
playerBoard.placeship(0,1, '.firstboard')
playerBoard.placeship(0,2, '.firstboard')
playerBoard.placeship(0,3, '.firstboard')
playerBoard.placeship(0,4, '.firstboard')
playerBoard.placeship(7,2, '.firstboard')
playerBoard.placeship(7,3, '.firstboard')
playerBoard.placeship(8,7, '.firstboard')
playerBoard.placeship(9,7, '.firstboard')
playerBoard.placeship(7,7, '.firstboard')
playerBoard.placeship(3,2, '.firstboard')
playerBoard.placeship(4,2, '.firstboard')

computerBoard.placeship(9,1, '.secondboard')
computerBoard.placeship(9,2, '.secondboard')
computerBoard.placeship(9,3, '.secondboard')

//Add event listener 
secondBoard.addEventListener('click', function(e) {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    let randomOne = getRandomInt(9)
    let randomTwo = getRandomInt(9)
    let target = e.target
    let board = '.firstboard'
    let boardtwo = '.secondboard'
    if(target.classList.contains('hit') || target.classList.contains('miss')) {
        return
    } else {
        computerBoard.receiveAttack(target.dataset.xaxis, target.dataset.yaxis, boardtwo)
        playerBoard.receiveAttack(randomOne, randomTwo, board)
    }



})












const shipOne = new ship(1)
const shipTwo = new ship(2)
const shipThree = new ship(3)
const shipFour = new ship(4)
const shipFive = new ship(5)


