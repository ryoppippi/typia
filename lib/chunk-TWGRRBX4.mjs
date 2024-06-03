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
  ExpressionFactory
} from "./chunk-TJUGWBRO.mjs";
import {
  MetadataCollection
} from "./chunk-MX63JLF5.mjs";
import {
  MetadataArrayType
} from "./chunk-S6FVASNO.mjs";
import {
  MapUtil
} from "./chunk-NDRJDMPV.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/http/HttpHeadersProgrammer.ts
import ts from "typescript";
var HttpHeadersProgrammer;
(function(HttpHeadersProgrammer2) {
  HttpHeadersProgrammer2.INPUT_TYPE = "Record<string, string | string[] | undefined>";
  HttpHeadersProgrammer2.write = (project) => (modulo) => (type, name) => {
    const importer = new FunctionImporter(modulo.getText());
    const collection = new MetadataCollection();
    const result = MetadataFactory.analyze(project.checker, project.context)({
      escape: false,
      constant: true,
      absorb: true,
      validate: HttpHeadersProgrammer2.validate
    })(collection)(type);
    if (result.success === false) throw TransformerError.from(`typia.http.${importer.method}`)(result.errors);
    const object = result.data.objects[0];
    const statements = decode_object(importer)(object);
    return ts.factory.createArrowFunction(void 0, void 0, [
      IdentifierFactory.parameter("input", ts.factory.createTypeReferenceNode(HttpHeadersProgrammer2.INPUT_TYPE))
    ], ts.factory.createImportTypeNode(ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral("typia")), void 0, ts.factory.createIdentifier("Resolved"), [
      ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type))
    ], false), void 0, ts.factory.createBlock([
      ...importer.declare(modulo),
      ...statements
    ], true));
  };
  HttpHeadersProgrammer2.validate = (meta, explore) => {
    const errors = [];
    const insert = /* @__PURE__ */ __name((msg) => errors.push(msg), "insert");
    if (explore.top === true) {
      if (meta.objects.length !== 1 || meta.bucket() !== 1) insert("only one object type is allowed.");
      if (meta.nullable === true) insert("headers cannot be null.");
      if (meta.isRequired() === false) insert("headers cannot be null.");
    } else if (explore.nested !== null && explore.nested instanceof MetadataArrayType) {
      const atomics = HttpMetadataUtil.atomics(meta);
      const expected = meta.atomics.length + meta.templates.length + meta.constants.map((c) => c.values.length).reduce((a, b) => a + b, 0);
      if (atomics.size > 1) insert("union type is not allowed in array.");
      if (meta.size() !== expected) insert("only atomic or constant types are allowed in array.");
      if (meta.nullable === true) insert("nullable type is not allowed in array.");
      if (meta.isRequired() === false) insert("optional type is not allowed in array.");
    } else if (explore.object && explore.property !== null) {
      if (typeof explore.property === "object") insert("dynamic property is not allowed.");
      if (meta.tuples.length) insert("tuple type is not allowed.");
      if (HttpMetadataUtil.isUnion(meta)) insert("union type is not allowed.");
      if (meta.objects.length || meta.sets.length || meta.maps.length || meta.natives.length) insert("nested object type is not allowed.");
      if (meta.nullable === true) insert("nullable type is not allowed.");
      const isArray = meta.arrays.length >= 1 || meta.tuples.length >= 1;
      if (typeof explore.property === "string" && explore.property.toLowerCase() === "set-cookie" && isArray === false) insert(`${explore.property} property must be array.`);
      if (typeof explore.property === "string" && SINGULAR.has(explore.property.toLowerCase()) && isArray === true) insert("property cannot be array.");
    } else if (explore.object && explore.property === null) {
      const counter = /* @__PURE__ */ new Map();
      for (const prop of explore.object.properties) {
        const key = prop.key.getSoleLiteral();
        if (key === null) continue;
        MapUtil.take(counter)(key.toLowerCase(), () => /* @__PURE__ */ new Set()).add(key);
      }
      for (const [key, set] of counter) if (set.size > 1) insert(`duplicated keys when converting to lowercase letters: [${[
        ...set
      ].join(", ")}] -> ${key}`);
    }
    return errors;
  };
  const decode_object = /* @__PURE__ */ __name((importer) => (object) => {
    const output = ts.factory.createIdentifier("output");
    const optionals = [];
    return [
      StatementFactory.constant("output", ts.factory.createObjectLiteralExpression(object.properties.map((prop) => {
        if (!prop.value.isRequired() && prop.value.arrays.length + prop.value.tuples.length > 0) optionals.push(prop.key.constants[0].values[0].value);
        return decode_regular_property(importer)(prop);
      }), true)),
      ...optionals.map((key) => {
        const access = IdentifierFactory.access(output)(key);
        return ts.factory.createIfStatement(ts.factory.createStrictEquality(ExpressionFactory.number(0), IdentifierFactory.access(access)("length")), ts.factory.createExpressionStatement(ts.factory.createDeleteExpression(access)));
      }),
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
    const accessor = IdentifierFactory.access(ts.factory.createIdentifier("input"))(key.toLowerCase());
    return ts.factory.createPropertyAssignment(Escaper.variable(key) ? key : ts.factory.createStringLiteral(key), isArray ? key === "set-cookie" ? accessor : decode_array(importer)(type)(key)(value)(accessor) : decode_value(importer)(type)(accessor));
  }, "decode_regular_property");
  const decode_value = /* @__PURE__ */ __name((importer) => (type) => (value) => type === "string" ? value : ts.factory.createCallExpression(importer.use(type), void 0, [
    value
  ]), "decode_value");
  const decode_array = /* @__PURE__ */ __name((importer) => (type) => (key) => (value) => (accessor) => {
    const split = ts.factory.createCallChain(ts.factory.createPropertyAccessChain(ts.factory.createCallChain(ts.factory.createPropertyAccessChain(accessor, ts.factory.createToken(ts.SyntaxKind.QuestionDotToken), ts.factory.createIdentifier("split")), void 0, void 0, [
      ts.factory.createStringLiteral(key === "cookie" ? "; " : ", ")
    ]), ts.factory.createToken(ts.SyntaxKind.QuestionDotToken), ts.factory.createIdentifier("map")), void 0, void 0, [
      importer.use(type)
    ]);
    return ts.factory.createConditionalExpression(ExpressionFactory.isArray(accessor), void 0, ts.factory.createCallExpression(IdentifierFactory.access(accessor)("map"), void 0, [
      importer.use(type)
    ]), void 0, value.isRequired() === false ? split : ts.factory.createBinaryExpression(split, ts.factory.createToken(ts.SyntaxKind.QuestionQuestionToken), ts.factory.createArrayLiteralExpression([], false)));
  }, "decode_array");
})(HttpHeadersProgrammer || (HttpHeadersProgrammer = {}));
var SINGULAR = /* @__PURE__ */ new Set([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "server",
  "user-agent"
]);

export {
  HttpHeadersProgrammer
};
//# sourceMappingURL=chunk-TWGRRBX4.mjs.map