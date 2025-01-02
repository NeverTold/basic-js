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
  if (str) {
  let number = 1;
  let result = '';
  for (let i = 0; i < str.length - 1; i += 1) {
    if (str[i] === str[i + 1]) {
      number += 1;
    } else {
      if (number > 1) {
        result += `${number}${str[i]}`;
        number = 1;
      } else {
        result += `${str[i]}`;
      }
    }
  }
  if (number > 1) {
    result += `${number}${str[str.length - 1]}`;
  } else result += `${str[str.length - 1]}`;
  return result;
  } else return '';
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
