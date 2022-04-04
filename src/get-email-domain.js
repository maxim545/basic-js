const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let str = '';
  let arr = email.split('').reverse()
  arr.includes('@') ? arr = arr.slice(0, arr.indexOf('@')).reverse().join('') : str = 'Incorrect email'
  return arr
}

module.exports = {
  getEmailDomain
};
