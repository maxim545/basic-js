const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 Array.prototype.disNext = function () {
  let arr = this.slice(0);
  let i = arr.indexOf('--discard-next');
  if (i === arr.length - 1) {
    arr.splice(i, 1);
  } else {
    arr.splice(i + 1, 1);
  }
  return arr;
}
Array.prototype.disPrev = function () {
  let arr = this.slice(0);
  let i = arr.indexOf('--discard-prev');
  if (i === 0) {
    arr.splice(i, 1);
  } else {
    arr.splice(i - 1, 1);
  }
  return arr;
}
Array.prototype.doubleNext = function () {
  let arr = this.slice(0);
  let i = arr.indexOf('--double-next');
  if (i === arr.length - 1) {
    arr.splice(i, 1);
  } else {
    arr.splice(i + 1, 0, arr[i + 1]);
  }
  return arr;
}
Array.prototype.doublePrev = function () {
  let arr = this.slice(0);
  let i = arr.indexOf('--double-prev');
  if (i === 0) {
    arr.splice(i, 1);
  } else {
    arr.splice(i - 1, 0, arr[i - 1]);
  }
  return arr;
}

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let listOfData = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let arrStrIndex = [];
  arrStrIndex = arr.filter(a => typeof (a) === 'string');
  arrStrIndex.forEach(a => transformAll(a));

  function transformAll(firstElement) {
    if (firstElement === '--discard-next') {
      arr = arr.disNext();
    }
    if (firstElement === '--discard-prev') {
      arr = arr.disPrev();
    }
    if (firstElement === '--double-next') {
      arr = arr.doubleNext();
    }
    if (firstElement === '--double-prev') {
      arr = arr.doublePrev();
    } else arr;
    return arr;
  }
  listOfData.forEach(a => arr = arr.filter(i => i != a))
  return arr;
}

module.exports = {
  transform
};
