import {
  ExpressionFactory
} from "./chunk-TJUGWBRO.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/check_native.ts
import ts from "typescript";
var check_native = /* @__PURE__ */ __name((type) => (input) => {
  const instanceOf = ExpressionFactory.isInstanceOf(type)(input);
  return ATOMIC_LIKE.has(type) ? ts.factory.createLogicalOr(ts.factory.createStrictEquality(ts.factory.createStringLiteral(type.toLowerCase()), ts.factory.createTypeOfExpression(input)), instanceOf) : instanceOf;
}, "check_native");
var ATOMIC_LIKE = /* @__PURE__ */ new Set([
  "Boolean",
  "Number",
  "String"
]);

export {
  check_native
};
//# sourceMappingURL=chunk-HVTXICG4.mjs.map