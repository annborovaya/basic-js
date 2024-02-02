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
    let maxDepth = 1;
    arr.forEach(element => {
      if (Array.isArray(element)) {
        const tempMaxDepth = this.calculateDepth(element) + 1;
        maxDepth = tempMaxDepth > maxDepth ? tempMaxDepth : maxDepth;
      }
    });

    return maxDepth;

  // ---------------------- 2 -----------------------

  // return arr.reduce((accumulator, current) => {
  //   if (Array.isArray(current)) {
  //     const tempMaxDepth = this.calculateDepth(current) + 1;
  //     return tempMaxDepth > accumulator ? tempMaxDepth : accumulator;
  //   }

  //   return accumulator;
  // }, 1)

  }
}

module.exports = {
  DepthCalculator
};