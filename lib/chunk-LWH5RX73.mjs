import {
  check_dynamic_properties
} from "./chunk-422XWX6L.mjs";
import {
  check_everything
} from "./chunk-4RTKLQ6C.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/check_object.ts
import ts from "typescript";
var check_object = /* @__PURE__ */ __name((props) => (project) => (importer) => (input, entries) => {
  const regular = entries.filter((entry) => entry.key.isSoleLiteral());
  const dynamic = entries.filter((entry) => !entry.key.isSoleLiteral());
  const flags = regular.map((entry) => entry.expression);
  if (props.equals === false && dynamic.length === 0) return regular.length === 0 ? props.positive : reduce(props)(flags);
  flags.push(check_dynamic_properties(props)(project)(importer)(input, regular, dynamic));
  return reduce(props)(flags);
}, "check_object");
var reduce = /* @__PURE__ */ __name((props) => (expressions) => props.assert ? expressions.reduce(props.reduce) : check_everything(ts.factory.createArrayLiteralExpression(expressions)), "reduce");

export {
  check_object
};
//# sourceMappingURL=chunk-LWH5RX73.mjs.map