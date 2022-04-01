const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let arr = [];
  let filteredArr = members.filter(a => typeof (a) === "string");
  if (filteredArr.length === 0) {
    return false;
  }
  filteredArr = filteredArr.map(a => a.replace(/ /g, '').toUpperCase());
  filteredArr.forEach(a => arr.push(a[0]));
  arr.sort();
  return arr.join("");
}

module.exports = {
  createDreamTeam
};