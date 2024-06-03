import {
  PruneJoiner
} from "./chunk-SR3CGBYN.mjs";
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

// src/programmers/misc/MiscPruneProgrammer.ts
import ts from "typescript";
var MiscPruneProgrammer;
(function(MiscPruneProgrammer2) {
  MiscPruneProgrammer2.write = (project) => (modulo) => {
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
    if (filter(meta) === false) return ts.factory.createBlock([]);
    const unions = [];
    for (const tuple of meta.tuples.filter((tuple2) => tuple2.type.elements.some((e) => filter(e.rest ?? e)))) unions.push({
      type: "tuple",
      is: /* @__PURE__ */ __name(() => IsProgrammer.decode(project)(importer)(input, (() => {
        const partial = Metadata.initialize();
        partial.tuples.push(tuple);
        return partial;
      })(), explore), "is"),
      value: /* @__PURE__ */ __name(() => decode_tuple(project)(config)(importer)(input, tuple, explore), "value")
    });
    if (meta.arrays.filter((a) => filter(a.type.value)).length) unions.push({
      type: "array",
      is: /* @__PURE__ */ __name(() => ExpressionFactory.isArray(input), "is"),
      value: /* @__PURE__ */ __name(() => explore_arrays(project)(config)(importer)(input, meta.arrays, {
        ...explore,
        from: "array"
      }), "value")
    });
    if (meta.natives.length) for (const native of meta.natives) unions.push({
      type: "native",
      is: /* @__PURE__ */ __name(() => ExpressionFactory.isInstanceOf(native)(input), "is"),
      value: /* @__PURE__ */ __name(() => ts.factory.createReturnStatement(), "value")
    });
    if (meta.sets.length) unions.push({
      type: "set",
      is: /* @__PURE__ */ __name(() => ExpressionFactory.isInstanceOf("Set")(input), "is"),
      value: /* @__PURE__ */ __name(() => ts.factory.createReturnStatement(), "value")
    });
    if (meta.maps.length) unions.push({
      type: "map",
      is: /* @__PURE__ */ __name(() => ExpressionFactory.isInstanceOf("Map")(input), "is"),
      value: /* @__PURE__ */ __name(() => ts.factory.createReturnStatement(), "value")
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
    const converter = /* @__PURE__ */ __name((v) => ts.isReturnStatement(v) || ts.isBlock(v) ? v : ts.factory.createExpressionStatement(v), "converter");
    const statements = unions.map((u) => ts.factory.createIfStatement(u.is(), converter(u.value())));
    return ts.factory.createBlock(statements, true);
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
  const decode_array_inline = /* @__PURE__ */ __name((config) => (importer) => (input, array, explore) => FeatureProgrammer.decode_array(config)(importer)(PruneJoiner.array)(input, array, explore), "decode_array_inline");
  const decode_tuple = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, tuple, explore) => tuple.type.recursive ? ts.factory.createCallExpression(ts.factory.createIdentifier(importer.useLocal(`${config.prefix}t${tuple.type.index}`)), void 0, FeatureProgrammer.argumentsArray(config)({
    ...explore,
    source: "function"
  })(input)) : decode_tuple_inline(project)(config)(importer)(input, tuple.type, explore), "decode_tuple");
  const decode_tuple_inline = /* @__PURE__ */ __name((project) => (config) => (importer) => (input, tuple, explore) => {
    const children = tuple.elements.map((elem, index) => [
      elem,
      index
    ]).filter(([elem]) => filter(elem) && elem.rest === null).map(([elem, index]) => decode(project)(config)(importer)(ts.factory.createElementAccessExpression(input, index), elem, {
      ...explore,
      from: "array",
      postfix: explore.postfix.length ? `${explore.postfix.slice(0, -1)}[${index}]"` : `"[${index}]"`
    }));
    const rest = (() => {
      if (tuple.elements.length === 0) return null;
      const last = tuple.elements.at(-1);
      const rest2 = last.rest;
      if (rest2 === null || filter(rest2) === false) return null;
      return decode(project)(config)(importer)(ts.factory.createCallExpression(IdentifierFactory.access(input)("slice"), void 0, [
        ExpressionFactory.number(tuple.elements.length - 1)
      ]), wrap_metadata_rest_tuple(tuple.elements.at(-1).rest), {
        ...explore,
        start: tuple.elements.length - 1
      });
    })();
    return PruneJoiner.tuple(children, rest);
  }, "decode_tuple_inline");
  const explore_objects = /* @__PURE__ */ __name((config) => (importer) => (input, meta, explore) => {
    if (meta.objects.length === 1) return decode_object(importer)(input, meta.objects[0], explore);
    return ts.factory.createCallExpression(ts.factory.createIdentifier(importer.useLocal(`${PREFIX}u${meta.union_index}`)), void 0, FeatureProgrammer.argumentsArray(config)(explore)(input));
  }, "explore_objects");
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
  const filter = /* @__PURE__ */ __name((meta) => meta.any === false && (meta.objects.length !== 0 || meta.tuples.some((t) => !!t.type.elements.length && t.type.elements.some((e) => filter(e.rest ?? e))) || meta.arrays.some((e) => filter(e.type.value))), "filter");
  const PREFIX = "$p";
  const configure = /* @__PURE__ */ __name((project) => (importer) => {
    const config = {
      types: {
        input: /* @__PURE__ */ __name((type, name) => ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type)), "input"),
        output: /* @__PURE__ */ __name(() => TypeFactory.keyword("void"), "output")
      },
      prefix: PREFIX,
      trace: false,
      path: false,
      initializer,
      decoder: /* @__PURE__ */ __name(() => decode(project)(config)(importer), "decoder"),
      objector: {
        checker: /* @__PURE__ */ __name(() => IsProgrammer.decode(project)(importer), "checker"),
        decoder: /* @__PURE__ */ __name(() => decode_object(importer), "decoder"),
        joiner: PruneJoiner.object,
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
  const initializer = /* @__PURE__ */ __name((project) => (importer) => (type) => {
    const collection = new MetadataCollection();
    const result = MetadataFactory.analyze(project.checker, project.context)({
      escape: false,
      constant: true,
      absorb: true
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
})(MiscPruneProgrammer || (MiscPruneProgrammer = {}));

export {
  MiscPruneProgrammer
};
//# sourceMappingURL=chunk-VRHYTTMP.mjs.map