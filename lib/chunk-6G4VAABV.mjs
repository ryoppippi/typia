import {
  feature_object_entries
} from "./chunk-3T5PTULG.mjs";
import {
  UnionExplorer
} from "./chunk-5BI4D63L.mjs";
import {
  StatementFactory
} from "./chunk-RR3Z23V6.mjs";
import {
  ValueFactory
} from "./chunk-WQG22VFQ.mjs";
import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/FeatureProgrammer.ts
import ts from "typescript";
var FeatureProgrammer;
(function(FeatureProgrammer2) {
  FeatureProgrammer2.write = (project) => (config) => (importer) => (type, name) => {
    const [collection, meta] = config.initializer(project)(importer)(type);
    const output = config.decoder()(ValueFactory.INPUT(), meta, {
      tracable: config.path || config.trace,
      source: "top",
      from: "top",
      postfix: '""'
    });
    const functions = {
      objects: (config.generator.objects?.() ?? FeatureProgrammer2.write_object_functions(config)(importer))(collection),
      unions: (config.generator.unions?.() ?? FeatureProgrammer2.write_union_functions(config))(collection),
      arrays: config.generator.arrays()(collection),
      tuples: config.generator.tuples()(collection)
    };
    const added = (config.addition ?? (() => []))(collection);
    return ts.factory.createArrowFunction(void 0, void 0, FeatureProgrammer2.parameterDeclarations(config)(config.types.input(type, name))(ValueFactory.INPUT()), config.types.output(type, name), void 0, ts.factory.createBlock([
      ...added,
      ...functions.objects.filter((_, i) => importer.hasLocal(`${config.prefix}o${i}`)),
      ...functions.unions.filter((_, i) => importer.hasLocal(`${config.prefix}u${i}`)),
      ...functions.arrays.filter((_, i) => importer.hasLocal(`${config.prefix}a${i}`)),
      ...functions.tuples.filter((_, i) => importer.hasLocal(`${config.prefix}t${i}`)),
      ...ts.isBlock(output) ? output.statements : [
        ts.factory.createReturnStatement(output)
      ]
    ], true));
  };
  FeatureProgrammer2.write_object_functions = (config) => (importer) => (collection) => collection.objects().map((obj) => StatementFactory.constant(`${config.prefix}o${obj.index}`, ts.factory.createArrowFunction(void 0, void 0, FeatureProgrammer2.parameterDeclarations(config)(TypeFactory.keyword("any"))(ValueFactory.INPUT()), config.objector.type ?? TypeFactory.keyword("any"), void 0, config.objector.joiner(ts.factory.createIdentifier("input"), feature_object_entries(config)(importer)(obj)(ts.factory.createIdentifier("input")), obj))));
  FeatureProgrammer2.write_union_functions = (config) => (collection) => collection.unions().map((union, i) => StatementFactory.constant(`${config.prefix}u${i}`, write_union(config)(union)));
  const write_union = /* @__PURE__ */ __name((config) => {
    const explorer = UnionExplorer.object(config);
    const input = ValueFactory.INPUT();
    return (meta) => ts.factory.createArrowFunction(void 0, void 0, FeatureProgrammer2.parameterDeclarations(config)(TypeFactory.keyword("any"))(ValueFactory.INPUT()), TypeFactory.keyword("any"), void 0, explorer(input, meta, {
      tracable: config.path || config.trace,
      source: "function",
      from: "object",
      postfix: ""
    }));
  }, "write_union");
  FeatureProgrammer2.decode_array = (config) => (importer) => (combiner) => {
    const rand = importer.increment().toString();
    const tail = config.path || config.trace ? [
      IdentifierFactory.parameter("_index" + rand, TypeFactory.keyword("number"))
    ] : [];
    return (input, array, explore) => {
      const arrow = ts.factory.createArrowFunction(void 0, void 0, [
        IdentifierFactory.parameter("elem", TypeFactory.keyword("any")),
        ...tail
      ], void 0, void 0, config.decoder()(ValueFactory.INPUT("elem"), array.type.value, {
        tracable: explore.tracable,
        source: explore.source,
        from: "array",
        postfix: FeatureProgrammer2.index(explore.start ?? null)(explore.postfix)(rand)
      }));
      return combiner(input, arrow);
    };
  };
  FeatureProgrammer2.decode_object = (config) => (importer) => (input, obj, explore) => ts.factory.createCallExpression(ts.factory.createIdentifier(importer.useLocal(`${config.prefix}o${obj.index}`)), void 0, FeatureProgrammer2.argumentsArray(config)(explore)(input));
  FeatureProgrammer2.index = (start) => (prev) => (rand) => {
    const tail = start !== null ? `"[" + (${start} + _index${rand}) + "]"` : `"[" + _index${rand} + "]"`;
    if (prev === "") return tail;
    else if (prev[prev.length - 1] === `"`) return prev.substring(0, prev.length - 1) + tail.substring(1);
    return prev + ` + ${tail}`;
  };
  FeatureProgrammer2.argumentsArray = (config) => (explore) => {
    const tail = config.path === false && config.trace === false ? [] : config.path === true && config.trace === true ? [
      ts.factory.createIdentifier(explore.postfix ? `_path + ${explore.postfix}` : "_path"),
      explore.source === "function" ? ts.factory.createIdentifier(`${explore.tracable} && _exceptionable`) : explore.tracable ? ts.factory.createTrue() : ts.factory.createFalse()
    ] : config.path === true ? [
      ts.factory.createIdentifier(explore.postfix ? `_path + ${explore.postfix}` : "_path")
    ] : [
      explore.source === "function" ? ts.factory.createIdentifier(`${explore.tracable} && _exceptionable`) : explore.tracable ? ts.factory.createTrue() : ts.factory.createFalse()
    ];
    return (input) => [
      input,
      ...tail
    ];
  };
  FeatureProgrammer2.parameterDeclarations = (props) => (type) => {
    const tail = [];
    if (props.path) tail.push(IdentifierFactory.parameter("_path", TypeFactory.keyword("string")));
    if (props.trace) tail.push(IdentifierFactory.parameter("_exceptionable", TypeFactory.keyword("boolean"), ts.factory.createTrue()));
    return (input) => [
      IdentifierFactory.parameter(input, type),
      ...tail
    ];
  };
})(FeatureProgrammer || (FeatureProgrammer = {}));

export {
  FeatureProgrammer
};
//# sourceMappingURL=chunk-6G4VAABV.mjs.map