import {
  FunctionImporter
} from "./chunk-5TRLONIA.mjs";
import {
  ProtobufFactory
} from "./chunk-PVVGCRYT.mjs";
import {
  ProtobufUtil
} from "./chunk-URL374Q3.mjs";
import {
  StatementFactory
} from "./chunk-RR3Z23V6.mjs";
import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";
import {
  MetadataFactory
} from "./chunk-MNHXN4HB.mjs";
import {
  MetadataProperty
} from "./chunk-WJSELHNL.mjs";
import {
  Metadata
} from "./chunk-RD644GUB.mjs";
import {
  MetadataAtomic
} from "./chunk-X7O4QE24.mjs";
import {
  ExpressionFactory
} from "./chunk-TJUGWBRO.mjs";
import {
  MetadataCollection
} from "./chunk-MX63JLF5.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/protobuf/ProtobufDecodeProgrammer.ts
import ts from "typescript";
var ProtobufDecodeProgrammer;
(function(ProtobufDecodeProgrammer2) {
  ProtobufDecodeProgrammer2.write = (project) => (modulo) => (type, name) => {
    const importer = new FunctionImporter(modulo.getText());
    const collection = new MetadataCollection();
    const meta = ProtobufFactory.metadata(modulo.getText())(project.checker, project.context)(collection)(type);
    const functors = collection.objects().filter((obj) => ProtobufUtil.isStaticObject(obj)).map((obj) => StatementFactory.constant(`${PREFIX}o${obj.index}`, write_object_function(project)(importer)(obj)));
    const reader = StatementFactory.constant("reader", ts.factory.createNewExpression(importer.use("Reader"), void 0, [
      ts.factory.createIdentifier("input")
    ]));
    return ts.factory.createArrowFunction(void 0, void 0, [
      IdentifierFactory.parameter("input", ts.factory.createTypeReferenceNode("Uint8Array"))
    ], ts.factory.createImportTypeNode(ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral("typia")), void 0, ts.factory.createIdentifier("Resolved"), [
      ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type))
    ], false), void 0, ts.factory.createBlock([
      ...importer.declare(modulo),
      ...functors,
      reader,
      ts.factory.createReturnStatement(decode_regular_object(true)(meta.objects[0]))
    ], true));
  };
  const write_object_function = /* @__PURE__ */ __name((project) => (importer) => (obj) => ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("reader"),
    IdentifierFactory.parameter("length", TypeFactory.keyword("number"), ExpressionFactory.number(-1))
  ], TypeFactory.keyword("any"), void 0, ts.factory.createBlock([
    ts.factory.createExpressionStatement(ts.factory.createBinaryExpression(ts.factory.createIdentifier("length"), ts.factory.createToken(ts.SyntaxKind.EqualsToken), ts.factory.createConditionalExpression(ts.factory.createLessThan(ts.factory.createIdentifier("length"), ExpressionFactory.number(0)), void 0, ts.factory.createCallExpression(IdentifierFactory.access(READER())("size"), void 0, void 0), void 0, ts.factory.createAdd(ts.factory.createCallExpression(IdentifierFactory.access(READER())("index"), void 0, void 0), ts.factory.createIdentifier("length"))))),
    ...write_object_function_body(project)(importer)({
      condition: ts.factory.createLessThan(ts.factory.createCallExpression(IdentifierFactory.access(READER())("index"), void 0, void 0), ts.factory.createIdentifier("length")),
      tag: "tag",
      output: "output"
    })(obj.properties),
    ts.factory.createReturnStatement(ts.factory.createIdentifier("output"))
  ], true)), "write_object_function");
  const write_object_function_body = /* @__PURE__ */ __name((project) => (importer) => (props) => (properties) => {
    let i = 1;
    const clauses = properties.map((p) => {
      const clause = decode_property(project)(importer)(i)(IdentifierFactory.access(ts.factory.createIdentifier(props.output))(p.key.getSoleLiteral()), p.value);
      i += ProtobufUtil.size(p.value);
      return clause;
    }).flat();
    return [
      StatementFactory.constant(props.output, ts.factory.createAsExpression(ts.factory.createObjectLiteralExpression(properties.filter((p) => !(project.compilerOptions.exactOptionalPropertyTypes === true && p.value.optional === true)).map((p) => ts.factory.createPropertyAssignment(IdentifierFactory.identifier(p.key.getSoleLiteral()), write_property_default_value(p.value))), true), TypeFactory.keyword("any"))),
      ts.factory.createWhileStatement(props.condition, ts.factory.createBlock([
        StatementFactory.constant(props.tag, ts.factory.createCallExpression(IdentifierFactory.access(READER())("uint32"), void 0, void 0)),
        ts.factory.createSwitchStatement(ts.factory.createUnsignedRightShift(ts.factory.createIdentifier(props.tag), ExpressionFactory.number(3)), ts.factory.createCaseBlock([
          ...clauses,
          ts.factory.createDefaultClause([
            ts.factory.createExpressionStatement(ts.factory.createCallExpression(IdentifierFactory.access(READER())("skipType"), void 0, [
              ts.factory.createBitwiseAnd(ts.factory.createIdentifier(props.tag), ExpressionFactory.number(7))
            ])),
            ts.factory.createBreakStatement()
          ])
        ]))
      ]))
    ];
  }, "write_object_function_body");
  const write_property_default_value = /* @__PURE__ */ __name((value) => ts.factory.createAsExpression(value.nullable ? ts.factory.createNull() : value.isRequired() === false ? ts.factory.createIdentifier("undefined") : value.arrays.length ? ts.factory.createArrayLiteralExpression() : value.maps.length ? ts.factory.createNewExpression(ts.factory.createIdentifier("Map"), void 0, []) : value.natives.length ? ts.factory.createNewExpression(ts.factory.createIdentifier("Uint8Array"), void 0, []) : value.atomics.some((a) => a.type === "string") || value.constants.some((c) => c.type === "string" && c.values.some((v) => v.value === "")) || value.templates.some((tpl) => tpl.length === 1 && tpl[0].getName() === "string") ? ts.factory.createStringLiteral("") : value.objects.length && value.objects.some((obj) => !ProtobufUtil.isStaticObject(obj)) ? ts.factory.createObjectLiteralExpression() : ts.factory.createIdentifier("undefined"), TypeFactory.keyword("any")), "write_property_default_value");
  const decode_property = /* @__PURE__ */ __name((project) => (importer) => (index) => (accessor, meta) => {
    const clauses = [];
    const emplace = /* @__PURE__ */ __name((name) => (v) => clauses.push(ts.factory.createCaseClause(ExpressionFactory.number(index++), Array.isArray(v) ? [
      ts.factory.createExpressionStatement(ts.factory.createIdentifier(`// type: ${name}`)),
      ...v,
      ts.factory.createBreakStatement()
    ] : [
      ts.factory.createExpressionStatement(ts.factory.createIdentifier(`// ${name}`)),
      ts.factory.createExpressionStatement(ts.factory.createBinaryExpression(accessor, ts.factory.createToken(ts.SyntaxKind.EqualsToken), v)),
      ts.factory.createBreakStatement()
    ])), "emplace");
    const required = meta.isRequired() && !meta.nullable;
    for (const atomic of ProtobufUtil.getAtomics(meta)) emplace(atomic)(decode_atomic(meta)(atomic));
    if (meta.natives.length) emplace("bytes")(decode_bytes("bytes"));
    for (const array of meta.arrays) emplace(`Array<${array.type.value.getName()}>`)(decode_array(accessor, array, required));
    for (const map of meta.maps) emplace(`Map<string, ${map.value.getName()}>`)(decode_map(project)(importer)(accessor, map, required));
    for (const obj of meta.objects) emplace(obj.name)(ProtobufUtil.isStaticObject(obj) ? decode_regular_object(false)(obj) : decode_dynamic_object(project)(importer)(accessor, obj, required));
    return clauses;
  }, "decode_property");
  const decode_atomic = /* @__PURE__ */ __name((meta) => (atomic) => {
    if (atomic === "string") return decode_bytes("string");
    const call = ts.factory.createCallExpression(IdentifierFactory.access(ts.factory.createIdentifier("reader"))(atomic), void 0, void 0);
    if (atomic !== "int64" && atomic !== "uint64") return call;
    const isNumber = ProtobufUtil.getNumbers(meta).some((n) => n === atomic);
    return isNumber ? ts.factory.createCallExpression(ts.factory.createIdentifier("Number"), void 0, [
      call
    ]) : call;
  }, "decode_atomic");
  const decode_bytes = /* @__PURE__ */ __name((method) => ts.factory.createCallExpression(IdentifierFactory.access(ts.factory.createIdentifier("reader"))(method), void 0, void 0), "decode_bytes");
  const decode_array = /* @__PURE__ */ __name((accessor, array, required) => {
    const statements = [];
    if (required === false) statements.push(ts.factory.createBinaryExpression(accessor, ts.factory.createToken(ts.SyntaxKind.QuestionQuestionEqualsToken), ts.factory.createAsExpression(ts.factory.createArrayLiteralExpression(), ts.factory.createTypeReferenceNode("any[]"))));
    const atomics = ProtobufUtil.getAtomics(array.type.value);
    const decoder = atomics.length ? () => decode_atomic(array.type.value)(atomics[0]) : array.type.value.natives.length ? () => decode_bytes("bytes") : array.type.value.objects.length ? () => decode_regular_object(false)(array.type.value.objects[0]) : null;
    if (decoder === null) throw new Error("Never reach here.");
    else if (atomics.length && atomics[0] !== "string") {
      statements.push(ts.factory.createIfStatement(ts.factory.createStrictEquality(ExpressionFactory.number(2), ts.factory.createBitwiseAnd(ts.factory.createIdentifier("tag"), ExpressionFactory.number(7))), ts.factory.createBlock([
        StatementFactory.constant("piece", ts.factory.createAdd(ts.factory.createCallExpression(IdentifierFactory.access(READER())("uint32"), void 0, void 0), ts.factory.createCallExpression(IdentifierFactory.access(READER())("index"), void 0, void 0))),
        ts.factory.createWhileStatement(ts.factory.createLessThan(ts.factory.createCallExpression(IdentifierFactory.access(READER())("index"), void 0, void 0), ts.factory.createIdentifier("piece")), ts.factory.createExpressionStatement(ts.factory.createCallExpression(IdentifierFactory.access(accessor)("push"), void 0, [
          decoder()
        ])))
      ], true), ts.factory.createExpressionStatement(ts.factory.createCallExpression(IdentifierFactory.access(accessor)("push"), void 0, [
        decoder()
      ]))));
    } else statements.push(ts.factory.createCallExpression(IdentifierFactory.access(accessor)("push"), void 0, [
      decoder()
    ]));
    return statements.map((stmt) => ts.isExpression(stmt) ? ts.factory.createExpressionStatement(stmt) : stmt);
  }, "decode_array");
  const decode_regular_object = /* @__PURE__ */ __name((top) => (obj) => ts.factory.createCallExpression(ts.factory.createIdentifier(`${PREFIX}o${obj.index}`), void 0, [
    ts.factory.createIdentifier("reader"),
    ...top ? [] : [
      ts.factory.createCallExpression(IdentifierFactory.access(READER())("uint32"), void 0, void 0)
    ]
  ]), "decode_regular_object");
  const decode_dynamic_object = /* @__PURE__ */ __name((project) => (importer) => (accessor, obj, required) => {
    const top = obj.properties[0];
    return decode_entry(project)(importer)({
      initializer: /* @__PURE__ */ __name(() => ts.factory.createBinaryExpression(accessor, ts.factory.createToken(ts.SyntaxKind.QuestionQuestionEqualsToken), ts.factory.createObjectLiteralExpression()), "initializer"),
      setter: /* @__PURE__ */ __name(() => ts.factory.createBinaryExpression(ts.factory.createElementAccessExpression(accessor, ts.factory.createIdentifier("entry.key")), ts.factory.createToken(ts.SyntaxKind.EqualsToken), ts.factory.createIdentifier("entry.value")), "setter")
    })(MetadataProperty.create({
      ...top,
      key: (() => {
        const key = Metadata.initialize();
        key.atomics.push(MetadataAtomic.create({
          type: "string",
          tags: []
        }));
        return key;
      })()
    }), required);
  }, "decode_dynamic_object");
  const decode_map = /* @__PURE__ */ __name((project) => (importer) => (accessor, map, required) => decode_entry(project)(importer)({
    initializer: /* @__PURE__ */ __name(() => ts.factory.createBinaryExpression(accessor, ts.factory.createToken(ts.SyntaxKind.QuestionQuestionEqualsToken), ts.factory.createNewExpression(ts.factory.createIdentifier("Map"), [
      TypeFactory.keyword("any"),
      TypeFactory.keyword("any")
    ], [])), "initializer"),
    setter: /* @__PURE__ */ __name(() => ts.factory.createCallExpression(IdentifierFactory.access(accessor)("set"), void 0, [
      ts.factory.createIdentifier("entry.key"),
      ts.factory.createIdentifier("entry.value")
    ]), "setter")
  })(map, required), "decode_map");
  const decode_entry = /* @__PURE__ */ __name((project) => (importer) => (props) => (map, required) => {
    const statements = [
      ...required ? [] : [
        ts.factory.createExpressionStatement(props.initializer())
      ],
      StatementFactory.constant("piece", ts.factory.createAdd(ts.factory.createCallExpression(IdentifierFactory.access(READER())("uint32"), void 0, void 0), ts.factory.createCallExpression(IdentifierFactory.access(READER())("index"), void 0, void 0))),
      ...write_object_function_body(project)(importer)({
        condition: ts.factory.createLessThan(ts.factory.createCallExpression(IdentifierFactory.access(READER())("index"), void 0, void 0), ts.factory.createIdentifier("piece")),
        tag: "kind",
        output: "entry"
      })([
        MetadataProperty.create({
          key: MetadataFactory.soleLiteral("key"),
          value: map.key,
          description: null,
          jsDocTags: []
        }),
        MetadataProperty.create({
          key: MetadataFactory.soleLiteral("value"),
          value: map.value,
          description: null,
          jsDocTags: []
        })
      ]),
      ts.factory.createExpressionStatement(props.setter())
    ];
    return [
      ts.factory.createExpressionStatement(ExpressionFactory.selfCall(ts.factory.createBlock(statements, true)))
    ];
  }, "decode_entry");
})(ProtobufDecodeProgrammer || (ProtobufDecodeProgrammer = {}));
var PREFIX = "$pd";
var READER = /* @__PURE__ */ __name(() => ts.factory.createIdentifier("reader"), "READER");

export {
  ProtobufDecodeProgrammer
};
//# sourceMappingURL=chunk-HHWDMPJO.mjs.map