import {
  ProtobufEncodeProgrammer
} from "./chunk-X3KQWW4L.mjs";
import {
  IsProgrammer
} from "./chunk-3IJJRDF3.mjs";
import {
  StatementFactory
} from "./chunk-RR3Z23V6.mjs";
import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";

// src/programmers/protobuf/ProtobufIsEncodeProgrammer.ts
import ts from "typescript";
var ProtobufIsEncodeProgrammer;
(function(ProtobufIsEncodeProgrammer2) {
  ProtobufIsEncodeProgrammer2.write = (project) => (modulo) => (type, name) => ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("input", ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type)))
  ], ts.factory.createUnionTypeNode([
    ts.factory.createTypeReferenceNode("Uint8Array"),
    ts.factory.createLiteralTypeNode(ts.factory.createNull())
  ]), void 0, ts.factory.createBlock([
    StatementFactory.constant("is", IsProgrammer.write({
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
    ts.factory.createReturnStatement(ts.factory.createConditionalExpression(ts.factory.createCallExpression(ts.factory.createIdentifier("is"), void 0, [
      ts.factory.createIdentifier("input")
    ]), void 0, ts.factory.createCallExpression(ts.factory.createIdentifier("encode"), void 0, [
      ts.factory.createIdentifier("input")
    ]), void 0, ts.factory.createNull()))
  ]));
})(ProtobufIsEncodeProgrammer || (ProtobufIsEncodeProgrammer = {}));

export {
  ProtobufIsEncodeProgrammer
};
//# sourceMappingURL=chunk-WUHZVDNK.mjs.map