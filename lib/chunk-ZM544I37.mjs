import {
  MiscPruneProgrammer
} from "./chunk-VRHYTTMP.mjs";
import {
  ValidateProgrammer
} from "./chunk-M2WFDNBX.mjs";
import {
  StatementFactory
} from "./chunk-RR3Z23V6.mjs";
import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";

// src/programmers/misc/MiscValidatePruneProgrammer.ts
import ts from "typescript";
var MiscValidatePruneProgrammer;
(function(MiscValidatePruneProgrammer2) {
  MiscValidatePruneProgrammer2.write = (project) => (modulo) => (type, name) => ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("input", TypeFactory.keyword("any"))
  ], ts.factory.createTypeReferenceNode(`typia.IValidation<${name ?? TypeFactory.getFullName(project.checker)(type)}>`), void 0, ts.factory.createBlock([
    StatementFactory.constant("validate", ValidateProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: true
      }
    })(modulo)(false)(type, name)),
    StatementFactory.constant("prune", MiscPruneProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(type, name)),
    StatementFactory.constant("output", ts.factory.createCallExpression(ts.factory.createIdentifier("validate"), void 0, [
      ts.factory.createIdentifier("input")
    ])),
    ts.factory.createIfStatement(ts.factory.createIdentifier("output.success"), ts.factory.createExpressionStatement(ts.factory.createCallExpression(ts.factory.createIdentifier("prune"), void 0, [
      ts.factory.createIdentifier("input")
    ]))),
    ts.factory.createReturnStatement(ts.factory.createIdentifier("output"))
  ]));
})(MiscValidatePruneProgrammer || (MiscValidatePruneProgrammer = {}));

export {
  MiscValidatePruneProgrammer
};
//# sourceMappingURL=chunk-ZM544I37.mjs.map