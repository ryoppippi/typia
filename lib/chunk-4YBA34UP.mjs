import {
  metadata_to_pattern
} from "./chunk-TE33WDSA.mjs";
import {
  StatementFactory
} from "./chunk-RR3Z23V6.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/prune_object_properties.ts
import ts from "typescript";
var prune_object_properties = /* @__PURE__ */ __name((obj) => {
  const input = ts.factory.createIdentifier("input");
  const key = ts.factory.createIdentifier("key");
  const condition = obj.properties.map((prop) => {
    const name = prop.key.getSoleLiteral();
    if (name !== null) return ts.factory.createStrictEquality(ts.factory.createStringLiteral(name), ts.factory.createIdentifier("key"));
    return ts.factory.createCallExpression(ts.factory.createIdentifier(`RegExp(/${metadata_to_pattern(true)(prop.key)}/).test`), void 0, [
      key
    ]);
  });
  const statements = [];
  if (condition.length) statements.push(ts.factory.createIfStatement(condition.reduce((a, b) => ts.factory.createLogicalOr(a, b)), ts.factory.createContinueStatement()));
  statements.push(ts.factory.createExpressionStatement(ts.factory.createDeleteExpression(ts.factory.createElementAccessExpression(input, key))));
  return ts.factory.createForOfStatement(void 0, StatementFactory.constant("key").declarationList, ts.factory.createCallExpression(ts.factory.createIdentifier("Object.keys"), void 0, [
    input
  ]), statements.length === 1 ? statements[0] : ts.factory.createBlock(statements, true));
}, "prune_object_properties");

export {
  prune_object_properties
};
//# sourceMappingURL=chunk-4YBA34UP.mjs.map