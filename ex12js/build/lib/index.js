'use strict';

require('babel-polyfill');

var _prime_tools = require('./prime_tools');

var _prime_tools2 = _interopRequireDefault(_prime_tools);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {
  var N = 500;
  var pt = new _prime_tools2.default();

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _util.triangleNumber)()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;

      var primeFactors = pt.factorize(i);
      var subsets = (0, _util.subsequences)(primeFactors);
      var divisors = new Set(subsets.map(_util.product));

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
