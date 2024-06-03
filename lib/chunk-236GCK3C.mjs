import {
  FunctionalGeneralProgrammer
} from "./chunk-VLVNLFOD.mjs";
import {
  IsProgrammer
} from "./chunk-3IJJRDF3.mjs";
import {
  StatementFactory
} from "./chunk-RR3Z23V6.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";
import {
  StringUtil_exports
} from "./chunk-CLXKMTSC.mjs";

// src/programmers/functional/FunctionalIsParametersProgrammer.ts
import ts3 from "typescript";

// src/programmers/functional/FunctionalIsFunctionProgrammer.ts
import ts2 from "typescript";

// src/programmers/functional/FunctionalIsReturnProgrammer.ts
import ts from "typescript";
var FunctionalIsReturnProgrammer;
(function(FunctionalIsReturnProgrammer2) {
  FunctionalIsReturnProgrammer2.write = (project) => (modulo) => (equals) => (expression, declaration) => {
    const { async, statements } = FunctionalIsReturnProgrammer2.writeStatements(project)(modulo)(equals)(expression, declaration);
    return ts.factory.createArrowFunction(async ? [
      ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)
    ] : void 0, void 0, declaration.parameters, FunctionalIsFunctionProgrammer.getReturnTypeNode(declaration, async), void 0, ts.factory.createBlock(statements, true));
  };
  FunctionalIsReturnProgrammer2.writeStatements = (project) => (modulo) => (equals) => (expression, declaration) => {
    const { type, async } = FunctionalGeneralProgrammer.getReturnType(project.checker)(declaration);
    const caller = ts.factory.createCallExpression(expression, void 0, declaration.parameters.map((p) => ts.factory.createIdentifier(p.name.getText())));
    const name = StringUtil_exports.escapeDuplicate(declaration.parameters.map((p) => p.name.getText()))("result");
    const statements = [
      StatementFactory.constant(name, async ? ts.factory.createAwaitExpression(caller) : caller),
      ts.factory.createReturnStatement(ts.factory.createConditionalExpression(ts.factory.createCallExpression(IsProgrammer.write(project)(modulo)(equals)(type), void 0, [
        ts.factory.createIdentifier(name)
      ]), void 0, ts.factory.createIdentifier(name), void 0, ts.factory.createNull()))
    ];
    return {
      async,
      statements
    };
  };
})(FunctionalIsReturnProgrammer || (FunctionalIsReturnProgrammer = {}));

// src/programmers/functional/FunctionalIsFunctionProgrammer.ts
var FunctionalIsFunctionProgrammer;
(function(FunctionalIsFunctionProgrammer2) {
  FunctionalIsFunctionProgrammer2.write = (project) => (modulo) => (equals) => (expression, declaration) => {
    const { async, statements } = FunctionalIsReturnProgrammer.writeStatements(project)(modulo)(equals)(expression, declaration);
    return ts2.factory.createArrowFunction(async ? [
      ts2.factory.createModifier(ts2.SyntaxKind.AsyncKeyword)
    ] : void 0, void 0, declaration.parameters, FunctionalIsFunctionProgrammer2.getReturnTypeNode(declaration, async), void 0, ts2.factory.createBlock([
      ...FunctionalIsParametersProgrammer.writeStatements(project)(modulo)(equals)(declaration),
      ...statements
    ], true));
  };
  FunctionalIsFunctionProgrammer2.getReturnTypeNode = (declaration, async) => declaration.type ? async ? !!declaration.type.typeArguments?.[0] ? ts2.factory.createTypeReferenceNode("Promise", [
    ts2.factory.createUnionTypeNode([
      declaration.type.typeArguments[0],
      ts2.factory.createTypeReferenceNode("null")
    ])
  ]) : void 0 : ts2.factory.createUnionTypeNode([
    declaration.type,
    ts2.factory.createTypeReferenceNode("null")
  ]) : void 0;
})(FunctionalIsFunctionProgrammer || (FunctionalIsFunctionProgrammer = {}));

// src/programmers/functional/FunctionalIsParametersProgrammer.ts
var FunctionalIsParametersProgrammer;
(function(FunctionalIsParametersProgrammer2) {
  FunctionalIsParametersProgrammer2.write = (project) => (modulo) => (equals) => (expression, declaration) => {
    const { async } = FunctionalGeneralProgrammer.getReturnType(project.checker)(declaration);
    return ts3.factory.createArrowFunction(async ? [
      ts3.factory.createModifier(ts3.SyntaxKind.AsyncKeyword)
    ] : void 0, void 0, declaration.parameters, FunctionalIsFunctionProgrammer.getReturnTypeNode(declaration, async), void 0, ts3.factory.createBlock([
      ...FunctionalIsParametersProgrammer2.writeStatements(project)(modulo)(equals)(declaration),
      ts3.factory.createReturnStatement(ts3.factory.createCallExpression(expression, void 0, declaration.parameters.map((p) => ts3.factory.createIdentifier(p.name.getText()))))
    ], true));
  };
  FunctionalIsParametersProgrammer2.writeStatements = (project) => (modulo) => (equals) => (declaration) => declaration.parameters.map((p) => [
    ts3.factory.createIfStatement(ts3.factory.createStrictEquality(ts3.factory.createFalse(), ts3.factory.createCallExpression(IsProgrammer.write(project)(modulo)(equals)(project.checker.getTypeFromTypeNode(p.type ?? TypeFactory.keyword("any"))), void 0, [
      ts3.factory.createIdentifier(p.name.getText())
    ])), ts3.factory.createReturnStatement(ts3.factory.createNull()))
  ]).flat();
})(FunctionalIsParametersProgrammer || (FunctionalIsParametersProgrammer = {}));

export {
  FunctionalIsParametersProgrammer,
  FunctionalIsReturnProgrammer,
  FunctionalIsFunctionProgrammer
};
//# sourceMappingURL=chunk-236GCK3C.mjs.map