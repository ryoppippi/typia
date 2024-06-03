"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkXIWFANFGjs = require('./chunk-XIWFANFG.js');


var _chunkDHNLLHNLjs = require('./chunk-DHNLLHNL.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/check_dynamic_properties.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var check_dynamic_properties = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (props) => (project) => (importer) => (input, regular, dynamic) => {
  const length = _chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("Object.keys"), void 0, [
    input
  ]))("length");
  const left = props.equals === true && dynamic.length === 0 ? props.undefined === true || regular.every((r) => r.meta.isRequired()) ? _typescript2.default.factory.createStrictEquality(_chunk2F43GCPEjs.ExpressionFactory.number(regular.filter((r) => r.meta.isRequired()).length), length) : _typescript2.default.factory.createCallExpression(importer.use("is_between"), [], [
    length,
    _chunk2F43GCPEjs.ExpressionFactory.number(regular.filter((r) => r.meta.isRequired()).length),
    _chunk2F43GCPEjs.ExpressionFactory.number(regular.length)
  ]) : null;
  if (props.undefined === false && left !== null && regular.every((r) => r.meta.isRequired())) return left;
  const criteria = props.entries ? _typescript2.default.factory.createCallExpression(props.entries, void 0, [
    _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("Object.keys"), void 0, [
      input
    ]),
    check_dynamic_property(props)(project)(importer)(input, regular, dynamic)
  ]) : _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("Object.keys"), void 0, [
    input
  ]))(props.assert ? "every" : "map"), void 0, [
    check_dynamic_property(props)(project)(importer)(input, regular, dynamic)
  ]);
  const right = (props.halt || ((elem) => elem))(props.assert ? criteria : _chunkXIWFANFGjs.check_everything.call(void 0, criteria));
  return left ? (props.undefined ? _typescript2.default.factory.createLogicalOr : _typescript2.default.factory.createLogicalAnd)(left, right) : right;
}, "check_dynamic_properties");
var check_dynamic_property = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (props) => (project) => (importer) => (input, regular, dynamic) => {
  const key = _typescript2.default.factory.createIdentifier("key");
  const value = _typescript2.default.factory.createIdentifier("value");
  const statements = [];
  const add = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (exp, output) => statements.push(_typescript2.default.factory.createIfStatement(exp, _typescript2.default.factory.createReturnStatement(output))), "add");
  const broken = {
    value: false
  };
  if (regular.length) add(is_regular_property(regular), props.positive);
  statements.push(_chunkTYMSCBZGjs.StatementFactory.constant("value", _typescript2.default.factory.createElementAccessExpression(input, key)));
  if (props.undefined === true) add(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createIdentifier("undefined"), value), props.positive);
  for (const entry of dynamic) {
    const condition = _chunkDHNLLHNLjs.check_dynamic_key.call(void 0, project)(importer)(key, entry.key);
    if (condition.kind === _typescript2.default.SyntaxKind.TrueKeyword) {
      statements.push(_typescript2.default.factory.createReturnStatement(entry.expression));
      broken.value = true;
      break;
    } else add(condition, entry.expression);
  }
  const block = _typescript2.default.factory.createBlock([
    ...statements,
    ...broken.value ? [] : [
      _typescript2.default.factory.createReturnStatement(props.equals === true ? props.superfluous(value) : props.positive)
    ]
  ], true);
  return _typescript2.default.factory.createArrowFunction(void 0, void 0, [
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("key")
  ], void 0, void 0, block);
}, "check_dynamic_property");
var is_regular_property = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (regular) => _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createArrayLiteralExpression(regular.map((entry) => _typescript2.default.factory.createStringLiteral(entry.key.getSoleLiteral()))))("some"), void 0, [
  _typescript2.default.factory.createArrowFunction(void 0, void 0, [
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("prop")
  ], void 0, void 0, _typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createIdentifier("key"), _typescript2.default.factory.createIdentifier("prop")))
]), "is_regular_property");



exports.check_dynamic_properties = check_dynamic_properties;
//# sourceMappingURL=chunk-2FXDVN3G.js.map