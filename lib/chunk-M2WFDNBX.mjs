import {
  CheckerProgrammer,
  IsProgrammer
} from "./chunk-3IJJRDF3.mjs";
import {
  check_object
} from "./chunk-LWH5RX73.mjs";
import {
  check_everything
} from "./chunk-4RTKLQ6C.mjs";
import {
  OptionPredicator
} from "./chunk-TACBWK3G.mjs";
import {
  FunctionImporter
} from "./chunk-5TRLONIA.mjs";
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
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/ValidateProgrammer.ts
import ts from "typescript";
var ValidateProgrammer;
(function(ValidateProgrammer2) {
  ValidateProgrammer2.write = (project) => (modulo) => (equals) => (type, name) => {
    const importer = new FunctionImporter(modulo.getText());
    const is = IsProgrammer.write(project)(modulo, true)(equals)(type, name ?? TypeFactory.getFullName(project.checker)(type));
    const validate = CheckerProgrammer.write(project)({
      prefix: "$v",
      path: true,
      trace: true,
      numeric: OptionPredicator.numeric(project.options),
      equals,
      atomist: /* @__PURE__ */ __name((explore) => (entry) => (input) => [
        ...entry.expression ? [
          entry.expression
        ] : [],
        ...entry.conditions.length === 0 ? [] : entry.conditions.length === 1 ? entry.conditions[0].map((cond) => ts.factory.createLogicalOr(cond.expression, create_report_call(explore.from === "top" ? ts.factory.createTrue() : ts.factory.createIdentifier("_exceptionable"))(ts.factory.createIdentifier(explore.postfix ? `_path + ${explore.postfix}` : "_path"), cond.expected, input))) : [
          ts.factory.createLogicalOr(entry.conditions.map((set) => set.map((s) => s.expression).reduce((a, b) => ts.factory.createLogicalAnd(a, b))).reduce((a, b) => ts.factory.createLogicalOr(a, b)), create_report_call(explore.from === "top" ? ts.factory.createTrue() : ts.factory.createIdentifier("_exceptionable"))(ts.factory.createIdentifier(explore.postfix ? `_path + ${explore.postfix}` : "_path"), entry.expected, input))
        ]
      ].reduce((x, y) => ts.factory.createLogicalAnd(x, y)), "atomist"),
      combiner: combine(equals)(project)(importer),
      joiner: joiner(equals)(project)(importer),
      success: ts.factory.createTrue(),
      addition: /* @__PURE__ */ __name(() => importer.declare(modulo), "addition")
    })(importer)(type, name);
    return ts.factory.createArrowFunction(void 0, void 0, [
      IdentifierFactory.parameter("input", TypeFactory.keyword("any"))
    ], ts.factory.createTypeReferenceNode(`typia.IValidation<${name ?? TypeFactory.getFullName(project.checker)(type)}>`), void 0, ts.factory.createBlock([
      StatementFactory.constant("errors", ts.factory.createAsExpression(ts.factory.createArrayLiteralExpression([]), ts.factory.createArrayTypeNode(TypeFactory.keyword("any")))),
      StatementFactory.constant("__is", is),
      ts.factory.createIfStatement(ts.factory.createStrictEquality(ts.factory.createFalse(), ts.factory.createCallExpression(ts.factory.createIdentifier("__is"), void 0, [
        ts.factory.createIdentifier("input")
      ])), ts.factory.createBlock([
        StatementFactory.constant("$report", ts.factory.createCallExpression(IdentifierFactory.access(ts.factory.createParenthesizedExpression(ts.factory.createAsExpression(modulo, TypeFactory.keyword("any"))))("report"), [], [
          ts.factory.createIdentifier("errors")
        ])),
        ts.factory.createExpressionStatement(ts.factory.createCallExpression(validate, void 0, [
          ts.factory.createIdentifier("input"),
          ts.factory.createStringLiteral("$input"),
          ts.factory.createTrue()
        ]))
      ])),
      StatementFactory.constant("success", ts.factory.createStrictEquality(ExpressionFactory.number(0), ts.factory.createIdentifier("errors.length"))),
      ts.factory.createReturnStatement(ts.factory.createAsExpression(create_output(), TypeFactory.keyword("any")))
    ], true));
  };
})(ValidateProgrammer || (ValidateProgrammer = {}));
var combine = /* @__PURE__ */ __name((equals) => (project) => (importer) => (explore) => {
  if (explore.tracable === false) return IsProgrammer.configure({
    object: validate_object(equals)(project)(importer),
    numeric: true
  })(project)(importer).combiner(explore);
  const path = explore.postfix ? `_path + ${explore.postfix}` : "_path";
  return (logic) => (input, binaries, expected) => logic === "and" ? binaries.map((binary) => binary.combined ? binary.expression : ts.factory.createLogicalOr(binary.expression, create_report_call(explore.source === "top" ? ts.factory.createTrue() : ts.factory.createIdentifier("_exceptionable"))(ts.factory.createIdentifier(path), expected, input))).reduce(ts.factory.createLogicalAnd) : ts.factory.createLogicalOr(binaries.map((binary) => binary.expression).reduce(ts.factory.createLogicalOr), create_report_call(explore.source === "top" ? ts.factory.createTrue() : ts.factory.createIdentifier("_exceptionable"))(ts.factory.createIdentifier(path), expected, input));
}, "combine");
var validate_object = /* @__PURE__ */ __name((equals) => (project) => (importer) => check_object({
  equals,
  undefined: true,
  assert: false,
  reduce: ts.factory.createLogicalAnd,
  positive: ts.factory.createTrue(),
  superfluous: /* @__PURE__ */ __name((value) => create_report_call()(ts.factory.createAdd(ts.factory.createIdentifier("_path"), ts.factory.createCallExpression(importer.use("join"), void 0, [
    ts.factory.createIdentifier("key")
  ])), "undefined", value), "superfluous"),
  halt: /* @__PURE__ */ __name((expr) => ts.factory.createLogicalOr(ts.factory.createStrictEquality(ts.factory.createFalse(), ts.factory.createIdentifier("_exceptionable")), expr), "halt")
})(project)(importer), "validate_object");
var joiner = /* @__PURE__ */ __name((equals) => (project) => (importer) => ({
  object: validate_object(equals)(project)(importer),
  array: /* @__PURE__ */ __name((input, arrow) => check_everything(ts.factory.createCallExpression(IdentifierFactory.access(input)("map"), void 0, [
    arrow
  ])), "array"),
  failure: /* @__PURE__ */ __name((value, expected, explore) => create_report_call(explore?.from === "top" ? ts.factory.createTrue() : ts.factory.createIdentifier("_exceptionable"))(ts.factory.createIdentifier(explore?.postfix ? `_path + ${explore.postfix}` : "_path"), expected, value), "failure"),
  tuple: /* @__PURE__ */ __name((binaries) => check_everything(ts.factory.createArrayLiteralExpression(binaries, true)), "tuple")
}), "joiner");
var create_output = /* @__PURE__ */ __name(() => ts.factory.createObjectLiteralExpression([
  ts.factory.createShorthandPropertyAssignment("success"),
  ts.factory.createShorthandPropertyAssignment("errors"),
  ts.factory.createPropertyAssignment("data", ts.factory.createConditionalExpression(ts.factory.createIdentifier("success"), void 0, ts.factory.createIdentifier("input"), void 0, ts.factory.createIdentifier("undefined")))
], true), "create_output");
var create_report_call = /* @__PURE__ */ __name((exceptionable) => (path, expected, value) => ts.factory.createCallExpression(ts.factory.createIdentifier("$report"), void 0, [
  exceptionable ?? ts.factory.createIdentifier("_exceptionable"),
  ts.factory.createObjectLiteralExpression([
    ts.factory.createPropertyAssignment("path", path),
    ts.factory.createPropertyAssignment("expected", ts.factory.createStringLiteral(expected)),
    ts.factory.createPropertyAssignment("value", value)
  ], true)
]), "create_report_call");

export {
  ValidateProgrammer
};
//# sourceMappingURL=chunk-M2WFDNBX.mjs.map