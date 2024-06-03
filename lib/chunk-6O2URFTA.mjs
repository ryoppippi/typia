import {
  HttpMetadataUtil
} from "./chunk-AXUIZYPU.mjs";
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
  Escaper
} from "./chunk-DISTKAQW.mjs";
import {
  MetadataFactory
} from "./chunk-MNHXN4HB.mjs";
import {
  MetadataCollection
} from "./chunk-MX63JLF5.mjs";
import {
  MetadataArrayType
} from "./chunk-S6FVASNO.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/http/HttpQueryProgrammer.ts
import ts from "typescript";
var HttpQueryProgrammer;
(function(HttpQueryProgrammer2) {
  HttpQueryProgrammer2.INPUT_TYPE = "string | URLSearchParams";
  HttpQueryProgrammer2.write = (project) => (modulo) => (type, name) => {
    const importer = new FunctionImporter(modulo.getText());
    const collection = new MetadataCollection();
    const result = MetadataFactory.analyze(project.checker, project.context)({
      escape: false,
      constant: true,
      absorb: true,
      validate: HttpQueryProgrammer2.validate
    })(collection)(type);
    if (result.success === false) throw TransformerError.from(`typia.http.${importer.method}`)(result.errors);
    const object = result.data.objects[0];
    const statements = decode_object(importer)(object);
    return ts.factory.createArrowFunction(void 0, void 0, [
      IdentifierFactory.parameter("input", ts.factory.createTypeReferenceNode(HttpQueryProgrammer2.INPUT_TYPE))
    ], ts.factory.createImportTypeNode(ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral("typia")), void 0, ts.factory.createIdentifier("Resolved"), [
      ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type))
    ], false), void 0, ts.factory.createBlock([
      ...importer.declare(modulo),
      ...statements
    ], true));
  };
  HttpQueryProgrammer2.validate = (meta, explore) => {
    const errors = [];
    const insert = /* @__PURE__ */ __name((msg) => errors.push(msg), "insert");
    if (explore.top === true) {
      if (meta.objects.length !== 1 || meta.bucket() !== 1) insert("only one object type is allowed.");
      if (meta.nullable === true) insert("query parameters cannot be null.");
      if (meta.isRequired() === false) insert("query parameters cannot be undefined.");
    } else if (explore.nested !== null && explore.nested instanceof MetadataArrayType) {
      const atomics = HttpMetadataUtil.atomics(meta);
      const expected = meta.atomics.length + meta.templates.length + meta.constants.map((c) => c.values.length).reduce((a, b) => a + b, 0);
      if (atomics.size > 1) insert("union type is not allowed in array.");
      if (meta.size() !== expected) insert("only atomic or constant types are allowed in array.");
    } else if (explore.object && explore.property !== null) {
      if (typeof explore.property === "object") insert("dynamic property is not allowed.");
      if (meta.tuples.length) insert("tuple type is not allowed.");
      if (HttpMetadataUtil.isUnion(meta)) insert("union type is not allowed.");
      if (meta.objects.length || meta.sets.length || meta.maps.length || meta.natives.length) insert("nested object type is not allowed.");
    }
    return errors;
  };
  const decode_object = /* @__PURE__ */ __name((importer) => (object) => {
    const input = ts.factory.createIdentifier("input");
    const output = ts.factory.createIdentifier("output");
    return [
      ts.factory.createExpressionStatement(ts.factory.createBinaryExpression(input, ts.factory.createToken(ts.SyntaxKind.EqualsToken), ts.factory.createAsExpression(ts.factory.createCallExpression(importer.use("params"), void 0, [
        input
      ]), ts.factory.createTypeReferenceNode("URLSearchParams")))),
      StatementFactory.constant("output", ts.factory.createObjectLiteralExpression(object.properties.map((prop) => decode_regular_property(importer)(prop)), true)),
      ts.factory.createReturnStatement(ts.factory.createAsExpression(output, TypeFactory.keyword("any")))
    ];
  }, "decode_object");
  const decode_regular_property = /* @__PURE__ */ __name((importer) => (property) => {
    const key = property.key.constants[0].values[0].value;
    const value = property.value;
    const [type, isArray] = value.atomics.length ? [
      value.atomics[0].type,
      false
    ] : value.constants.length ? [
      value.constants[0].type,
      false
    ] : value.templates.length ? [
      "string",
      false
    ] : (() => {
      const meta = value.arrays[0]?.type.value ?? value.tuples[0].type.elements[0];
      return meta.atomics.length ? [
        meta.atomics[0].type,
        true
      ] : meta.templates.length ? [
        "string",
        true
      ] : [
        meta.constants[0].type,
        true
      ];
    })();
    return ts.factory.createPropertyAssignment(Escaper.variable(key) ? key : ts.factory.createStringLiteral(key), isArray ? decode_array(importer)(value)(ts.factory.createCallExpression(IdentifierFactory.access(ts.factory.createCallExpression(ts.factory.createIdentifier("input.getAll"), void 0, [
      ts.factory.createStringLiteral(key)
    ]))("map"), void 0, [
      ts.factory.createArrowFunction(void 0, void 0, [
        IdentifierFactory.parameter("elem")
      ], void 0, void 0, decode_value(importer)(type)(false)(ts.factory.createIdentifier("elem")))
    ])) : decode_value(importer)(type)(value.nullable === false && value.isRequired() === false)(ts.factory.createCallExpression(ts.factory.createIdentifier("input.get"), void 0, [
      ts.factory.createStringLiteral(key)
    ])));
  }, "decode_regular_property");
  const decode_value = /* @__PURE__ */ __name((importer) => (type) => (onlyUndefindable) => (value) => {
    const call = ts.factory.createCallExpression(importer.use(type), void 0, [
      value
    ]);
    return onlyUndefindable ? ts.factory.createBinaryExpression(call, ts.factory.createToken(ts.SyntaxKind.QuestionQuestionToken), ts.factory.createIdentifier("undefined")) : call;
  }, "decode_value");
  const decode_array = /* @__PURE__ */ __name((importer) => (value) => (expression) => value.nullable || value.isRequired() === false ? ts.factory.createCallExpression(importer.use("array"), void 0, [
    expression,
    value.nullable ? ts.factory.createNull() : ts.factory.createIdentifier("undefined")
  ]) : expression, "decode_array");
})(HttpQueryProgrammer || (HttpQueryProgrammer = {}));

export {
  HttpQueryProgrammer
};
//# sourceMappingURL=chunk-6O2URFTA.mjs.map