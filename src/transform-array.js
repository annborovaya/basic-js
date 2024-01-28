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
function transform(arr) {

  const actions = ['--discard-prev', '--double-prev', '--discard-next', '--double-next'];

  const result = [];

  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  if (!arr.length) return result;

  for (let i = 0; i < arr.length; i++) {
    if (!actions.includes(arr[i])) {
      result.push(arr[i]);
    } else {
      switch (arr[i]) {
        case actions[0]:
          if (i > 0) {
            result.pop();
          }
          break;
        case actions[1]:
          if (i > 0) {
            result.push(arr[i - 1]);
          }
          break;
        case actions[2]:
            i += 2;
          break;
        case actions[3]:
          if (i !== arr.length - 1) {
            result.push(arr[i + 1]);
          }
          break;
      }
    }
  }
  return result;
}

module.exports = {
  transform
};
