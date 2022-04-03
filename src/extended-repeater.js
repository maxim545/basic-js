const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let mainStr = '';
  let subStr = '';
  str = ''+str;
  let repTimes = options.repeatTimes;
  repTimes === undefined ? repTimes = 1 : repTimes = repTimes;
  let sepa = options.separator;
  sepa === undefined ? sepa = '+' : sepa = sepa;
  let add = options.addition;
  add === undefined ? add = '' : add = ''+add;
  let addRepTimes = options.additionRepeatTimes;
  addRepTimes === undefined ? addRepTimes = 1 : addRepTimes = addRepTimes;
  let addSepa = options.additionSeparator;
  addSepa === undefined ? addSepa = '|' : addSepa = addSepa;
  for (let j = 0; j < addRepTimes; j++) {
    j === addRepTimes-1 ? subStr+=add : subStr+=add+addSepa;
  }
  for (let i = 0; i < repTimes; i++) {
    i === repTimes-1 ? mainStr+=str+subStr : mainStr+=str+subStr+sepa;
  }
  return mainStr
}

module.exports = {
  repeater
};
