import {
  LiteralFactory
} from "./chunk-NTPNM66C.mjs";
import {
  ExpressionFactory
} from "./chunk-TJUGWBRO.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/random_custom.ts
import ts from "typescript";
var random_custom = /* @__PURE__ */ __name((accessor) => (type) => (tags) => (expression) => ExpressionFactory.coalesce(ts.factory.createCallChain(ts.factory.createPropertyAccessChain(accessor("customs"), ts.factory.createToken(ts.SyntaxKind.QuestionDotToken), ts.factory.createIdentifier(type)), ts.factory.createToken(ts.SyntaxKind.QuestionDotToken), void 0, [
  LiteralFactory.generate(tags.map((t) => ({
    name: t.name,
    kind: t.kind,
    value: t.value
  })))
]))(expression), "random_custom");

export {
  random_custom
};
//# sourceMappingURL=chunk-OEARGCQO.mjs.map