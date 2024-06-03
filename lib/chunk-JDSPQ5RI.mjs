import {
  metadata_to_pattern
} from "./chunk-TE33WDSA.mjs";
import {
  StatementFactory
} from "./chunk-RR3Z23V6.mjs";
import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";
import {
  Escaper
} from "./chunk-DISTKAQW.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";

// src/programmers/helpers/CloneJoiner.ts
import ts from "typescript";
var CloneJoiner;
(function(CloneJoiner2) {
  CloneJoiner2.object = (input, entries) => {
    if (entries.length === 0) return ts.factory.createIdentifier("{}");
    const regular = entries.filter((e) => e.key.isSoleLiteral());
    const dynamic = entries.filter((e) => !e.key.isSoleLiteral());
    const literal = ts.factory.createObjectLiteralExpression(regular.map((entry) => {
      const str = entry.key.getSoleLiteral();
      return ts.factory.createPropertyAssignment(Escaper.variable(str) ? str : ts.factory.createStringLiteral(str), entry.expression);
    }), true);
    if (dynamic.length === 0) return literal;
    const key = ts.factory.createIdentifier("key");
    const output = ts.factory.createIdentifier("output");
    const statements = [];
    if (regular.length !== 0) statements.push(ts.factory.createIfStatement(ts.factory.createCallExpression(IdentifierFactory.access(ts.factory.createArrayLiteralExpression(regular.map((r) => ts.factory.createStringLiteral(r.key.getSoleLiteral()))))("some"), void 0, [
      ts.factory.createArrowFunction(void 0, void 0, [
        IdentifierFactory.parameter("regular")
      ], void 0, void 0, ts.factory.createStrictEquality(ts.factory.createIdentifier("regular"), ts.factory.createIdentifier("key")))
    ]), ts.factory.createContinueStatement()));
    statements.push(...dynamic.map((entry) => ts.factory.createIfStatement(ts.factory.createCallExpression(ts.factory.createIdentifier(`RegExp(/${metadata_to_pattern(true)(entry.key)}/).test`), void 0, [
      key
    ]), ts.factory.createBlock([
      ts.factory.createExpressionStatement(ts.factory.createBinaryExpression(ts.factory.createElementAccessExpression(output, key), ts.factory.createToken(ts.SyntaxKind.EqualsToken), entry.expression)),
      ts.factory.createContinueStatement()
    ]))));
    return ts.factory.createBlock([
      StatementFactory.constant("output", ts.factory.createAsExpression(literal, TypeFactory.keyword("any"))),
      ts.factory.createForOfStatement(void 0, StatementFactory.entry("key")("value"), ts.factory.createCallExpression(ts.factory.createIdentifier("Object.entries"), void 0, [
        input
      ]), ts.factory.createBlock(statements)),
      ts.factory.createReturnStatement(output)
    ]);
  };
  CloneJoiner2.tuple = (children, rest) => {
    return ts.factory.createAsExpression(ts.factory.createArrayLiteralExpression(rest === null ? children : [
      ...children,
      ts.factory.createSpreadElement(rest)
    ], true), TypeFactory.keyword("any"));
  };
  CloneJoiner2.array = (input, arrow) => ts.factory.createCallExpression(ts.factory.createPropertyAccessExpression(input, "map"), void 0, [
    arrow
  ]);
})(CloneJoiner || (CloneJoiner = {}));

export {
  CloneJoiner
};
//# sourceMappingURL=chunk-JDSPQ5RI.mjs.map