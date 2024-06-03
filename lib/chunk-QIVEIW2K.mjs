import {
  OptionPredicator
} from "./chunk-TACBWK3G.mjs";
import {
  ExpressionFactory
} from "./chunk-TJUGWBRO.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/check_number.ts
import ts from "typescript";
var check_number = /* @__PURE__ */ __name((project, numeric) => (atomic) => (input) => {
  const base = ts.factory.createStrictEquality(ts.factory.createStringLiteral("number"), ts.factory.createTypeOfExpression(input));
  const addition = numeric === true ? OptionPredicator.finite(project.options) ? ts.factory.createCallExpression(ts.factory.createIdentifier("Number.isFinite"), void 0, [
    input
  ]) : OptionPredicator.numeric(project.options) ? ts.factory.createLogicalNot(ts.factory.createCallExpression(ts.factory.createIdentifier("Number.isNaN"), void 0, [
    input
  ])) : null : null;
  const conditions = check_numeric_type_tags(project)(atomic)(addition)(input);
  return {
    expected: atomic.getName(),
    expression: addition !== null && conditions.length === 0 ? ts.factory.createLogicalAnd(base, addition) : base,
    conditions
  };
}, "check_number");
var check_numeric_type_tags = /* @__PURE__ */ __name((project) => (atomic) => (addition) => (input) => atomic.tags.map((row) => row.filter((tag) => !!tag.validate)).filter((row) => !!row.length).map((row) => [
  ...addition === null ? [] : row.some((tag) => tag.kind === "type" && (tag.value === "int32" || tag.value === "uint32" || tag.value === "int64" || tag.value === "uint64" || tag.value === "float")) || row.some((tag) => tag.kind === "multipleOf" && typeof tag.value === "number") || row.some((tag) => (tag.kind === "minimum" || tag.kind === "exclusiveMinimum") && typeof tag.value === "number") && row.some((tag) => (tag.kind === "maximum" || tag.kind === "exclusiveMaximum") && typeof tag.value === "number") ? [] : [
    {
      expected: "number",
      expression: addition
    }
  ],
  ...row.map((tag) => ({
    expected: `number & ${tag.name}`,
    expression: (tag.predicate ?? ExpressionFactory.transpile(project.context)(tag.validate))(input)
  }))
]), "check_numeric_type_tags");

export {
  check_number
};
//# sourceMappingURL=chunk-QIVEIW2K.mjs.map