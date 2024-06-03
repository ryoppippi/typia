"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/check_native.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var check_native = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (type) => (input) => {
  const instanceOf = _chunk2F43GCPEjs.ExpressionFactory.isInstanceOf(type)(input);
  return ATOMIC_LIKE.has(type) ? _typescript2.default.factory.createLogicalOr(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral(type.toLowerCase()), _typescript2.default.factory.createTypeOfExpression(input)), instanceOf) : instanceOf;
}, "check_native");
var ATOMIC_LIKE = /* @__PURE__ */ new Set([
  "Boolean",
  "Number",
  "String"
]);



exports.check_native = check_native;
//# sourceMappingURL=chunk-VLX66HCH.js.map