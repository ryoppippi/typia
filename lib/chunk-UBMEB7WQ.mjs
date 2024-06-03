import {
  ExpressionFactory
} from "./chunk-TJUGWBRO.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/check_array_length.ts
var check_array_length = /* @__PURE__ */ __name((project) => (array) => (input) => {
  const conditions = check_string_type_tags(project)(array.tags)(input);
  return {
    expected: array.getName(),
    expression: null,
    conditions
  };
}, "check_array_length");
var check_string_type_tags = /* @__PURE__ */ __name((project) => (matrix) => (input) => matrix.map((row) => row.filter((tag) => !!tag.validate)).filter((row) => !!row.length).map((row) => row.map((tag) => ({
  expected: `Array<> & ${tag.name}`,
  expression: (tag.predicate ?? ExpressionFactory.transpile(project.context)(tag.validate))(input)
}))), "check_string_type_tags");

export {
  check_array_length
};
//# sourceMappingURL=chunk-UBMEB7WQ.mjs.map