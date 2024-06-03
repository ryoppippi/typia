import {
  JsonStringifyProgrammer
} from "./chunk-CPQPG5GK.mjs";
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

// src/programmers/json/JsonIsStringifyProgrammer.ts
import ts from "typescript";
var JsonIsStringifyProgrammer;
(function(JsonIsStringifyProgrammer2) {
  JsonIsStringifyProgrammer2.write = (project) => (modulo) => (type, name) => ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("input", ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type)))
  ], ts.factory.createUnionTypeNode([
    TypeFactory.keyword("string"),
    ts.factory.createLiteralTypeNode(ts.factory.createNull())
  ]), void 0, ts.factory.createBlock([
    StatementFactory.constant("is", IsProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: true
      }
    })(modulo)(false)(type, name)),
    StatementFactory.constant("stringify", JsonStringifyProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(type, name)),
    ts.factory.createReturnStatement(ts.factory.createConditionalExpression(ts.factory.createCallExpression(ts.factory.createIdentifier("is"), void 0, [
      ts.factory.createIdentifier("input")
    ]), void 0, ts.factory.createCallExpression(ts.factory.createIdentifier("stringify"), void 0, [
      ts.factory.createIdentifier("input")
    ]), void 0, ts.factory.createNull()))
  ]));
})(JsonIsStringifyProgrammer || (JsonIsStringifyProgrammer = {}));

export {
  JsonIsStringifyProgrammer
};
//# sourceMappingURL=chunk-JXKDIE2B.mjs.map