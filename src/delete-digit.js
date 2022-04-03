const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let arr1 = [], arr2 = []
  Array.from(String(n), Number).forEach((a, i, arr)=> {arr2 = arr.slice(0);arr2.splice(i, 1);arr1.push(+arr2.join(''))})
  return Math.max(...arr1)
}

module.exports = {
  deleteDigit
};
