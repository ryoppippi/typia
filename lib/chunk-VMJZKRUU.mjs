import {
  NotationGeneralProgrammer
} from "./chunk-ZFHM7YDT.mjs";
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

// src/programmers/notations/NotationAssertGeneralProgrammer.ts
import ts from "typescript";
var NotationAssertGeneralProgrammer;
(function(NotationAssertGeneralProgrammer2) {
  NotationAssertGeneralProgrammer2.write = (rename) => (project) => (modulo) => (type, name, init) => ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("input", TypeFactory.keyword("any")),
    AssertProgrammer.Guardian.parameter(init)
  ], ts.factory.createTypeReferenceNode(NotationGeneralProgrammer.returnType(rename)(name ?? TypeFactory.getFullName(project.checker)(type))), void 0, ts.factory.createBlock([
    StatementFactory.constant("assert", AssertProgrammer.write(project)(modulo)(false)(type, name)),
    StatementFactory.constant("general", NotationGeneralProgrammer.write(rename)({
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
    StatementFactory.constant("output", ts.factory.createCallExpression(ts.factory.createIdentifier("general"), void 0, [
      ts.factory.createIdentifier("input")
    ])),
    ts.factory.createReturnStatement(ts.factory.createIdentifier("output"))
  ]));
})(NotationAssertGeneralProgrammer || (NotationAssertGeneralProgrammer = {}));

export {
  NotationAssertGeneralProgrammer
};
//# sourceMappingURL=chunk-VMJZKRUU.mjs.map