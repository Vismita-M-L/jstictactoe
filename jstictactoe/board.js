const Cell = require("./cell");

class Board {
  constructor(cells) {
    this.cells = cells;
  }
  static newBoard() {
    const cells = [];
    for (let index = 0; index < 9; index++) {
      cells.push(Cell.newCell());
    }
    return new Board(cells);
  }
  analyseResult() {
    const cells = this.cells;
    // row
    for (let i = 0; i < 3; i++) {
      if (
        cells[i].mark !== "z" &&
        cells[i].mark === cells[i + 1].mark &&
        cells[i].mark === cells[i + 2].mark
      ) {
        return [cells[i].mark, "win"];
      }
    }
    // column
    for (let i = 0; i < 3; i++) {
      if (
        cells[i].mark !== "z" &&
        cells[i].mark === cells[i + 3].mark &&
        cells[i].mark === cells[i + 6].mark
      ) {
        return [cells[i].mark, "win"];
      }
    }

    // diagonal
    if (
      cells[0].mark !== "z" &&
      cells[0].mark === cells[4].mark &&
      cells[0].mark === cells[8].mark
    ) {
      return [cells[0].mark, "win"];
    }

    if (
      cells[2].mark !== "z" &&
      cells[2].mark === cells[4].mark &&
      cells[2].mark === cells[6].mark
    ) {
      return [cells[2].mark, "win"];
    }
    // Check for draw
    const isBoardFull = cells.every((cell) => cell.isMarked());
    if (isBoardFull) {
      return [null, "draw"];
    }
    // Game is still ongoing
    return [null, null];
  }
  displayBoard() {
    const cells = this.cells;
    const boardSize = 3;

    // Print the board
    for (let i = 0; i < boardSize; i++) {
      let row = "";
      for (let j = 0; j < boardSize; j++) {
        const cellIndex = i * boardSize + j;
        const mark = cells[cellIndex].mark;
        row += mark !== "z" ? mark : " ";
        if (j !== boardSize - 1) {
          row += " | ";
        }
      }
      console.log(row);
      if (i !== boardSize - 1) {
        console.log("---------");
      }
    }
  }
}

module.exports = Board;
