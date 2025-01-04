const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  resArr: [],
  getLength() {
    return this.resArr.length;
  },
  addLink(value) {
    if (value !== 'undefined') {
      if (value === null ) {
        this.resArr.push(`( ${String(value)} )`);
        return this
      }
      this.resArr.push(`( ${value.toString()} )`);
      return this
    } else {
      this.resArr.push(`( )`);
      return this
    }
    
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      isNaN(position) ||
      !position ||
      position < 1 ||
      position > this.resArr.length
    ) {
      this.resArr = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.resArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.resArr.reverse();
    return this;
  },
  finishChain() {
    result = this.resArr.join('~~');
    this.resArr = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
