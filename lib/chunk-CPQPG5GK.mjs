import {
  StringifyJoiner
} from "./chunk-U4AZZR7O.mjs";
import {
  StringifyPredicator
} from "./chunk-N3MDAUGP.mjs";
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
  check_native
} from "./chunk-HVTXICG4.mjs";
import {
  OptionPredicator
} from "./chunk-TACBWK3G.mjs";
import {
  FeatureProgrammer
} from "./chunk-6G4VAABV.mjs";
import {
  feature_object_entries
} from "./chunk-3T5PTULG.mjs";
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
  ValueFactory
} from "./chunk-WQG22VFQ.mjs";
import {
  JsonMetadataFactory
} from "./chunk-RCVN56BI.mjs";
import {
  AtomicPredicator
} from "./chunk-EPGYGA2I.mjs";
import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";
import {
  Metadata
} from "./chunk-RD644GUB.mjs";
import {
  MetadataAtomic
} from "./chunk-X7O4QE24.mjs";
import {
  MetadataArray
} from "./chunk-HXFVCUNO.mjs";
import {
  ArrayUtil
} from "./chunk-BDIZKMW2.mjs";
import {
  ExpressionFactory
} from "./chunk-TJUGWBRO.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/json/JsonStringifyProgrammer.ts
import ts from "typescript";
var JsonStringifyProgrammer;
(function(JsonStringifyProgrammer2) {
  JsonStringifyProgrammer2.write = (project) => (modulo) => {
    const importer = new FunctionImporter(modulo.getText());
    const config = configure(project)(importer);
    return FeatureProgrammer.write(project)({
      ...config,
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
    if (meta.any === true) return wrap_required(input, meta, explore)(wrap_functional(input, meta, explore)(ts.factory.createCallExpression(ts.factory.createIdentifier("JSON.stringify"), void 0, [
      input
    ])));
    const size = meta.size();
    if (size === 0 && (meta.isRequired() === false || meta.nullable === true)) {
      if (meta.isRequired() === false && meta.nullable === true) return explore.from === "array" ? ts.factory.createStringLiteral("null") : ts.factory.createConditionalExpression(ts.factory.createStrictEquality(ts.factory.createNull(), input), void 0, ts.factory.createStringLiteral("null"), void 0, ts.factory.createIdentifier("undefined"));
      else if (meta.isRequired() === false) return explore.from === "array" ? ts.factory.createStringLiteral("null") : ts.factory.createIdentifier("undefined");
      else return ts.factory.createStringLiteral("null");
    }
    const unions = [];
    if (meta.escaped !== null) unions.push({
      type: "resolved",
      is: meta.escaped.original.size() === 1 && meta.escaped.original.natives[0] === "Date" ? () => check_native("Date")(input) : () => IsProgrammer.decode_to_json(false)(input),
      value: /* @__PURE__ */ __name(() => decode_to_json(project)(config)(importer)(input, meta.escaped.returns, explore), "value")
    });
    else if (meta.functional === true) unions.push({
      type: "functional",
      is: /* @__PURE__ */ __name(() => IsProgrammer.decode_functional(input), "is"),
      value: /* @__PURE__ */ __name(() => decode_functional(explore), "value")
    });
    if (meta.templates.length || ArrayUtil.has(meta.constants, (c) => c.type === "string")) {
      if (AtomicPredicator.template(meta)) {
        const partial = Metadata.initialize();
        partial.atomics.push(MetadataAtomic.create({
          type: "string",
          tags: []
        })), unions.push({
          type: "template literal",
          is: /* @__PURE__ */ __name(() => IsProgrammer.decode(project)(importer)(input, partial, explore), "is"),
          value: /* @__PURE__ */ __name(() => decode_atomic(project)(importer)(input, "string", explore), "value")
        });
      }
    }
    for (const constant of meta.constants) if (AtomicPredicator.constant(meta)(constant.type) === false) continue;
    else if (constant.type !== "string") unions.push({
      type: "atomic",
      is: /* @__PURE__ */ __name(() => IsProgrammer.decode(project)(importer)(input, (() => {
        const partial = Metadata.initialize();
        partial.atomics.push(MetadataAtomic.create({
          type: constant.type,
          tags: []
        }));
        return partial;
      })(), explore), "is"),
      value: /* @__PURE__ */ __name(() => decode_atomic(project)(importer)(input, constant.type, explore), "value")
    });
    else if (meta.templates.length === 0) unions.push({
      type: "const string",
      is: /* @__PURE__ */ __name(() => IsProgrammer.decode(project)(importer)(input, (() => {
        const partial = Metadata.initialize();
        partial.atomics.push(MetadataAtomic.create({
          type: "string",
          tags: []
        }));
        return partial;
      })(), explore), "is"),
      value: /* @__PURE__ */ __name(() => decode_constant_string(project)(importer)(input, [
        ...constant.values.map((v) => v.value)
      ], explore), "value")
    });
    for (const a of meta.atomics) if (AtomicPredicator.atomic(meta)(a.type)) unions.push({
      type: "atomic",
      is: /* @__PURE__ */ __name(() => IsProgrammer.decode(project)(importer)(input, (() => {
        const partial = Metadata.initialize();
        partial.atomics.push(a);
        return partial;
      })(), explore), "is"),
      value: /* @__PURE__ */ __name(() => decode_atomic(project)(importer)(input, a.type, explore), "value")
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
    if (meta.arrays.length) {
      const value = meta.arrays.length === 1 ? () => decode_array(config)(importer)(input, meta.arrays[0], {
        ...explore,
        from: "array"
      }) : meta.arrays.some((elem) => elem.type.value.any) ? () => ts.factory.createCallExpression(ts.factory.createIdentifier("JSON.stringify"), void 0, [
        input
      ]) : () => explore_arrays(project)(config)(importer)(input, meta.arrays, {
        ...explore,
        from: "array"
      });
      unions.push({
        type: "array",
        is: /* @__PURE__ */ __name(() => ExpressionFactory.isArray(input), "is"),
        value
      });
    }
    if (meta.natives.length) for (const native of meta.natives) unions.push({
      type: "object",
      is: /* @__PURE__ */ __name(() => check_native(native)(input), "is"),
      value: /* @__PURE__ */ __name(() => AtomicPredicator.native(native) ? decode_atomic(project)(importer)(input, native.toLowerCase(), explore) : ts.factory.createStringLiteral("{}"), "value")
    });
    if (meta.sets.length) unions.push({
      type: "object",
      is: /* @__PURE__ */ __name(() => ExpressionFactory.isInstanceOf("Set")(input), "is"),
      value: /* @__PURE__ */ __name(() => ts.factory.createStringLiteral("{}"), "value")
    });
    if (meta.maps.length) unions.push({
      type: "object",
      is: /* @__PURE__ */ __name(() => ExpressionFactory.isInstanceOf("Map")(input), "is"),
      value: /* @__PURE__ */ __name(() => ts.factory.createStringLiteral("{}"), "value")
    });
    if (meta.objects.length) unions.push({
      type: "object",
      is: /* @__PURE__ */ __name(() => ExpressionFactory.isObject({
        checkNull: true,
        checkArray: meta.objects.some((obj) => obj.properties.every((prop) => !prop.key.isSoleLiteral() || !prop.value.isRequired()))
      })(input), "is"),
      value: /* @__PURE__ */ __name(() => meta.isParentResolved() === false && meta.objects.length === 1 && meta.objects[0]._Is_simple(explore.from === "top" ? 0 : 1) ? (() => {
        const obj = meta.objects[0];
        const entries = feature_object_entries({
          decoder: /* @__PURE__ */ __name(() => decode(project)(config)(importer), "decoder"),
          trace: false,
          path: false
        })(importer)(obj)(ts.factory.createAsExpression(input, TypeFactory.keyword("any")));
        return StringifyJoiner.object(importer)(ts.factory.createAsExpression(input, TypeFactory.keyword("any")), entries);
      })() : explore_objects(config)(importer)(input, meta, {
        ...explore,
        from: "object"
      }), "value")
    });
    const wrapper = /* @__PURE__ */ __name((output) => wrap_required(input, meta, explore)(wrap_nullable(input, meta)(output)), "wrapper");
    if (unions.length === 0) return ts.factory.createCallExpression(ts.factory.createIdentifier("JSON.stringify"), void 0, [
      input
    ]);
    else if (unions.length === 1) return wrapper(unions[0].value());
    return wrapper(ts.factory.createCallExpression(ts.factory.createArrowFunction(void 0, void 0, [], void 0, void 0, iterate(importer, input, unions, meta.getName())), void 0, void 0));
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
  const decode_array_inline = /* @__PURE__ */ __name((config) => (importer) => (input, array, explore) => FeatureProgrammer.decode_array(config)(importer)(StringifyJoiner.array)(input, array, explore), "decode_array_inline");
  const decode_tuple = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, tuple, explore) => tuple.type.recursive ? ts.factory.createCallExpression(ts.factory.createIdentifier(importer.useLocal(`${config.prefix}t${tuple.type.index}`)), void 0, FeatureProgrammer.argumentsArray(config)({
    ...explore,
    source: "function"
  })(input)) : decode_tuple_inline(project)(config)(importer)(input, tuple.type, explore), "decode_tuple");
  const decode_tuple_inline = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, tuple, explore) => {
    const children = tuple.elements.filter((elem) => elem.rest === null).map((elem, index) => decode(project)(config)(importer)(ts.factory.createElementAccessExpression(input, index), elem, {
      ...explore,
      from: "array",
      postfix: explore.postfix.length ? `${explore.postfix.slice(0, -1)}[${index}]"` : `"[${index}]"`
    }));
    const rest = (() => {
      if (tuple.elements.length === 0) return null;
      const last = tuple.elements.at(-1);
      if (last.rest === null) return null;
      const code = decode(project)(config)(importer)(ts.factory.createCallExpression(IdentifierFactory.access(input)("slice"), void 0, [
        ExpressionFactory.number(tuple.elements.length - 1)
      ]), wrap_metadata_rest_tuple(tuple.elements.at(-1).rest), {
        ...explore,
        start: tuple.elements.length - 1
      });
      return ts.factory.createCallExpression(importer.use("rest"), void 0, [
        code
      ]);
    })();
    return StringifyJoiner.tuple(children, rest);
  }, "decode_tuple_inline");
  const decode_atomic = /* @__PURE__ */ __name((project) => (importer) => (input, type, explore) => {
    if (type === "string") return ts.factory.createCallExpression(importer.use("string"), void 0, [
      input
    ]);
    else if (type === "number" && OptionPredicator.numeric(project.options)) input = ts.factory.createCallExpression(importer.use("number"), void 0, [
      input
    ]);
    return explore.from !== "top" ? input : ts.factory.createCallExpression(IdentifierFactory.access(input)("toString"), void 0, void 0);
  }, "decode_atomic");
  const decode_constant_string = /* @__PURE__ */ __name((project) => (importer) => (input, values, explore) => {
    if (values.every((v) => !StringifyPredicator.require_escape(v))) return [
      ts.factory.createStringLiteral('"'),
      input,
      ts.factory.createStringLiteral('"')
    ].reduce((x, y) => ts.factory.createAdd(x, y));
    else return decode_atomic(project)(importer)(input, "string", explore);
  }, "decode_constant_string");
  const decode_to_json = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, resolved, explore) => {
    return decode(project)(config)(importer)(ts.factory.createCallExpression(IdentifierFactory.access(input)("toJSON"), void 0, []), resolved, explore);
  }, "decode_to_json");
  const decode_functional = /* @__PURE__ */ __name((explore) => explore.from === "array" ? ts.factory.createStringLiteral("null") : ts.factory.createIdentifier("undefined"), "decode_functional");
  const explore_objects = /* @__PURE__ */ __name((config) => (importer) => (input, meta, explore) => meta.objects.length === 1 ? decode_object(importer)(input, meta.objects[0], explore) : ts.factory.createCallExpression(ts.factory.createIdentifier(importer.useLocal(`${PREFIX}u${meta.union_index}`)), void 0, FeatureProgrammer.argumentsArray(config)(explore)(input)), "explore_objects");
  const explore_arrays = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, elements, explore) => explore_array_like_union_types(config)(importer)(UnionExplorer.array({
    checker: IsProgrammer.decode(project)(importer),
    decoder: decode_array(config)(importer),
    empty: ts.factory.createStringLiteral("[]"),
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
  const wrap_required = /* @__PURE__ */ __name((input, meta, explore) => {
    if (meta.isRequired() === true && meta.any === false) return (expression) => expression;
    return (expression) => ts.factory.createConditionalExpression(ts.factory.createStrictInequality(ts.factory.createIdentifier("undefined"), input), void 0, expression, void 0, explore.from === "array" ? ts.factory.createStringLiteral("null") : ts.factory.createIdentifier("undefined"));
  }, "wrap_required");
  const wrap_nullable = /* @__PURE__ */ __name((input, meta) => {
    if (meta.nullable === false) return (expression) => expression;
    return (expression) => ts.factory.createConditionalExpression(ts.factory.createStrictInequality(ts.factory.createNull(), input), void 0, expression, void 0, ts.factory.createStringLiteral("null"));
  }, "wrap_nullable");
  const wrap_functional = /* @__PURE__ */ __name((input, meta, explore) => {
    if (meta.functional === false) return (expression) => expression;
    return (expression) => ts.factory.createConditionalExpression(ts.factory.createStrictInequality(ts.factory.createStringLiteral("function"), ValueFactory.TYPEOF(input)), void 0, expression, void 0, decode_functional(explore));
  }, "wrap_functional");
  const iterate = /* @__PURE__ */ __name((importer, input, unions, expected) => ts.factory.createBlock([
    ...unions.map((u) => ts.factory.createIfStatement(u.is(), ts.factory.createReturnStatement(u.value()))),
    create_throw_error(importer)(expected)(input)
  ], true), "iterate");
  const PREFIX = "$s";
  const configure = /* @__PURE__ */ __name((project) => (importer) => {
    const config = {
      types: {
        input: /* @__PURE__ */ __name((type, name) => ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type)), "input"),
        output: /* @__PURE__ */ __name(() => TypeFactory.keyword("string"), "output")
      },
      prefix: PREFIX,
      trace: false,
      path: false,
      initializer,
      decoder: /* @__PURE__ */ __name(() => decode(project)(config)(importer), "decoder"),
      objector: {
        checker: /* @__PURE__ */ __name(() => (input, meta, explore) => IsProgrammer.decode(project)(importer)(input, meta, explore), "checker"),
        decoder: /* @__PURE__ */ __name(() => decode_object(importer), "decoder"),
        joiner: StringifyJoiner.object(importer),
        unionizer: decode_union_object(IsProgrammer.decode_object(project)(importer))(decode_object(importer))((exp) => exp)((value, expected) => create_throw_error(importer)(expected)(value)),
        failure: /* @__PURE__ */ __name((input, expected) => create_throw_error(importer)(expected)(input), "failure")
      },
      generator: {
        arrays: /* @__PURE__ */ __name(() => write_array_functions(config)(importer), "arrays"),
        tuples: /* @__PURE__ */ __name(() => write_tuple_functions(project)(config)(importer), "tuples")
      }
    };
    return config;
  }, "configure");
  const initializer = /* @__PURE__ */ __name((project) => (importer) => (type) => JsonMetadataFactory.analyze(`typia.json.${importer.method}`)(project.checker, project.context)(type), "initializer");
  const create_throw_error = /* @__PURE__ */ __name((importer) => (expected) => (value) => ts.factory.createExpressionStatement(ts.factory.createCallExpression(importer.use("throws"), [], [
    ts.factory.createObjectLiteralExpression([
      ts.factory.createPropertyAssignment("expected", ts.factory.createStringLiteral(expected)),
      ts.factory.createPropertyAssignment("value", value)
    ], true)
  ])), "create_throw_error");
})(JsonStringifyProgrammer || (JsonStringifyProgrammer = {}));

export {
  JsonStringifyProgrammer
};
//# sourceMappingURL=chunk-CPQPG5GK.mjs.map