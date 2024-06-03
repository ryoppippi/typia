"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkT3PGTOEHjs = require('./chunk-T3PGTOEH.js');


var _chunkISRAPRZNjs = require('./chunk-ISRAPRZN.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/stringify_regular_properties.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var stringify_regular_properties = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (regular, dynamic) => {
  const output = [];
  regular.sort((x, y) => sequence(x.meta) - sequence(y.meta));
  regular.forEach((entry, index) => {
    const key = entry.key.getSoleLiteral();
    const base = [
      _typescript2.default.factory.createStringLiteral(`${JSON.stringify(key)}:`),
      entry.expression
    ];
    if (index !== regular.length - 1 || dynamic.length !== 0) base.push(_typescript2.default.factory.createStringLiteral(`,`));
    const empty = entry.meta.isRequired() === false && entry.meta.nullable === false && entry.meta.size() === 0 || entry.meta.functional && entry.meta.nullable === false && entry.meta.size() === 1;
    if (empty === true) return;
    else if (entry.meta.isRequired() === false || entry.meta.functional === true || entry.meta.any === true) output.push(_typescript2.default.factory.createConditionalExpression((() => {
      const conditions = [];
      if (entry.meta.isRequired() === false || entry.meta.any) conditions.push(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createIdentifier("undefined"), entry.input));
      if (entry.meta.functional || entry.meta.any) conditions.push(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral("function"), _chunkISRAPRZNjs.ValueFactory.TYPEOF(entry.input)));
      return conditions.length === 1 ? conditions[0] : conditions.reduce((x, y) => _typescript2.default.factory.createLogicalOr(x, y));
    })(), void 0, _typescript2.default.factory.createStringLiteral(""), void 0, _chunkT3PGTOEHjs.TemplateFactory.generate(base)));
    else output.push(...base);
  });
  return output;
}, "stringify_regular_properties");
var sequence = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (meta) => meta.any || !meta.isRequired() || meta.functional ? 0 : 1, "sequence");



exports.stringify_regular_properties = stringify_regular_properties;
//# sourceMappingURL=chunk-MASAGYS7.js.map