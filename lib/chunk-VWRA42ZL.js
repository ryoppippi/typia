"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunkLGDPYC5Cjs = require('./chunk-LGDPYC5C.js');


var _chunkNWMPQT3Jjs = require('./chunk-NWMPQT3J.js');


var _chunkPDHSW2UWjs = require('./chunk-PDHSW2UW.js');


var _chunkTPC3R5ASjs = require('./chunk-TPC3R5AS.js');


var _chunkFWJ4HRE5js = require('./chunk-FWJ4HRE5.js');


var _chunk3K5SH635js = require('./chunk-3K5SH635.js');


var _chunkYAAJ76CEjs = require('./chunk-YAAJ76CE.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkH3MUGVKWjs = require('./chunk-H3MUGVKW.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunk6TJDJHWOjs = require('./chunk-6TJDJHWO.js');


var _chunk6GHU2XFNjs = require('./chunk-6GHU2XFN.js');


var _chunkUNOXPWQEjs = require('./chunk-UNOXPWQE.js');


var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkERQBF2DGjs = require('./chunk-ERQBF2DG.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/misc/MiscCloneProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var MiscCloneProgrammer;
(function(MiscCloneProgrammer2) {
  MiscCloneProgrammer2.write = (project) => (modulo) => {
    const importer = new (0, _chunkYAAJ76CEjs.FunctionImporter)(modulo.getText());
    return _chunkFWJ4HRE5js.FeatureProgrammer.write(project)({
      ...configure(project)(importer),
      addition: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (collection) => [
        ..._chunkNWMPQT3Jjs.IsProgrammer.write_function_statements(project)(importer)(collection),
        ...importer.declare(modulo)
      ], "addition")
    })(importer);
  };
  const write_array_functions = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (config) => (importer) => (collection) => collection.arrays().filter((a) => a.recursive).map((type, i) => _chunkTYMSCBZGjs.StatementFactory.constant(`${config.prefix}a${i}`, _typescript2.default.factory.createArrowFunction(void 0, void 0, _chunkFWJ4HRE5js.FeatureProgrammer.parameterDeclarations(config)(_chunkPK6R5VEJjs.TypeFactory.keyword("any"))(_typescript2.default.factory.createIdentifier("input")), _chunkPK6R5VEJjs.TypeFactory.keyword("any"), void 0, decode_array_inline(config)(importer)(_typescript2.default.factory.createIdentifier("input"), _chunkUNOXPWQEjs.MetadataArray.create({
    type,
    tags: []
  }), {
    tracable: config.trace,
    source: "function",
    from: "array",
    postfix: ""
  })))), "write_array_functions");
  const write_tuple_functions = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (collection) => collection.tuples().filter((t) => t.recursive).map((tuple, i) => _chunkTYMSCBZGjs.StatementFactory.constant(`${config.prefix}t${i}`, _typescript2.default.factory.createArrowFunction(void 0, void 0, _chunkFWJ4HRE5js.FeatureProgrammer.parameterDeclarations(config)(_chunkPK6R5VEJjs.TypeFactory.keyword("any"))(_typescript2.default.factory.createIdentifier("input")), _chunkPK6R5VEJjs.TypeFactory.keyword("any"), void 0, decode_tuple_inline(project)(config)(importer)(_typescript2.default.factory.createIdentifier("input"), tuple, {
    tracable: config.trace,
    source: "function",
    from: "array",
    postfix: ""
  })))), "write_tuple_functions");
  const decode = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (input, meta, explore) => {
    if (meta.any || meta.arrays.some((a) => a.type.value.any) || meta.tuples.some((t) => !!t.type.elements.length && t.type.elements.every((e) => e.any))) return _typescript2.default.factory.createCallExpression(importer.use("any"), void 0, [
      input
    ]);
    const unions = [];
    if (meta.functional) unions.push({
      type: "functional",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral("function"), _typescript2.default.factory.createTypeOfExpression(input)), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _typescript2.default.factory.createIdentifier("undefined"), "value")
    });
    for (const tuple of meta.tuples) unions.push({
      type: "tuple",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkNWMPQT3Jjs.IsProgrammer.decode(project)(importer)(input, (() => {
        const partial = _chunk6GHU2XFNjs.Metadata.initialize();
        partial.tuples.push(tuple);
        return partial;
      })(), explore), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => decode_tuple(project)(config)(importer)(input, tuple, explore), "value")
    });
    if (meta.arrays.length) unions.push({
      type: "array",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk2F43GCPEjs.ExpressionFactory.isArray(input), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => explore_arrays(project)(config)(importer)(input, meta.arrays, {
        ...explore,
        from: "array"
      }), "value")
    });
    if (meta.sets.length) unions.push({
      type: "set",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk2F43GCPEjs.ExpressionFactory.isInstanceOf("Set")(input), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => explore_sets(project)(config)(importer)(input, meta.sets, {
        ...explore,
        from: "array"
      }), "value")
    });
    if (meta.maps.length) unions.push({
      type: "map",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk2F43GCPEjs.ExpressionFactory.isInstanceOf("Map")(input), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => explore_maps(project)(config)(importer)(input, meta.maps, {
        ...explore,
        from: "array"
      }), "value")
    });
    for (const native of meta.natives) unions.push({
      type: "native",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk2F43GCPEjs.ExpressionFactory.isInstanceOf(native)(input), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => native === "Boolean" || native === "Number" || native === "String" ? _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(input)("valueOf"), void 0, void 0) : decode_native(native)(input), "value")
    });
    if (meta.objects.length) unions.push({
      type: "object",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk2F43GCPEjs.ExpressionFactory.isObject({
        checkNull: true,
        checkArray: false
      })(input), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => explore_objects(config)(importer)(input, meta, {
        ...explore,
        from: "object"
      }), "value")
    });
    let last = input;
    for (const u of unions.reverse()) last = _typescript2.default.factory.createConditionalExpression(u.is(), void 0, u.value(), void 0, last);
    return _typescript2.default.factory.createAsExpression(last, _chunkPK6R5VEJjs.TypeFactory.keyword("any"));
  }, "decode");
  const decode_object = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => _chunkFWJ4HRE5js.FeatureProgrammer.decode_object({
    trace: false,
    path: false,
    prefix: PREFIX
  })(importer), "decode_object");
  const decode_array = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (config) => (importer) => (input, array, explore) => array.type.recursive ? _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(importer.useLocal(`${config.prefix}a${array.type.index}`)), void 0, _chunkFWJ4HRE5js.FeatureProgrammer.argumentsArray(config)({
    ...explore,
    source: "function",
    from: "array"
  })(input)) : decode_array_inline(config)(importer)(input, array, explore), "decode_array");
  const decode_array_inline = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (config) => (importer) => (input, array, explore) => _chunkFWJ4HRE5js.FeatureProgrammer.decode_array(config)(importer)(_chunkLGDPYC5Cjs.CloneJoiner.array)(input, array, explore), "decode_array_inline");
  const decode_tuple = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (input, tuple, explore) => tuple.type.recursive ? _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(importer.useLocal(`${config.prefix}t${tuple.type.index}`)), void 0, _chunkFWJ4HRE5js.FeatureProgrammer.argumentsArray(config)({
    ...explore,
    source: "function"
  })(input)) : decode_tuple_inline(project)(config)(importer)(input, tuple.type, explore), "decode_tuple");
  const decode_tuple_inline = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (input, tuple, explore) => {
    const children = tuple.elements.filter((m) => m.rest === null).map((elem, index) => decode(project)(config)(importer)(_typescript2.default.factory.createElementAccessExpression(input, index), elem, {
      ...explore,
      from: "array",
      postfix: explore.postfix.length ? `${explore.postfix.slice(0, -1)}[${index}]"` : `"[${index}]"`
    }));
    const rest = (() => {
      if (tuple.elements.length === 0) return null;
      const last = tuple.elements.at(-1);
      const rest2 = last.rest;
      if (rest2 === null) return null;
      return decode(project)(config)(importer)(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(input)("slice"), void 0, [
        _chunk2F43GCPEjs.ExpressionFactory.number(tuple.elements.length - 1)
      ]), _chunkPDHSW2UWjs.wrap_metadata_rest_tuple.call(void 0, tuple.elements.at(-1).rest), {
        ...explore,
        start: tuple.elements.length - 1
      });
    })();
    return _chunkLGDPYC5Cjs.CloneJoiner.tuple(children, rest);
  }, "decode_tuple_inline");
  const decode_native = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (type) => (input) => type === "Date" || type === "Uint8Array" || type === "Uint8ClampedArray" || type === "Uint16Array" || type === "Uint32Array" || type === "BigUint64Array" || type === "Int8Array" || type === "Int16Array" || type === "Int32Array" || type === "BigInt64Array" || type === "Float32Array" || type === "Float64Array" ? decode_native_copyable(type)(input) : type === "ArrayBuffer" || type === "SharedArrayBuffer" ? decode_native_buffer(type)(input) : type === "DataView" ? decode_native_data_view(input) : _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(type), void 0, []), "decode_native");
  const decode_native_copyable = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (type) => (input) => _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier(type), void 0, [
    input
  ]), "decode_native_copyable");
  const decode_native_buffer = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (type) => (input) => _chunk2F43GCPEjs.ExpressionFactory.selfCall(_typescript2.default.factory.createBlock([
    _chunkTYMSCBZGjs.StatementFactory.constant("buffer", _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier(type), void 0, [
      _chunkUUZFPK7Njs.IdentifierFactory.access(input)("byteLength")
    ])),
    _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier("Uint8Array"), void 0, [
      _typescript2.default.factory.createIdentifier("buffer")
    ]))("set"), void 0, [
      _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier("Uint8Array"), void 0, [
        input
      ])
    ])),
    _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createIdentifier("buffer"))
  ], true)), "decode_native_buffer");
  const decode_native_data_view = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier("DataView"), void 0, [
    _chunkUUZFPK7Njs.IdentifierFactory.access(input)("buffer")
  ]), "decode_native_data_view");
  const explore_sets = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (input, sets, explore) => _typescript2.default.factory.createCallExpression(_chunk3K5SH635js.UnionExplorer.set({
    checker: _chunkNWMPQT3Jjs.IsProgrammer.decode(project)(importer),
    decoder: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input2, array, explore2) => _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier("Set"), [
      _chunkPK6R5VEJjs.TypeFactory.keyword("any")
    ], [
      decode_array(config)(importer)(input2, array, explore2)
    ]), "decoder"),
    empty: _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier("Set"), [
      _chunkPK6R5VEJjs.TypeFactory.keyword("any")
    ], []),
    success: _typescript2.default.factory.createTrue(),
    failure: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input2, expected) => create_throw_error(importer)(expected)(input2), "failure")
  })([])(input, sets, explore), void 0, void 0), "explore_sets");
  const explore_maps = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (input, maps, explore) => _typescript2.default.factory.createCallExpression(_chunk3K5SH635js.UnionExplorer.map({
    checker: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (top, entry, explore2) => {
      const func = _chunkNWMPQT3Jjs.IsProgrammer.decode(project)(importer);
      return _typescript2.default.factory.createLogicalAnd(func(_typescript2.default.factory.createElementAccessExpression(top, 0), entry[0], {
        ...explore2,
        postfix: `${explore2.postfix}[0]`
      }), func(_typescript2.default.factory.createElementAccessExpression(top, 1), entry[1], {
        ...explore2,
        postfix: `${explore2.postfix}[1]`
      }));
    }, "checker"),
    decoder: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input2, array, explore2) => _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier("Map"), [
      _chunkPK6R5VEJjs.TypeFactory.keyword("any"),
      _chunkPK6R5VEJjs.TypeFactory.keyword("any")
    ], [
      decode_array(config)(importer)(input2, array, explore2)
    ]), "decoder"),
    empty: _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier("Map"), [
      _chunkPK6R5VEJjs.TypeFactory.keyword("any"),
      _chunkPK6R5VEJjs.TypeFactory.keyword("any")
    ], []),
    success: _typescript2.default.factory.createTrue(),
    failure: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input2, expected) => create_throw_error(importer)(expected)(input2), "failure")
  })([])(input, maps, explore), void 0, void 0), "explore_maps");
  const explore_objects = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (config) => (importer) => (input, meta, explore) => {
    if (meta.objects.length === 1) return decode_object(importer)(input, meta.objects[0], explore);
    return _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(importer.useLocal(`${PREFIX}u${meta.union_index}`)), void 0, _chunkFWJ4HRE5js.FeatureProgrammer.argumentsArray(config)(explore)(input));
  }, "explore_objects");
  const explore_arrays = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (input, elements, explore) => explore_array_like_union_types(config)(importer)(_chunk3K5SH635js.UnionExplorer.array({
    checker: _chunkNWMPQT3Jjs.IsProgrammer.decode(project)(importer),
    decoder: decode_array(config)(importer),
    empty: _typescript2.default.factory.createIdentifier("[]"),
    success: _typescript2.default.factory.createTrue(),
    failure: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input2, expected) => create_throw_error(importer)(expected)(input2), "failure")
  }))(input, elements, explore), "explore_arrays");
  const explore_array_like_union_types = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (config) => (importer) => (factory) => (input, elements, explore) => {
    const arrow = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (parameters) => (explore2) => (input2) => factory(parameters)(input2, elements, explore2), "arrow");
    if (elements.every((e) => e.type.recursive === false)) _typescript2.default.factory.createCallExpression(arrow([])(explore)(input), void 0, []);
    explore = {
      ...explore,
      source: "function",
      from: "array"
    };
    return _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(importer.emplaceUnion(config.prefix, elements.map((e) => e.type.name).join(" | "), () => arrow(_chunkFWJ4HRE5js.FeatureProgrammer.parameterDeclarations(config)(_chunkPK6R5VEJjs.TypeFactory.keyword("any"))(_typescript2.default.factory.createIdentifier("input")))({
      ...explore,
      postfix: ""
    })(_typescript2.default.factory.createIdentifier("input")))), void 0, _chunkFWJ4HRE5js.FeatureProgrammer.argumentsArray(config)(explore)(input));
  }, "explore_array_like_union_types");
  const PREFIX = "$c";
  const configure = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (importer) => {
    const config = {
      types: {
        input: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (type, name) => _typescript2.default.factory.createTypeReferenceNode(_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type)))), "input"),
        output: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (type, name) => _typescript2.default.factory.createImportTypeNode(_typescript2.default.factory.createLiteralTypeNode(_typescript2.default.factory.createStringLiteral("typia")), void 0, _typescript2.default.factory.createIdentifier("Resolved"), [
          _typescript2.default.factory.createTypeReferenceNode(_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type))))
        ], false), "output")
      },
      prefix: PREFIX,
      trace: false,
      path: false,
      initializer,
      decoder: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => decode(project)(config)(importer), "decoder"),
      objector: {
        checker: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkNWMPQT3Jjs.IsProgrammer.decode(project)(importer), "checker"),
        decoder: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => decode_object(importer), "decoder"),
        joiner: _chunkLGDPYC5Cjs.CloneJoiner.object,
        unionizer: _chunkTPC3R5ASjs.decode_union_object.call(void 0, _chunkNWMPQT3Jjs.IsProgrammer.decode_object(project)(importer))(decode_object(importer))((exp) => exp)((input, expected) => create_throw_error(importer)(expected)(input)),
        failure: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input, expected) => create_throw_error(importer)(expected)(input), "failure")
      },
      generator: {
        arrays: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => write_array_functions(config)(importer), "arrays"),
        tuples: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => write_tuple_functions(project)(config)(importer), "tuples")
      }
    };
    return config;
  }, "configure");
  const initializer = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (importer) => (type) => {
    const collection = new (0, _chunkERQBF2DGjs.MetadataCollection)();
    const result = _chunk6TJDJHWOjs.MetadataFactory.analyze(project.checker, project.context)({
      escape: false,
      constant: true,
      absorb: true,
      validate: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (meta) => {
        const output = [];
        if (meta.natives.some((n) => n === "WeakSet")) output.push("unable to clone WeakSet");
        else if (meta.natives.some((n) => n === "WeakMap")) output.push("unable to clone WeakMap");
        return output;
      }, "validate")
    })(collection)(type);
    if (result.success === false) throw _chunkH3MUGVKWjs.TransformerError.from(`typia.misc.${importer.method}`)(result.errors);
    return [
      collection,
      result.data
    ];
  }, "initializer");
  const create_throw_error = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (expected) => (value) => _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createCallExpression(importer.use("throws"), [], [
    _typescript2.default.factory.createObjectLiteralExpression([
      _typescript2.default.factory.createPropertyAssignment("expected", _typescript2.default.factory.createStringLiteral(expected)),
      _typescript2.default.factory.createPropertyAssignment("value", value)
    ], true)
  ])), "create_throw_error");
})(MiscCloneProgrammer || (MiscCloneProgrammer = exports.MiscCloneProgrammer = {}));



exports.MiscCloneProgrammer = MiscCloneProgrammer;
//# sourceMappingURL=chunk-VWRA42ZL.js.map