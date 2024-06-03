"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkH3MUGVKWjs = require('./chunk-H3MUGVKW.js');


var _chunk6TJDJHWOjs = require('./chunk-6TJDJHWO.js');


var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkERQBF2DGjs = require('./chunk-ERQBF2DG.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/misc/MiscLiteralsProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var MiscLiteralsProgrammer;
(function(MiscLiteralsProgrammer2) {
  MiscLiteralsProgrammer2.write = (project) => (type) => {
    const result = _chunk6TJDJHWOjs.MetadataFactory.analyze(project.checker, project.context)({
      escape: true,
      constant: true,
      absorb: true,
      validate: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (meta2) => {
        const length = meta2.constants.map((c) => c.values.length).reduce((a, b) => a + b, 0) + meta2.atomics.filter((a) => a.type === "boolean").length;
        if (0 === length) return [
          "no constant literal type found."
        ];
        else if (meta2.size() !== length) return [
          "only constant literal types are allowed."
        ];
        return [];
      }, "validate")
    })(new (0, _chunkERQBF2DGjs.MetadataCollection)())(type);
    if (result.success === false) throw _chunkH3MUGVKWjs.TransformerError.from(`typia.misc.literals`)(result.errors);
    const meta = result.data;
    const values = /* @__PURE__ */ new Set([
      ...meta.constants.map((c) => c.values.map((v) => v.value)).flat(),
      ...meta.atomics.filter((a) => a.type === "boolean").length ? [
        true,
        false
      ] : [],
      ...meta.nullable ? [
        null
      ] : []
    ]);
    return _typescript2.default.factory.createAsExpression(_typescript2.default.factory.createArrayLiteralExpression([
      ...values
    ].map((v) => v === null ? _typescript2.default.factory.createNull() : typeof v === "boolean" ? v ? _typescript2.default.factory.createTrue() : _typescript2.default.factory.createFalse() : typeof v === "number" ? _chunk2F43GCPEjs.ExpressionFactory.number(v) : typeof v === "bigint" ? _chunk2F43GCPEjs.ExpressionFactory.bigint(Number(v)) : _typescript2.default.factory.createStringLiteral(v)), true), _typescript2.default.factory.createTypeReferenceNode("const"));
  };
})(MiscLiteralsProgrammer || (MiscLiteralsProgrammer = exports.MiscLiteralsProgrammer = {}));
var ErrorMessages;
(function(ErrorMessages2) {
  ErrorMessages2["NO"] = "no constant literal type found.";
  ErrorMessages2["ONLY"] = "only constant literal types are allowed.";
})(ErrorMessages || (ErrorMessages = {}));



exports.MiscLiteralsProgrammer = MiscLiteralsProgrammer;
//# sourceMappingURL=chunk-K5RYADNP.js.map