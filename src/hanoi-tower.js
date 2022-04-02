const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 function calculateHanoi(diskNumber, turnsSpeed) {
  let turns = 1;
  let seconds = 0;
  let obj = {};
  for (let i = 1; i < diskNumber; i++) {
    turns = (2 * turns) + 1;
  }
  seconds = Math.floor((((turns / turnsSpeed) * 100) * 60) / 100 * 60);
  obj.turns = turns;
  obj.seconds = seconds;
  return obj;
}

module.exports = {
  calculateHanoi
};
