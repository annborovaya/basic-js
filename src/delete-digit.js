const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const length = String(n).length;
  const numbers = [];

  for (let i = 0; i < length; i++) {
    const arr = String(n).split('').map((e) => Number(e));
    arr.splice(i, 1);
    numbers.push(+arr.join(''));
  }
  numbers.sort((a, b) => b - a);
  return numbers[0];
}

module.exports = {
  deleteDigit
};
