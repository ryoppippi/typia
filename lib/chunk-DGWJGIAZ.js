"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/check_array_length.ts
var check_array_length = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (array) => (input) => {
  const conditions = check_string_type_tags(project)(array.tags)(input);
  return {
    expected: array.getName(),
    expression: null,
    conditions
  };
}, "check_array_length");
var check_string_type_tags = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (matrix) => (input) => matrix.map((row) => row.filter((tag) => !!tag.validate)).filter((row) => !!row.length).map((row) => row.map((tag) => ({
  expected: `Array<> & ${tag.name}`,
  expression: (_nullishCoalesce(tag.predicate, () => ( _chunk2F43GCPEjs.ExpressionFactory.transpile(project.context)(tag.validate))))(input)
}))), "check_string_type_tags");



exports.check_array_length = check_array_length;
//# sourceMappingURL=chunk-DGWJGIAZ.js.map