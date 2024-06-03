import {
  RandomGenerator_exports
} from "./chunk-3TFN5QJ6.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/factories/ExpressionFactory.ts
import ts from "typescript";
var ExpressionFactory;
(function(ExpressionFactory2) {
  ExpressionFactory2.number = (value) => value < 0 ? ts.factory.createPrefixUnaryExpression(ts.SyntaxKind.MinusToken, ts.factory.createNumericLiteral(Math.abs(value))) : ts.factory.createNumericLiteral(value);
  ExpressionFactory2.bigint = (value) => ts.factory.createCallExpression(ts.factory.createIdentifier("BigInt"), void 0, [
    ts.factory.createIdentifier(value.toString())
  ]);
  ExpressionFactory2.isRequired = (input) => ts.factory.createStrictInequality(ts.factory.createIdentifier("undefined"), input);
  ExpressionFactory2.isArray = (input) => ts.factory.createCallExpression(ts.factory.createIdentifier("Array.isArray"), void 0, [
    input
  ]);
  ExpressionFactory2.isObject = (options) => (input) => {
    const conditions = [
      ts.factory.createStrictEquality(ts.factory.createStringLiteral("object"), ts.factory.createTypeOfExpression(input))
    ];
    if (options.checkNull === true) conditions.push(ts.factory.createStrictInequality(ts.factory.createNull(), input));
    if (options.checkArray === true) conditions.push(ts.factory.createStrictEquality(ts.factory.createFalse(), ts.factory.createCallExpression(ts.factory.createIdentifier("Array.isArray"), void 0, [
      input
    ])));
    return conditions.length === 1 ? conditions[0] : conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y));
  };
  ExpressionFactory2.isInstanceOf = (type) => (input) => {
    return ts.factory.createBinaryExpression(input, ts.factory.createToken(ts.SyntaxKind.InstanceOfKeyword), ts.factory.createIdentifier(type));
  };
  ExpressionFactory2.coalesce = (x) => (y) => ts.factory.createBinaryExpression(x, ts.factory.createToken(ts.SyntaxKind.QuestionQuestionToken), y);
  ExpressionFactory2.currying = (target) => (parameters) => {
    if (parameters.length === 0) return ts.factory.createCallExpression(target, void 0, void 0);
    let prev = ts.factory.createCallExpression(target, void 0, [
      parameters[0]
    ]);
    for (const param of parameters.slice(1)) prev = ts.factory.createCallExpression(prev, void 0, [
      param
    ]);
    return prev;
  };
  ExpressionFactory2.selfCall = (body) => ts.isCallExpression(body) ? body : ts.factory.createCallExpression(ts.factory.createParenthesizedExpression(ts.factory.createArrowFunction(void 0, void 0, [], void 0, void 0, body)), void 0, void 0);
  ExpressionFactory2.getEscapedText = (printer) => (input) => printer.printNode(ts.EmitHint.Expression, input, input.getSourceFile());
  ExpressionFactory2.transpile = (context) => (script) => {
    const file = ts.createSourceFile(`${RandomGenerator_exports.uuid()}.ts`, script, ts.ScriptTarget.ESNext, true, ts.ScriptKind.TS);
    const statement = file.statements[0];
    if (statement === void 0) throw new ReferenceError("Error on ExpressionFactory.transpile(): no statement exists.");
    else if (!ts.isExpressionStatement(statement)) throw new TypeError("Error on ExpressionFactory.transpile(): statement is not an expression statement.");
    return (input) => {
      const visitor = /* @__PURE__ */ __name((node) => {
        if (ts.isIdentifier(node) && node.text === "$input") return input;
        return ts.visitEachChild(ts.factory.cloneNode(node), visitor, context);
      }, "visitor");
      return visitor(statement.expression);
    };
  };
})(ExpressionFactory || (ExpressionFactory = {}));

export {
  ExpressionFactory
};
//# sourceMappingURL=chunk-TJUGWBRO.mjs.map