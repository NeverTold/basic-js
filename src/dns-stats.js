const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  let maxLen = 0;
  let result = {};
  for (let i = 0; i < domains.length; i++) {
    let tempArr = domains[i].split('.');
    if (tempArr.length > maxLen) {
      maxLen = tempArr.length;
    }
    arr.push(tempArr.reverse().map(value => '.' + value));
  }
  for (let i = 0; i < arr.length; i++){
    let str = '';
    console.log(str)
    for(let j = 0; j < arr[i].length; j++){
      if(result[str += arr[i][j]] === undefined){
        result[str] = 1;
      } else {
        result[str]++;
      }
    }
  }
  return result;
}
module.exports = {
  getDNSStats
};
