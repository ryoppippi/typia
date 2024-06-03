import {
  check_everything
} from "./chunk-4RTKLQ6C.mjs";
import {
  check_dynamic_key
} from "./chunk-LCNHT7KH.mjs";
import {
  StatementFactory
} from "./chunk-RR3Z23V6.mjs";
import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";
import {
  ExpressionFactory
} from "./chunk-TJUGWBRO.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/check_dynamic_properties.ts
import ts from "typescript";
var check_dynamic_properties = /* @__PURE__ */ __name((props) => (project) => (importer) => (input, regular, dynamic) => {
  const length = IdentifierFactory.access(ts.factory.createCallExpression(ts.factory.createIdentifier("Object.keys"), void 0, [
    input
  ]))("length");
  const left = props.equals === true && dynamic.length === 0 ? props.undefined === true || regular.every((r) => r.meta.isRequired()) ? ts.factory.createStrictEquality(ExpressionFactory.number(regular.filter((r) => r.meta.isRequired()).length), length) : ts.factory.createCallExpression(importer.use("is_between"), [], [
    length,
    ExpressionFactory.number(regular.filter((r) => r.meta.isRequired()).length),
    ExpressionFactory.number(regular.length)
  ]) : null;
  if (props.undefined === false && left !== null && regular.every((r) => r.meta.isRequired())) return left;
  const criteria = props.entries ? ts.factory.createCallExpression(props.entries, void 0, [
    ts.factory.createCallExpression(ts.factory.createIdentifier("Object.keys"), void 0, [
      input
    ]),
    check_dynamic_property(props)(project)(importer)(input, regular, dynamic)
  ]) : ts.factory.createCallExpression(IdentifierFactory.access(ts.factory.createCallExpression(ts.factory.createIdentifier("Object.keys"), void 0, [
    input
  ]))(props.assert ? "every" : "map"), void 0, [
    check_dynamic_property(props)(project)(importer)(input, regular, dynamic)
  ]);
  const right = (props.halt || ((elem) => elem))(props.assert ? criteria : check_everything(criteria));
  return left ? (props.undefined ? ts.factory.createLogicalOr : ts.factory.createLogicalAnd)(left, right) : right;
}, "check_dynamic_properties");
var check_dynamic_property = /* @__PURE__ */ __name((props) => (project) => (importer) => (input, regular, dynamic) => {
  const key = ts.factory.createIdentifier("key");
  const value = ts.factory.createIdentifier("value");
  const statements = [];
  const add = /* @__PURE__ */ __name((exp, output) => statements.push(ts.factory.createIfStatement(exp, ts.factory.createReturnStatement(output))), "add");
  const broken = {
    value: false
  };
  if (regular.length) add(is_regular_property(regular), props.positive);
  statements.push(StatementFactory.constant("value", ts.factory.createElementAccessExpression(input, key)));
  if (props.undefined === true) add(ts.factory.createStrictEquality(ts.factory.createIdentifier("undefined"), value), props.positive);
  for (const entry of dynamic) {
    const condition = check_dynamic_key(project)(importer)(key, entry.key);
    if (condition.kind === ts.SyntaxKind.TrueKeyword) {
      statements.push(ts.factory.createReturnStatement(entry.expression));
      broken.value = true;
      break;
    } else add(condition, entry.expression);
  }
  const block = ts.factory.createBlock([
    ...statements,
    ...broken.value ? [] : [
      ts.factory.createReturnStatement(props.equals === true ? props.superfluous(value) : props.positive)
    ]
  ], true);
  return ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("key")
  ], void 0, void 0, block);
}, "check_dynamic_property");
var is_regular_property = /* @__PURE__ */ __name((regular) => ts.factory.createCallExpression(IdentifierFactory.access(ts.factory.createArrayLiteralExpression(regular.map((entry) => ts.factory.createStringLiteral(entry.key.getSoleLiteral()))))("some"), void 0, [
  ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("prop")
  ], void 0, void 0, ts.factory.createStrictEquality(ts.factory.createIdentifier("key"), ts.factory.createIdentifier("prop")))
]), "is_regular_property");

export {
  check_dynamic_properties
};
//# sourceMappingURL=chunk-422XWX6L.mjs.map