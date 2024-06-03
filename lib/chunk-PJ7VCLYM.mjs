import {
  AssertProgrammer
} from "./chunk-7UTIIEMR.mjs";
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

// src/programmers/json/JsonAssertParseProgrammer.ts
import ts from "typescript";
var JsonAssertParseProgrammer;
(function(JsonAssertParseProgrammer2) {
  JsonAssertParseProgrammer2.write = (project) => (modulo) => (type, name, init) => {
    JsonMetadataFactory.analyze(`typia.json.${modulo.getText()}`)(project.checker, project.context)(type);
    return ts.factory.createArrowFunction(void 0, void 0, [
      IdentifierFactory.parameter("input", TypeFactory.keyword("string")),
      AssertProgrammer.Guardian.parameter(init)
    ], ts.factory.createImportTypeNode(ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral("typia")), void 0, ts.factory.createIdentifier("Primitive"), [
      ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type))
    ], false), void 0, ts.factory.createBlock([
      StatementFactory.constant("assert", AssertProgrammer.write({
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
      ts.factory.createReturnStatement(ts.factory.createAsExpression(ts.factory.createCallExpression(ts.factory.createIdentifier("assert"), void 0, [
        ts.factory.createIdentifier("input"),
        AssertProgrammer.Guardian.identifier()
      ]), ts.factory.createTypeReferenceNode("any")))
    ]));
  };
})(JsonAssertParseProgrammer || (JsonAssertParseProgrammer = {}));

export {
  JsonAssertParseProgrammer
};
//# sourceMappingURL=chunk-PJ7VCLYM.mjs.map