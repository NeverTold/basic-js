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
  let arr = String(n).split('');
  let tempArr = [];
  for (let i = 0; i < arr.length; i += 1){
    tempArr.push(arr.filter((value, index) => index != i).join(''))
  }
  const max = tempArr.reduce((a, b) => Math.max(a, b));
  return Number(max);
}

module.exports = {
  deleteDigit
};
