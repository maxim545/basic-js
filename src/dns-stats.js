const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let arr = [], allDNS = [], obj = {}, curDNS = '';
  domains.forEach(a=> arr.push(a.split(".").reverse()))
  arr.forEach((b)=> {curDNS=''; b.forEach(a=> {curDNS=curDNS+"."+a; obj[curDNS] === undefined ? obj[curDNS] = 1 : obj[curDNS] = obj[curDNS] + 1  })})
  return obj
}

module.exports = {
  getDNSStats
};
