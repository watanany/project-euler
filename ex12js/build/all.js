'use strict';

require('babel-polyfill');

var _marked = [triangleNumber].map(regeneratorRuntime.mark);

//------------------------------------------------------------
// classes for prime factorization
//------------------------------------------------------------
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

//------------------------------------------------------------
// utils
//------------------------------------------------------------
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

function subsequences(array) {
  var bits = new Bit(array.length);
  var subsets = [];

  while (true) {
    var subset = [];

    for (var i = 0; i < bits.length; i++) {
      if (bits[i] == 1) subset.push(array[i]);
    }

    subsets.push(subset);
    if (bits.every(function (v) {
      return v == 1;
    })) break;
    bits.incr();
  }

  return subsets.sort(function (a, b) {
    return a.length - b.length;
  });
}

function product(array) {
  return array.reduce(function (acc, x) {
    return acc * x;
  }, 1);
}

function triangleNumber() {
  var n, i;
  return regeneratorRuntime.wrap(function triangleNumber$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = 0;
          i = 1;

        case 2:
          _context.next = 4;
          return n += i;

        case 4:
          i++;
          _context.next = 2;
          break;

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

//------------------------------------------------------------
// main function
//------------------------------------------------------------
function main() {
  var N = 500;
  var pt = new PrimeTools();

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = triangleNumber()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;

      var primeFactors = pt.factorize(i);
      var subsets = subsequences(primeFactors);
      var divisors = new Set(subsets.map(product));

      if (divisors.size > N) {
        console.log('The number is ' + i);
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

if (require.main === module) main();

