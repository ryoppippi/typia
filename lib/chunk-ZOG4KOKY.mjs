import {
  IsProgrammer
} from "./chunk-3IJJRDF3.mjs";
import {
  StatementFactory
} from "./chunk-RR3Z23V6.mjs";
import {
  JsonMetadataFactory
} from "./chunk-RCVN56BI.mjs";
import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";

// src/programmers/json/JsonIsParseProgrammer.ts
import ts from "typescript";
var JsonIsParseProgrammer;
(function(JsonIsParseProgrammer2) {
  JsonIsParseProgrammer2.write = (project) => (modulo) => (type, name) => {
    JsonMetadataFactory.analyze(`typia.json.${modulo.getText()}`)(project.checker, project.context)(type);
    return ts.factory.createArrowFunction(void 0, void 0, [
      IdentifierFactory.parameter("input", TypeFactory.keyword("any"))
    ], ts.factory.createImportTypeNode(ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral("typia")), void 0, ts.factory.createIdentifier("Primitive"), [
      ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type))
    ], false), void 0, ts.factory.createBlock([
      StatementFactory.constant("is", IsProgrammer.write({
        ...project,
        options: {
          ...project.options,
          functional: false,
          numeric: false
        }
      })(modulo)(false)(type, name)),
      ts.factory.createExpressionStatement(ts.factory.createBinaryExpression(ts.factory.createIdentifier("input"), ts.SyntaxKind.EqualsToken, ts.factory.createCallExpression(ts.factory.createIdentifier("JSON.parse"), void 0, [
        ts.factory.createIdentifier("input")
      ]))),
      ts.factory.createReturnStatement(ts.factory.createConditionalExpression(ts.factory.createCallExpression(ts.factory.createIdentifier("is"), void 0, [
        ts.factory.createIdentifier("input")
      ]), void 0, ts.factory.createAsExpression(ts.factory.createIdentifier("input"), TypeFactory.keyword("any")), void 0, ts.factory.createNull()))
    ]));
  };
})(JsonIsParseProgrammer || (JsonIsParseProgrammer = {}));

export {
  JsonIsParseProgrammer
};
//# sourceMappingURL=chunk-ZOG4KOKY.mjs.map