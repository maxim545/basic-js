const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!'
  
  try {
    let monthNumber = date.getMonth()
    if (Object.getOwnPropertyNames(date).length > 0 || date instanceof Date === false) {
      throw new Error("Invalid date!");
    }
    let strSeason = ''
    let arr = [[11, 0, 1], [2, 3, 4], [5, 6, 7], [8, 9, 10]]
    let arrSeasons = ["winter", "spring", "summer", "autumn"]
    arr.forEach((a, b) => a.includes(monthNumber) ? strSeason = arrSeasons[b] : strSeason = strSeason)
    return strSeason
  } catch (e) {
    if (typeof(Symbol(date)) == 'symbol') {
      throw new Error("Invalid date!");
    }
  }
}


module.exports = {
  getSeason
};
