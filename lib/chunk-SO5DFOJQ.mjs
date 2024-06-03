import {
  NotationGeneralProgrammer
} from "./chunk-ZFHM7YDT.mjs";
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

// src/programmers/notations/NotationValidateGeneralProgrammer.ts
import ts from "typescript";
var NotationValidateGeneralProgrammer;
(function(NotationValidateGeneralProgrammer2) {
  NotationValidateGeneralProgrammer2.write = (rename) => (project) => (modulo) => (type, name) => ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("input", TypeFactory.keyword("any"))
  ], ts.factory.createTypeReferenceNode(`typia.IValidation<${NotationGeneralProgrammer.returnType(rename)(name ?? TypeFactory.getFullName(project.checker)(type))}>`), void 0, ts.factory.createBlock([
    StatementFactory.constant("validate", ValidateProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: true
      }
    })(modulo)(false)(type, name)),
    StatementFactory.constant("general", NotationGeneralProgrammer.write(rename)({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(type, name)),
    StatementFactory.constant("output", ts.factory.createAsExpression(ts.factory.createCallExpression(ts.factory.createIdentifier("validate"), void 0, [
      ts.factory.createIdentifier("input")
    ]), TypeFactory.keyword("any"))),
    ts.factory.createIfStatement(ts.factory.createIdentifier("output.success"), ts.factory.createExpressionStatement(ts.factory.createBinaryExpression(ts.factory.createIdentifier("output.data"), ts.SyntaxKind.EqualsToken, ts.factory.createCallExpression(ts.factory.createIdentifier("general"), void 0, [
      ts.factory.createIdentifier("input")
    ])))),
    ts.factory.createReturnStatement(ts.factory.createIdentifier("output"))
  ]));
})(NotationValidateGeneralProgrammer || (NotationValidateGeneralProgrammer = {}));

export {
  NotationValidateGeneralProgrammer
};
//# sourceMappingURL=chunk-SO5DFOJQ.mjs.map