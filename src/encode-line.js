const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let cipher = '';
  let k = 0;
  for(let i = 0; i < str.length; i++) {
    k++;
    if (str[i]!=str[i+1]) {cipher = cipher + k + str[i]; k=0;};
  }
  return cipher.replace(/1/g, "");
}

module.exports = {
  encodeLine
};
