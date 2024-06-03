import {
  HttpHeadersProgrammer
} from "./chunk-TWGRRBX4.mjs";
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

// src/programmers/http/HttpAssertHeadersProgrammer.ts
import ts from "typescript";
var HttpAssertHeadersProgrammer;
(function(HttpAssertHeadersProgrammer2) {
  HttpAssertHeadersProgrammer2.write = (project) => (modulo) => (type, name, init) => ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("input", ts.factory.createTypeReferenceNode(HttpHeadersProgrammer.INPUT_TYPE)),
    AssertProgrammer.Guardian.parameter(init)
  ], ts.factory.createImportTypeNode(ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral("typia")), void 0, ts.factory.createIdentifier("Resolved"), [
    ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type))
  ], false), void 0, ts.factory.createBlock([
    StatementFactory.constant("decode", HttpHeadersProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(type, name)),
    StatementFactory.constant("assert", AssertProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(false)(type, name)),
    StatementFactory.constant("output", ts.factory.createCallExpression(ts.factory.createIdentifier("decode"), void 0, [
      ts.factory.createIdentifier("input")
    ])),
    ts.factory.createReturnStatement(ts.factory.createAsExpression(ts.factory.createCallExpression(ts.factory.createIdentifier("assert"), void 0, [
      ts.factory.createIdentifier("output"),
      AssertProgrammer.Guardian.identifier()
    ]), TypeFactory.keyword("any")))
  ]));
})(HttpAssertHeadersProgrammer || (HttpAssertHeadersProgrammer = {}));

export {
  HttpAssertHeadersProgrammer
};
//# sourceMappingURL=chunk-B63AKR5K.mjs.map