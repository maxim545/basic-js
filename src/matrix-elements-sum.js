const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let arr = [], arr1 = [];
  let count = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    matrix.forEach((a) => arr.push(a[i]));
    arr1.push(arr.splice(0, matrix.length));
  }
  arr1.forEach((a, i) => a.indexOf(0) === -1 ? arr.push(...a.slice(0, a.length)) : arr.push(...a.slice(0, a.indexOf(0))))
  return arr.length === 0 ? 0 : arr.reduce((a,b)=> a+b)
}

module.exports = {
  getMatrixElementsSum
};
