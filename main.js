// let toolbox = require("./toolbox.js");
// let game = require("./game.js");
// const jeu = require("./game.js");

// game.player1Char = choseCharacter(1);
// game.player2Char = choseCharacter(2);

let joueurEnCours = 1;

const tour = document.querySelector("#tour");
const alert = document.querySelector(".alert");
const messageJ1 = document.querySelector("#j1");
const messageJ2 = document.querySelector("#j2");
let pointJ1 = 0;
let pointJ2 = 0;

let endGame = false;

initialisationTableau();
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

function initialisationTableau() {
  endGame = false;
  joueurEnCours = 1;
  alert.classList.add("d-none");
  let contentJ1 = "<img src='J1.png' class='bg-warning rounded-circle'><br/>";
  contentJ1 += pointJ1;
  messageJ1.innerHTML = contentJ1;
  let contentJ2 = "<img src='J2.png' class='bg-danger rounded-circle'><br/>";
  contentJ2 += pointJ2;
  messageJ2.innerHTML = contentJ2;

  jeu.initialisation();
  jeu.showPuissance4();
}

function handleendOfGame() {
  endGame = true;
  let contentAlert = "End of game, the winner is: " + joueurEnCours + "<br />";
  contentAlert +=
    '<button type="button" class="btn btn-secondary" onClick = initialisationTableau()>Restart</button>';
  alert.innerHTML = contentAlert;
  alert.classList.remove("d-none");
  if (joueurEnCours === 1) {
    pointJ1++;
  } else {
    pointJ2++;
  }
}
