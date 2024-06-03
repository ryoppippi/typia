import {
  ExpressionFactory
} from "./chunk-TJUGWBRO.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/check_bigint.ts
import ts from "typescript";
var check_bigint = /* @__PURE__ */ __name((project) => (atomic) => (input) => {
  const conditions = check_bigint_type_tags(project)(atomic)(input);
  return {
    expected: atomic.getName(),
    expression: ts.factory.createStrictEquality(ts.factory.createStringLiteral("bigint"), ts.factory.createTypeOfExpression(input)),
    conditions
  };
}, "check_bigint");
var check_bigint_type_tags = /* @__PURE__ */ __name((project) => (atomic) => (input) => atomic.tags.map((row) => row.filter((tag) => !!tag.validate)).filter((row) => !!row.length).map((row) => row.map((tag) => ({
  expected: `bigint & ${tag.name}`,
  expression: (tag.predicate ?? ExpressionFactory.transpile(project.context)(tag.validate))(input)
}))), "check_bigint_type_tags");

export {
  check_bigint
};
//# sourceMappingURL=chunk-JYYOOAJV.mjs.map