import {
  MiscCloneProgrammer
} from "./chunk-QTJHC5AD.mjs";
import {
  AssertProgrammer
} from "./chunk-7UTIIEMR.mjs";
import {
  StatementFactory
} from "./chunk-RR3Z23V6.mjs";
import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";

// src/programmers/misc/MiscAssertCloneProgrammer.ts
import ts from "typescript";
var MiscAssertCloneProgrammer;
(function(MiscAssertCloneProgrammer2) {
  MiscAssertCloneProgrammer2.write = (project) => (modulo) => (type, name, init) => ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("input", TypeFactory.keyword("any")),
    AssertProgrammer.Guardian.parameter(init)
  ], ts.factory.createImportTypeNode(ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral("typia")), void 0, ts.factory.createIdentifier("Resolved"), [
    ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type))
  ], false), void 0, ts.factory.createBlock([
    StatementFactory.constant("assert", AssertProgrammer.write(project)(modulo)(false)(type, name)),
    StatementFactory.constant("clone", MiscCloneProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(type, name)),
    ts.factory.createExpressionStatement(ts.factory.createCallExpression(ts.factory.createIdentifier("assert"), void 0, [
      ts.factory.createIdentifier("input"),
      AssertProgrammer.Guardian.identifier()
    ])),
    StatementFactory.constant("output", ts.factory.createCallExpression(ts.factory.createIdentifier("clone"), void 0, [
      ts.factory.createIdentifier("input")
    ])),
    ts.factory.createReturnStatement(ts.factory.createIdentifier("output"))
  ]));
})(MiscAssertCloneProgrammer || (MiscAssertCloneProgrammer = {}));

export {
  MiscAssertCloneProgrammer
};
//# sourceMappingURL=chunk-N6MR577W.mjs.map