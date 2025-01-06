const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
    constructor(isDirect = true) {
      this.isDirect = isDirect;
      this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
  
    _process(text, key, encrypting) {
  
      let result = '';
      let keyIndex = 0;
  
      for (let i = 0; i < text.length; i++) {
        const char = text[i].toUpperCase();
        const charIndex = this.alphabet.indexOf(char);
  
        if (charIndex === -1) {
          result += text[i];
          continue;
        }
  
        const keyChar = key[keyIndex % key.length].toUpperCase();
        const keyCharIndex = this.alphabet.indexOf(keyChar);
  
        let processedIndex;
        if (encrypting) {
          processedIndex = (charIndex + keyCharIndex) % this.alphabet.length;
        } else {
            processedIndex = (charIndex - keyCharIndex + this.alphabet.length) % this.alphabet.length;
  
        }
        result += this.alphabet[processedIndex];
        keyIndex++;
      }
          return this.isDirect ? result : result.split("").reverse().join("");
    }
  
  
    encrypt(text, key) {
      if (!text || !key) {
        throw new Error('Incorrect arguments!');
      }
      return this._process(text, key, true);
    }
  
    decrypt(text, key) {
      if (!text || !key) {
        throw new Error('Incorrect arguments!');
      }
        return this._process(text, key, false);
    }
  }


module.exports = {
  VigenereCipheringMachine
};
