import {
  JsonStringifyProgrammer
} from "./chunk-CPQPG5GK.mjs";
import {
  AssertProgrammer
} from "./chunk-7UTIIEMR.mjs";
import {
  StatementFactory
} from "./chunk-RR3Z23V6.mjs";
import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";

// src/programmers/json/JsonAssertStringifyProgrammer.ts
import ts from "typescript";
var JsonAssertStringifyProgrammer;
(function(JsonAssertStringifyProgrammer2) {
  JsonAssertStringifyProgrammer2.write = (project) => (modulo) => (type, name, init) => ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("input", TypeFactory.keyword("any")),
    AssertProgrammer.Guardian.parameter(init)
  ], TypeFactory.keyword("string"), void 0, ts.factory.createBlock([
    StatementFactory.constant("assert", AssertProgrammer.write({
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
    ts.factory.createReturnStatement(ts.factory.createCallExpression(ts.factory.createIdentifier("stringify"), void 0, [
      ts.factory.createCallExpression(ts.factory.createIdentifier("assert"), void 0, [
        ts.factory.createIdentifier("input"),
        AssertProgrammer.Guardian.identifier()
      ])
    ]))
  ]));
})(JsonAssertStringifyProgrammer || (JsonAssertStringifyProgrammer = {}));

export {
  JsonAssertStringifyProgrammer
};
//# sourceMappingURL=chunk-FFDAKSNK.mjs.map