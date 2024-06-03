import {
  MiscPruneProgrammer
} from "./chunk-VRHYTTMP.mjs";
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

// src/programmers/misc/MiscAssertPruneProgrammer.ts
import ts from "typescript";
var MiscAssertPruneProgrammer;
(function(MiscAssertPruneProgrammer2) {
  MiscAssertPruneProgrammer2.write = (project) => (modulo) => (type, name, init) => ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("input", TypeFactory.keyword("any")),
    AssertProgrammer.Guardian.parameter(init)
  ], ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type)), void 0, ts.factory.createBlock([
    StatementFactory.constant("assert", AssertProgrammer.write(project)(modulo)(false)(type, name)),
    StatementFactory.constant("prune", MiscPruneProgrammer.write({
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
    ts.factory.createExpressionStatement(ts.factory.createCallExpression(ts.factory.createIdentifier("prune"), void 0, [
      ts.factory.createIdentifier("input")
    ])),
    ts.factory.createReturnStatement(ts.factory.createIdentifier("input"))
  ]));
})(MiscAssertPruneProgrammer || (MiscAssertPruneProgrammer = {}));

export {
  MiscAssertPruneProgrammer
};
//# sourceMappingURL=chunk-7QG7UMKK.mjs.map