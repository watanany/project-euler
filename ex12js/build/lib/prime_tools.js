"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class PrimeTools {
  constructor() {
    this.primes = new Set([2, 3]);
  }

  isPrime(x) {
    if (this.primes.has(x)) return true;

    if (x % 2 == 0) return false;

    var max = Math.sqrt(x);
    for (var i = 3; i <= max; i += 2) {
      if (x % i == 0) return false;
    }

    this.primes.add(x);
    return true;
  }

  factorize(x) {
    var factors = [];
    var primes = Array.from(this.primes);

    // find out factors from primes
    for (var i = 0; i < primes.length; i++) {
      if (x % primes[i] == 0) {
        factors.push(primes[i]);
        x = parseInt(x / primes[i]);
        i = -1;
      }

      if (x == 1) return factors.sort();
    }

    // find out prime factors from [2..]
    for (var _i = 2;; _i++) {
      if (this.isPrime(_i) && x % _i == 0) {
        factors.push(_i);
        x = parseInt(x / _i);
        _i = 2;
      }

      if (x == 1) return factors.sort();
    }
  }
}
exports.default = PrimeTools;
