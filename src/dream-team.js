const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const arrLetters = [];
  if (members) {
  for (let i = 0; i < members.length; i +=1) {
    if (typeof members[i] === 'string') {
      let string = members[i].trim();
      arrLetters.push(string[0].toUpperCase());
    }
  }
  if (arrLetters.length > 0) {
    return arrLetters.sort().join('');
  } else return false;
  // remove line with error and write your code here
  } else return false;
}

module.exports = {
  createDreamTeam
};
