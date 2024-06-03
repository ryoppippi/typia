"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkSIGOR7QQjs = require('./chunk-SIGOR7QQ.js');


var _chunkUNOXPWQEjs = require('./chunk-UNOXPWQE.js');


var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkX72M22NMjs = require('./chunk-X72M22NM.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/check_union_array_like.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var check_union_array_like = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (accessor) => (props) => (parameters) => (input, origins, explore) => {
  const targets = origins.map(accessor.transform);
  if (targets.length === 1) return _typescript2.default.factory.createArrowFunction(void 0, void 0, parameters, void 0, void 0, props.decoder(accessor.array(input), targets[0], explore));
  const array = _typescript2.default.factory.createIdentifier("array");
  const top = _typescript2.default.factory.createIdentifier("top");
  const statements = [];
  const tupleList = targets.filter((t) => t instanceof _chunkSIGOR7QQjs.MetadataTuple);
  const arrayList = targets.filter((t) => t instanceof _chunkUNOXPWQEjs.MetadataArray);
  const predicate = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (meta) => _typescript2.default.factory.createAsExpression(_typescript2.default.factory.createArrayLiteralExpression([
    _typescript2.default.factory.createArrowFunction(void 0, void 0, [
      _chunkUUZFPK7Njs.IdentifierFactory.parameter("top", meta instanceof _chunkX72M22NMjs.MetadataArrayType ? _chunkPK6R5VEJjs.TypeFactory.keyword("any") : _typescript2.default.factory.createTypeReferenceNode("any[]"))
    ], _chunkPK6R5VEJjs.TypeFactory.keyword("any"), void 0, props.checker(_typescript2.default.factory.createIdentifier("top"), accessor.element(meta), {
      ...explore,
      tracable: false,
      postfix: meta instanceof _chunkX72M22NMjs.MetadataArrayType ? `"[0]"` : ""
    }, array)),
    _typescript2.default.factory.createArrowFunction(void 0, void 0, [
      _chunkUUZFPK7Njs.IdentifierFactory.parameter("entire", _typescript2.default.factory.createTypeReferenceNode("any[]"))
    ], _chunkPK6R5VEJjs.TypeFactory.keyword("any"), void 0, props.decoder(_typescript2.default.factory.createIdentifier("entire"), meta, {
      ...explore,
      tracable: true
    }))
  ], true), _typescript2.default.factory.createTypeReferenceNode("const")), "predicate");
  const iterate = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (init) => (from) => (stmt) => _typescript2.default.factory.createForOfStatement(void 0, _typescript2.default.factory.createVariableDeclarationList([
    _typescript2.default.factory.createVariableDeclaration(init)
  ], _typescript2.default.NodeFlags.Const), from, stmt), "iterate");
  if (tupleList.length) statements.push(_chunkTYMSCBZGjs.StatementFactory.constant("array", accessor.array(input)), _chunkTYMSCBZGjs.StatementFactory.constant("tuplePredicators", _typescript2.default.factory.createArrayLiteralExpression(tupleList.map((x) => predicate(x)), true)), iterate("pred")(_typescript2.default.factory.createIdentifier("tuplePredicators"))(_typescript2.default.factory.createIfStatement(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("pred[0]"), void 0, [
    array
  ]), _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(`pred[1]`), void 0, [
    array
  ])))));
  if (arrayList.length) {
    if (tupleList.length === 0) statements.push(_chunkTYMSCBZGjs.StatementFactory.constant("array", accessor.array(input)));
    statements.push(_chunkTYMSCBZGjs.StatementFactory.constant("top", accessor.front(input)), _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createStrictEquality(_chunk2F43GCPEjs.ExpressionFactory.number(0), accessor.size(input)), _typescript2.default.isReturnStatement(props.empty) ? props.empty : _typescript2.default.factory.createReturnStatement(props.empty)), _chunkTYMSCBZGjs.StatementFactory.constant("arrayPredicators", _typescript2.default.factory.createArrayLiteralExpression(arrayList.map((x) => predicate(x)), true)), _chunkTYMSCBZGjs.StatementFactory.constant("passed", _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createIdentifier("arrayPredicators"))("filter"), void 0, [
      _typescript2.default.factory.createArrowFunction(void 0, void 0, [
        _chunkUUZFPK7Njs.IdentifierFactory.parameter("pred")
      ], void 0, void 0, _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("pred[0]"), void 0, [
        top
      ]))
    ])), _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createStrictEquality(_chunk2F43GCPEjs.ExpressionFactory.number(1), _typescript2.default.factory.createIdentifier("passed.length")), _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createElementAccessExpression(_typescript2.default.factory.createNonNullExpression(_typescript2.default.factory.createIdentifier("passed[0]")), 1), void 0, [
      array
    ])), _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createLessThan(_chunk2F43GCPEjs.ExpressionFactory.number(1), _typescript2.default.factory.createIdentifier("passed.length")), iterate("pred")(_typescript2.default.factory.createIdentifier("passed"))(_typescript2.default.factory.createIfStatement(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(array)("every"), void 0, [
      _typescript2.default.factory.createArrowFunction(void 0, void 0, [
        _chunkUUZFPK7Njs.IdentifierFactory.parameter("value", _chunkPK6R5VEJjs.TypeFactory.keyword("any"))
      ], void 0, void 0, _typescript2.default.factory.createStrictEquality(props.success, _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("pred[0]"), void 0, [
        _typescript2.default.factory.createIdentifier("value")
      ])))
    ]), _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(`pred[1]`), void 0, [
      _typescript2.default.factory.createIdentifier("array")
    ])))))));
  }
  statements.push(props.failure(input, `(${targets.map((t) => accessor.name(t, accessor.element(t))).join(" | ")})`, explore));
  return _typescript2.default.factory.createArrowFunction(void 0, void 0, parameters, void 0, void 0, _typescript2.default.factory.createBlock(statements, true));
}, "check_union_array_like");



exports.check_union_array_like = check_union_array_like;
//# sourceMappingURL=chunk-62A7TMSK.js.map