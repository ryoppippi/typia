"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkS3VZR3G5js = require('./chunk-S3VZR3G5.js');


var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/random_custom.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var random_custom = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (accessor) => (type) => (tags) => (expression) => _chunk2F43GCPEjs.ExpressionFactory.coalesce(_typescript2.default.factory.createCallChain(_typescript2.default.factory.createPropertyAccessChain(accessor("customs"), _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.QuestionDotToken), _typescript2.default.factory.createIdentifier(type)), _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.QuestionDotToken), void 0, [
  _chunkS3VZR3G5js.LiteralFactory.generate(tags.map((t) => ({
    name: t.name,
    kind: t.kind,
    value: t.value
  })))
]))(expression), "random_custom");



exports.random_custom = random_custom;
//# sourceMappingURL=chunk-SL6Y5DQG.js.map