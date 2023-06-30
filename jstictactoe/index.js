const Game = require("./game");

try {
  let g1 = Game.newGame("Vismita","X" ,"Sneha","O");
  console.log(g1.play(0));
  console.log(g1.play(1));
  console.log(g1.play(3));
  console.log(g1.play(2));
  console.log(g1.play(6));
  console.log(g1.play(4));
} catch (error) {
  console.log(error.message);
}
