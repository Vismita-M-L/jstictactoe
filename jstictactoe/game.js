const Board = require("./board");
const Player = require("./player");

class Game {
  constructor(players, board, turn = 0, isGameActive = true) {
    this.players = players;
    this.board = board;
    this.turn = turn;
    this.isGameActive = isGameActive;
  }
  static newGame(player1Name, player1Symbol, player2Name, player2Symbol) {
    const players = [
      Player.newPlayer(player1Name, player1Symbol),
      Player.newPlayer(player2Name, player2Symbol),
    ];
    const board = Board.newBoard();
    let turn = 0;
    return new Game(players, board, turn);
  }
  play(cellNo) {
    // check if game active or not
    if (!this.isGameActive) {
      return "Game ended";
    }
    // check if cell already marked
    const isCellMarked = this.board.cells[cellNo].isMarked();
    if (isCellMarked) {
      return "Cell is already marked";
    }
    // mark cell
    const currentPlayer = this.players[this.turn % 2];
    currentPlayer.markCell(this.board.cells[cellNo]);
    this.turn += 1;
    // analyze result
    const [symbol, state] = this.board.analyseResult();
    if (state === "win") {
      this.isGameActive = false;
      if (symbol === this.players[0].symbol) {
        return `${this.players[0].name} has won the game`;
      }
      return `${this.players[1].name} has won the game`;
    }
    if (state === "draw") {
      this.isGameActive = false;
      return "Draw game";
    }
    this.board.displayBoard();
    return "Continue game";
  }
}

module.exports = Game;
