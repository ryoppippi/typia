import {
  ValidateProgrammer
} from "./chunk-M2WFDNBX.mjs";
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

// src/programmers/json/JsonValidateParseProgrammer.ts
import ts from "typescript";
var JsonValidateParseProgrammer;
(function(JsonValidateParseProgrammer2) {
  JsonValidateParseProgrammer2.write = (project) => (modulo) => (type, name) => {
    JsonMetadataFactory.analyze(`typia.json.${modulo.getText()}`)(project.checker, project.context)(type);
    return ts.factory.createArrowFunction(void 0, void 0, [
      IdentifierFactory.parameter("input", TypeFactory.keyword("string"))
    ], ts.factory.createTypeReferenceNode(`typia.IValidation<typia.Primitive<${name ?? TypeFactory.getFullName(project.checker)(type)}>>`), void 0, ts.factory.createBlock([
      StatementFactory.constant("validate", ValidateProgrammer.write({
        ...project,
        options: {
          ...project.options,
          functional: false,
          numeric: false
        }
      })(modulo)(false)(type, name)),
      StatementFactory.constant("output", ts.factory.createCallExpression(ts.factory.createIdentifier("JSON.parse"), void 0, [
        ts.factory.createIdentifier("input")
      ])),
      ts.factory.createReturnStatement(ts.factory.createAsExpression(ts.factory.createCallExpression(ts.factory.createIdentifier("validate"), void 0, [
        ts.factory.createIdentifier("output")
      ]), ts.factory.createTypeReferenceNode("any")))
    ]));
  };
})(JsonValidateParseProgrammer || (JsonValidateParseProgrammer = {}));

export {
  JsonValidateParseProgrammer
};
//# sourceMappingURL=chunk-Q4T654XR.mjs.map