class Player {
    constructor(name, symbol) {
      this.name = name;
      this.symbol = symbol;
    }
    static newPlayer(name, symbol) {
      // Validate name
      if (typeof name !== "string" || name.trim() === "") {
        throw new Error("Invalid name. Please provide a non-empty string.");
      }
  
      // Validate symbol
      if (typeof symbol !== "string" || symbol.trim() === "") {
        throw new Error("Invalid symbol. Please provide a non-empty string.");
      }
  
      return new Player(name, symbol);
    }
  
    markCell(cell) {
      cell.markCell(this.symbol);
    }
  }
  
  module.exports = Player;
  
