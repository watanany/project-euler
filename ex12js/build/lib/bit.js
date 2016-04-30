"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Bit extends Array {
  constructor(n) {
    super(n).fill(0);
  }

  incr() {
    for (var i = this.length - 1; 0 <= i; i--) {
      if (this[i] === 0) {
        this[i] = 1;
        break;
      } else {
        this[i] = 0;
      }
    }

    return this;
  }
}
exports.default = Bit;
