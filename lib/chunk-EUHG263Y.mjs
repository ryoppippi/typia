import {
  ExpressionFactory
} from "./chunk-TJUGWBRO.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/factories/NumericRangeFactory.ts
import ts from "typescript";
var NumericRangeFactory;
(function(NumericRangeFactory2) {
  NumericRangeFactory2.number = (type) => (input) => NumberPredicator[type](input);
  NumericRangeFactory2.bigint = (type) => (input) => BigIntPredicator[type](input);
})(NumericRangeFactory || (NumericRangeFactory = {}));
var NumberPredicator;
(function(NumberPredicator2) {
  NumberPredicator2.int32 = (input) => ts.factory.createLogicalAnd(integer(input), between("-2147483648", "2147483647")(input));
  NumberPredicator2.uint32 = (input) => ts.factory.createLogicalAnd(integer(input), between("0", "4294967295")(input));
  NumberPredicator2.int64 = (input) => ts.factory.createLogicalAnd(integer(input), between("-9223372036854775808", "9223372036854775807")(input));
  NumberPredicator2.uint64 = (input) => ts.factory.createLogicalAnd(integer(input), between("0", "18446744073709551615")(input));
  NumberPredicator2.float = (input) => between("-1.175494351e38", "3.4028235e38")(input);
  NumberPredicator2.double = () => ts.factory.createTrue();
})(NumberPredicator || (NumberPredicator = {}));
var BigIntPredicator;
(function(BigIntPredicator2) {
  BigIntPredicator2.int64 = () => ts.factory.createTrue();
  BigIntPredicator2.uint64 = (input) => ts.factory.createLessThanEquals(ts.factory.createCallExpression(ts.factory.createIdentifier("BigInt"), void 0, [
    ExpressionFactory.number(0)
  ]), input);
})(BigIntPredicator || (BigIntPredicator = {}));
var integer = /* @__PURE__ */ __name((input) => ts.factory.createStrictEquality(ts.factory.createCallExpression(ts.factory.createIdentifier("Math.floor"), void 0, [
  input
]), input), "integer");
var between = /* @__PURE__ */ __name((x, y) => (input) => ts.factory.createLogicalAnd(ts.factory.createLessThanEquals(ts.factory.createIdentifier(x), input), ts.factory.createLessThanEquals(input, ts.factory.createIdentifier(y))), "between");

export {
  NumericRangeFactory
};
//# sourceMappingURL=chunk-EUHG263Y.mjs.map