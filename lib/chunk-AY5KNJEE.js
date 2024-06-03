"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunkT737HXFGjs = require('./chunk-T737HXFG.js');


var _chunkXRBU5EI4js = require('./chunk-XRBU5EI4.js');


var _chunkNWMPQT3Jjs = require('./chunk-NWMPQT3J.js');


var _chunkPDHSW2UWjs = require('./chunk-PDHSW2UW.js');


var _chunkTPC3R5ASjs = require('./chunk-TPC3R5AS.js');


var _chunkVLX66HCHjs = require('./chunk-VLX66HCH.js');


var _chunkKX6W4A6Gjs = require('./chunk-KX6W4A6G.js');


var _chunkFWJ4HRE5js = require('./chunk-FWJ4HRE5.js');


var _chunkA44UIBYDjs = require('./chunk-A44UIBYD.js');


var _chunk3K5SH635js = require('./chunk-3K5SH635.js');


var _chunkYAAJ76CEjs = require('./chunk-YAAJ76CE.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkISRAPRZNjs = require('./chunk-ISRAPRZN.js');


var _chunkNJB6XWLNjs = require('./chunk-NJB6XWLN.js');


var _chunkDEEK72LSjs = require('./chunk-DEEK72LS.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunk6GHU2XFNjs = require('./chunk-6GHU2XFN.js');


var _chunkTBFJDOPAjs = require('./chunk-TBFJDOPA.js');


var _chunkUNOXPWQEjs = require('./chunk-UNOXPWQE.js');


var _chunkA7ORGSGMjs = require('./chunk-A7ORGSGM.js');


var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/json/JsonStringifyProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var JsonStringifyProgrammer;
(function(JsonStringifyProgrammer2) {
  JsonStringifyProgrammer2.write = (project) => (modulo) => {
    const importer = new (0, _chunkYAAJ76CEjs.FunctionImporter)(modulo.getText());
    const config = configure(project)(importer);
    return _chunkFWJ4HRE5js.FeatureProgrammer.write(project)({
      ...config,
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
    if (meta.any === true) return wrap_required(input, meta, explore)(wrap_functional(input, meta, explore)(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("JSON.stringify"), void 0, [
      input
    ])));
    const size = meta.size();
    if (size === 0 && (meta.isRequired() === false || meta.nullable === true)) {
      if (meta.isRequired() === false && meta.nullable === true) return explore.from === "array" ? _typescript2.default.factory.createStringLiteral("null") : _typescript2.default.factory.createConditionalExpression(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createNull(), input), void 0, _typescript2.default.factory.createStringLiteral("null"), void 0, _typescript2.default.factory.createIdentifier("undefined"));
      else if (meta.isRequired() === false) return explore.from === "array" ? _typescript2.default.factory.createStringLiteral("null") : _typescript2.default.factory.createIdentifier("undefined");
      else return _typescript2.default.factory.createStringLiteral("null");
    }
    const unions = [];
    if (meta.escaped !== null) unions.push({
      type: "resolved",
      is: meta.escaped.original.size() === 1 && meta.escaped.original.natives[0] === "Date" ? () => _chunkVLX66HCHjs.check_native.call(void 0, "Date")(input) : () => _chunkNWMPQT3Jjs.IsProgrammer.decode_to_json(false)(input),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => decode_to_json(project)(config)(importer)(input, meta.escaped.returns, explore), "value")
    });
    else if (meta.functional === true) unions.push({
      type: "functional",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkNWMPQT3Jjs.IsProgrammer.decode_functional(input), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => decode_functional(explore), "value")
    });
    if (meta.templates.length || _chunkA7ORGSGMjs.ArrayUtil.has(meta.constants, (c) => c.type === "string")) {
      if (_chunkDEEK72LSjs.AtomicPredicator.template(meta)) {
        const partial = _chunk6GHU2XFNjs.Metadata.initialize();
        partial.atomics.push(_chunkTBFJDOPAjs.MetadataAtomic.create({
          type: "string",
          tags: []
        })), unions.push({
          type: "template literal",
          is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkNWMPQT3Jjs.IsProgrammer.decode(project)(importer)(input, partial, explore), "is"),
          value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => decode_atomic(project)(importer)(input, "string", explore), "value")
        });
      }
    }
    for (const constant of meta.constants) if (_chunkDEEK72LSjs.AtomicPredicator.constant(meta)(constant.type) === false) continue;
    else if (constant.type !== "string") unions.push({
      type: "atomic",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkNWMPQT3Jjs.IsProgrammer.decode(project)(importer)(input, (() => {
        const partial = _chunk6GHU2XFNjs.Metadata.initialize();
        partial.atomics.push(_chunkTBFJDOPAjs.MetadataAtomic.create({
          type: constant.type,
          tags: []
        }));
        return partial;
      })(), explore), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => decode_atomic(project)(importer)(input, constant.type, explore), "value")
    });
    else if (meta.templates.length === 0) unions.push({
      type: "const string",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkNWMPQT3Jjs.IsProgrammer.decode(project)(importer)(input, (() => {
        const partial = _chunk6GHU2XFNjs.Metadata.initialize();
        partial.atomics.push(_chunkTBFJDOPAjs.MetadataAtomic.create({
          type: "string",
          tags: []
        }));
        return partial;
      })(), explore), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => decode_constant_string(project)(importer)(input, [
        ...constant.values.map((v) => v.value)
      ], explore), "value")
    });
    for (const a of meta.atomics) if (_chunkDEEK72LSjs.AtomicPredicator.atomic(meta)(a.type)) unions.push({
      type: "atomic",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkNWMPQT3Jjs.IsProgrammer.decode(project)(importer)(input, (() => {
        const partial = _chunk6GHU2XFNjs.Metadata.initialize();
        partial.atomics.push(a);
        return partial;
      })(), explore), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => decode_atomic(project)(importer)(input, a.type, explore), "value")
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
    if (meta.arrays.length) {
      const value = meta.arrays.length === 1 ? () => decode_array(config)(importer)(input, meta.arrays[0], {
        ...explore,
        from: "array"
      }) : meta.arrays.some((elem) => elem.type.value.any) ? () => _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("JSON.stringify"), void 0, [
        input
      ]) : () => explore_arrays(project)(config)(importer)(input, meta.arrays, {
        ...explore,
        from: "array"
      });
      unions.push({
        type: "array",
        is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk2F43GCPEjs.ExpressionFactory.isArray(input), "is"),
        value
      });
    }
    if (meta.natives.length) for (const native of meta.natives) unions.push({
      type: "object",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkVLX66HCHjs.check_native.call(void 0, native)(input), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkDEEK72LSjs.AtomicPredicator.native(native) ? decode_atomic(project)(importer)(input, native.toLowerCase(), explore) : _typescript2.default.factory.createStringLiteral("{}"), "value")
    });
    if (meta.sets.length) unions.push({
      type: "object",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk2F43GCPEjs.ExpressionFactory.isInstanceOf("Set")(input), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _typescript2.default.factory.createStringLiteral("{}"), "value")
    });
    if (meta.maps.length) unions.push({
      type: "object",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk2F43GCPEjs.ExpressionFactory.isInstanceOf("Map")(input), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _typescript2.default.factory.createStringLiteral("{}"), "value")
    });
    if (meta.objects.length) unions.push({
      type: "object",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk2F43GCPEjs.ExpressionFactory.isObject({
        checkNull: true,
        checkArray: meta.objects.some((obj) => obj.properties.every((prop) => !prop.key.isSoleLiteral() || !prop.value.isRequired()))
      })(input), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => meta.isParentResolved() === false && meta.objects.length === 1 && meta.objects[0]._Is_simple(explore.from === "top" ? 0 : 1) ? (() => {
        const obj = meta.objects[0];
        const entries = _chunkA44UIBYDjs.feature_object_entries.call(void 0, {
          decoder: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => decode(project)(config)(importer), "decoder"),
          trace: false,
          path: false
        })(importer)(obj)(_typescript2.default.factory.createAsExpression(input, _chunkPK6R5VEJjs.TypeFactory.keyword("any")));
        return _chunkT737HXFGjs.StringifyJoiner.object(importer)(_typescript2.default.factory.createAsExpression(input, _chunkPK6R5VEJjs.TypeFactory.keyword("any")), entries);
      })() : explore_objects(config)(importer)(input, meta, {
        ...explore,
        from: "object"
      }), "value")
    });
    const wrapper = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (output) => wrap_required(input, meta, explore)(wrap_nullable(input, meta)(output)), "wrapper");
    if (unions.length === 0) return _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("JSON.stringify"), void 0, [
      input
    ]);
    else if (unions.length === 1) return wrapper(unions[0].value());
    return wrapper(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createArrowFunction(void 0, void 0, [], void 0, void 0, iterate(importer, input, unions, meta.getName())), void 0, void 0));
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
  const decode_array_inline = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (config) => (importer) => (input, array, explore) => _chunkFWJ4HRE5js.FeatureProgrammer.decode_array(config)(importer)(_chunkT737HXFGjs.StringifyJoiner.array)(input, array, explore), "decode_array_inline");
  const decode_tuple = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (input, tuple, explore) => tuple.type.recursive ? _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(importer.useLocal(`${config.prefix}t${tuple.type.index}`)), void 0, _chunkFWJ4HRE5js.FeatureProgrammer.argumentsArray(config)({
    ...explore,
    source: "function"
  })(input)) : decode_tuple_inline(project)(config)(importer)(input, tuple.type, explore), "decode_tuple");
  const decode_tuple_inline = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (input, tuple, explore) => {
    const children = tuple.elements.filter((elem) => elem.rest === null).map((elem, index) => decode(project)(config)(importer)(_typescript2.default.factory.createElementAccessExpression(input, index), elem, {
      ...explore,
      from: "array",
      postfix: explore.postfix.length ? `${explore.postfix.slice(0, -1)}[${index}]"` : `"[${index}]"`
    }));
    const rest = (() => {
      if (tuple.elements.length === 0) return null;
      const last = tuple.elements.at(-1);
      if (last.rest === null) return null;
      const code = decode(project)(config)(importer)(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(input)("slice"), void 0, [
        _chunk2F43GCPEjs.ExpressionFactory.number(tuple.elements.length - 1)
      ]), _chunkPDHSW2UWjs.wrap_metadata_rest_tuple.call(void 0, tuple.elements.at(-1).rest), {
        ...explore,
        start: tuple.elements.length - 1
      });
      return _typescript2.default.factory.createCallExpression(importer.use("rest"), void 0, [
        code
      ]);
    })();
    return _chunkT737HXFGjs.StringifyJoiner.tuple(children, rest);
  }, "decode_tuple_inline");
  const decode_atomic = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (importer) => (input, type, explore) => {
    if (type === "string") return _typescript2.default.factory.createCallExpression(importer.use("string"), void 0, [
      input
    ]);
    else if (type === "number" && _chunkKX6W4A6Gjs.OptionPredicator.numeric(project.options)) input = _typescript2.default.factory.createCallExpression(importer.use("number"), void 0, [
      input
    ]);
    return explore.from !== "top" ? input : _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(input)("toString"), void 0, void 0);
  }, "decode_atomic");
  const decode_constant_string = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (importer) => (input, values, explore) => {
    if (values.every((v) => !_chunkXRBU5EI4js.StringifyPredicator.require_escape(v))) return [
      _typescript2.default.factory.createStringLiteral('"'),
      input,
      _typescript2.default.factory.createStringLiteral('"')
    ].reduce((x, y) => _typescript2.default.factory.createAdd(x, y));
    else return decode_atomic(project)(importer)(input, "string", explore);
  }, "decode_constant_string");
  const decode_to_json = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (input, resolved, explore) => {
    return decode(project)(config)(importer)(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(input)("toJSON"), void 0, []), resolved, explore);
  }, "decode_to_json");
  const decode_functional = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (explore) => explore.from === "array" ? _typescript2.default.factory.createStringLiteral("null") : _typescript2.default.factory.createIdentifier("undefined"), "decode_functional");
  const explore_objects = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (config) => (importer) => (input, meta, explore) => meta.objects.length === 1 ? decode_object(importer)(input, meta.objects[0], explore) : _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(importer.useLocal(`${PREFIX}u${meta.union_index}`)), void 0, _chunkFWJ4HRE5js.FeatureProgrammer.argumentsArray(config)(explore)(input)), "explore_objects");
  const explore_arrays = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (input, elements, explore) => explore_array_like_union_types(config)(importer)(_chunk3K5SH635js.UnionExplorer.array({
    checker: _chunkNWMPQT3Jjs.IsProgrammer.decode(project)(importer),
    decoder: decode_array(config)(importer),
    empty: _typescript2.default.factory.createStringLiteral("[]"),
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
  const wrap_required = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input, meta, explore) => {
    if (meta.isRequired() === true && meta.any === false) return (expression) => expression;
    return (expression) => _typescript2.default.factory.createConditionalExpression(_typescript2.default.factory.createStrictInequality(_typescript2.default.factory.createIdentifier("undefined"), input), void 0, expression, void 0, explore.from === "array" ? _typescript2.default.factory.createStringLiteral("null") : _typescript2.default.factory.createIdentifier("undefined"));
  }, "wrap_required");
  const wrap_nullable = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input, meta) => {
    if (meta.nullable === false) return (expression) => expression;
    return (expression) => _typescript2.default.factory.createConditionalExpression(_typescript2.default.factory.createStrictInequality(_typescript2.default.factory.createNull(), input), void 0, expression, void 0, _typescript2.default.factory.createStringLiteral("null"));
  }, "wrap_nullable");
  const wrap_functional = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input, meta, explore) => {
    if (meta.functional === false) return (expression) => expression;
    return (expression) => _typescript2.default.factory.createConditionalExpression(_typescript2.default.factory.createStrictInequality(_typescript2.default.factory.createStringLiteral("function"), _chunkISRAPRZNjs.ValueFactory.TYPEOF(input)), void 0, expression, void 0, decode_functional(explore));
  }, "wrap_functional");
  const iterate = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer, input, unions, expected) => _typescript2.default.factory.createBlock([
    ...unions.map((u) => _typescript2.default.factory.createIfStatement(u.is(), _typescript2.default.factory.createReturnStatement(u.value()))),
    create_throw_error(importer)(expected)(input)
  ], true), "iterate");
  const PREFIX = "$s";
  const configure = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (importer) => {
    const config = {
      types: {
        input: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (type, name) => _typescript2.default.factory.createTypeReferenceNode(_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type)))), "input"),
        output: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkPK6R5VEJjs.TypeFactory.keyword("string"), "output")
      },
      prefix: PREFIX,
      trace: false,
      path: false,
      initializer,
      decoder: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => decode(project)(config)(importer), "decoder"),
      objector: {
        checker: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => (input, meta, explore) => _chunkNWMPQT3Jjs.IsProgrammer.decode(project)(importer)(input, meta, explore), "checker"),
        decoder: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => decode_object(importer), "decoder"),
        joiner: _chunkT737HXFGjs.StringifyJoiner.object(importer),
        unionizer: _chunkTPC3R5ASjs.decode_union_object.call(void 0, _chunkNWMPQT3Jjs.IsProgrammer.decode_object(project)(importer))(decode_object(importer))((exp) => exp)((value, expected) => create_throw_error(importer)(expected)(value)),
        failure: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input, expected) => create_throw_error(importer)(expected)(input), "failure")
      },
      generator: {
        arrays: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => write_array_functions(config)(importer), "arrays"),
        tuples: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => write_tuple_functions(project)(config)(importer), "tuples")
      }
    };
    return config;
  }, "configure");
  const initializer = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (importer) => (type) => _chunkNJB6XWLNjs.JsonMetadataFactory.analyze(`typia.json.${importer.method}`)(project.checker, project.context)(type), "initializer");
  const create_throw_error = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (expected) => (value) => _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createCallExpression(importer.use("throws"), [], [
    _typescript2.default.factory.createObjectLiteralExpression([
      _typescript2.default.factory.createPropertyAssignment("expected", _typescript2.default.factory.createStringLiteral(expected)),
      _typescript2.default.factory.createPropertyAssignment("value", value)
    ], true)
  ])), "create_throw_error");
})(JsonStringifyProgrammer || (JsonStringifyProgrammer = exports.JsonStringifyProgrammer = {}));



exports.JsonStringifyProgrammer = JsonStringifyProgrammer;
//# sourceMappingURL=chunk-AY5KNJEE.js.map