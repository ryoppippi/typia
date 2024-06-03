"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunk2CS37RRUjs = require('./chunk-2CS37RRU.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/factories/ExpressionFactory.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var ExpressionFactory;
(function(ExpressionFactory2) {
  ExpressionFactory2.number = (value) => value < 0 ? _typescript2.default.factory.createPrefixUnaryExpression(_typescript2.default.SyntaxKind.MinusToken, _typescript2.default.factory.createNumericLiteral(Math.abs(value))) : _typescript2.default.factory.createNumericLiteral(value);
  ExpressionFactory2.bigint = (value) => _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("BigInt"), void 0, [
    _typescript2.default.factory.createIdentifier(value.toString())
  ]);
  ExpressionFactory2.isRequired = (input) => _typescript2.default.factory.createStrictInequality(_typescript2.default.factory.createIdentifier("undefined"), input);
  ExpressionFactory2.isArray = (input) => _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("Array.isArray"), void 0, [
    input
  ]);
  ExpressionFactory2.isObject = (options) => (input) => {
    const conditions = [
      _typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral("object"), _typescript2.default.factory.createTypeOfExpression(input))
    ];
    if (options.checkNull === true) conditions.push(_typescript2.default.factory.createStrictInequality(_typescript2.default.factory.createNull(), input));
    if (options.checkArray === true) conditions.push(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createFalse(), _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("Array.isArray"), void 0, [
      input
    ])));
    return conditions.length === 1 ? conditions[0] : conditions.reduce((x, y) => _typescript2.default.factory.createLogicalAnd(x, y));
  };
  ExpressionFactory2.isInstanceOf = (type) => (input) => {
    return _typescript2.default.factory.createBinaryExpression(input, _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.InstanceOfKeyword), _typescript2.default.factory.createIdentifier(type));
  };
  ExpressionFactory2.coalesce = (x) => (y) => _typescript2.default.factory.createBinaryExpression(x, _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.QuestionQuestionToken), y);
  ExpressionFactory2.currying = (target) => (parameters) => {
    if (parameters.length === 0) return _typescript2.default.factory.createCallExpression(target, void 0, void 0);
    let prev = _typescript2.default.factory.createCallExpression(target, void 0, [
      parameters[0]
    ]);
    for (const param of parameters.slice(1)) prev = _typescript2.default.factory.createCallExpression(prev, void 0, [
      param
    ]);
    return prev;
  };
  ExpressionFactory2.selfCall = (body) => _typescript2.default.isCallExpression(body) ? body : _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createParenthesizedExpression(_typescript2.default.factory.createArrowFunction(void 0, void 0, [], void 0, void 0, body)), void 0, void 0);
  ExpressionFactory2.getEscapedText = (printer) => (input) => printer.printNode(_typescript2.default.EmitHint.Expression, input, input.getSourceFile());
  ExpressionFactory2.transpile = (context) => (script) => {
    const file = _typescript2.default.createSourceFile(`${_chunk2CS37RRUjs.RandomGenerator_exports.uuid()}.ts`, script, _typescript2.default.ScriptTarget.ESNext, true, _typescript2.default.ScriptKind.TS);
    const statement = file.statements[0];
    if (statement === void 0) throw new ReferenceError("Error on ExpressionFactory.transpile(): no statement exists.");
    else if (!_typescript2.default.isExpressionStatement(statement)) throw new TypeError("Error on ExpressionFactory.transpile(): statement is not an expression statement.");
    return (input) => {
      const visitor = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (node) => {
        if (_typescript2.default.isIdentifier(node) && node.text === "$input") return input;
        return _typescript2.default.visitEachChild(_typescript2.default.factory.cloneNode(node), visitor, context);
      }, "visitor");
      return visitor(statement.expression);
    };
  };
})(ExpressionFactory || (ExpressionFactory = exports.ExpressionFactory = {}));



exports.ExpressionFactory = ExpressionFactory;
//# sourceMappingURL=chunk-2F43GCPE.js.map