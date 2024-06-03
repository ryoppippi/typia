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
  check_object
} from "./chunk-LWH5RX73.mjs";
import {
  check_array_length
} from "./chunk-UBMEB7WQ.mjs";
import {
  check_number
} from "./chunk-QIVEIW2K.mjs";
import {
  check_string
} from "./chunk-Z27JFOX4.mjs";
import {
  check_template
} from "./chunk-6IDHZWBK.mjs";
import {
  check_bigint
} from "./chunk-JYYOOAJV.mjs";
import {
  disable_function_importer_declare
} from "./chunk-KD367W5I.mjs";
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
  AtomicPredicator
} from "./chunk-EPGYGA2I.mjs";
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
  MetadataTuple
} from "./chunk-4Q3FYUW7.mjs";
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

// src/programmers/IsProgrammer.ts
import ts2 from "typescript";

// src/programmers/CheckerProgrammer.ts
import ts from "typescript";
var CheckerProgrammer;
(function(CheckerProgrammer2) {
  CheckerProgrammer2.write = (project) => (config) => (importer) => FeatureProgrammer.write(project)(configure(project)(config)(importer))(importer);
  CheckerProgrammer2.write_object_functions = (project) => (config) => (importer) => FeatureProgrammer.write_object_functions(configure(project)(config)(importer))(importer);
  CheckerProgrammer2.write_union_functions = (project) => (config) => (importer) => FeatureProgrammer.write_union_functions(configure(project)({
    ...config,
    numeric: false
  })(importer));
  CheckerProgrammer2.write_array_functions = (project) => (config) => (importer) => (collection) => collection.arrays().filter((a) => a.recursive).map((type, i) => StatementFactory.constant(`${config.prefix}a${i}`, ts.factory.createArrowFunction(void 0, void 0, FeatureProgrammer.parameterDeclarations(config)(TypeFactory.keyword("any"))(ts.factory.createIdentifier("input")), TypeFactory.keyword("any"), void 0, decode_array_inline(project)(config)(importer)(ts.factory.createIdentifier("input"), MetadataArray.create({
    type,
    tags: []
  }), {
    tracable: config.trace,
    source: "function",
    from: "array",
    postfix: ""
  }))));
  CheckerProgrammer2.write_tuple_functions = (project) => (config) => (importer) => (collection) => collection.tuples().filter((t) => t.recursive).map((tuple, i) => StatementFactory.constant(`${config.prefix}t${i}`, ts.factory.createArrowFunction(void 0, void 0, FeatureProgrammer.parameterDeclarations(config)(TypeFactory.keyword("any"))(ts.factory.createIdentifier("input")), TypeFactory.keyword("any"), void 0, decode_tuple_inline(project)(config)(importer)(ts.factory.createIdentifier("input"), tuple, {
    tracable: config.trace,
    source: "function",
    from: "array",
    postfix: ""
  }))));
  const configure = /* @__PURE__ */ __name((project) => (config) => (importer) => ({
    types: {
      input: /* @__PURE__ */ __name(() => TypeFactory.keyword("any"), "input"),
      output: /* @__PURE__ */ __name((type, name) => ts.factory.createTypePredicateNode(void 0, "input", ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type))), "output")
    },
    trace: config.trace,
    path: config.path,
    prefix: config.prefix,
    initializer: /* @__PURE__ */ __name((project2) => (importer2) => (type) => {
      const collection = new MetadataCollection();
      const result = MetadataFactory.analyze(project2.checker, project2.context)({
        escape: false,
        constant: true,
        absorb: true
      })(collection)(type);
      if (result.success === false) throw TransformerError.from(`typia.${importer2.method}`)(result.errors);
      return [
        collection,
        result.data
      ];
    }, "initializer"),
    addition: config.addition,
    decoder: /* @__PURE__ */ __name(() => config.decoder?.() ?? CheckerProgrammer2.decode(project)(config)(importer), "decoder"),
    objector: {
      checker: /* @__PURE__ */ __name(() => config.decoder?.() ?? CheckerProgrammer2.decode(project)(config)(importer), "checker"),
      decoder: /* @__PURE__ */ __name(() => CheckerProgrammer2.decode_object(config)(importer), "decoder"),
      joiner: config.joiner.object,
      unionizer: config.equals ? decode_union_object(CheckerProgrammer2.decode_object(config)(importer))((input, obj, explore) => CheckerProgrammer2.decode_object(config)(importer)(input, obj, {
        ...explore,
        tracable: true
      }))(config.joiner.is ?? ((expr) => expr))((value, expected) => ts.factory.createReturnStatement(config.joiner.failure(value, expected))) : (input, targets, explore) => config.combiner(explore)("or")(input, targets.map((obj) => ({
        expression: CheckerProgrammer2.decode_object(config)(importer)(input, obj, explore),
        combined: true
      })), `(${targets.map((t) => t.name).join(" | ")})`),
      failure: /* @__PURE__ */ __name((value, expected) => ts.factory.createReturnStatement(config.joiner.failure(value, expected)), "failure"),
      is: config.joiner.is,
      required: config.joiner.required,
      full: config.joiner.full,
      type: TypeFactory.keyword("boolean")
    },
    generator: {
      unions: config.numeric ? () => FeatureProgrammer.write_union_functions(configure(project)({
        ...config,
        numeric: false
      })(importer)) : void 0,
      arrays: /* @__PURE__ */ __name(() => CheckerProgrammer2.write_array_functions(project)(config)(importer), "arrays"),
      tuples: /* @__PURE__ */ __name(() => CheckerProgrammer2.write_tuple_functions(project)(config)(importer), "tuples")
    }
  }), "configure");
  CheckerProgrammer2.decode = (project) => (config) => (importer) => (input, meta, explore) => {
    if (meta.any) return config.success;
    const top = [];
    const binaries = [];
    const add = create_add(binaries)(input);
    const getConstantValue = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") return ts.factory.createStringLiteral(value);
      else if (typeof value === "bigint") return ExpressionFactory.bigint(value);
      return ts.factory.createIdentifier(value.toString());
    }, "getConstantValue");
    const checkOptional = meta.empty() || meta.isUnionBucket();
    if (checkOptional || meta.nullable) (meta.nullable ? add : create_add(top)(input))(meta.nullable, ValueFactory.NULL());
    if (checkOptional || !meta.isRequired()) (meta.isRequired() ? create_add(top)(input) : add)(!meta.isRequired(), ValueFactory.UNDEFINED());
    if (meta.functional === true) if (OptionPredicator.functional(project.options) || meta.size() !== 1) add(true, ts.factory.createStringLiteral("function"), ValueFactory.TYPEOF(input));
    else binaries.push({
      combined: false,
      expression: config.success
    });
    for (const constant of meta.constants) if (AtomicPredicator.constant(meta)(constant.type)) for (const v of constant.values) add(true, getConstantValue(v.value));
    if (meta.escaped !== null) binaries.push({
      combined: false,
      expression: meta.escaped.original.size() === 1 && meta.escaped.original.natives.length === 1 ? check_native(meta.escaped.original.natives[0])(input) : ts.factory.createLogicalAnd(CheckerProgrammer2.decode(project)(config)(importer)(input, meta.escaped.original, explore), ts.factory.createLogicalAnd(IsProgrammer.decode_to_json(false)(input), decode_escaped(project)(config)(importer)(input, meta.escaped.returns, explore)))
    });
    for (const atom of meta.atomics) if (AtomicPredicator.atomic(meta)(atom.type) === false) continue;
    else if (atom.type === "number") binaries.push({
      expression: config.atomist(explore)(check_number(project, config.numeric)(atom)(input))(input),
      combined: false
    });
    else if (atom.type === "bigint") binaries.push({
      expression: config.atomist(explore)(check_bigint(project)(atom)(input))(input),
      combined: false
    });
    else if (atom.type === "string") binaries.push({
      expression: config.atomist(explore)(check_string(project)(atom)(input))(input),
      combined: false
    });
    else add(true, ts.factory.createStringLiteral(atom.type), ValueFactory.TYPEOF(input));
    if (meta.templates.length) {
      if (AtomicPredicator.template(meta)) binaries.push({
        expression: config.atomist(explore)(check_template(meta.templates)(input))(input),
        combined: false
      });
    }
    for (const native of meta.natives) binaries.push({
      expression: check_native(native)(input),
      combined: false
    });
    const instances = [];
    const prepare = /* @__PURE__ */ __name((pre, expected) => (body) => instances.push({
      pre,
      expected,
      body
    }), "prepare");
    if (meta.sets.length) {
      const install = prepare(check_native("Set")(input), meta.sets.map((elem) => `Set<${elem.getName()}>`).join(" | "));
      if (meta.sets.some((elem) => elem.any)) install(null);
      else install(explore_sets(project)(config)(importer)(input, meta.sets, {
        ...explore,
        from: "array"
      }));
    }
    if (meta.maps.length) {
      const install = prepare(check_native("Map")(input), meta.maps.map(({ key, value }) => `Map<${key}, ${value}>`).join(" | "));
      if (meta.maps.some((elem) => elem.key.any && elem.value.any)) install(null);
      else install(explore_maps(project)(config)(importer)(input, meta.maps, {
        ...explore,
        from: "array"
      }));
    }
    if (meta.tuples.length + meta.arrays.length > 0) {
      const install = prepare(config.atomist(explore)({
        expected: [
          ...meta.tuples.map((t) => t.type.name),
          ...meta.arrays.map((a) => a.getName())
        ].join(" | "),
        expression: ExpressionFactory.isArray(input),
        conditions: []
      })(input), [
        ...meta.tuples,
        ...meta.arrays
      ].map((elem) => elem.type.name).join(" | "));
      if (meta.arrays.length === 0) if (meta.tuples.length === 1) install(decode_tuple(project)(config)(importer)(input, meta.tuples[0], {
        ...explore,
        from: "array"
      }));
      else install(explore_tuples(project)(config)(importer)(input, meta.tuples, {
        ...explore,
        from: "array"
      }));
      else if (meta.arrays.some((elem) => elem.type.value.any)) install(null);
      else if (meta.tuples.length === 0) if (meta.arrays.length === 1)
        install(decode_array(project)(config)(importer)(input, meta.arrays[0], {
          ...explore,
          from: "array"
        }));
      else install(explore_arrays(project)(config)(importer)(input, meta.arrays, {
        ...explore,
        from: "array"
      }));
      else install(explore_arrays_and_tuples(project)(config)(importer)(input, [
        ...meta.tuples,
        ...meta.arrays
      ], explore));
    }
    if (meta.objects.length > 0) prepare(ExpressionFactory.isObject({
      checkNull: true,
      checkArray: meta.objects.some((obj) => obj.properties.every((prop) => !prop.key.isSoleLiteral() || !prop.value.isRequired()))
    })(input), meta.objects.map((obj) => obj.name).join(" | "))(explore_objects(config)(importer)(input, meta, {
      ...explore,
      from: "object"
    }));
    if (instances.length) {
      const transformer = /* @__PURE__ */ __name((merger) => (ins) => ins.body ? {
        expression: merger(ins.pre, ins.body),
        combined: true
      } : {
        expression: ins.pre,
        combined: false
      }, "transformer");
      if (instances.length === 1) binaries.push(transformer((pre, body) => config.combiner(explore)("and")(input, [
        pre,
        body
      ].map((expression) => ({
        expression,
        combined: expression !== pre
      })), meta.getName()))(instances[0]));
      else binaries.push({
        expression: config.combiner(explore)("or")(input, instances.map(transformer(ts.factory.createLogicalAnd)), meta.getName()),
        combined: true
      });
    }
    return top.length && binaries.length ? config.combiner(explore)("and")(input, [
      ...top,
      {
        expression: config.combiner(explore)("or")(input, binaries, meta.getName()),
        combined: true
      }
    ], meta.getName()) : binaries.length ? config.combiner(explore)("or")(input, binaries, meta.getName()) : config.success;
  };
  CheckerProgrammer2.decode_object = (config) => (importer) => {
    const func = FeatureProgrammer.decode_object(config)(importer);
    return (input, obj, explore) => {
      obj.validated = true;
      return func(input, obj, explore);
    };
  };
  const decode_array = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, array, explore) => {
    if (array.type.recursive === false) return decode_array_inline(project)(config)(importer)(input, array, explore);
    explore = {
      ...explore,
      source: "function",
      from: "array"
    };
    return ts.factory.createLogicalOr(ts.factory.createCallExpression(ts.factory.createIdentifier(importer.useLocal(`${config.prefix}a${array.type.index}`)), void 0, FeatureProgrammer.argumentsArray(config)({
      ...explore,
      source: "function",
      from: "array"
    })(input)), config.joiner.failure(input, array.type.name, explore));
  }, "decode_array");
  const decode_array_inline = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, array, explore) => {
    const length = check_array_length(project)(array)(input);
    const main = FeatureProgrammer.decode_array({
      prefix: config.prefix,
      trace: config.trace,
      path: config.path,
      decoder: /* @__PURE__ */ __name(() => CheckerProgrammer2.decode(project)(config)(importer), "decoder")
    })(importer)(config.joiner.array)(input, array, explore);
    return length.expression === null && length.conditions.length === 0 ? main : ts.factory.createLogicalAnd(config.atomist(explore)(length)(input), main);
  }, "decode_array_inline");
  const decode_tuple = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, tuple, explore) => {
    if (tuple.type.recursive === false) return decode_tuple_inline(project)(config)(importer)(input, tuple.type, explore);
    explore = {
      ...explore,
      source: "function",
      from: "array"
    };
    return ts.factory.createLogicalOr(ts.factory.createCallExpression(ts.factory.createIdentifier(importer.useLocal(`${config.prefix}t${tuple.type.index}`)), void 0, FeatureProgrammer.argumentsArray(config)({
      ...explore,
      source: "function"
    })(input)), config.joiner.failure(input, tuple.type.name, explore));
  }, "decode_tuple");
  const decode_tuple_inline = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, tuple, explore) => {
    const binaries = tuple.elements.filter((meta) => meta.rest === null).map((meta, index) => CheckerProgrammer2.decode(project)(config)(importer)(ts.factory.createElementAccessExpression(input, index), meta, {
      ...explore,
      from: "array",
      postfix: explore.postfix.length ? `${explore.postfix.slice(0, -1)}[${index}]"` : `"[${index}]"`
    }));
    const rest = tuple.elements.length && tuple.elements.at(-1).rest !== null ? CheckerProgrammer2.decode(project)(config)(importer)(ts.factory.createCallExpression(IdentifierFactory.access(input)("slice"), void 0, [
      ExpressionFactory.number(tuple.elements.length - 1)
    ]), wrap_metadata_rest_tuple(tuple.elements.at(-1).rest), {
      ...explore,
      start: tuple.elements.length - 1
    }) : null;
    const arrayLength = ts.factory.createPropertyAccessExpression(input, "length");
    return config.combiner(explore)("and")(input, [
      ...rest === null ? tuple.elements.every((t) => t.optional === false) ? [
        {
          combined: false,
          expression: ts.factory.createStrictEquality(arrayLength, ExpressionFactory.number(tuple.elements.length))
        }
      ] : [
        {
          combined: false,
          expression: ts.factory.createLogicalAnd(ts.factory.createLessThanEquals(ExpressionFactory.number(tuple.elements.filter((t) => t.optional === false).length), arrayLength), ts.factory.createGreaterThanEquals(ExpressionFactory.number(tuple.elements.length), arrayLength))
        }
      ] : [],
      ...config.joiner.tuple ? [
        {
          expression: config.joiner.tuple(binaries),
          combined: true
        }
      ] : binaries.map((expression) => ({
        expression,
        combined: true
      })),
      ...rest !== null ? [
        {
          expression: rest,
          combined: true
        }
      ] : []
    ], `[${tuple.elements.map((t) => t.getName()).join(", ")}]`);
  }, "decode_tuple_inline");
  const decode_escaped = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, meta, explore) => ts.factory.createCallExpression(ts.factory.createParenthesizedExpression(ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("input", TypeFactory.keyword("any"))
  ], void 0, void 0, CheckerProgrammer2.decode(project)(config)(importer)(ts.factory.createIdentifier("input"), meta, explore))), void 0, [
    ts.factory.createCallExpression(IdentifierFactory.access(input)("toJSON"), void 0, [])
  ]), "decode_escaped");
  const explore_sets = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, sets, explore) => ts.factory.createCallExpression(UnionExplorer.set({
    checker: CheckerProgrammer2.decode(project)(config)(importer),
    decoder: decode_array(project)(config)(importer),
    empty: config.success,
    success: config.success,
    failure: /* @__PURE__ */ __name((input2, expected, explore2) => ts.factory.createReturnStatement(config.joiner.failure(input2, expected, explore2)), "failure")
  })([])(input, sets, explore), void 0, void 0), "explore_sets");
  const explore_maps = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, maps, explore) => ts.factory.createCallExpression(UnionExplorer.map({
    checker: /* @__PURE__ */ __name((input2, entry, explore2) => {
      const func = CheckerProgrammer2.decode(project)(config)(importer);
      return ts.factory.createLogicalAnd(func(ts.factory.createElementAccessExpression(input2, 0), entry[0], {
        ...explore2,
        postfix: `${explore2.postfix}[0]`
      }), func(ts.factory.createElementAccessExpression(input2, 1), entry[1], {
        ...explore2,
        postfix: `${explore2.postfix}[1]`
      }));
    }, "checker"),
    decoder: decode_array(project)(config)(importer),
    empty: config.success,
    success: config.success,
    failure: /* @__PURE__ */ __name((input2, expected, explore2) => ts.factory.createReturnStatement(config.joiner.failure(input2, expected, explore2)), "failure")
  })([])(input, maps, explore), void 0, void 0), "explore_maps");
  const explore_tuples = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, tuples, explore) => explore_array_like_union_types(config)(importer)(UnionExplorer.tuple({
    checker: decode_tuple(project)(config)(importer),
    decoder: decode_tuple(project)(config)(importer),
    empty: config.success,
    success: config.success,
    failure: /* @__PURE__ */ __name((input2, expected, explore2) => ts.factory.createReturnStatement(config.joiner.failure(input2, expected, explore2)), "failure")
  }))(input, tuples, explore), "explore_tuples");
  const explore_arrays = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, arrays, explore) => explore_array_like_union_types(config)(importer)(UnionExplorer.array({
    checker: CheckerProgrammer2.decode(project)(config)(importer),
    decoder: decode_array(project)(config)(importer),
    empty: config.success,
    success: config.success,
    failure: /* @__PURE__ */ __name((input2, expected, explore2) => ts.factory.createReturnStatement(config.joiner.failure(input2, expected, explore2)), "failure")
  }))(input, arrays, explore), "explore_arrays");
  const explore_arrays_and_tuples = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, elements, explore) => explore_array_like_union_types(config)(importer)(UnionExplorer.array_or_tuple({
    checker: /* @__PURE__ */ __name((front, target, explore2, array) => target instanceof MetadataTuple ? decode_tuple(project)(config)(importer)(front, target, explore2) : config.atomist(explore2)({
      expected: elements.map((elem) => elem instanceof MetadataArray ? elem.getName() : elem.type.name).join(" | "),
      expression: CheckerProgrammer2.decode(project)(config)(importer)(front, target, explore2),
      conditions: []
    })(array), "checker"),
    decoder: /* @__PURE__ */ __name((input2, target, explore2) => target instanceof MetadataTuple ? decode_tuple(project)(config)(importer)(input2, target, explore2) : decode_array(project)(config)(importer)(input2, target, explore2), "decoder"),
    empty: config.success,
    success: config.success,
    failure: /* @__PURE__ */ __name((input2, expected, explore2) => ts.factory.createReturnStatement(config.joiner.failure(input2, expected, explore2)), "failure")
  }))(input, elements, explore), "explore_arrays_and_tuples");
  const explore_array_like_union_types = /* @__PURE__ */ __name((config) => (importer) => (factory) => (input, elements, explore) => {
    const arrow = /* @__PURE__ */ __name((parameters) => (explore2) => (input2) => factory(parameters)(input2, elements, explore2), "arrow");
    if (elements.every((e) => e.type.recursive === false)) ts.factory.createCallExpression(arrow([])(explore)(input), void 0, []);
    explore = {
      ...explore,
      source: "function",
      from: "array"
    };
    return ts.factory.createLogicalOr(ts.factory.createCallExpression(ts.factory.createIdentifier(importer.emplaceUnion(config.prefix, elements.map((e) => e.type.name).join(" | "), () => arrow(FeatureProgrammer.parameterDeclarations(config)(TypeFactory.keyword("any"))(ts.factory.createIdentifier("input")))({
      ...explore,
      postfix: ""
    })(ts.factory.createIdentifier("input")))), void 0, FeatureProgrammer.argumentsArray(config)(explore)(input)), config.joiner.failure(input, elements.map((e) => e.type.name).join(" | "), explore));
  }, "explore_array_like_union_types");
  const explore_objects = /* @__PURE__ */ __name((config) => (importer) => (input, meta, explore) => meta.objects.length === 1 ? CheckerProgrammer2.decode_object(config)(importer)(input, meta.objects[0], explore) : ts.factory.createCallExpression(ts.factory.createIdentifier(importer.useLocal(`${config.prefix}u${meta.union_index}`)), void 0, FeatureProgrammer.argumentsArray(config)(explore)(input)), "explore_objects");
})(CheckerProgrammer || (CheckerProgrammer = {}));
var create_add = /* @__PURE__ */ __name((binaries) => (defaultInput) => (exact, left, right = defaultInput) => {
  const factory = exact ? ts.factory.createStrictEquality : ts.factory.createStrictInequality;
  binaries.push({
    expression: factory(left, right),
    combined: false
  });
}, "create_add");

