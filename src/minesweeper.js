class Board {
  contstructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  get playerBoard (){
    return this._playerBoard;
  }

 flipTile = (rowIndex, columnIndex) => {
    if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log('This tile has already been flipped!');
      return;
    } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
    }
    this._numberOfTiles--;
  }

  fucntion getNumberOfNeighborBombs(rowIndex, columnIndex) {
    const neighborOffsets = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,0],[0,1],[1,-1],[1,0],[1,1]];
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;
    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColIndex = columnIndex + offset[1];
      if ( neighborRowIndex >= 0 && neighborRowIndex < numberOfRows
        && neighborColIndex >=0 && neighborColIndex < numberOfColumns) {
          if (this._bombBoard[neighborRowIndex][neighborColIndex] === 'B') {
            numberOfBombs++;
          }
      }
      return numberOfBombs
    });
  }

  hasSafeTiles() {
    return this._numberOfTiles !== this._numberOfBombs;
  }

  print() {
      console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
  };

}



const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];
    for (let colIndex = 0; colIndex < numberOfColumns; colIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];
    for (let colIndex = 0; colIndex < numberOfColumns; colIndex++) {
      row.push(null);
    }
    board.push(row);
  }
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B';
    }
    numberOfBombsPlaced++;
    // Note: this loop anc place bombs over existing bombs
  }
  return board;
};






let playerBoard = generatePlayerBoard(3,4);
console.log('Player Board: ');
printBoard(playerBoard);

let bombBoard = generateBombBoard(3,4,5);
console.log('Bomb Board: ');
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board:');

printBoard(playerBoard);
