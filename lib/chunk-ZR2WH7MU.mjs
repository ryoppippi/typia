import {
  FunctionalGeneralProgrammer
} from "./chunk-VLVNLFOD.mjs";
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
import {
  StringUtil_exports
} from "./chunk-CLXKMTSC.mjs";

// src/programmers/functional/FunctionalValidateParametersProgrammer.ts
import ts3 from "typescript";

// src/programmers/functional/FunctionalValidateFunctionProgrammer.ts
import ts2 from "typescript";

// src/programmers/functional/FunctionalValidateReturnProgrammer.ts
import ts from "typescript";
var FunctionalValidateReturnProgrammer;
(function(FunctionalValidateReturnProgrammer2) {
  FunctionalValidateReturnProgrammer2.write = (project) => (modulo) => (equals) => (expression, declaration) => {
    const { async, statements } = FunctionalValidateReturnProgrammer2.writeStatements(project)(modulo)(equals)(expression, declaration);
    return ts.factory.createArrowFunction(async ? [
      ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)
    ] : void 0, void 0, declaration.parameters, FunctionalValidateFunctionProgrammer.getReturnTypeNode(declaration, async), void 0, ts.factory.createBlock(statements, true));
  };
  FunctionalValidateReturnProgrammer2.writeStatements = (project) => (modulo) => (equals) => (expression, declaration) => {
    const { type, async } = FunctionalGeneralProgrammer.getReturnType(project.checker)(declaration);
    const caller = ts.factory.createCallExpression(expression, void 0, declaration.parameters.map((p) => ts.factory.createIdentifier(p.name.getText())));
    const name = StringUtil_exports.escapeDuplicate(declaration.parameters.map((p) => p.name.getText()))("result");
    const statements = [
      StatementFactory.constant(name, ts.factory.createCallExpression(ValidateProgrammer.write(project)(modulo)(equals)(type), void 0, [
        async ? ts.factory.createAwaitExpression(caller) : caller
      ])),
      ts.factory.createIfStatement(ts.factory.createPrefixUnaryExpression(ts.SyntaxKind.ExclamationToken, ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier(name), ts.factory.createIdentifier("success"))), ts.factory.createExpressionStatement(ts.factory.createBinaryExpression(ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier(name), ts.factory.createIdentifier("errors")), ts.factory.createToken(ts.SyntaxKind.EqualsToken), FunctionalValidateFunctionProgrammer.hookErrors({
        expression: ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier(name), ts.factory.createIdentifier("errors")),
        replacer: ts.factory.createStringLiteral("$input.return")
      })))),
      ts.factory.createReturnStatement(ts.factory.createIdentifier("result"))
    ];
    return {
      async,
      statements
    };
  };
})(FunctionalValidateReturnProgrammer || (FunctionalValidateReturnProgrammer = {}));

// src/programmers/functional/FunctionalValidateFunctionProgrammer.ts
var FunctionalValidateFunctionProgrammer;
(function(FunctionalValidateFunctionProgrammer2) {
  FunctionalValidateFunctionProgrammer2.write = (project) => (modulo) => (equals) => (expression, declaration) => {
    const { async, statements } = FunctionalValidateReturnProgrammer.writeStatements(project)(modulo)(equals)(expression, declaration);
    return ts2.factory.createArrowFunction(async ? [
      ts2.factory.createModifier(ts2.SyntaxKind.AsyncKeyword)
    ] : void 0, void 0, declaration.parameters, FunctionalValidateFunctionProgrammer2.getReturnTypeNode(declaration, async), void 0, ts2.factory.createBlock([
      ...FunctionalValidateParametersProgrammer.writeStatements(project)(modulo)(equals)(declaration),
      ...statements
    ], true));
  };
  FunctionalValidateFunctionProgrammer2.hookErrors = (props) => ts2.factory.createCallExpression(ts2.factory.createPropertyAccessExpression(props.expression, "map"), void 0, [
    ts2.factory.createArrowFunction(void 0, void 0, [
      IdentifierFactory.parameter("error")
    ], void 0, void 0, ts2.factory.createObjectLiteralExpression([
      ts2.factory.createSpreadAssignment(ts2.factory.createIdentifier("error")),
      ts2.factory.createPropertyAssignment("path", ts2.factory.createCallExpression(ts2.factory.createPropertyAccessExpression(ts2.factory.createPropertyAccessExpression(ts2.factory.createIdentifier("error"), "path"), "replace"), void 0, [
        ts2.factory.createStringLiteral("$input"),
        props.replacer
      ]))
    ], true))
  ]);
  FunctionalValidateFunctionProgrammer2.getReturnTypeNode = (declaration, async) => declaration.type ? async ? !!declaration.type.typeArguments?.[0] ? ts2.factory.createTypeReferenceNode("Promise", [
    ts2.factory.createImportTypeNode(ts2.factory.createLiteralTypeNode(ts2.factory.createStringLiteral("typia")), void 0, ts2.factory.createIdentifier("IValidation"), [
      declaration.type.typeArguments[0]
    ])
  ]) : void 0 : ts2.factory.createImportTypeNode(ts2.factory.createLiteralTypeNode(ts2.factory.createStringLiteral("typia")), void 0, ts2.factory.createIdentifier("IValidation"), [
    declaration.type
  ]) : void 0;
})(FunctionalValidateFunctionProgrammer || (FunctionalValidateFunctionProgrammer = {}));

