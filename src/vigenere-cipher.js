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

const ALPH = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numALPH = {};
for (let i = 0; i < ALPH.length; i++) {
  numALPH[ALPH[i]] = i;
}

class VigenereCipheringMachine {
  constructor(value) {
    this.isReverced = (value === false) ? this.isReverced = true : this.isReverced = false;
  }
  encrypt(message, key) {
    if ([...arguments].includes(undefined) || arguments.length < 2) {
      throw new Error ('Incorrect arguments!');
    }
    const maxLength = message.length;
    const cipherMessage = [];
    let j = 0;

   for (let i = 0; i < maxLength; i++) {
      const numOfMsgLetter = numALPH[message[i].toUpperCase()];
      const numOfKeyLetter = numALPH[key[j >= key.length ? j % key.length : j].toUpperCase()];

        if (ALPH.includes(message[i].toUpperCase())) {
          cipherMessage.push(ALPH[(numOfMsgLetter + numOfKeyLetter) % ALPH.length]);
          j++;
        } else {
          cipherMessage.push(message[i]);
        }

    }
    return this.isReverced ? cipherMessage.reverse().join('') : cipherMessage.join('');
  }

  decrypt(message, key) {
    if ([...arguments].includes(undefined) || arguments.length < 2) {
      throw new Error ('Incorrect arguments!');
    }

    const maxLength = message.length;
    const cipherMessage = [];
    let j = 0;

   for (let i = 0; i < maxLength; i++) {

      const numOfMsgLetter = numALPH[message[i].toUpperCase()];
      const numOfKeyLetter = numALPH[key[j >= key.length ? j % key.length : j].toUpperCase()];
      const diffOfMsgAndKeyLetters = numOfMsgLetter - numOfKeyLetter >= 0 ? numOfMsgLetter - numOfKeyLetter : numOfMsgLetter - numOfKeyLetter + ALPH.length;

        if (ALPH.includes(message[i].toUpperCase())) {
          cipherMessage.push(ALPH[(diffOfMsgAndKeyLetters) % ALPH.length]);
          j++;
        } else {
          cipherMessage.push(message[i]);
        }
    }
    return this.isReverced ? cipherMessage.reverse().join('') : cipherMessage.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
