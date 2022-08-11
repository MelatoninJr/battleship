


const gameboard = require('./gameboard')

test('Checks for ship placement', () => {
    expect(gameboard.placeship(2, 4)).toBe(1)
  });

  test('Receives attack checks if ship is there or not', () => {
    expect(gameboard.receiveAttack(1, 2)).toBe(0);
  })

  test('Are all ships sunk?', () => {
    expect(gameboard.isSunk().toBe('Yes'))
  })