// src/programmers/functional/FunctionalValidateParametersProgrammer.ts
var FunctionalValidateParametersProgrammer;
(function(FunctionalValidateParametersProgrammer2) {
  FunctionalValidateParametersProgrammer2.write = (project) => (modulo) => (equals) => (expression, declaration) => {
    const { async } = FunctionalGeneralProgrammer.getReturnType(project.checker)(declaration);
    const caller = ts3.factory.createCallExpression(expression, void 0, declaration.parameters.map((p) => ts3.factory.createIdentifier(p.name.getText())));
    return ts3.factory.createArrowFunction(async ? [
      ts3.factory.createModifier(ts3.SyntaxKind.AsyncKeyword)
    ] : void 0, void 0, declaration.parameters, FunctionalValidateFunctionProgrammer.getReturnTypeNode(declaration, async), void 0, ts3.factory.createBlock([
      ...FunctionalValidateParametersProgrammer2.writeStatements(project)(modulo)(equals)(declaration),
      ts3.factory.createReturnStatement(ts3.factory.createObjectLiteralExpression([
        ts3.factory.createPropertyAssignment("success", ts3.factory.createTrue()),
        ts3.factory.createPropertyAssignment("data", async ? ts3.factory.createAwaitExpression(caller) : caller),
        ts3.factory.createPropertyAssignment("errors", ts3.factory.createArrayLiteralExpression([]))
      ], true))
    ], true));
  };
  FunctionalValidateParametersProgrammer2.writeStatements = (project) => (modulo) => (equals) => (declaration) => {
    const resultName = StringUtil_exports.escapeDuplicate(declaration.parameters.map((p) => p.name.getText()))("paramResults");
    const validationResultArray = ts3.factory.createArrayLiteralExpression(declaration.parameters.map((p) => ts3.factory.createAsExpression(ts3.factory.createCallExpression(ValidateProgrammer.write(project)(modulo)(equals)(project.checker.getTypeFromTypeNode(p.type ?? TypeFactory.keyword("any"))), void 0, [
      ts3.factory.createIdentifier(p.name.getText())
    ]), ts3.factory.createImportTypeNode(ts3.factory.createLiteralTypeNode(ts3.factory.createStringLiteral("typia")), void 0, ts3.factory.createQualifiedName(ts3.factory.createIdentifier("IValidation"), ts3.factory.createIdentifier("IFailure")), void 0, false))), true);
    const failures = ts3.factory.createCallExpression(ts3.factory.createPropertyAccessExpression(validationResultArray, "filter"), void 0, [
      ts3.factory.createArrowFunction(void 0, void 0, [
        IdentifierFactory.parameter("r")
      ], void 0, void 0, ts3.factory.createStrictEquality(ts3.factory.createFalse(), ts3.factory.createPropertyAccessExpression(ts3.factory.createIdentifier("r"), "success")))
    ]);
    const errorMatrix = ts3.factory.createCallExpression(ts3.factory.createPropertyAccessExpression(ts3.factory.createIdentifier(resultName), "map"), void 0, [
      ts3.factory.createArrowFunction(void 0, void 0, [
        IdentifierFactory.parameter("r"),
        IdentifierFactory.parameter("i")
      ], void 0, void 0, FunctionalValidateFunctionProgrammer.hookErrors({
        expression: ts3.factory.createPropertyAccessExpression(ts3.factory.createIdentifier("r"), "errors"),
        replacer: ts3.factory.createTemplateExpression(ts3.factory.createTemplateHead("$input.parameters["), [
          ts3.factory.createTemplateSpan(ts3.factory.createIdentifier("i"), ts3.factory.createTemplateTail("]"))
        ])
      }))
    ]);
    return [
      StatementFactory.constant(resultName, failures),
      ts3.factory.createIfStatement(ts3.factory.createBinaryExpression(ts3.factory.createPropertyAccessExpression(ts3.factory.createIdentifier(resultName), "length"), ts3.SyntaxKind.GreaterThanToken, ts3.factory.createNumericLiteral("0")), ts3.factory.createReturnStatement(ts3.factory.createObjectLiteralExpression([
        ts3.factory.createPropertyAssignment("success", ts3.factory.createFalse()),
        ts3.factory.createPropertyAssignment("errors", ts3.factory.createCallExpression(ts3.factory.createPropertyAccessExpression(errorMatrix, "flat"), void 0, void 0))
      ], true)))
    ];
  };
})(FunctionalValidateParametersProgrammer || (FunctionalValidateParametersProgrammer = {}));

export {
  FunctionalValidateParametersProgrammer,
  FunctionalValidateReturnProgrammer,
  FunctionalValidateFunctionProgrammer
};
//# sourceMappingURL=chunk-ZR2WH7MU.mjs.map