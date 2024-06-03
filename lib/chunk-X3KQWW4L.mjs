import {
  IsProgrammer
} from "./chunk-3IJJRDF3.mjs";
import {
  decode_union_object
} from "./chunk-IFQ63WHH.mjs";
import {
  UnionPredicator
} from "./chunk-IM4PWYNS.mjs";
import {
  FunctionImporter
} from "./chunk-5TRLONIA.mjs";
import {
  NumericRangeFactory
} from "./chunk-EUHG263Y.mjs";
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
  ProtobufWire
} from "./chunk-XTLF3GSY.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/protobuf/ProtobufEncodeProgrammer.ts
import ts from "typescript";
var ProtobufEncodeProgrammer;
(function(ProtobufEncodeProgrammer2) {
  ProtobufEncodeProgrammer2.write = (project) => (modulo) => (type, name) => {
    const importer = new FunctionImporter(modulo.getText());
    const collection = new MetadataCollection();
    const meta = ProtobufFactory.metadata(modulo.getText())(project.checker, project.context)(collection)(type);
    const callEncoder = /* @__PURE__ */ __name((writer) => (factory) => StatementFactory.constant(writer, ts.factory.createCallExpression(ts.factory.createIdentifier("encoder"), void 0, [
      factory
    ])), "callEncoder");
    const block = [
      StatementFactory.constant("encoder", write_encoder(project)(importer)(collection)(meta)),
      callEncoder("sizer")(ts.factory.createNewExpression(importer.use("Sizer"), void 0, [])),
      callEncoder("writer")(ts.factory.createNewExpression(importer.use("Writer"), void 0, [
        ts.factory.createIdentifier("sizer")
      ])),
      ts.factory.createReturnStatement(ts.factory.createCallExpression(IdentifierFactory.access(WRITER())("buffer"), void 0, void 0))
    ];
    return ts.factory.createArrowFunction(void 0, void 0, [
      IdentifierFactory.parameter("input", ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type)))
    ], ts.factory.createTypeReferenceNode("Uint8Array"), void 0, ts.factory.createBlock([
      ...importer.declare(modulo, false),
      ...block
    ], true));
  };
  const write_encoder = /* @__PURE__ */ __name((project) => (importer) => (collection) => (meta) => {
    const functors = collection.objects().filter((obj) => ProtobufUtil.isStaticObject(obj)).map((obj) => StatementFactory.constant(`${PREFIX}o${obj.index}`, write_object_function(project)(importer)(ts.factory.createIdentifier("input"), obj, {
      source: "function",
      from: "object",
      tracable: false,
      postfix: ""
    })));
    const main = decode(project)(importer)(null)(ts.factory.createIdentifier("input"), meta, {
      source: "top",
      from: "top",
      tracable: false,
      postfix: ""
    });
    return ts.factory.createArrowFunction(void 0, void 0, [
      IdentifierFactory.parameter("writer")
    ], TypeFactory.keyword("any"), void 0, ts.factory.createBlock([
      ...importer.declareUnions(),
      ...functors,
      ...IsProgrammer.write_function_statements(project)(importer)(collection),
      ...main.statements,
      ts.factory.createReturnStatement(ts.factory.createIdentifier("writer"))
    ], true));
  }, "write_encoder");
  const write_object_function = /* @__PURE__ */ __name((project) => (importer) => (input, obj, explore) => {
    let index = 1;
    const body = obj.properties.map((p) => {
      const block = decode(project)(importer)(index)(IdentifierFactory.access(input)(p.key.getSoleLiteral()), p.value, explore);
      index += ProtobufUtil.size(p.value);
      return [
        ts.factory.createExpressionStatement(ts.factory.createIdentifier(`// property "${p.key.getSoleLiteral()}"`)),
        ...block.statements
      ];
    }).flat();
    return ts.factory.createArrowFunction(void 0, void 0, [
      IdentifierFactory.parameter("input")
    ], TypeFactory.keyword("any"), void 0, ts.factory.createBlock(body, true));
  }, "write_object_function");
  const decode = /* @__PURE__ */ __name((project) => (importer) => (index) => (input, meta, explore) => {
    const wrapper = meta.isRequired() && meta.nullable === false ? (block) => block : meta.isRequired() === false && meta.nullable === true ? (block) => ts.factory.createBlock([
      ts.factory.createIfStatement(ts.factory.createLogicalAnd(ts.factory.createStrictInequality(ts.factory.createIdentifier("undefined"), input), ts.factory.createStrictInequality(ts.factory.createNull(), input)), block)
    ], true) : meta.isRequired() === false ? (block) => ts.factory.createBlock([
      ts.factory.createIfStatement(ts.factory.createStrictInequality(ts.factory.createIdentifier("undefined"), input), block)
    ], true) : (block) => ts.factory.createBlock([
      ts.factory.createIfStatement(ts.factory.createStrictInequality(ts.factory.createNull(), input), block)
    ], true);
    const unions = [];
    const numbers = ProtobufUtil.getNumbers(meta);
    const bigints = ProtobufUtil.getBigints(meta);
    for (const atom of ProtobufUtil.getAtomics(meta)) if (atom === "bool") unions.push({
      type: "bool",
      is: /* @__PURE__ */ __name(() => ts.factory.createStrictEquality(ts.factory.createStringLiteral("boolean"), ts.factory.createTypeOfExpression(input)), "is"),
      value: /* @__PURE__ */ __name((index2) => decode_bool(index2)(input), "value")
    });
    else if (atom === "int32" || atom === "uint32" || atom === "float" || atom === "double") unions.push(decode_number(numbers)(atom)(input));
    else if (atom === "int64" || atom === "uint64") if (numbers.some((n) => n === atom)) unions.push(decode_number(numbers)(atom)(input));
    else unions.push(decode_bigint(bigints)(atom)(input));
    else if (atom === "string") unions.push({
      type: "string",
      is: /* @__PURE__ */ __name(() => ts.factory.createStrictEquality(ts.factory.createStringLiteral("string"), ts.factory.createTypeOfExpression(input)), "is"),
      value: /* @__PURE__ */ __name((index2) => decode_bytes("string")(index2)(input), "value")
    });
    if (meta.natives.length) unions.push({
      type: "bytes",
      is: /* @__PURE__ */ __name(() => ExpressionFactory.isInstanceOf("Uint8Array")(input), "is"),
      value: /* @__PURE__ */ __name((index2) => decode_bytes("bytes")(index2)(input), "value")
    });
    if (meta.arrays.length) unions.push({
      type: "array",
      is: /* @__PURE__ */ __name(() => ExpressionFactory.isArray(input), "is"),
      value: /* @__PURE__ */ __name((index2) => decode_array(project)(importer)(index2)(input, meta.arrays[0], {
        ...explore,
        from: "array"
      }), "value")
    });
    if (meta.maps.length) unions.push({
      type: "map",
      is: /* @__PURE__ */ __name(() => ExpressionFactory.isInstanceOf("Map")(input), "is"),
      value: /* @__PURE__ */ __name((index2) => decode_map(project)(importer)(index2)(input, meta.maps[0], {
        ...explore,
        from: "array"
      }), "value")
    });
    if (meta.objects.length) unions.push({
      type: "object",
      is: /* @__PURE__ */ __name(() => ExpressionFactory.isObject({
        checkNull: true,
        checkArray: false
      })(input), "is"),
      value: /* @__PURE__ */ __name((index2) => explore_objects(project)(importer)(0)(index2)(input, meta.objects, {
        ...explore,
        from: "object"
      }), "value")
    });
    if (unions.length === 1) return wrapper(unions[0].value(index));
    else return wrapper(iterate(importer)(index)(unions)(meta.getName())(input));
  }, "decode");
  const iterate = /* @__PURE__ */ __name((importer) => (index) => (unions) => (expected) => (input) => ts.factory.createBlock([
    unions.map((u, i) => ts.factory.createIfStatement(u.is(), u.value(index ? index + i : null), i === unions.length - 1 ? create_throw_error(importer)(expected)(input) : void 0)).reverse().reduce((a, b) => ts.factory.createIfStatement(b.expression, b.thenStatement, a))
  ], true), "iterate");
  const decode_map = /* @__PURE__ */ __name((project) => (importer) => (index) => (input, map, explore) => {
    const each = [
      ts.factory.createExpressionStatement(decode_tag(ProtobufWire.LEN)(index)),
      ts.factory.createExpressionStatement(ts.factory.createCallExpression(IdentifierFactory.access(WRITER())("fork"), void 0, void 0)),
      ...decode(project)(importer)(1)(ts.factory.createIdentifier("key"), map.key, explore).statements,
      ...decode(project)(importer)(2)(ts.factory.createIdentifier("value"), map.value, explore).statements,
      ts.factory.createExpressionStatement(ts.factory.createCallExpression(IdentifierFactory.access(WRITER())("ldelim"), void 0, void 0))
    ];
    return ts.factory.createBlock([
      ts.factory.createForOfStatement(void 0, StatementFactory.entry("key")("value"), input, ts.factory.createBlock(each))
    ], true);
  }, "decode_map");
  const decode_object = /* @__PURE__ */ __name((project) => (importer) => (index) => (input, object, explore) => {
    const top = object.properties[0];
    if (top.key.isSoleLiteral() === false) return decode_map(project)(importer)(index)(ts.factory.createCallExpression(ts.factory.createIdentifier("Object.entries"), [], [
      input
    ]), MetadataProperty.create({
      ...top,
      key: (() => {
        const key = Metadata.initialize();
        key.atomics.push(MetadataAtomic.create({
          type: "string",
          tags: []
        }));
        return key;
      })()
    }), explore);
    return ts.factory.createBlock([
      ts.factory.createIdentifier(`//${index !== null ? ` ${index} -> ` : ""}${object.name}`),
      ...index !== null ? [
        decode_tag(ProtobufWire.LEN)(index),
        ts.factory.createCallExpression(IdentifierFactory.access(WRITER())("fork"), void 0, void 0)
      ] : [],
      ts.factory.createCallExpression(ts.factory.createIdentifier(importer.useLocal(`${PREFIX}o${object.index}`)), [], [
        input
      ]),
      ...index !== null ? [
        ts.factory.createCallExpression(IdentifierFactory.access(WRITER())("ldelim"), void 0, void 0)
      ] : []
    ].map((expr) => ts.factory.createExpressionStatement(expr)), true);
  }, "decode_object");
  const decode_array = /* @__PURE__ */ __name((project) => (importer) => (index) => (input, array, explore) => {
    const wire = get_standalone_wire(array.type.value);
    const forLoop = /* @__PURE__ */ __name((index2) => ts.factory.createForOfStatement(void 0, ts.factory.createVariableDeclarationList([
      ts.factory.createVariableDeclaration("elem")
    ], ts.NodeFlags.Const), input, decode(project)(importer)(index2)(ts.factory.createIdentifier("elem"), array.type.value, explore)), "forLoop");
    const length = /* @__PURE__ */ __name((block) => ts.factory.createBlock([
      ts.factory.createIfStatement(ts.factory.createStrictInequality(ExpressionFactory.number(0), IdentifierFactory.access(input)("length")), block)
    ], true), "length");
    if (wire === ProtobufWire.LEN) return length(ts.factory.createBlock([
      forLoop(index)
    ], true));
    return length(ts.factory.createBlock([
      ts.factory.createExpressionStatement(decode_tag(ProtobufWire.LEN)(index)),
      ts.factory.createExpressionStatement(ts.factory.createCallExpression(IdentifierFactory.access(WRITER())("fork"), void 0, void 0)),
      forLoop(null),
      ts.factory.createExpressionStatement(ts.factory.createCallExpression(IdentifierFactory.access(WRITER())("ldelim"), void 0, void 0))
    ], true));
  }, "decode_array");
  const decode_bool = /* @__PURE__ */ __name((index) => (input) => ts.factory.createBlock([
    ...index !== null ? [
      decode_tag(ProtobufWire.VARIANT)(index)
    ] : [],
    ts.factory.createCallExpression(IdentifierFactory.access(WRITER())("bool"), void 0, [
      input
    ])
  ].map((exp) => ts.factory.createExpressionStatement(exp)), true), "decode_bool");
  const decode_number = /* @__PURE__ */ __name((candidates) => (type) => (input) => ({
    type,
    is: /* @__PURE__ */ __name(() => candidates.length === 1 ? ts.factory.createStrictEquality(ts.factory.createStringLiteral("number"), ts.factory.createTypeOfExpression(input)) : ts.factory.createLogicalAnd(ts.factory.createStrictEquality(ts.factory.createStringLiteral("number"), ts.factory.createTypeOfExpression(input)), NumericRangeFactory.number(type)(input)), "is"),
    value: /* @__PURE__ */ __name((index) => ts.factory.createBlock([
      ...index !== null ? [
        decode_tag(get_numeric_wire(type))(index)
      ] : [],
      ts.factory.createCallExpression(IdentifierFactory.access(WRITER())(type), void 0, [
        input
      ])
    ].map((exp) => ts.factory.createExpressionStatement(exp)), true), "value")
  }), "decode_number");
  const decode_bigint = /* @__PURE__ */ __name((candidates) => (type) => (input) => ({
    type,
    is: /* @__PURE__ */ __name(() => candidates.length === 1 ? ts.factory.createStrictEquality(ts.factory.createStringLiteral("bigint"), ts.factory.createTypeOfExpression(input)) : ts.factory.createLogicalAnd(ts.factory.createStrictEquality(ts.factory.createStringLiteral("bigint"), ts.factory.createTypeOfExpression(input)), NumericRangeFactory.bigint(type)(input)), "is"),
    value: /* @__PURE__ */ __name((index) => ts.factory.createBlock([
      ...index !== null ? [
        decode_tag(ProtobufWire.VARIANT)(index)
      ] : [],
      ts.factory.createCallExpression(IdentifierFactory.access(WRITER())(type), void 0, [
        input
      ])
    ].map((exp) => ts.factory.createExpressionStatement(exp)), true), "value")
  }), "decode_bigint");
  const decode_bytes = /* @__PURE__ */ __name((method) => (index) => (input) => ts.factory.createBlock([
    decode_tag(ProtobufWire.LEN)(index),
    ts.factory.createCallExpression(IdentifierFactory.access(WRITER())(method), void 0, [
      input
    ])
  ].map((expr) => ts.factory.createExpressionStatement(expr)), true), "decode_bytes");
  const decode_tag = /* @__PURE__ */ __name((wire) => (index) => ts.factory.createCallExpression(IdentifierFactory.access(WRITER())("uint32"), void 0, [
    ExpressionFactory.number(index << 3 | wire)
  ]), "decode_tag");
  const get_standalone_wire = /* @__PURE__ */ __name((meta) => {
    if (meta.arrays.length || meta.objects.length || meta.maps.length || meta.natives.length) return ProtobufWire.LEN;
    const v = ProtobufUtil.getAtomics(meta)[0];
    if (v === "string") return ProtobufWire.LEN;
    else if (v === "bool" || v === "int32" || v === "uint32" || v === "int64" || v === "uint64") return ProtobufWire.VARIANT;
    else if (v === "float") return ProtobufWire.I32;
    return ProtobufWire.I64;
  }, "get_standalone_wire");
  const get_numeric_wire = /* @__PURE__ */ __name((type) => type === "double" ? ProtobufWire.I64 : type === "float" ? ProtobufWire.I32 : ProtobufWire.VARIANT, "get_numeric_wire");
  const explore_objects = /* @__PURE__ */ __name((project) => (importer) => (level) => (index) => (input, targets, explore, indexes) => {
    if (targets.length === 1) return decode_object(project)(importer)(indexes ? indexes.get(targets[0]) : index)(input, targets[0], explore);
    const expected = `(${targets.map((t) => t.name).join(" | ")})`;
    const specList = UnionPredicator.object(targets);
    indexes ??= new Map(targets.map((t, i) => [
      t,
      index + i
    ]));
    if (specList.length === 0) {
      const condition2 = decode_union_object(IsProgrammer.decode_object(project)(importer))((i, o, e) => ExpressionFactory.selfCall(decode_object(project)(importer)(indexes.get(o))(i, o, e)))((expr) => expr)((value, expected2) => create_throw_error(importer)(expected2)(value))(input, targets, explore);
      return StatementFactory.block(condition2);
    }
    const remained = targets.filter((t) => specList.find((s) => s.object === t) === void 0);
    const condition = specList.filter((spec) => spec.property.key.getSoleLiteral() !== null).map((spec, i, array) => {
      const key = spec.property.key.getSoleLiteral();
      const accessor = IdentifierFactory.access(input)(key);
      const pred = spec.neighbour ? IsProgrammer.decode(project)(importer)(accessor, spec.property.value, {
        ...explore,
        tracable: false,
        postfix: IdentifierFactory.postfix(key)
      }) : ExpressionFactory.isRequired(accessor);
      return ts.factory.createIfStatement(pred, ts.factory.createExpressionStatement(ExpressionFactory.selfCall(decode_object(project)(importer)(indexes.get(spec.object))(input, spec.object, explore))), i === array.length - 1 ? remained.length ? ts.factory.createExpressionStatement(ExpressionFactory.selfCall(explore_objects(project)(importer)(level + 1)(index)(input, remained, explore, indexes))) : create_throw_error(importer)(expected)(input) : void 0);
    }).reverse().reduce((a, b) => ts.factory.createIfStatement(b.expression, b.thenStatement, a));
    return ts.factory.createBlock([
      condition
    ], true);
  }, "explore_objects");
  const PREFIX = "$pe";
  const create_throw_error = /* @__PURE__ */ __name((importer) => (expected) => (value) => ts.factory.createExpressionStatement(ts.factory.createCallExpression(importer.use("throws"), [], [
    ts.factory.createObjectLiteralExpression([
      ts.factory.createPropertyAssignment("expected", ts.factory.createStringLiteral(expected)),
      ts.factory.createPropertyAssignment("value", value)
    ], true)
  ])), "create_throw_error");
})(ProtobufEncodeProgrammer || (ProtobufEncodeProgrammer = {}));
var WRITER = /* @__PURE__ */ __name(() => ts.factory.createIdentifier("writer"), "WRITER");

export {
  ProtobufEncodeProgrammer
};
//# sourceMappingURL=chunk-X3KQWW4L.mjs.map