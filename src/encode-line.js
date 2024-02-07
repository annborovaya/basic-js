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
  const arr = str.split('');
  const arr1 = [];

  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr1.push(count > 1 ? count + arr[i] : arr[i]);
      count = 1;
    } else {
      count++;
    }
  }
  return arr1.join('');
}

module.exports = {
  encodeLine
};
