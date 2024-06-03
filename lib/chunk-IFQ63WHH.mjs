import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/decode_union_object.ts
import ts from "typescript";
var decode_union_object = /* @__PURE__ */ __name((checker) => (decoder) => (success) => (escaper) => (input, targets, explore) => ts.factory.createCallExpression(ts.factory.createArrowFunction(void 0, void 0, [], void 0, void 0, iterate(escaper)(input, targets.map((obj) => ({
  type: "object",
  is: /* @__PURE__ */ __name(() => success(checker(input, obj, explore)), "is"),
  value: /* @__PURE__ */ __name(() => decoder(input, obj, explore), "value")
})), `(${targets.map((t) => t.name).join(" | ")})`)), void 0, void 0), "decode_union_object");
var iterate = /* @__PURE__ */ __name((escaper) => (input, unions, expected) => {
  const branches = [];
  for (const u of unions) {
    const condition = u.is();
    if (condition.kind === ts.SyntaxKind.TrueKeyword) {
      branches.push({
        condition: null,
        value: u.value()
      });
      break;
    }
    branches.push({
      condition,
      value: u.value()
    });
  }
  if (branches.length === 0) return ts.factory.createBlock([
    escaper(input, expected)
  ], true);
  else if (branches.length === 1 && branches[0].condition === null) return branches[0].value;
  const statements = branches.map((b) => b.condition !== null ? ts.factory.createIfStatement(b.condition, ts.factory.createReturnStatement(b.value), void 0) : ts.factory.createReturnStatement(b.value));
  if (branches.at(-1).condition !== null) statements.push(escaper(input, expected));
  return ts.factory.createBlock(statements, true);
}, "iterate");

export {
  decode_union_object
};
//# sourceMappingURL=chunk-IFQ63WHH.mjs.map