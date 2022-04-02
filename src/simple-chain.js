const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  str: "",
  arr: [],
  len: 0,
  chain: '',
  getLength() {
   
  },

  addLink(arr = []) {
    this.arr.push(''+arr);
   return this;
  },

  removeLink(n) {
    if (!Number.isInteger(n) || typeof n !== 'number' || n>this.arr.length || n<=0) {
      this.arr = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    this.arr.splice(n-1, 1);
    return this;
  },

  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },

  finishChain() {
    this.arr.forEach((a,b,arr)=> arr.length-1===b ? this.str+=`( ${a} )` : this.str+=`( ${a} )~~`);
    this.chain = this.str;
    this.arr = [];
    this.str = '';
    return this.chain;
  }

};

module.exports = {
  chainMaker
};
