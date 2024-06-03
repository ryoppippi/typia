import {
  HttpMetadataUtil
} from "./chunk-AXUIZYPU.mjs";
import {
  AssertProgrammer
} from "./chunk-7UTIIEMR.mjs";
import {
  FunctionImporter
} from "./chunk-5TRLONIA.mjs";
import {
  StatementFactory
} from "./chunk-RR3Z23V6.mjs";
import {
  TransformerError
} from "./chunk-77LTYCTZ.mjs";
import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";
import {
  MetadataFactory
} from "./chunk-MNHXN4HB.mjs";
import {
  MetadataCollection
} from "./chunk-MX63JLF5.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/http/HttpParameterProgrammer.ts
import ts from "typescript";
var HttpParameterProgrammer;
(function(HttpParameterProgrammer2) {
  HttpParameterProgrammer2.write = (project) => (modulo) => (type, name) => {
    const result = MetadataFactory.analyze(project.checker, project.context)({
      escape: false,
      constant: true,
      absorb: true,
      validate: HttpParameterProgrammer2.validate
    })(new MetadataCollection())(type);
    if (result.success === false) throw TransformerError.from(modulo.getText())(result.errors);
    const atomic = [
      ...HttpMetadataUtil.atomics(result.data)
    ][0];
    const importer = new FunctionImporter(modulo.getText());
    const block = [
      StatementFactory.constant("assert", AssertProgrammer.write({
        ...project,
        options: {
          numeric: true
        }
      })(modulo)(false)(type, name)),
      StatementFactory.constant("value", ts.factory.createCallExpression(importer.use(atomic), void 0, [
        ts.factory.createIdentifier("input")
      ])),
      ts.factory.createReturnStatement(ts.factory.createCallExpression(ts.factory.createIdentifier("assert"), void 0, [
        ts.factory.createIdentifier("value")
      ]))
    ];
    return ts.factory.createArrowFunction(void 0, void 0, [
      IdentifierFactory.parameter("input", ts.factory.createTypeReferenceNode("string"))
    ], ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type)), void 0, ts.factory.createBlock([
      ...importer.declare(modulo),
      ...block
    ], true));
  };
  HttpParameterProgrammer2.validate = (meta) => {
    const errors = [];
    const insert = /* @__PURE__ */ __name((msg) => errors.push(msg), "insert");
    if (meta.any) insert("do not allow any type");
    if (meta.isRequired() === false) insert("do not allow undefindable type");
    const atomics = HttpMetadataUtil.atomics(meta);
    const expected = meta.atomics.length + meta.templates.length + meta.constants.map((c) => c.values.length).reduce((a, b) => a + b, 0);
    if (meta.size() !== expected || atomics.size === 0) insert("only atomic or constant types are allowed");
    if (atomics.size > 1) insert("do not allow union type");
    return errors;
  };
})(HttpParameterProgrammer || (HttpParameterProgrammer = {}));

export {
  HttpParameterProgrammer
};
//# sourceMappingURL=chunk-SVNYN7MY.mjs.map