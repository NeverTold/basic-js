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
  if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  const tempArr = arr.map((element) => element);
  let result = [];
  let j = 0;
  for (let i = 0; i < tempArr.length; i += 1) {
    if (tempArr[i] === '--discard-next') {
      tempArr[i] = 'del'; 
      result.push(tempArr[i]);
      tempArr[i+1] = 'del';
    } if (tempArr[i] === '--discard-prev') {
      tempArr[i] = 'del';
      if (!(tempArr[i - 1] === 'del') && result){
        result.pop();
      result.pop();
      }
    } if (tempArr[i] === '--double-next') {
      tempArr[i] = 'del';
      if (!(tempArr[i + 1] === 'del') && tempArr[i + 1]) {
      tempArr[i] = tempArr[i + 1];
      result.push(tempArr[i]);
      }
    } if (tempArr[i] === '--double-prev') {
      tempArr[i] = 'del';
      if (!tempArr[i - 1] === 'del') {
      tempArr[i] = tempArr[i - 1];
      result.push(tempArr[i]);
      }
    } else {
      result.push(tempArr[i]);
 }
  }
  return result.filter((value) => (value !== 'del'));
}

module.exports = {
  transform
};
