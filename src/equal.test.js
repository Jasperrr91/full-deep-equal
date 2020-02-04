// var test = require('tap').test;
var equal = require('./equal');

console.log(equal);

test('equal', () => {
  expect(equal(
      { a : [ 2, 3 ], b : [ 4 ] },
      { a : [ 2, 3 ], b : [ 4 ] }
  )).toBe(true);
});

test('not equal', () => {
  expect(equal(
      { x : 5, y : [6] },
      { x : 5, y : 6 }
  )).toBe(false);
});