const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let newArray = [];
  let i = 0;
  let sortArr = arr.slice(0);
  sortArr = sortArr.sort((a, b) => a - b).filter(a => a != -1);
  arr.forEach(a => {
    if (a === -1) {
      newArray.push(a);
    }
    else {
      newArray.push(sortArr[i]); 
      i++; 
    }
  });
  return newArray;
}


module.exports = {
  sortByHeight
};
