// src/factories/StatementFactory.ts
import ts from "typescript";
var StatementFactory;
(function(StatementFactory2) {
  StatementFactory2.mut = (name, initializer) => ts.factory.createVariableStatement(void 0, ts.factory.createVariableDeclarationList([
    ts.factory.createVariableDeclaration(name, void 0, void 0, initializer)
  ], ts.NodeFlags.Let));
  StatementFactory2.constant = (name, initializer) => ts.factory.createVariableStatement(void 0, ts.factory.createVariableDeclarationList([
    ts.factory.createVariableDeclaration(name, void 0, void 0, initializer)
  ], ts.NodeFlags.Const));
  StatementFactory2.entry = (key) => (value) => ts.factory.createVariableDeclarationList([
    ts.factory.createVariableDeclaration(ts.factory.createArrayBindingPattern([
      ts.factory.createBindingElement(void 0, void 0, ts.factory.createIdentifier(key), void 0),
      ts.factory.createBindingElement(void 0, void 0, ts.factory.createIdentifier(value), void 0)
    ]), void 0, void 0, void 0)
  ], ts.NodeFlags.Const);
  StatementFactory2.transpile = (script) => ts.factory.createExpressionStatement(ts.factory.createIdentifier(ts.transpile(script)));
  StatementFactory2.block = (expression) => ts.factory.createBlock([
    ts.factory.createExpressionStatement(expression)
  ], true);
})(StatementFactory || (StatementFactory = {}));

export {
  StatementFactory
};
//# sourceMappingURL=chunk-RR3Z23V6.mjs.map