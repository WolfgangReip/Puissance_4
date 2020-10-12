// let toolbox = require("./toolbox.js");
// let game = require("./game.js");
// const jeu = require("./game.js");

// game.player1Char = choseCharacter(1);
// game.player2Char = choseCharacter(2);
jeu.initialisation();
jeu.showPuissance4();

let joueurEnCours = 1;

const tour = document.querySelector("#tour");
const alert = document.querySelector(".alert");

let endGame = false;
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
  if (!endGame) {
    let emptyRow = jeu.returnRowEmptyBoxColumn(column);
    if (emptyRow != -1) {
      jeu.playBox(joueurEnCours, emptyRow, column);
      if (jeu.endGameVerification(joueurEnCours)) {
        handleendOfGame();
      }

      if (joueurEnCours === 1) {
        joueurEnCours = 2;
        tour.innerHTML = "Player 2 turn";
      } else {
        joueurEnCours = 1;
        tour.innerHTML = "Player 1 turn";
      }
      jeu.showPuissance4();
    }
  }

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

function handleendOfGame() {
  endGame = true;
  alert.innerHTML = "End of game";
  alert.classList.remove("d-none");
}
