"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunkKX6W4A6Gjs = require('./chunk-KX6W4A6G.js');


var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/check_number.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var check_number = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project, numeric) => (atomic) => (input) => {
  const base = _typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral("number"), _typescript2.default.factory.createTypeOfExpression(input));
  const addition = numeric === true ? _chunkKX6W4A6Gjs.OptionPredicator.finite(project.options) ? _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("Number.isFinite"), void 0, [
    input
  ]) : _chunkKX6W4A6Gjs.OptionPredicator.numeric(project.options) ? _typescript2.default.factory.createLogicalNot(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("Number.isNaN"), void 0, [
    input
  ])) : null : null;
  const conditions = check_numeric_type_tags(project)(atomic)(addition)(input);
  return {
    expected: atomic.getName(),
    expression: addition !== null && conditions.length === 0 ? _typescript2.default.factory.createLogicalAnd(base, addition) : base,
    conditions
  };
}, "check_number");
var check_numeric_type_tags = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (atomic) => (addition) => (input) => atomic.tags.map((row) => row.filter((tag) => !!tag.validate)).filter((row) => !!row.length).map((row) => [
  ...addition === null ? [] : row.some((tag) => tag.kind === "type" && (tag.value === "int32" || tag.value === "uint32" || tag.value === "int64" || tag.value === "uint64" || tag.value === "float")) || row.some((tag) => tag.kind === "multipleOf" && typeof tag.value === "number") || row.some((tag) => (tag.kind === "minimum" || tag.kind === "exclusiveMinimum") && typeof tag.value === "number") && row.some((tag) => (tag.kind === "maximum" || tag.kind === "exclusiveMaximum") && typeof tag.value === "number") ? [] : [
    {
      expected: "number",
      expression: addition
    }
  ],
  ...row.map((tag) => ({
    expected: `number & ${tag.name}`,
    expression: (_nullishCoalesce(tag.predicate, () => ( _chunk2F43GCPEjs.ExpressionFactory.transpile(project.context)(tag.validate))))(input)
  }))
]), "check_numeric_type_tags");



exports.check_number = check_number;
//# sourceMappingURL=chunk-BAWO7PHK.js.map