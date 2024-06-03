import {
  NotationGeneralProgrammer
} from "./chunk-ZFHM7YDT.mjs";
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

// src/programmers/notations/NotationIsGeneralProgrammer.ts
import ts from "typescript";
var NotationIsGeneralProgrammer;
(function(NotationIsGeneralProgrammer2) {
  NotationIsGeneralProgrammer2.write = (rename) => (project) => (modulo) => (type, name) => ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("input", TypeFactory.keyword("any"))
  ], ts.factory.createUnionTypeNode([
    ts.factory.createTypeReferenceNode(NotationGeneralProgrammer.returnType(rename)(name ?? TypeFactory.getFullName(project.checker)(type))),
    ts.factory.createLiteralTypeNode(ts.factory.createNull())
  ]), void 0, ts.factory.createBlock([
    StatementFactory.constant("is", IsProgrammer.write(project)(modulo)(false)(type, name)),
    StatementFactory.constant("general", NotationGeneralProgrammer.write(rename)({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(type, name)),
    ts.factory.createIfStatement(ts.factory.createPrefixUnaryExpression(ts.SyntaxKind.ExclamationToken, ts.factory.createCallExpression(ts.factory.createIdentifier("is"), void 0, [
      ts.factory.createIdentifier("input")
    ])), ts.factory.createReturnStatement(ts.factory.createNull())),
    StatementFactory.constant("output", ts.factory.createCallExpression(ts.factory.createIdentifier("general"), void 0, [
      ts.factory.createIdentifier("input")
    ])),
    ts.factory.createReturnStatement(ts.factory.createIdentifier("output"))
  ]));
})(NotationIsGeneralProgrammer || (NotationIsGeneralProgrammer = {}));

export {
  NotationIsGeneralProgrammer
};
//# sourceMappingURL=chunk-2TJ7FTK6.mjs.map