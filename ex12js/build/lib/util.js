'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subsequences = subsequences;
exports.product = product;
exports.triangleNumber = triangleNumber;

var _bit = require('./bit');

var _bit2 = _interopRequireDefault(_bit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [triangleNumber].map(regeneratorRuntime.mark);

function subsequences(array) {
  var bits = new _bit2.default(array.length);
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