// src/programmers/IsProgrammer.ts
var IsProgrammer;
(function(IsProgrammer2) {
  IsProgrammer2.configure = (options) => (project) => (importer) => ({
    prefix: "$i",
    equals: !!options?.object,
    trace: false,
    path: false,
    numeric: OptionPredicator.numeric({
      numeric: options?.numeric
    }),
    atomist: /* @__PURE__ */ __name(() => (entry) => () => [
      ...entry.expression ? [
        entry.expression
      ] : [],
      ...entry.conditions.length === 0 ? [] : [
        entry.conditions.map((set) => set.map((s) => s.expression).reduce((a, b) => ts2.factory.createLogicalAnd(a, b))).reduce((a, b) => ts2.factory.createLogicalOr(a, b))
      ]
    ].reduce((x, y) => ts2.factory.createLogicalAnd(x, y)), "atomist"),
    combiner: /* @__PURE__ */ __name(() => (type) => {
      const initial = type === "and" ? ts2.factory.createTrue() : ts2.factory.createFalse();
      const binder = type === "and" ? ts2.factory.createLogicalAnd : ts2.factory.createLogicalOr;
      return (_input, binaries) => binaries.length ? binaries.map((binary) => binary.expression).reduce((x, y) => binder(x, y)) : initial;
    }, "combiner"),
    joiner: {
      object: options?.object || check_object({
        equals: !!options?.object,
        undefined: OptionPredicator.undefined({
          undefined: options?.undefined
        }),
        assert: true,
        reduce: ts2.factory.createLogicalAnd,
        positive: ts2.factory.createTrue(),
        superfluous: /* @__PURE__ */ __name(() => ts2.factory.createFalse(), "superfluous")
      })(project)(importer),
      array: /* @__PURE__ */ __name((input, arrow) => ts2.factory.createCallExpression(IdentifierFactory.access(input)("every"), void 0, [
        arrow
      ]), "array"),
      failure: /* @__PURE__ */ __name(() => ts2.factory.createFalse(), "failure")
    },
    success: ts2.factory.createTrue()
  });
  IsProgrammer2.write = (project) => (modulo, disable) => (equals) => {
    const importer = disable === {} ? disable_function_importer_declare(new FunctionImporter(modulo.getText())) : new FunctionImporter(modulo.getText());
    const config = {
      ...IsProgrammer2.configure({
        object: check_object({
          equals,
          undefined: OptionPredicator.undefined(project.options),
          assert: true,
          reduce: ts2.factory.createLogicalAnd,
          positive: ts2.factory.createTrue(),
          superfluous: /* @__PURE__ */ __name(() => ts2.factory.createFalse(), "superfluous")
        })(project)(importer),
        numeric: OptionPredicator.numeric(project.options)
      })(project)(importer),
      trace: equals,
      addition: /* @__PURE__ */ __name(() => importer.declare(modulo), "addition")
    };
    config.decoder = () => (input, target, explore) => {
      if (target.size() === 1 && target.objects.length === 1 && target.isRequired() === true && target.nullable === false) {
        const obj = target.objects[0];
        if (obj._Is_simple(explore.from === "top" ? 0 : 1) && (equals === false || OptionPredicator.undefined(project.options) === false)) return ts2.factory.createLogicalAnd(ExpressionFactory.isObject({
          checkNull: true,
          checkArray: false
        })(input), config.joiner.object(ts2.factory.createAsExpression(input, TypeFactory.keyword("any")), feature_object_entries(config)(importer)(obj)(ts2.factory.createAsExpression(input, TypeFactory.keyword("any")), "top")));
      }
      return CheckerProgrammer.decode(project)(config)(importer)(input, target, explore);
    };
    return CheckerProgrammer.write(project)(config)(importer);
  };
  IsProgrammer2.write_function_statements = (project) => (importer) => (collection) => {
    const config = IsProgrammer2.configure()(project)(importer);
    const objects = CheckerProgrammer.write_object_functions(project)(config)(importer)(collection);
    const unions = CheckerProgrammer.write_union_functions(project)(config)(importer)(collection);
    const arrays = CheckerProgrammer.write_array_functions(project)(config)(importer)(collection);
    const tuples = CheckerProgrammer.write_tuple_functions(project)(config)(importer)(collection);
    return [
      ...objects.filter((_, i) => importer.hasLocal(`${config.prefix}o${i}`)),
      ...unions.filter((_, i) => importer.hasLocal(`${config.prefix}u${i}`)),
      ...arrays.filter((_, i) => importer.hasLocal(`${config.prefix}a${i}`)),
      ...tuples.filter((_, i) => importer.hasLocal(`${config.prefix}t${i}`))
    ];
  };
  IsProgrammer2.decode = (project) => (importer) => CheckerProgrammer.decode(project)(IsProgrammer2.configure()(project)(importer))(importer);
  IsProgrammer2.decode_object = (project) => (importer) => CheckerProgrammer.decode_object(IsProgrammer2.configure()(project)(importer))(importer);
  IsProgrammer2.decode_to_json = (checkNull) => (input) => ts2.factory.createLogicalAnd(ExpressionFactory.isObject({
    checkArray: false,
    checkNull
  })(input), ts2.factory.createStrictEquality(ts2.factory.createStringLiteral("function"), ValueFactory.TYPEOF(IdentifierFactory.access(input)("toJSON"))));
  IsProgrammer2.decode_functional = (input) => ts2.factory.createStrictEquality(ts2.factory.createStringLiteral("function"), ValueFactory.TYPEOF(input));
})(IsProgrammer || (IsProgrammer = {}));

export {
  IsProgrammer,
  CheckerProgrammer
};
//# sourceMappingURL=chunk-3IJJRDF3.mjs.map