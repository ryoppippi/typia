"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkBAWO7PHKjs = require('./chunk-BAWO7PHK.js');


var _chunkK7LGCK5Cjs = require('./chunk-K7LGCK5C.js');


var _chunkNBLB3YSVjs = require('./chunk-NBLB3YSV.js');


var _chunkIANZ5MK3js = require('./chunk-IANZ5MK3.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/check_dynamic_key.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var check_dynamic_key = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (importer) => (input, metadata) => {
  if (metadata.atomics.length !== 0 && metadata.atomics.some((a) => a.type === "string" && a.tags.filter((row) => row.every((t) => t.validate !== void 0)).length === 0) || metadata.natives.length !== 0 && metadata.natives.some((type) => type === "String")) return _typescript2.default.factory.createTrue();
  const conditions = [];
  if (metadata.nullable === true) conditions.push(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral("null"), input));
  if (metadata.isRequired() === false) conditions.push(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral("undefined"), input));
  for (const atom of metadata.atomics) if (atom.type === "boolean") conditions.push(_typescript2.default.factory.createLogicalOr(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral("false"), input), _typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral("true"), input)));
  else if (atom.type === "bigint") conditions.push(_typescript2.default.factory.createLogicalAnd(_typescript2.default.factory.createCallExpression(importer.use("is_bigint_string"), void 0, [
    input
  ]), atomist(_chunkIANZ5MK3js.check_bigint.call(void 0, project)(atom)(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("BigInt"), void 0, [
    input
  ])))));
  else if (atom.type === "number") conditions.push(atomist(_chunkBAWO7PHKjs.check_number.call(void 0, project, true)(atom)(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("Number"), void 0, [
    input
  ]))));
  else conditions.push(atomist(_chunkK7LGCK5Cjs.check_string.call(void 0, project)(atom)(input)));
  for (const constant of metadata.constants) for (const { value } of constant.values) conditions.push(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral(String(value)), input));
  if (!!metadata.templates.length) conditions.push(atomist(_chunkNBLB3YSVjs.check_template.call(void 0, metadata.templates)(input)));
  for (const native of metadata.natives) if (native === "Boolean") conditions.push(_typescript2.default.factory.createLogicalOr(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral("false"), input), _typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral("true"), input)));
  else if (native === "BigInt") conditions.push(_typescript2.default.factory.createCallExpression(importer.use("is_bigint_string"), void 0, [
    input
  ]));
  else if (native === "Number") conditions.push(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createFalse(), _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("Number.isNaN"), void 0, [
    _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("Number"), void 0, [
      input
    ])
  ])));
  return conditions.length === 0 ? _typescript2.default.factory.createTrue() : conditions.length === 1 ? conditions[0] : conditions.reduce(_typescript2.default.factory.createLogicalOr);
}, "check_dynamic_key");
var atomist = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (entry) => [
  ...entry.expression ? [
    entry.expression
  ] : [],
  ...entry.conditions.length === 0 ? [] : [
    entry.conditions.map((set) => set.map((s) => s.expression).reduce((a, b) => _typescript2.default.factory.createLogicalAnd(a, b))).reduce((a, b) => _typescript2.default.factory.createLogicalOr(a, b))
  ]
].reduce((x, y) => _typescript2.default.factory.createLogicalAnd(x, y)), "atomist");



exports.check_dynamic_key = check_dynamic_key;
//# sourceMappingURL=chunk-DHNLLHNL.js.map