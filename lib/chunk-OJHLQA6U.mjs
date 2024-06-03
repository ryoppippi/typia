import {
  JsonStringifyProgrammer
} from "./chunk-CPQPG5GK.mjs";
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

// src/programmers/json/JsonValidateStringifyProgrammer.ts
import ts from "typescript";
var JsonValidateStringifyProgrammer;
(function(JsonValidateStringifyProgrammer2) {
  JsonValidateStringifyProgrammer2.write = (project) => (modulo) => (type, name) => ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("input", ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type)))
  ], ts.factory.createTypeReferenceNode("typia.IValidation<string>"), void 0, ts.factory.createBlock([
    StatementFactory.constant("validate", ValidateProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: true
      }
    })(modulo)(false)(type, name)),
    StatementFactory.constant("stringify", JsonStringifyProgrammer.write({
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
    ts.factory.createIfStatement(ts.factory.createIdentifier("output.success"), ts.factory.createExpressionStatement(ts.factory.createBinaryExpression(ts.factory.createIdentifier("output.data"), ts.SyntaxKind.EqualsToken, ts.factory.createCallExpression(ts.factory.createIdentifier("stringify"), void 0, [
      ts.factory.createIdentifier("input")
    ])))),
    ts.factory.createReturnStatement(ts.factory.createIdentifier("output"))
  ]));
})(JsonValidateStringifyProgrammer || (JsonValidateStringifyProgrammer = {}));

export {
  JsonValidateStringifyProgrammer
};
//# sourceMappingURL=chunk-OJHLQA6U.mjs.map