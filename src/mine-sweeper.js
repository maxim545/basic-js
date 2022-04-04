const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let arr = [], count = 0;
  let arrLen = matrix.length;
  function minesCounter(j, i) {
    if (matrix[j][i - 1] === true) { count++ };
    if (matrix[j][i + 1] === true) { count++ };
    if (j - 1 >= 0) {
      if (matrix[j - 1][i] === true) { count++ };
      if (matrix[j - 1][i - 1] === true) { count++ };
      if (matrix[j - 1][i + 1] === true) { count++ };
    };
    if (j + 1 <= arrLen - 1) {
      if (matrix[j + 1][i] === true) { count++ };
      if (matrix[j + 1][i - 1] === true) { count++ };
      if (matrix[j + 1][i + 1] === true) { count++ };
    };
    return count;
  };
  matrix.forEach(a => arr.push([]));
  matrix.forEach((a, j) => {
    a.forEach((b, i) => {
      count = 0;
      if (b === true) { arr[j].push(1) }
      else {
        arr[j].push(minesCounter(j, i));
      };
    });
  });
  return arr;
}

module.exports = {
  minesweeper
};
