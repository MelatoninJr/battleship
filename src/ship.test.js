
const Ship = require('./ship');

test('Checks for ship length', () => {
  expect(Ship.length).toBe(3);
});
/*
test('Checks for hit', () => {
  expect(Ship.hit(42)).toBe('This is the number 42');
});
*/
test('Checks for ship array creation', () => {
  expect(Ship.array).toEqual([0, 1, 2]);
});

test('Check for sunk function', () => {
  expect(Ship.sunk()).toBe('Not Sunk')
});