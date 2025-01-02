const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const strin = String(str);
  const separator = options.separator ? options.separator : '+';
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 0;
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 0;
  const addition = options.addition !== undefined ? String(options.addition) : '';
  let arrAddition = [];
  let arrStr = [];
  
  if (additionRepeatTimes > 0) {
    for (let i = 0; i < additionRepeatTimes; i += 1) {
      arrAddition.push(addition);
    }
  } else {
    arrAddition.push(addition);
  }
  if (repeatTimes > 0) {
    for (let i = 0; i < repeatTimes; i += 1) {
    arrStr.push(strin + arrAddition.join(additionSeparator));
    }
  } else {
    arrStr.push(strin + arrAddition.join(additionSeparator));
  }
  return arrStr.join(separator);
}

module.exports = {
  repeater
};
