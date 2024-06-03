"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/check_bigint.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var check_bigint = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (atomic) => (input) => {
  const conditions = check_bigint_type_tags(project)(atomic)(input);
  return {
    expected: atomic.getName(),
    expression: _typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral("bigint"), _typescript2.default.factory.createTypeOfExpression(input)),
    conditions
  };
}, "check_bigint");
var check_bigint_type_tags = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (atomic) => (input) => atomic.tags.map((row) => row.filter((tag) => !!tag.validate)).filter((row) => !!row.length).map((row) => row.map((tag) => ({
  expected: `bigint & ${tag.name}`,
  expression: (_nullishCoalesce(tag.predicate, () => ( _chunk2F43GCPEjs.ExpressionFactory.transpile(project.context)(tag.validate))))(input)
}))), "check_bigint_type_tags");



exports.check_bigint = check_bigint;
//# sourceMappingURL=chunk-IANZ5MK3.js.map