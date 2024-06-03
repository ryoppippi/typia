import {
  CloneJoiner
} from "./chunk-JDSPQ5RI.mjs";
import {
  IsProgrammer
} from "./chunk-3IJJRDF3.mjs";
import {
  wrap_metadata_rest_tuple
} from "./chunk-D47OFVHS.mjs";
import {
  decode_union_object
} from "./chunk-IFQ63WHH.mjs";
import {
  FeatureProgrammer
} from "./chunk-6G4VAABV.mjs";
import {
  UnionExplorer
} from "./chunk-5BI4D63L.mjs";
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
  Metadata
} from "./chunk-RD644GUB.mjs";
import {
  MetadataArray
} from "./chunk-HXFVCUNO.mjs";
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

// src/programmers/misc/MiscCloneProgrammer.ts
import ts from "typescript";
var MiscCloneProgrammer;
(function(MiscCloneProgrammer2) {
  MiscCloneProgrammer2.write = (project) => (modulo) => {
    const importer = new FunctionImporter(modulo.getText());
    return FeatureProgrammer.write(project)({
      ...configure(project)(importer),
      addition: /* @__PURE__ */ __name((collection) => [
        ...IsProgrammer.write_function_statements(project)(importer)(collection),
        ...importer.declare(modulo)
      ], "addition")
    })(importer);
  };
  const write_array_functions = /* @__PURE__ */ __name((config) => (importer) => (collection) => collection.arrays().filter((a) => a.recursive).map((type, i) => StatementFactory.constant(`${config.prefix}a${i}`, ts.factory.createArrowFunction(void 0, void 0, FeatureProgrammer.parameterDeclarations(config)(TypeFactory.keyword("any"))(ts.factory.createIdentifier("input")), TypeFactory.keyword("any"), void 0, decode_array_inline(config)(importer)(ts.factory.createIdentifier("input"), MetadataArray.create({
    type,
    tags: []
  }), {
    tracable: config.trace,
    source: "function",
    from: "array",
    postfix: ""
  })))), "write_array_functions");
  const write_tuple_functions = /* @__PURE__ */ __name((project) => (config) => (importer) => (collection) => collection.tuples().filter((t) => t.recursive).map((tuple, i) => StatementFactory.constant(`${config.prefix}t${i}`, ts.factory.createArrowFunction(void 0, void 0, FeatureProgrammer.parameterDeclarations(config)(TypeFactory.keyword("any"))(ts.factory.createIdentifier("input")), TypeFactory.keyword("any"), void 0, decode_tuple_inline(project)(config)(importer)(ts.factory.createIdentifier("input"), tuple, {
    tracable: config.trace,
    source: "function",
    from: "array",
    postfix: ""
  })))), "write_tuple_functions");
  const decode = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, meta, explore) => {
    if (meta.any || meta.arrays.some((a) => a.type.value.any) || meta.tuples.some((t) => !!t.type.elements.length && t.type.elements.every((e) => e.any))) return ts.factory.createCallExpression(importer.use("any"), void 0, [
      input
    ]);
    const unions = [];
    if (meta.functional) unions.push({
      type: "functional",
      is: /* @__PURE__ */ __name(() => ts.factory.createStrictEquality(ts.factory.createStringLiteral("function"), ts.factory.createTypeOfExpression(input)), "is"),
      value: /* @__PURE__ */ __name(() => ts.factory.createIdentifier("undefined"), "value")
    });
    for (const tuple of meta.tuples) unions.push({
      type: "tuple",
      is: /* @__PURE__ */ __name(() => IsProgrammer.decode(project)(importer)(input, (() => {
        const partial = Metadata.initialize();
        partial.tuples.push(tuple);
        return partial;
      })(), explore), "is"),
      value: /* @__PURE__ */ __name(() => decode_tuple(project)(config)(importer)(input, tuple, explore), "value")
    });
    if (meta.arrays.length) unions.push({
      type: "array",
      is: /* @__PURE__ */ __name(() => ExpressionFactory.isArray(input), "is"),
      value: /* @__PURE__ */ __name(() => explore_arrays(project)(config)(importer)(input, meta.arrays, {
        ...explore,
        from: "array"
      }), "value")
    });
    if (meta.sets.length) unions.push({
      type: "set",
      is: /* @__PURE__ */ __name(() => ExpressionFactory.isInstanceOf("Set")(input), "is"),
      value: /* @__PURE__ */ __name(() => explore_sets(project)(config)(importer)(input, meta.sets, {
        ...explore,
        from: "array"
      }), "value")
    });
    if (meta.maps.length) unions.push({
      type: "map",
      is: /* @__PURE__ */ __name(() => ExpressionFactory.isInstanceOf("Map")(input), "is"),
      value: /* @__PURE__ */ __name(() => explore_maps(project)(config)(importer)(input, meta.maps, {
        ...explore,
        from: "array"
      }), "value")
    });
    for (const native of meta.natives) unions.push({
      type: "native",
      is: /* @__PURE__ */ __name(() => ExpressionFactory.isInstanceOf(native)(input), "is"),
      value: /* @__PURE__ */ __name(() => native === "Boolean" || native === "Number" || native === "String" ? ts.factory.createCallExpression(IdentifierFactory.access(input)("valueOf"), void 0, void 0) : decode_native(native)(input), "value")
    });
    if (meta.objects.length) unions.push({
      type: "object",
      is: /* @__PURE__ */ __name(() => ExpressionFactory.isObject({
        checkNull: true,
        checkArray: false
      })(input), "is"),
      value: /* @__PURE__ */ __name(() => explore_objects(config)(importer)(input, meta, {
        ...explore,
        from: "object"
      }), "value")
    });
    let last = input;
    for (const u of unions.reverse()) last = ts.factory.createConditionalExpression(u.is(), void 0, u.value(), void 0, last);
    return ts.factory.createAsExpression(last, TypeFactory.keyword("any"));
  }, "decode");
  const decode_object = /* @__PURE__ */ __name((importer) => FeatureProgrammer.decode_object({
    trace: false,
    path: false,
    prefix: PREFIX
  })(importer), "decode_object");
  const decode_array = /* @__PURE__ */ __name((config) => (importer) => (input, array, explore) => array.type.recursive ? ts.factory.createCallExpression(ts.factory.createIdentifier(importer.useLocal(`${config.prefix}a${array.type.index}`)), void 0, FeatureProgrammer.argumentsArray(config)({
    ...explore,
    source: "function",
    from: "array"
  })(input)) : decode_array_inline(config)(importer)(input, array, explore), "decode_array");
  const decode_array_inline = /* @__PURE__ */ __name((config) => (importer) => (input, array, explore) => FeatureProgrammer.decode_array(config)(importer)(CloneJoiner.array)(input, array, explore), "decode_array_inline");
  const decode_tuple = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, tuple, explore) => tuple.type.recursive ? ts.factory.createCallExpression(ts.factory.createIdentifier(importer.useLocal(`${config.prefix}t${tuple.type.index}`)), void 0, FeatureProgrammer.argumentsArray(config)({
    ...explore,
    source: "function"
  })(input)) : decode_tuple_inline(project)(config)(importer)(input, tuple.type, explore), "decode_tuple");
  const decode_tuple_inline = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, tuple, explore) => {
    const children = tuple.elements.filter((m) => m.rest === null).map((elem, index) => decode(project)(config)(importer)(ts.factory.createElementAccessExpression(input, index), elem, {
      ...explore,
      from: "array",
      postfix: explore.postfix.length ? `${explore.postfix.slice(0, -1)}[${index}]"` : `"[${index}]"`
    }));
    const rest = (() => {
      if (tuple.elements.length === 0) return null;
      const last = tuple.elements.at(-1);
      const rest2 = last.rest;
      if (rest2 === null) return null;
      return decode(project)(config)(importer)(ts.factory.createCallExpression(IdentifierFactory.access(input)("slice"), void 0, [
        ExpressionFactory.number(tuple.elements.length - 1)
      ]), wrap_metadata_rest_tuple(tuple.elements.at(-1).rest), {
        ...explore,
        start: tuple.elements.length - 1
      });
    })();
    return CloneJoiner.tuple(children, rest);
  }, "decode_tuple_inline");
  const decode_native = /* @__PURE__ */ __name((type) => (input) => type === "Date" || type === "Uint8Array" || type === "Uint8ClampedArray" || type === "Uint16Array" || type === "Uint32Array" || type === "BigUint64Array" || type === "Int8Array" || type === "Int16Array" || type === "Int32Array" || type === "BigInt64Array" || type === "Float32Array" || type === "Float64Array" ? decode_native_copyable(type)(input) : type === "ArrayBuffer" || type === "SharedArrayBuffer" ? decode_native_buffer(type)(input) : type === "DataView" ? decode_native_data_view(input) : ts.factory.createCallExpression(ts.factory.createIdentifier(type), void 0, []), "decode_native");
  const decode_native_copyable = /* @__PURE__ */ __name((type) => (input) => ts.factory.createNewExpression(ts.factory.createIdentifier(type), void 0, [
    input
  ]), "decode_native_copyable");
  const decode_native_buffer = /* @__PURE__ */ __name((type) => (input) => ExpressionFactory.selfCall(ts.factory.createBlock([
    StatementFactory.constant("buffer", ts.factory.createNewExpression(ts.factory.createIdentifier(type), void 0, [
      IdentifierFactory.access(input)("byteLength")
    ])),
    ts.factory.createExpressionStatement(ts.factory.createCallExpression(IdentifierFactory.access(ts.factory.createNewExpression(ts.factory.createIdentifier("Uint8Array"), void 0, [
      ts.factory.createIdentifier("buffer")
    ]))("set"), void 0, [
      ts.factory.createNewExpression(ts.factory.createIdentifier("Uint8Array"), void 0, [
        input
      ])
    ])),
    ts.factory.createReturnStatement(ts.factory.createIdentifier("buffer"))
  ], true)), "decode_native_buffer");
  const decode_native_data_view = /* @__PURE__ */ __name((input) => ts.factory.createNewExpression(ts.factory.createIdentifier("DataView"), void 0, [
    IdentifierFactory.access(input)("buffer")
  ]), "decode_native_data_view");
  const explore_sets = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, sets, explore) => ts.factory.createCallExpression(UnionExplorer.set({
    checker: IsProgrammer.decode(project)(importer),
    decoder: /* @__PURE__ */ __name((input2, array, explore2) => ts.factory.createNewExpression(ts.factory.createIdentifier("Set"), [
      TypeFactory.keyword("any")
    ], [
      decode_array(config)(importer)(input2, array, explore2)
    ]), "decoder"),
    empty: ts.factory.createNewExpression(ts.factory.createIdentifier("Set"), [
      TypeFactory.keyword("any")
    ], []),
    success: ts.factory.createTrue(),
    failure: /* @__PURE__ */ __name((input2, expected) => create_throw_error(importer)(expected)(input2), "failure")
  })([])(input, sets, explore), void 0, void 0), "explore_sets");
  const explore_maps = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, maps, explore) => ts.factory.createCallExpression(UnionExplorer.map({
    checker: /* @__PURE__ */ __name((top, entry, explore2) => {
      const func = IsProgrammer.decode(project)(importer);
      return ts.factory.createLogicalAnd(func(ts.factory.createElementAccessExpression(top, 0), entry[0], {
        ...explore2,
        postfix: `${explore2.postfix}[0]`
      }), func(ts.factory.createElementAccessExpression(top, 1), entry[1], {
        ...explore2,
        postfix: `${explore2.postfix}[1]`
      }));
    }, "checker"),
    decoder: /* @__PURE__ */ __name((input2, array, explore2) => ts.factory.createNewExpression(ts.factory.createIdentifier("Map"), [
      TypeFactory.keyword("any"),
      TypeFactory.keyword("any")
    ], [
      decode_array(config)(importer)(input2, array, explore2)
    ]), "decoder"),
    empty: ts.factory.createNewExpression(ts.factory.createIdentifier("Map"), [
      TypeFactory.keyword("any"),
      TypeFactory.keyword("any")
    ], []),
    success: ts.factory.createTrue(),
    failure: /* @__PURE__ */ __name((input2, expected) => create_throw_error(importer)(expected)(input2), "failure")
  })([])(input, maps, explore), void 0, void 0), "explore_maps");
  const explore_objects = /* @__PURE__ */ __name((config) => (importer) => (input, meta, explore) => {
    if (meta.objects.length === 1) return decode_object(importer)(input, meta.objects[0], explore);
    return ts.factory.createCallExpression(ts.factory.createIdentifier(importer.useLocal(`${PREFIX}u${meta.union_index}`)), void 0, FeatureProgrammer.argumentsArray(config)(explore)(input));
  }, "explore_objects");
  const explore_arrays = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, elements, explore) => explore_array_like_union_types(config)(importer)(UnionExplorer.array({
    checker: IsProgrammer.decode(project)(importer),
    decoder: decode_array(config)(importer),
    empty: ts.factory.createIdentifier("[]"),
    success: ts.factory.createTrue(),
    failure: /* @__PURE__ */ __name((input2, expected) => create_throw_error(importer)(expected)(input2), "failure")
  }))(input, elements, explore), "explore_arrays");
  const explore_array_like_union_types = /* @__PURE__ */ __name((config) => (importer) => (factory) => (input, elements, explore) => {
    const arrow = /* @__PURE__ */ __name((parameters) => (explore2) => (input2) => factory(parameters)(input2, elements, explore2), "arrow");
    if (elements.every((e) => e.type.recursive === false)) ts.factory.createCallExpression(arrow([])(explore)(input), void 0, []);
    explore = {
      ...explore,
      source: "function",
      from: "array"
    };
    return ts.factory.createCallExpression(ts.factory.createIdentifier(importer.emplaceUnion(config.prefix, elements.map((e) => e.type.name).join(" | "), () => arrow(FeatureProgrammer.parameterDeclarations(config)(TypeFactory.keyword("any"))(ts.factory.createIdentifier("input")))({
      ...explore,
      postfix: ""
    })(ts.factory.createIdentifier("input")))), void 0, FeatureProgrammer.argumentsArray(config)(explore)(input));
  }, "explore_array_like_union_types");
  const PREFIX = "$c";
  const configure = /* @__PURE__ */ __name((project) => (importer) => {
    const config = {
      types: {
        input: /* @__PURE__ */ __name((type, name) => ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type)), "input"),
        output: /* @__PURE__ */ __name((type, name) => ts.factory.createImportTypeNode(ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral("typia")), void 0, ts.factory.createIdentifier("Resolved"), [
          ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type))
        ], false), "output")
      },
      prefix: PREFIX,
      trace: false,
      path: false,
      initializer,
      decoder: /* @__PURE__ */ __name(() => decode(project)(config)(importer), "decoder"),
      objector: {
        checker: /* @__PURE__ */ __name(() => IsProgrammer.decode(project)(importer), "checker"),
        decoder: /* @__PURE__ */ __name(() => decode_object(importer), "decoder"),
        joiner: CloneJoiner.object,
        unionizer: decode_union_object(IsProgrammer.decode_object(project)(importer))(decode_object(importer))((exp) => exp)((input, expected) => create_throw_error(importer)(expected)(input)),
        failure: /* @__PURE__ */ __name((input, expected) => create_throw_error(importer)(expected)(input), "failure")
      },
      generator: {
        arrays: /* @__PURE__ */ __name(() => write_array_functions(config)(importer), "arrays"),
        tuples: /* @__PURE__ */ __name(() => write_tuple_functions(project)(config)(importer), "tuples")
      }
    };
    return config;
  }, "configure");
  const initializer = /* @__PURE__ */ __name((project) => (importer) => (type) => {
    const collection = new MetadataCollection();
    const result = MetadataFactory.analyze(project.checker, project.context)({
      escape: false,
      constant: true,
      absorb: true,
      validate: /* @__PURE__ */ __name((meta) => {
        const output = [];
        if (meta.natives.some((n) => n === "WeakSet")) output.push("unable to clone WeakSet");
        else if (meta.natives.some((n) => n === "WeakMap")) output.push("unable to clone WeakMap");
        return output;
      }, "validate")
    })(collection)(type);
    if (result.success === false) throw TransformerError.from(`typia.misc.${importer.method}`)(result.errors);
    return [
      collection,
      result.data
    ];
  }, "initializer");
  const create_throw_error = /* @__PURE__ */ __name((importer) => (expected) => (value) => ts.factory.createExpressionStatement(ts.factory.createCallExpression(importer.use("throws"), [], [
    ts.factory.createObjectLiteralExpression([
      ts.factory.createPropertyAssignment("expected", ts.factory.createStringLiteral(expected)),
      ts.factory.createPropertyAssignment("value", value)
    ], true)
  ])), "create_throw_error");
})(MiscCloneProgrammer || (MiscCloneProgrammer = {}));

export {
  MiscCloneProgrammer
};
//# sourceMappingURL=chunk-QTJHC5AD.mjs.map