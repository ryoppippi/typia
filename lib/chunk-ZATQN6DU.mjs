import {
  ProtobufDecodeProgrammer
} from "./chunk-HHWDMPJO.mjs";
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

// src/programmers/protobuf/ProtobufAssertDecodeProgrammer.ts
import ts from "typescript";
var ProtobufAssertDecodeProgrammer;
(function(ProtobufAssertDecodeProgrammer2) {
  ProtobufAssertDecodeProgrammer2.write = (project) => (modulo) => (type, name, init) => ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("input", ts.factory.createTypeReferenceNode("Uint8Array")),
    AssertProgrammer.Guardian.parameter(init)
  ], ts.factory.createImportTypeNode(ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral("typia")), void 0, ts.factory.createIdentifier("Resolved"), [
    ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type))
  ], false), void 0, ts.factory.createBlock([
    StatementFactory.constant("decode", ProtobufDecodeProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(type, name)),
    StatementFactory.constant("assert", AssertProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(false)(type, name)),
    StatementFactory.constant("output", ts.factory.createCallExpression(ts.factory.createIdentifier("decode"), void 0, [
      ts.factory.createIdentifier("input")
    ])),
    ts.factory.createReturnStatement(ts.factory.createAsExpression(ts.factory.createCallExpression(ts.factory.createIdentifier("assert"), void 0, [
      ts.factory.createIdentifier("output"),
      AssertProgrammer.Guardian.identifier()
    ]), TypeFactory.keyword("any")))
  ]));
})(ProtobufAssertDecodeProgrammer || (ProtobufAssertDecodeProgrammer = {}));

export {
  ProtobufAssertDecodeProgrammer
};
//# sourceMappingURL=chunk-ZATQN6DU.mjs.map