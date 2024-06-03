import {
  ExpressionFactory
} from "./chunk-TJUGWBRO.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/check_string.ts
import ts from "typescript";
var check_string = /* @__PURE__ */ __name((project) => (atomic) => (input) => {
  const conditions = check_string_type_tags(project)(atomic)(input);
  return {
    expected: atomic.getName(),
    expression: ts.factory.createStrictEquality(ts.factory.createStringLiteral("string"), ts.factory.createTypeOfExpression(input)),
    conditions
  };
}, "check_string");
var check_string_type_tags = /* @__PURE__ */ __name((project) => (atomic) => (input) => atomic.tags.map((row) => row.filter((tag) => !!tag.validate)).filter((row) => !!row.length).map((row) => row.map((tag) => ({
  expected: `string & ${tag.name}`,
  expression: (tag.predicate ?? ExpressionFactory.transpile(project.context)(tag.validate))(input)
}))), "check_string_type_tags");

export {
  check_string
};
//# sourceMappingURL=chunk-Z27JFOX4.mjs.map