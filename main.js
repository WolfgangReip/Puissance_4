// let toolbox = require("./toolbox.js");
// let game = require("./game.js");
// const jeu = require("./game.js");

// game.player1Char = choseCharacter(1);
// game.player2Char = choseCharacter(2);
jeu.initialisation();
jeu.showPuissance4();

let joueurEnCours = 1;
// while (true) {
//   if (play(1)) {
//     console.log("Player 1 won");
//     return;
//   }
//   if (play(2)) {
//     console.log("Player 2 won");
//     return;
//   }
// }

// function choseCharacter(player) {
//   let txt = " Chose a character you wanna play with " + player + " : ";
//   return toolbox.inputCharacter(txt);
// }

/**
 * Function to allow player to play a box
 * Return true if player won
 * @param {Number} player
 */
function jouer(column) {
  console.log("ici");
  let emptyRow = jeu.returnRowEmptyBoxColumn(column);
  jeu.playBox(joueurEnCours, emptyRow, column);

  if (joueurEnCours === 1) {
    joueurEnCours = 2;
  } else {
    joueurEnCours = 1;
  }
  jeu.showPuissance4();
  // let emptyRow = -1;
  // let column = -1;
  // while (emptyRow === -1 || column <= 0 || column > 7) {
  //   console.log("Choose a column on a empty box");
  //   column = game.chooseColumn();
  //   emptyRow = game.returnRowEmptyBoxColumn(column);
  // }
  // game.playBox(player, emptyRow, column);
  // game.showPuissance4();
  // return game.endGameVerification(player);
}
