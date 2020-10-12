// let toolbox = require("./toolbox");
let jeu = {
  puissance4: [],
  nbColumn: 7,
  nbRow: 6,
  player1Char: "x",
  player2Char: "o",
  initialisation: function () {
    this.puissance4 = toolbox.assignEmptyBoard(this.nbRow, this.nbColumn, 0);
  },
  /**
   * Show the puissnce 4 board
   */
  showPuissance4: function () {
    const jeu = document.querySelector("#game");
    jeu.innerHTML = "";

    let content = "<table>";
    for (let i = 0; i < this.nbRow; i++) {
      content += "<tr>";
      for (let j = 0; j < this.nbColumn; j++) {
        content +=
          "<td class='border border-primary text-center' style='width:100px;height:100px'>";
        if (this.puissance4[i][j] === 0) {
          content += "";
        } else if (this.puissance4[i][j] === 1) {
          content += "<img src='J1.png' class='bg-warning rounded-circle'";
        } else if (this.puissance4[i][j] === 2) {
          content += "<img src='J2.png' class='bg-danger rounded-circle'";
        }
        content += "</td>";
      }
      content += "</tr>";
    }
    content += "<tr>";
    for (let i = 1; i <= this.nbColumn; i++) {
      content +=
        "<td><button type='button' class='btn btn-primary' style='width: 100px' onClick='jouer(" +
        i +
        ")'>Row " +
        i +
        "</button></td>";
    }

    content += "</tr>";
    content += "</table>";
    jeu.innerHTML = content;
    // for (let i = 0; i < this.puissance4.length; i++) {
    //   let row = "";
    //   for (let j = 0; j < this.puissance4[i].length; j++) {
    //     row += "| ";
    //     if (this.puissance4[i][j] == 0) {
    //       row += "_";
    //     } else if (this.puissance4[i][j] == 1) {
    //       row += this.player1Char;
    //     } else if (this.puissance4[i][j] == 2) {
    //       row += this.player2Char;
    //     }
    //     row += " |";
    //   }
    //   console.log(row);
    // }
  },
  playBox: function (player, row, column) {
    this.puissance4[row][column - 1] = player;
  },
  /**
   * Function returning first empty row from a column
   * @param {Number} column return -1 if column is full
   */
  returnRowEmptyBoxColumn: function (column) {
    for (let i = this.nbRow - 1; i >= 0; i--) {
      if (this.verifEmptyBox(i, column)) return i;
    }
    return -1;
  },
  /**
   * Function returning if a cell is empty
   * @param {Number} row
   * @param {Number} column
   */
  verifEmptyBox: function (row, column) {
    return this.puissance4[row][column - 1] === 0;
  },
  /**
   * Check if a palyer has won
   * @param {Number} player
   */
  endGameVerification: function (player) {
    if (
      this.verificationRowEndGame(player) ||
      this.verificationColumnEndGame(player) ||
      this.verificationDiagonalendGame(player)
    ) {
      return true;
    }
    return false;
  },
  /**
   * Check if a player won on a row
   * @param {Number} player
   */
  verificationRowEndGame: function (player) {
    for (let i = this.nbRow - 1; i >= 0; i--) {
      for (let j = 0; j < this.nbColumn - 3; j++) {
        if (
          this.puissance4[i][j] === player &&
          this.puissance4[i][j + 1] === player &&
          this.puissance4[i][j + 2] === player &&
          this.puissance4[i][j + 3] === player
        ) {
          return true;
        }
      }
    }
    return false;
  },
  /**
   * Function checking if a player has won in column
   * @param {Number} player
   */
  verificationColumnEndGame: function (player) {
    for (let i = 0; i < this.nbColumn; i++) {
      for (let j = this.nbRow - 4; j >= 0; j--) {
        if (
          this.puissance4[j][i] === player &&
          this.puissance4[j + 1][i] === player &&
          this.puissance4[j + 2][i] === player &&
          this.puissance4[j + 3][i] === player
        ) {
          return true;
        }
      }
    }
  },
  /**
   * Function checking if a player has won in diagonale
   * @param {Number} player
   */
  verificationDiagonalendGame: function (player) {
    for (let i = this.nbRow - 1; i >= 3; i--) {
      for (let j = 0; j < this.nbColumn; j++) {
        if (
          this.puissance4[i][j] === player &&
          this.puissance4[i - 1][j + 1] === player &&
          this.puissance4[i - 2][j + 2] === player &&
          this.puissance4[i - 3][j + 3] === player
        ) {
          return true;
        }
        if (
          this.puissance4[i][j] === player &&
          this.puissance4[i - 1][j - 1] === player &&
          this.puissance4[i - 2][j - 2] === player &&
          this.puissance4[i - 3][j - 3] === player
        ) {
          return true;
        }
      }
    }
    return false;
  },
  /**
   * Function to chose a column
   */
  chooseColumn: function () {
    return parseInt(toolbox.inputCharacter("Which column?"));
  },
};
// module.exports = jeu;
