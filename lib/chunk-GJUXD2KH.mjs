import {
  MiscCloneProgrammer
} from "./chunk-QTJHC5AD.mjs";
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

// src/programmers/misc/MiscIsCloneProgrammer.ts
import ts from "typescript";
var MiscIsCloneProgrammer;
(function(MiscIsCloneProgrammer2) {
  MiscIsCloneProgrammer2.write = (project) => (modulo) => (type, name) => ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("input", TypeFactory.keyword("any"))
  ], ts.factory.createUnionTypeNode([
    ts.factory.createImportTypeNode(ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral("typia")), void 0, ts.factory.createIdentifier("Resolved"), [
      ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type))
    ], false),
    ts.factory.createLiteralTypeNode(ts.factory.createNull())
  ]), void 0, ts.factory.createBlock([
    StatementFactory.constant("is", IsProgrammer.write(project)(modulo)(false)(type, name)),
    StatementFactory.constant("clone", MiscCloneProgrammer.write({
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
    StatementFactory.constant("output", ts.factory.createCallExpression(ts.factory.createIdentifier("clone"), void 0, [
      ts.factory.createIdentifier("input")
    ])),
    ts.factory.createReturnStatement(ts.factory.createIdentifier("output"))
  ]));
})(MiscIsCloneProgrammer || (MiscIsCloneProgrammer = {}));

export {
  MiscIsCloneProgrammer
};
//# sourceMappingURL=chunk-GJUXD2KH.mjs.map