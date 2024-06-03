import {
  ProtobufEncodeProgrammer
} from "./chunk-X3KQWW4L.mjs";
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

// src/programmers/protobuf/ProtobufValidateEncodeProgrammer.ts
import ts from "typescript";
var ProtobufValidateEncodeProgrammer;
(function(ProtobufValidateEncodeProgrammer2) {
  ProtobufValidateEncodeProgrammer2.write = (project) => (modulo) => (type, name) => ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("input", ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type)))
  ], ts.factory.createTypeReferenceNode("typia.IValidation<Uint8Array>"), void 0, ts.factory.createBlock([
    StatementFactory.constant("validate", ValidateProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: true
      }
    })(modulo)(false)(type, name)),
    StatementFactory.constant("encode", ProtobufEncodeProgrammer.write({
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
    ts.factory.createIfStatement(ts.factory.createIdentifier("output.success"), ts.factory.createExpressionStatement(ts.factory.createBinaryExpression(ts.factory.createIdentifier("output.data"), ts.SyntaxKind.EqualsToken, ts.factory.createCallExpression(ts.factory.createIdentifier("encode"), void 0, [
      ts.factory.createIdentifier("input")
    ])))),
    ts.factory.createReturnStatement(ts.factory.createIdentifier("output"))
  ]));
})(ProtobufValidateEncodeProgrammer || (ProtobufValidateEncodeProgrammer = {}));

export {
  ProtobufValidateEncodeProgrammer
};
//# sourceMappingURL=chunk-T2EFY4FD.mjs.map