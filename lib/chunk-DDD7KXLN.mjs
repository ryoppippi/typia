import {
  HttpQueryProgrammer
} from "./chunk-6O2URFTA.mjs";
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

// src/programmers/http/HttpValidateQueryProgrammer.ts
import ts from "typescript";
var HttpValidateQueryProgrammer;
(function(HttpValidateQueryProgrammer2) {
  HttpValidateQueryProgrammer2.write = (project) => (modulo) => (type, name) => ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("input", ts.factory.createTypeReferenceNode(HttpQueryProgrammer.INPUT_TYPE))
  ], ts.factory.createTypeReferenceNode(`typia.IValidation<typia.Resolved<${name ?? TypeFactory.getFullName(project.checker)(type)}>>`), void 0, ts.factory.createBlock([
    StatementFactory.constant("validate", ValidateProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: true
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
    ts.factory.createReturnStatement(ts.factory.createAsExpression(ts.factory.createCallExpression(ts.factory.createIdentifier("validate"), void 0, [
      ts.factory.createIdentifier("output")
    ]), ts.factory.createTypeReferenceNode("any")))
  ]));
})(HttpValidateQueryProgrammer || (HttpValidateQueryProgrammer = {}));

export {
  HttpValidateQueryProgrammer
};
//# sourceMappingURL=chunk-DDD7KXLN.mjs.map