"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkOGIS7KFPjs = require('./chunk-OGIS7KFP.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkMCMQ56RXjs = require('./chunk-MCMQ56RX.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');

// src/programmers/helpers/NotationJoiner.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var NotationJoiner;
(function(NotationJoiner2) {
  NotationJoiner2.object = (rename) => (input, entries) => {
    if (entries.length === 0) return _typescript2.default.factory.createIdentifier("{}");
    const regular = entries.filter((e) => e.key.isSoleLiteral());
    const dynamic = entries.filter((e) => !e.key.isSoleLiteral());
    const literal = _typescript2.default.factory.createObjectLiteralExpression(regular.map((entry) => {
      const str = rename(entry.key.getSoleLiteral());
      return _typescript2.default.factory.createPropertyAssignment(_chunkMCMQ56RXjs.Escaper.variable(str) ? str : _typescript2.default.factory.createStringLiteral(str), entry.expression);
    }), true);
    if (dynamic.length === 0) return literal;
    const key = _typescript2.default.factory.createIdentifier("key");
    const output = _typescript2.default.factory.createIdentifier("output");
    const statements = [];
    if (regular.length !== 0) statements.push(_typescript2.default.factory.createIfStatement(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createArrayLiteralExpression(regular.map((r) => _typescript2.default.factory.createStringLiteral(r.key.getSoleLiteral()))))("some"), void 0, [
      _typescript2.default.factory.createArrowFunction(void 0, void 0, [
        _chunkUUZFPK7Njs.IdentifierFactory.parameter("regular")
      ], void 0, void 0, _typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createIdentifier("regular"), _typescript2.default.factory.createIdentifier("key")))
    ]), _typescript2.default.factory.createContinueStatement()));
    statements.push(...dynamic.map((entry) => _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(`RegExp(/${_chunkOGIS7KFPjs.metadata_to_pattern.call(void 0, true)(entry.key)}/).test`), void 0, [
      key
    ]), _typescript2.default.factory.createBlock([
      _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createBinaryExpression(_typescript2.default.factory.createElementAccessExpression(output, key), _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.EqualsToken), entry.expression)),
      _typescript2.default.factory.createContinueStatement()
    ]))));
    return _typescript2.default.factory.createBlock([
      _chunkTYMSCBZGjs.StatementFactory.constant("output", _typescript2.default.factory.createAsExpression(literal, _chunkPK6R5VEJjs.TypeFactory.keyword("any"))),
      _typescript2.default.factory.createForOfStatement(void 0, _chunkTYMSCBZGjs.StatementFactory.entry("key")("value"), _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("Object.entries"), void 0, [
        input
      ]), _typescript2.default.factory.createBlock(statements)),
      _typescript2.default.factory.createReturnStatement(output)
    ]);
  };
  NotationJoiner2.tuple = (children, rest) => {
    return _typescript2.default.factory.createAsExpression(_typescript2.default.factory.createArrayLiteralExpression(rest === null ? children : [
      ...children,
      _typescript2.default.factory.createSpreadElement(rest)
    ], true), _chunkPK6R5VEJjs.TypeFactory.keyword("any"));
  };
  NotationJoiner2.array = (input, arrow) => _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createPropertyAccessExpression(input, "map"), void 0, [
    arrow
  ]);
})(NotationJoiner || (NotationJoiner = exports.NotationJoiner = {}));



exports.NotationJoiner = NotationJoiner;
//# sourceMappingURL=chunk-IUOPPN2N.js.map