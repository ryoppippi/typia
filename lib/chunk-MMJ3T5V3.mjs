import {
  TemplateFactory
} from "./chunk-IDSD77P4.mjs";
import {
  ValueFactory
} from "./chunk-WQG22VFQ.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/stringify_regular_properties.ts
import ts from "typescript";
var stringify_regular_properties = /* @__PURE__ */ __name((regular, dynamic) => {
  const output = [];
  regular.sort((x, y) => sequence(x.meta) - sequence(y.meta));
  regular.forEach((entry, index) => {
    const key = entry.key.getSoleLiteral();
    const base = [
      ts.factory.createStringLiteral(`${JSON.stringify(key)}:`),
      entry.expression
    ];
    if (index !== regular.length - 1 || dynamic.length !== 0) base.push(ts.factory.createStringLiteral(`,`));
    const empty = entry.meta.isRequired() === false && entry.meta.nullable === false && entry.meta.size() === 0 || entry.meta.functional && entry.meta.nullable === false && entry.meta.size() === 1;
    if (empty === true) return;
    else if (entry.meta.isRequired() === false || entry.meta.functional === true || entry.meta.any === true) output.push(ts.factory.createConditionalExpression((() => {
      const conditions = [];
      if (entry.meta.isRequired() === false || entry.meta.any) conditions.push(ts.factory.createStrictEquality(ts.factory.createIdentifier("undefined"), entry.input));
      if (entry.meta.functional || entry.meta.any) conditions.push(ts.factory.createStrictEquality(ts.factory.createStringLiteral("function"), ValueFactory.TYPEOF(entry.input)));
      return conditions.length === 1 ? conditions[0] : conditions.reduce((x, y) => ts.factory.createLogicalOr(x, y));
    })(), void 0, ts.factory.createStringLiteral(""), void 0, TemplateFactory.generate(base)));
    else output.push(...base);
  });
  return output;
}, "stringify_regular_properties");
var sequence = /* @__PURE__ */ __name((meta) => meta.any || !meta.isRequired() || meta.functional ? 0 : 1, "sequence");

export {
  stringify_regular_properties
};
//# sourceMappingURL=chunk-MMJ3T5V3.mjs.map