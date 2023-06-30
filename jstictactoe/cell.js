class Cell {
    constructor(symbol) {
      this.mark = symbol;
    }
    static newCell() {
      return new Cell("z");
    }
    isMarked() {
      return this.mark !== "z";
    }
    markCell(symbol) {
      this.mark = symbol;
    }
  }
  
  module.exports = Cell;
  