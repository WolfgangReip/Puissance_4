// let readline = require("readline-sync");

let toolbox = {
  // inputCharacter: function (txt) {
  //   return readline.question(txt);
  // },
  /**
   * Function to create an array of arrays that is going to be the board of the game.
   * @param {Number} nbRow
   * @param {Number} nbColumn
   * @param {*} char
   */
  assignEmptyBoard: function (nbRow, nbColumn, char = "") {
    let board = [];
    for (let i = 0; i < nbRow; i++) {
      let row = [];
      for (let j = 0; j < nbColumn; j++) {
        row.push(0);
      }
      board.push(row);
    }
    return board;
  },
};

// module.exports = toolbox;
