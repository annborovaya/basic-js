const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const shortStr = s1.length < s2.length ? s1 : s2;
  const longStr = s2.length > s1.length ? s2 : s1;
  const arr1 = shortStr.split('').sort((a, b) => a.localeCompare(b));
  const arr2 = longStr.split('').sort((a, b) => a.localeCompare(b));
  let count = 0;
  let j = 0;
  for (let i = 0; i < shortStr.length; i++) {
    if (arr2.includes(arr1[i], j)) {
      count++;
      j++;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
