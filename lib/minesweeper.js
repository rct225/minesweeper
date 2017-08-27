'use strict';

var printBoard = function printBoard(board) {
  console.log(board.map(function (row) {
    return row.join(' | ');
  }).join('\n'));
};

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];
  for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    var row = [];
    for (var colIndex = 0; colIndex < numberOfColumns; colIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  var board = [];
  for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    var row = [];
    for (var colIndex = 0; colIndex < numberOfColumns; colIndex++) {
      row.push(null);
    }
    board.push(row);
  }
  var numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
    // Note: this loop anc place bombs over existing bombs
  }
  return board;
};

var playerBoard = generatePlayerBoard(3, 4);
console.log('Player Board: ');
printBoard(playerBoard);

var bombBoard = generateBombBoard(3, 4, 5);
console.log('Bomb Board: ');
printBoard(bombBoard);