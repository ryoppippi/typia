import {
  CheckerProgrammer,
  IsProgrammer
} from "./chunk-3IJJRDF3.mjs";
import {
  check_object
} from "./chunk-LWH5RX73.mjs";
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
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/AssertProgrammer.ts
import ts from "typescript";
var AssertProgrammer;
(function(AssertProgrammer2) {
  AssertProgrammer2.write = (project) => (modulo) => (props) => (type, name, init) => {
    if (typeof props === "boolean") props = {
      equals: props,
      guard: false
    };
    const importer = new FunctionImporter(modulo.getText());
    const is = IsProgrammer.write(project)(modulo, true)(props.equals)(type, name ?? TypeFactory.getFullName(project.checker)(type));
    const assert = CheckerProgrammer.write(project)({
      prefix: "$a",
      path: true,
      trace: true,
      numeric: OptionPredicator.numeric(project.options),
      equals: props.equals,
      atomist: /* @__PURE__ */ __name((explore) => (entry) => (input) => [
        ...entry.expression ? [
          entry.expression
        ] : [],
        ...entry.conditions.length === 0 ? [] : entry.conditions.length === 1 ? entry.conditions[0].map((cond) => ts.factory.createLogicalOr(cond.expression, create_guard_call(importer)(explore.from === "top" ? ts.factory.createTrue() : ts.factory.createIdentifier("_exceptionable"))(ts.factory.createIdentifier(explore.postfix ? `_path + ${explore.postfix}` : "_path"), cond.expected, input))) : [
          ts.factory.createLogicalOr(entry.conditions.map((set) => set.map((s) => s.expression).reduce((a, b) => ts.factory.createLogicalAnd(a, b))).reduce((a, b) => ts.factory.createLogicalOr(a, b)), create_guard_call(importer)(explore.from === "top" ? ts.factory.createTrue() : ts.factory.createIdentifier("_exceptionable"))(ts.factory.createIdentifier(explore.postfix ? `_path + ${explore.postfix}` : "_path"), entry.expected, input))
        ]
      ].reduce((x, y) => ts.factory.createLogicalAnd(x, y)), "atomist"),
      combiner: combiner(props.equals)(project)(importer),
      joiner: joiner(props.equals)(project)(importer),
      success: ts.factory.createTrue(),
      addition: /* @__PURE__ */ __name(() => importer.declare(modulo), "addition")
    })(importer)(type, name);
    return ts.factory.createArrowFunction(void 0, void 0, [
      IdentifierFactory.parameter("input", TypeFactory.keyword("any")),
      Guardian.parameter(init)
    ], props.guard ? ts.factory.createTypePredicateNode(ts.factory.createToken(ts.SyntaxKind.AssertsKeyword), ts.factory.createIdentifier("input"), ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type))) : ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type)), void 0, ts.factory.createBlock([
      StatementFactory.constant("__is", is),
      ts.factory.createIfStatement(ts.factory.createStrictEquality(ts.factory.createFalse(), ts.factory.createCallExpression(ts.factory.createIdentifier("__is"), void 0, [
        ts.factory.createIdentifier("input")
      ])), ts.factory.createExpressionStatement(ts.factory.createCallExpression(assert, void 0, [
        ts.factory.createIdentifier("input"),
        ts.factory.createStringLiteral("$input"),
        ts.factory.createTrue()
      ])), void 0),
      ...props.guard === false ? [
        ts.factory.createReturnStatement(ts.factory.createIdentifier(`input`))
      ] : []
    ], true));
  };
  const combiner = /* @__PURE__ */ __name((equals) => (project) => (importer) => (explore) => {
    if (explore.tracable === false) return IsProgrammer.configure({
      object: assert_object(equals)(project)(importer),
      numeric: true
    })(project)(importer).combiner(explore);
    const path = explore.postfix ? `_path + ${explore.postfix}` : "_path";
    return (logic) => (input, binaries, expected) => logic === "and" ? binaries.map((binary) => binary.combined ? binary.expression : ts.factory.createLogicalOr(binary.expression, create_guard_call(importer)(explore.source === "top" ? ts.factory.createTrue() : ts.factory.createIdentifier("_exceptionable"))(ts.factory.createIdentifier(path), expected, input))).reduce(ts.factory.createLogicalAnd) : ts.factory.createLogicalOr(binaries.map((binary) => binary.expression).reduce(ts.factory.createLogicalOr), create_guard_call(importer)(explore.source === "top" ? ts.factory.createTrue() : ts.factory.createIdentifier("_exceptionable"))(ts.factory.createIdentifier(path), expected, input));
  }, "combiner");
  const assert_object = /* @__PURE__ */ __name((equals) => (project) => (importer) => check_object({
    equals,
    assert: true,
    undefined: true,
    reduce: ts.factory.createLogicalAnd,
    positive: ts.factory.createTrue(),
    superfluous: /* @__PURE__ */ __name((value) => create_guard_call(importer)()(ts.factory.createAdd(ts.factory.createIdentifier("_path"), ts.factory.createCallExpression(importer.use("join"), void 0, [
      ts.factory.createIdentifier("key")
    ])), "undefined", value), "superfluous"),
    halt: /* @__PURE__ */ __name((expr) => ts.factory.createLogicalOr(ts.factory.createStrictEquality(ts.factory.createFalse(), ts.factory.createIdentifier("_exceptionable")), expr), "halt")
  })(project)(importer), "assert_object");
  const joiner = /* @__PURE__ */ __name((equals) => (project) => (importer) => ({
    object: assert_object(equals)(project)(importer),
    array: /* @__PURE__ */ __name((input, arrow) => ts.factory.createCallExpression(IdentifierFactory.access(input)("every"), void 0, [
      arrow
    ]), "array"),
    failure: /* @__PURE__ */ __name((value, expected, explore) => create_guard_call(importer)(explore?.from === "top" ? ts.factory.createTrue() : ts.factory.createIdentifier("_exceptionable"))(ts.factory.createIdentifier(explore?.postfix ? `_path + ${explore.postfix}` : "_path"), expected, value), "failure"),
    full: equals ? void 0 : (condition) => (input, expected, explore) => ts.factory.createLogicalOr(condition, create_guard_call(importer)(explore.from === "top" ? ts.factory.createTrue() : ts.factory.createIdentifier("_exceptionable"))(ts.factory.createIdentifier("_path"), expected, input))
  }), "joiner");
  const create_guard_call = /* @__PURE__ */ __name((importer) => (exceptionable) => (path, expected, value) => ts.factory.createCallExpression(importer.use("guard"), void 0, [
    exceptionable ?? ts.factory.createIdentifier("_exceptionable"),
    ts.factory.createObjectLiteralExpression([
      ts.factory.createPropertyAssignment("path", path),
      ts.factory.createPropertyAssignment("expected", ts.factory.createStringLiteral(expected)),
      ts.factory.createPropertyAssignment("value", value)
    ], true),
    Guardian.identifier()
  ]), "create_guard_call");
  let Guardian;
  (function(Guardian2) {
    Guardian2.identifier = () => ts.factory.createIdentifier("errorFactory");
    Guardian2.parameter = (init) => IdentifierFactory.parameter("errorFactory", Guardian2.type(), init ?? ts.factory.createToken(ts.SyntaxKind.QuestionToken));
    Guardian2.type = () => ts.factory.createFunctionTypeNode(void 0, [
      ts.factory.createParameterDeclaration(void 0, void 0, ts.factory.createIdentifier("p"), void 0, ts.factory.createImportTypeNode(ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral("typia")), void 0, ts.factory.createQualifiedName(ts.factory.createIdentifier("TypeGuardError"), ts.factory.createIdentifier("IProps")), void 0, false), void 0)
    ], ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Error"), void 0));
  })(Guardian = AssertProgrammer2.Guardian || (AssertProgrammer2.Guardian = {}));
})(AssertProgrammer || (AssertProgrammer = {}));

export {
  AssertProgrammer
};
//# sourceMappingURL=chunk-7UTIIEMR.mjs.map