import {
  HttpQueryProgrammer
} from "./chunk-6O2URFTA.mjs";
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

// src/programmers/http/HttpIsQueryProgrammer.ts
import ts from "typescript";
var HttpIsQueryProgrammer;
(function(HttpIsQueryProgrammer2) {
  HttpIsQueryProgrammer2.write = (project) => (modulo) => (type, name) => ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("input", ts.factory.createTypeReferenceNode(HttpQueryProgrammer.INPUT_TYPE))
  ], ts.factory.createUnionTypeNode([
    ts.factory.createImportTypeNode(ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral("typia")), void 0, ts.factory.createIdentifier("Resolved"), [
      ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type))
    ], false),
    ts.factory.createLiteralTypeNode(ts.factory.createNull())
  ]), void 0, ts.factory.createBlock([
    StatementFactory.constant("is", IsProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(false)(type, name)),
    StatementFactory.constant("decode", HttpQueryProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(type, name)),
    StatementFactory.constant("output", ts.factory.createCallExpression(ts.factory.createIdentifier("decode"), void 0, [
      ts.factory.createIdentifier("input")
    ])),
    ts.factory.createIfStatement(ts.factory.createPrefixUnaryExpression(ts.SyntaxKind.ExclamationToken, ts.factory.createCallExpression(ts.factory.createIdentifier("is"), void 0, [
      ts.factory.createIdentifier("output")
    ])), ts.factory.createReturnStatement(ts.factory.createNull())),
    ts.factory.createReturnStatement(ts.factory.createIdentifier("output"))
  ]));
})(HttpIsQueryProgrammer || (HttpIsQueryProgrammer = {}));

export {
  HttpIsQueryProgrammer
};
//# sourceMappingURL=chunk-NUFZM4Y7.mjs.map