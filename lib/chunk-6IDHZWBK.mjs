import {
  template_to_pattern
} from "./chunk-TE33WDSA.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/check_template.ts
import ts from "typescript";
var check_template = /* @__PURE__ */ __name((templates) => (input) => {
  const conditions = [
    ts.factory.createStrictEquality(ts.factory.createStringLiteral("string"), ts.factory.createTypeOfExpression(input))
  ];
  const internal = templates.map((tpl) => ts.factory.createCallExpression(ts.factory.createIdentifier(`RegExp(/${template_to_pattern(true)(tpl)}/).test`), void 0, [
    input
  ]));
  conditions.push(internal.length === 1 ? internal[0] : internal.reduce((x, y) => ts.factory.createLogicalOr(x, y)));
  return {
    expression: conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y)),
    conditions: [],
    expected: templates.map((tpl) => "`" + tpl.map((child) => child.isConstant() && child.size() === 1 ? child.constants[0].values[0].value : `\${${child.getName()}}`).join("").split("`").join("\\`") + "`").join(" | ")
  };
}, "check_template");

export {
  check_template
};
//# sourceMappingURL=chunk-6IDHZWBK.mjs.map