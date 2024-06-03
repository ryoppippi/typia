import {
  ProtobufEncodeProgrammer
} from "./chunk-X3KQWW4L.mjs";
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

// src/programmers/protobuf/ProtobufAssertEncodeProgrammer.ts
import ts from "typescript";
var ProtobufAssertEncodeProgrammer;
(function(ProtobufAssertEncodeProgrammer2) {
  ProtobufAssertEncodeProgrammer2.write = (project) => (modulo) => (type, name, init) => ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("input", TypeFactory.keyword("any")),
    AssertProgrammer.Guardian.parameter(init)
  ], ts.factory.createTypeReferenceNode("Uint8Array"), void 0, ts.factory.createBlock([
    StatementFactory.constant("assert", AssertProgrammer.write({
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
    ts.factory.createReturnStatement(ts.factory.createCallExpression(ts.factory.createIdentifier("encode"), void 0, [
      ts.factory.createCallExpression(ts.factory.createIdentifier("assert"), void 0, [
        ts.factory.createIdentifier("input"),
        AssertProgrammer.Guardian.identifier()
      ])
    ]))
  ]));
})(ProtobufAssertEncodeProgrammer || (ProtobufAssertEncodeProgrammer = {}));

export {
  ProtobufAssertEncodeProgrammer
};
//# sourceMappingURL=chunk-GFEIV55P.mjs.map