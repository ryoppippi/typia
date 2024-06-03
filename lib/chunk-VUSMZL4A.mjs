import {
  StatementFactory
} from "./chunk-RR3Z23V6.mjs";
import {
  Escaper
} from "./chunk-DISTKAQW.mjs";
import {
  ExpressionFactory
} from "./chunk-TJUGWBRO.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/helpers/RandomJoiner.ts
import ts from "typescript";
var RandomJoiner;
(function(RandomJoiner2) {
  RandomJoiner2.array = (coalesce) => (decoder) => (explore) => (length) => (item) => {
    const generator = ts.factory.createCallExpression(coalesce("array"), void 0, [
      ts.factory.createArrowFunction(void 0, void 0, [], void 0, void 0, decoder(item)),
      ...length ? [
        length
      ] : []
    ]);
    if (explore.recursive === false) return generator;
    return ts.factory.createConditionalExpression(ts.factory.createGreaterThanEquals(ExpressionFactory.number(5), ts.factory.createIdentifier("_depth")), void 0, generator, void 0, ts.factory.createArrayLiteralExpression([]));
  };
  RandomJoiner2.tuple = (decoder) => (elements) => ts.factory.createArrayLiteralExpression(elements.map((elem) => decoder(elem.rest ?? elem)), true);
  RandomJoiner2.object = (coalesce) => (decoder) => (obj) => {
    if (obj.properties.length === 0) return ts.factory.createIdentifier("{}");
    const regular = obj.properties.filter((p) => p.key.isSoleLiteral());
    const dynamic = obj.properties.filter((p) => !p.key.isSoleLiteral());
    const literal = ts.factory.createObjectLiteralExpression(regular.map((p) => {
      const str = p.key.getSoleLiteral();
      return ts.factory.createPropertyAssignment(Escaper.variable(str) ? str : ts.factory.createStringLiteral(str), decoder(p.value));
    }), true);
    if (dynamic.length === 0) return literal;
    const properties = dynamic.map((p) => ts.factory.createExpressionStatement(dynamicProperty(coalesce)(decoder)(p)));
    return ts.factory.createBlock([
      StatementFactory.constant("output", ts.factory.createAsExpression(literal, TypeFactory.keyword("any"))),
      ...obj.recursive ? [
        ts.factory.createIfStatement(ts.factory.createGreaterThanEquals(ExpressionFactory.number(5), ts.factory.createIdentifier("_depth")), ts.factory.createBlock(properties, true))
      ] : properties,
      ts.factory.createReturnStatement(ts.factory.createIdentifier("output"))
    ], true);
  };
  const dynamicProperty = /* @__PURE__ */ __name((coalesce) => (decoder) => (p) => ts.factory.createCallExpression(coalesce("array"), void 0, [
    ts.factory.createArrowFunction(void 0, void 0, [], void 0, void 0, ts.factory.createBinaryExpression(ts.factory.createElementAccessExpression(ts.factory.createIdentifier("output"), decoder(p.key)), ts.factory.createToken(ts.SyntaxKind.EqualsToken), decoder(p.value))),
    ts.factory.createCallExpression(coalesce("integer"), void 0, [
      ExpressionFactory.number(0),
      ExpressionFactory.number(3)
    ])
  ]), "dynamicProperty");
})(RandomJoiner || (RandomJoiner = {}));

export {
  RandomJoiner
};
//# sourceMappingURL=chunk-VUSMZL4A.mjs.map