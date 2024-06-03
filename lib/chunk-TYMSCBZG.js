"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/factories/StatementFactory.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var StatementFactory;
(function(StatementFactory2) {
  StatementFactory2.mut = (name, initializer) => _typescript2.default.factory.createVariableStatement(void 0, _typescript2.default.factory.createVariableDeclarationList([
    _typescript2.default.factory.createVariableDeclaration(name, void 0, void 0, initializer)
  ], _typescript2.default.NodeFlags.Let));
  StatementFactory2.constant = (name, initializer) => _typescript2.default.factory.createVariableStatement(void 0, _typescript2.default.factory.createVariableDeclarationList([
    _typescript2.default.factory.createVariableDeclaration(name, void 0, void 0, initializer)
  ], _typescript2.default.NodeFlags.Const));
  StatementFactory2.entry = (key) => (value) => _typescript2.default.factory.createVariableDeclarationList([
    _typescript2.default.factory.createVariableDeclaration(_typescript2.default.factory.createArrayBindingPattern([
      _typescript2.default.factory.createBindingElement(void 0, void 0, _typescript2.default.factory.createIdentifier(key), void 0),
      _typescript2.default.factory.createBindingElement(void 0, void 0, _typescript2.default.factory.createIdentifier(value), void 0)
    ]), void 0, void 0, void 0)
  ], _typescript2.default.NodeFlags.Const);
  StatementFactory2.transpile = (script) => _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createIdentifier(_typescript2.default.transpile(script)));
  StatementFactory2.block = (expression) => _typescript2.default.factory.createBlock([
    _typescript2.default.factory.createExpressionStatement(expression)
  ], true);
})(StatementFactory || (StatementFactory = exports.StatementFactory = {}));



exports.StatementFactory = StatementFactory;
//# sourceMappingURL=chunk-TYMSCBZG.js.map