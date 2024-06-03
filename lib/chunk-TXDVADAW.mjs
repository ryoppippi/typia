import {
  MiscPruneProgrammer
} from "./chunk-VRHYTTMP.mjs";
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

// src/programmers/misc/MiscIsPruneProgrammer.ts
import ts from "typescript";
var MiscIsPruneProgrammer;
(function(MiscIsPruneProgrammer2) {
  MiscIsPruneProgrammer2.write = (project) => (modulo) => (type, name) => ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("input", TypeFactory.keyword("any"))
  ], ts.factory.createTypePredicateNode(void 0, "input", ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type))), void 0, ts.factory.createBlock([
    StatementFactory.constant("is", IsProgrammer.write(project)(modulo)(false)(type, name)),
    StatementFactory.constant("prune", MiscPruneProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(type, name)),
    ts.factory.createIfStatement(ts.factory.createPrefixUnaryExpression(ts.SyntaxKind.ExclamationToken, ts.factory.createCallExpression(ts.factory.createIdentifier("is"), void 0, [
      ts.factory.createIdentifier("input")
    ])), ts.factory.createReturnStatement(ts.factory.createFalse())),
    ts.factory.createExpressionStatement(ts.factory.createCallExpression(ts.factory.createIdentifier("prune"), void 0, [
      ts.factory.createIdentifier("input")
    ])),
    ts.factory.createReturnStatement(ts.factory.createTrue())
  ]));
})(MiscIsPruneProgrammer || (MiscIsPruneProgrammer = {}));

export {
  MiscIsPruneProgrammer
};
//# sourceMappingURL=chunk-TXDVADAW.mjs.map