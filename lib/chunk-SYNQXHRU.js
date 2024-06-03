"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/factories/NumericRangeFactory.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var NumericRangeFactory;
(function(NumericRangeFactory2) {
  NumericRangeFactory2.number = (type) => (input) => NumberPredicator[type](input);
  NumericRangeFactory2.bigint = (type) => (input) => BigIntPredicator[type](input);
})(NumericRangeFactory || (NumericRangeFactory = exports.NumericRangeFactory = {}));
var NumberPredicator;
(function(NumberPredicator2) {
  NumberPredicator2.int32 = (input) => _typescript2.default.factory.createLogicalAnd(integer(input), between("-2147483648", "2147483647")(input));
  NumberPredicator2.uint32 = (input) => _typescript2.default.factory.createLogicalAnd(integer(input), between("0", "4294967295")(input));
  NumberPredicator2.int64 = (input) => _typescript2.default.factory.createLogicalAnd(integer(input), between("-9223372036854775808", "9223372036854775807")(input));
  NumberPredicator2.uint64 = (input) => _typescript2.default.factory.createLogicalAnd(integer(input), between("0", "18446744073709551615")(input));
  NumberPredicator2.float = (input) => between("-1.175494351e38", "3.4028235e38")(input);
  NumberPredicator2.double = () => _typescript2.default.factory.createTrue();
})(NumberPredicator || (NumberPredicator = {}));
var BigIntPredicator;
(function(BigIntPredicator2) {
  BigIntPredicator2.int64 = () => _typescript2.default.factory.createTrue();
  BigIntPredicator2.uint64 = (input) => _typescript2.default.factory.createLessThanEquals(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("BigInt"), void 0, [
    _chunk2F43GCPEjs.ExpressionFactory.number(0)
  ]), input);
})(BigIntPredicator || (BigIntPredicator = {}));
var integer = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => _typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("Math.floor"), void 0, [
  input
]), input), "integer");
var between = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (x, y) => (input) => _typescript2.default.factory.createLogicalAnd(_typescript2.default.factory.createLessThanEquals(_typescript2.default.factory.createIdentifier(x), input), _typescript2.default.factory.createLessThanEquals(input, _typescript2.default.factory.createIdentifier(y))), "between");



exports.NumericRangeFactory = NumericRangeFactory;
//# sourceMappingURL=chunk-SYNQXHRU.js.map