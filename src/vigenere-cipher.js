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
  constructor(boolValue) {
    this.boolValue = boolValue;
  }
  encrypt(message, key) {
    if (message===undefined || key===undefined) {
      throw new Error('Incorrect arguments!');
    }
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let arrKey = [];
    let arrLetters = [];
    let curIndex = 0;
    let k = 0;
    let j = 0;
    let n = 0;
    key.toLowerCase().split('').forEach((a, i, arr) => arrKey.push(letters.indexOf(a)));
    message.toLowerCase().split('').forEach((a, i, arr) => {
      if (n > arrKey.length - 1) { k = n; while (k > arrKey.length - 1) { k = k - arrKey.length } }
      else { k = n; }
      j = letters.indexOf(a);
      if (j === -1) { arrLetters.push(a); }
      else {
        curIndex = j + arrKey[k];
        curIndex = curIndex % letters.length;
        arrLetters.push(letters[curIndex]); n++
      }
    });
    return this.boolValue === false ? arrLetters = arrLetters.reverse().join('').toLocaleUpperCase() : arrLetters.join('').toLocaleUpperCase()
   
  }

  decrypt(message, key) {
    if (message===undefined || key===undefined) {
      throw new Error('Incorrect arguments!');
    }
    this.message = message
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let arrKey = [];
    let arrLetters = [];
    let curIndex = 0;
    let k = 0;
    let j = 0;
    let n = 0;
    key.toLowerCase().split('').forEach((a,i,arr)=> arrKey.push(letters.indexOf(a)));
    message.toLowerCase().split('').forEach((a,i,arr)=> {
      if (n>arrKey.length-1) {k=n; while (k>arrKey.length-1) {k = k-arrKey.length}}
      else {k=n;}
      j = letters.indexOf(a);
      if (j === -1) {arrLetters.push(a);}
      else {
        curIndex = j - arrKey[k];
        curIndex <0 ? curIndex = letters.length - Math.abs(curIndex) : curIndex;
        arrLetters.push(letters[curIndex]);n++
      }
    });
    return this.boolValue === false ? arrLetters = arrLetters.reverse().join('').toLocaleUpperCase() : arrLetters.join('').toLocaleUpperCase()
  }
}



module.exports = {
  VigenereCipheringMachine
};
