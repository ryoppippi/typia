"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkMCMQ56RXjs = require('./chunk-MCMQ56RX.js');


var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/helpers/RandomJoiner.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var RandomJoiner;
(function(RandomJoiner2) {
  RandomJoiner2.array = (coalesce) => (decoder) => (explore) => (length) => (item) => {
    const generator = _typescript2.default.factory.createCallExpression(coalesce("array"), void 0, [
      _typescript2.default.factory.createArrowFunction(void 0, void 0, [], void 0, void 0, decoder(item)),
      ...length ? [
        length
      ] : []
    ]);
    if (explore.recursive === false) return generator;
    return _typescript2.default.factory.createConditionalExpression(_typescript2.default.factory.createGreaterThanEquals(_chunk2F43GCPEjs.ExpressionFactory.number(5), _typescript2.default.factory.createIdentifier("_depth")), void 0, generator, void 0, _typescript2.default.factory.createArrayLiteralExpression([]));
  };
  RandomJoiner2.tuple = (decoder) => (elements) => _typescript2.default.factory.createArrayLiteralExpression(elements.map((elem) => decoder(_nullishCoalesce(elem.rest, () => ( elem)))), true);
  RandomJoiner2.object = (coalesce) => (decoder) => (obj) => {
    if (obj.properties.length === 0) return _typescript2.default.factory.createIdentifier("{}");
    const regular = obj.properties.filter((p) => p.key.isSoleLiteral());
    const dynamic = obj.properties.filter((p) => !p.key.isSoleLiteral());
    const literal = _typescript2.default.factory.createObjectLiteralExpression(regular.map((p) => {
      const str = p.key.getSoleLiteral();
      return _typescript2.default.factory.createPropertyAssignment(_chunkMCMQ56RXjs.Escaper.variable(str) ? str : _typescript2.default.factory.createStringLiteral(str), decoder(p.value));
    }), true);
    if (dynamic.length === 0) return literal;
    const properties = dynamic.map((p) => _typescript2.default.factory.createExpressionStatement(dynamicProperty(coalesce)(decoder)(p)));
    return _typescript2.default.factory.createBlock([
      _chunkTYMSCBZGjs.StatementFactory.constant("output", _typescript2.default.factory.createAsExpression(literal, _chunkPK6R5VEJjs.TypeFactory.keyword("any"))),
      ...obj.recursive ? [
        _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createGreaterThanEquals(_chunk2F43GCPEjs.ExpressionFactory.number(5), _typescript2.default.factory.createIdentifier("_depth")), _typescript2.default.factory.createBlock(properties, true))
      ] : properties,
      _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createIdentifier("output"))
    ], true);
  };
  const dynamicProperty = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (coalesce) => (decoder) => (p) => _typescript2.default.factory.createCallExpression(coalesce("array"), void 0, [
    _typescript2.default.factory.createArrowFunction(void 0, void 0, [], void 0, void 0, _typescript2.default.factory.createBinaryExpression(_typescript2.default.factory.createElementAccessExpression(_typescript2.default.factory.createIdentifier("output"), decoder(p.key)), _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.EqualsToken), decoder(p.value))),
    _typescript2.default.factory.createCallExpression(coalesce("integer"), void 0, [
      _chunk2F43GCPEjs.ExpressionFactory.number(0),
      _chunk2F43GCPEjs.ExpressionFactory.number(3)
    ])
  ]), "dynamicProperty");
})(RandomJoiner || (RandomJoiner = exports.RandomJoiner = {}));



exports.RandomJoiner = RandomJoiner;
//# sourceMappingURL=chunk-F7FRTCGW.js.map