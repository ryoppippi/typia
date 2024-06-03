import {
  FunctionalGeneralProgrammer
} from "./chunk-VLVNLFOD.mjs";
import {
  AssertProgrammer
} from "./chunk-7UTIIEMR.mjs";
import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";
import {
  StringUtil_exports
} from "./chunk-CLXKMTSC.mjs";

// src/programmers/functional/FunctionalAssertParametersProgrammer.ts
import ts3 from "typescript";

// src/programmers/functional/FunctionalAssertFunctionProgrammer.ts
import ts2 from "typescript";

// src/programmers/functional/FunctionalAssertReturnProgrammer.ts
import ts from "typescript";
var FunctionAssertReturnProgrammer;
(function(FunctionAssertReturnProgrammer2) {
  FunctionAssertReturnProgrammer2.write = (project) => (modulo) => (equals) => (expression, declaration, init) => {
    const wrapper = FunctionalAssertFunctionProgrammer.errorFactoryWrapper(modulo)(declaration.parameters)(init);
    const { async, returns: statement } = FunctionAssertReturnProgrammer2.returnStatement(project)(modulo)(equals)(expression, declaration, wrapper.name);
    return ts.factory.createArrowFunction(async ? [
      ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)
    ] : void 0, void 0, declaration.parameters, declaration.type, void 0, ts.factory.createBlock([
      wrapper.variable,
      statement
    ], true));
  };
  FunctionAssertReturnProgrammer2.returnStatement = (project) => (modulo) => (equals) => (expression, declaration, wrapper) => {
    const { type, async } = FunctionalGeneralProgrammer.getReturnType(project.checker)(declaration);
    const caller = ts.factory.createCallExpression(expression, void 0, declaration.parameters.map((p) => ts.factory.createIdentifier(p.name.getText())));
    return {
      async,
      returns: ts.factory.createReturnStatement(ts.factory.createCallExpression(AssertProgrammer.write(project)(modulo)(equals)(type, void 0, FunctionalAssertFunctionProgrammer.hookPath({
        wrapper,
        replacer: "$input.return"
      })), void 0, [
        async ? ts.factory.createAwaitExpression(caller) : caller
      ]))
    };
  };
})(FunctionAssertReturnProgrammer || (FunctionAssertReturnProgrammer = {}));

// src/programmers/functional/FunctionalAssertFunctionProgrammer.ts
var FunctionalAssertFunctionProgrammer;
(function(FunctionalAssertFunctionProgrammer2) {
  FunctionalAssertFunctionProgrammer2.write = (project) => (modulo) => (equals) => (expression, declaration, init) => {
    const wrapper = FunctionalAssertFunctionProgrammer2.errorFactoryWrapper(modulo)(declaration.parameters)(init);
    const { async, returns } = FunctionAssertReturnProgrammer.returnStatement(project)(modulo)(equals)(expression, declaration, wrapper.name);
    return ts2.factory.createArrowFunction(async ? [
      ts2.factory.createModifier(ts2.SyntaxKind.AsyncKeyword)
    ] : void 0, void 0, declaration.parameters, declaration.type, void 0, ts2.factory.createBlock([
      wrapper.variable,
      ...FunctionalAssertParametersProgrammer.argumentExpressions(project)(modulo)(equals)(declaration.parameters, wrapper.name).map(ts2.factory.createExpressionStatement),
      returns
    ]));
  };
  FunctionalAssertFunctionProgrammer2.errorFactoryWrapper = (modulo) => (paramters) => (init) => {
    const name = StringUtil_exports.escapeDuplicate(paramters.map((p) => p.name.getText()))("errorFactoryWrapper");
    const variable = ts2.factory.createVariableStatement(void 0, ts2.factory.createVariableDeclarationList([
      ts2.factory.createVariableDeclaration(name, void 0, AssertProgrammer.Guardian.type(), init ?? ts2.factory.createPropertyAccessExpression(ts2.factory.createAsExpression(modulo, TypeFactory.keyword("any")), "errorFactory"))
    ], ts2.NodeFlags.Const));
    return {
      name,
      variable
    };
  };
  FunctionalAssertFunctionProgrammer2.hookPath = (props) => ts2.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("p")
  ], void 0, void 0, ts2.factory.createCallExpression(ts2.factory.createIdentifier(props.wrapper), void 0, [
    ts2.factory.createObjectLiteralExpression([
      ts2.factory.createSpreadAssignment(ts2.factory.createIdentifier("p")),
      ts2.factory.createPropertyAssignment("path", ts2.factory.createConditionalExpression(ts2.factory.createPropertyAccessExpression(ts2.factory.createIdentifier("p"), "path"), void 0, ts2.factory.createCallExpression(ts2.factory.createPropertyAccessExpression(ts2.factory.createPropertyAccessExpression(ts2.factory.createIdentifier("p"), "path"), "replace"), void 0, [
        ts2.factory.createStringLiteral("$input"),
        ts2.factory.createStringLiteral(props.replacer)
      ]), void 0, ts2.factory.createIdentifier("undefined")))
    ])
  ]));
})(FunctionalAssertFunctionProgrammer || (FunctionalAssertFunctionProgrammer = {}));

// src/programmers/functional/FunctionalAssertParametersProgrammer.ts
var FunctionalAssertParametersProgrammer;
(function(FunctionalAssertParametersProgrammer2) {
  FunctionalAssertParametersProgrammer2.write = (project) => (modulo) => (equals) => (expression, declaration, init) => {
    const wrapper = FunctionalAssertFunctionProgrammer.errorFactoryWrapper(modulo)(declaration.parameters)(init);
    const { async } = FunctionalGeneralProgrammer.getReturnType(project.checker)(declaration);
    return ts3.factory.createArrowFunction(async ? [
      ts3.factory.createModifier(ts3.SyntaxKind.AsyncKeyword)
    ] : void 0, void 0, declaration.parameters, declaration.type, void 0, ts3.factory.createBlock([
      wrapper.variable,
      ...FunctionalAssertParametersProgrammer2.argumentExpressions(project)(modulo)(equals)(declaration.parameters, wrapper.name).map(ts3.factory.createExpressionStatement),
      ts3.factory.createReturnStatement(ts3.factory.createCallExpression(expression, void 0, declaration.parameters.map((p) => ts3.factory.createIdentifier(p.name.getText()))))
    ], true));
  };
  FunctionalAssertParametersProgrammer2.argumentExpressions = (project) => (modulo) => (equals) => (parameters, wrapper) => parameters.map((p, i) => ts3.factory.createCallExpression(AssertProgrammer.write(project)(modulo)(equals)(p.type ? project.checker.getTypeFromTypeNode(p.type) : project.checker.getTypeFromTypeNode(TypeFactory.keyword("any")), void 0, FunctionalAssertFunctionProgrammer.hookPath({
    wrapper,
    replacer: `$input.parameters[${i}]`
  })), void 0, [
    ts3.factory.createIdentifier(p.name.getText())
  ]));
})(FunctionalAssertParametersProgrammer || (FunctionalAssertParametersProgrammer = {}));

export {
  FunctionalAssertParametersProgrammer,
  FunctionAssertReturnProgrammer,
  FunctionalAssertFunctionProgrammer
};
//# sourceMappingURL=chunk-ACCANVKV.mjs.map