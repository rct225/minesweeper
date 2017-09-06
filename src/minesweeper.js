class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
    //console.log(typeof this._board);
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('Game over!');
      this._board.print();
    } else if (!this._board.hasSafeTiles()) {
      console.log('You won!');
    } else {
      console.log('Current Board:');
      this._board.print();
    }
  }

}
