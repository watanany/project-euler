export default class Bit extends Array {
  constructor(n) {
    super(n).fill(0);
  }

  incr() {
    for (let i = this.length - 1; 0 <= i; i--) {
      if (this[i] === 0) {
        this[i] = 1;
        break;
      }
      else {
        this[i] = 0;
      }
    }

    return this;
  }
}
