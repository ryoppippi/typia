"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/decode_union_object.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var decode_union_object = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (decoder) => (success) => (escaper) => (input, targets, explore) => _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createArrowFunction(void 0, void 0, [], void 0, void 0, iterate(escaper)(input, targets.map((obj) => ({
  type: "object",
  is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => success(checker(input, obj, explore)), "is"),
  value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => decoder(input, obj, explore), "value")
})), `(${targets.map((t) => t.name).join(" | ")})`)), void 0, void 0), "decode_union_object");
var iterate = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (escaper) => (input, unions, expected) => {
  const branches = [];
  for (const u of unions) {
    const condition = u.is();
    if (condition.kind === _typescript2.default.SyntaxKind.TrueKeyword) {
      branches.push({
        condition: null,
        value: u.value()
      });
      break;
    }
    branches.push({
      condition,
      value: u.value()
    });
  }
  if (branches.length === 0) return _typescript2.default.factory.createBlock([
    escaper(input, expected)
  ], true);
  else if (branches.length === 1 && branches[0].condition === null) return branches[0].value;
  const statements = branches.map((b) => b.condition !== null ? _typescript2.default.factory.createIfStatement(b.condition, _typescript2.default.factory.createReturnStatement(b.value), void 0) : _typescript2.default.factory.createReturnStatement(b.value));
  if (branches.at(-1).condition !== null) statements.push(escaper(input, expected));
  return _typescript2.default.factory.createBlock(statements, true);
}, "iterate");



exports.decode_union_object = decode_union_object;
//# sourceMappingURL=chunk-TPC3R5AS.js.map