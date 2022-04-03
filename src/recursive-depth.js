const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr) {
  let obj = this
  if (!Array.isArray(arr)) {return 0}
  return 1 + Math.max(0, ...arr.map(a=>obj.calculateDepth(a)))
  }
}
const depthCalc = new DepthCalculator();

module.exports = {
  DepthCalculator
};
