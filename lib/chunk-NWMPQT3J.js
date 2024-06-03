"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkPDHSW2UWjs = require('./chunk-PDHSW2UW.js');


var _chunkTPC3R5ASjs = require('./chunk-TPC3R5AS.js');


var _chunkVLX66HCHjs = require('./chunk-VLX66HCH.js');


var _chunkI6NSYWAVjs = require('./chunk-I6NSYWAV.js');


var _chunkDGWJGIAZjs = require('./chunk-DGWJGIAZ.js');


var _chunkBAWO7PHKjs = require('./chunk-BAWO7PHK.js');


var _chunkK7LGCK5Cjs = require('./chunk-K7LGCK5C.js');


var _chunkNBLB3YSVjs = require('./chunk-NBLB3YSV.js');


var _chunkIANZ5MK3js = require('./chunk-IANZ5MK3.js');


var _chunkCKFIH46Pjs = require('./chunk-CKFIH46P.js');


var _chunkKX6W4A6Gjs = require('./chunk-KX6W4A6G.js');


var _chunkFWJ4HRE5js = require('./chunk-FWJ4HRE5.js');


var _chunkA44UIBYDjs = require('./chunk-A44UIBYD.js');


var _chunk3K5SH635js = require('./chunk-3K5SH635.js');


var _chunkYAAJ76CEjs = require('./chunk-YAAJ76CE.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkISRAPRZNjs = require('./chunk-ISRAPRZN.js');


var _chunkDEEK72LSjs = require('./chunk-DEEK72LS.js');


var _chunkH3MUGVKWjs = require('./chunk-H3MUGVKW.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunk6TJDJHWOjs = require('./chunk-6TJDJHWO.js');


var _chunkSIGOR7QQjs = require('./chunk-SIGOR7QQ.js');


var _chunkUNOXPWQEjs = require('./chunk-UNOXPWQE.js');


var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkERQBF2DGjs = require('./chunk-ERQBF2DG.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/IsProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);

// src/programmers/CheckerProgrammer.ts

var CheckerProgrammer;
(function(CheckerProgrammer2) {
  CheckerProgrammer2.write = (project) => (config) => (importer) => _chunkFWJ4HRE5js.FeatureProgrammer.write(project)(configure(project)(config)(importer))(importer);
  CheckerProgrammer2.write_object_functions = (project) => (config) => (importer) => _chunkFWJ4HRE5js.FeatureProgrammer.write_object_functions(configure(project)(config)(importer))(importer);
  CheckerProgrammer2.write_union_functions = (project) => (config) => (importer) => _chunkFWJ4HRE5js.FeatureProgrammer.write_union_functions(configure(project)({
    ...config,
    numeric: false
  })(importer));
  CheckerProgrammer2.write_array_functions = (project) => (config) => (importer) => (collection) => collection.arrays().filter((a) => a.recursive).map((type, i) => _chunkTYMSCBZGjs.StatementFactory.constant(`${config.prefix}a${i}`, _typescript2.default.factory.createArrowFunction(void 0, void 0, _chunkFWJ4HRE5js.FeatureProgrammer.parameterDeclarations(config)(_chunkPK6R5VEJjs.TypeFactory.keyword("any"))(_typescript2.default.factory.createIdentifier("input")), _chunkPK6R5VEJjs.TypeFactory.keyword("any"), void 0, decode_array_inline(project)(config)(importer)(_typescript2.default.factory.createIdentifier("input"), _chunkUNOXPWQEjs.MetadataArray.create({
    type,
    tags: []
  }), {
    tracable: config.trace,
    source: "function",
    from: "array",
    postfix: ""
  }))));
  CheckerProgrammer2.write_tuple_functions = (project) => (config) => (importer) => (collection) => collection.tuples().filter((t) => t.recursive).map((tuple, i) => _chunkTYMSCBZGjs.StatementFactory.constant(`${config.prefix}t${i}`, _typescript2.default.factory.createArrowFunction(void 0, void 0, _chunkFWJ4HRE5js.FeatureProgrammer.parameterDeclarations(config)(_chunkPK6R5VEJjs.TypeFactory.keyword("any"))(_typescript2.default.factory.createIdentifier("input")), _chunkPK6R5VEJjs.TypeFactory.keyword("any"), void 0, decode_tuple_inline(project)(config)(importer)(_typescript2.default.factory.createIdentifier("input"), tuple, {
    tracable: config.trace,
    source: "function",
    from: "array",
    postfix: ""
  }))));
  const configure = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => ({
    types: {
      input: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkPK6R5VEJjs.TypeFactory.keyword("any"), "input"),
      output: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (type, name) => _typescript2.default.factory.createTypePredicateNode(void 0, "input", _typescript2.default.factory.createTypeReferenceNode(_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type))))), "output")
    },
    trace: config.trace,
    path: config.path,
    prefix: config.prefix,
    initializer: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project2) => (importer2) => (type) => {
      const collection = new (0, _chunkERQBF2DGjs.MetadataCollection)();
      const result = _chunk6TJDJHWOjs.MetadataFactory.analyze(project2.checker, project2.context)({
        escape: false,
        constant: true,
        absorb: true
      })(collection)(type);
      if (result.success === false) throw _chunkH3MUGVKWjs.TransformerError.from(`typia.${importer2.method}`)(result.errors);
      return [
        collection,
        result.data
      ];
    }, "initializer"),
    addition: config.addition,
    decoder: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _nullishCoalesce(_optionalChain([config, 'access', _2 => _2.decoder, 'optionalCall', _3 => _3()]), () => ( CheckerProgrammer2.decode(project)(config)(importer))), "decoder"),
    objector: {
      checker: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _nullishCoalesce(_optionalChain([config, 'access', _4 => _4.decoder, 'optionalCall', _5 => _5()]), () => ( CheckerProgrammer2.decode(project)(config)(importer))), "checker"),
      decoder: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => CheckerProgrammer2.decode_object(config)(importer), "decoder"),
      joiner: config.joiner.object,
      unionizer: config.equals ? _chunkTPC3R5ASjs.decode_union_object.call(void 0, CheckerProgrammer2.decode_object(config)(importer))((input, obj, explore) => CheckerProgrammer2.decode_object(config)(importer)(input, obj, {
        ...explore,
        tracable: true
      }))(_nullishCoalesce(config.joiner.is, () => ( ((expr) => expr))))((value, expected) => _typescript2.default.factory.createReturnStatement(config.joiner.failure(value, expected))) : (input, targets, explore) => config.combiner(explore)("or")(input, targets.map((obj) => ({
        expression: CheckerProgrammer2.decode_object(config)(importer)(input, obj, explore),
        combined: true
      })), `(${targets.map((t) => t.name).join(" | ")})`),
      failure: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value, expected) => _typescript2.default.factory.createReturnStatement(config.joiner.failure(value, expected)), "failure"),
      is: config.joiner.is,
      required: config.joiner.required,
      full: config.joiner.full,
      type: _chunkPK6R5VEJjs.TypeFactory.keyword("boolean")
    },
    generator: {
      unions: config.numeric ? () => _chunkFWJ4HRE5js.FeatureProgrammer.write_union_functions(configure(project)({
        ...config,
        numeric: false
      })(importer)) : void 0,
      arrays: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => CheckerProgrammer2.write_array_functions(project)(config)(importer), "arrays"),
      tuples: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => CheckerProgrammer2.write_tuple_functions(project)(config)(importer), "tuples")
    }
  }), "configure");
  CheckerProgrammer2.decode = (project) => (config) => (importer) => (input, meta, explore) => {
    if (meta.any) return config.success;
    const top = [];
    const binaries = [];
    const add = create_add(binaries)(input);
    const getConstantValue = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => {
      if (typeof value === "string") return _typescript2.default.factory.createStringLiteral(value);
      else if (typeof value === "bigint") return _chunk2F43GCPEjs.ExpressionFactory.bigint(value);
      return _typescript2.default.factory.createIdentifier(value.toString());
    }, "getConstantValue");
    const checkOptional = meta.empty() || meta.isUnionBucket();
    if (checkOptional || meta.nullable) (meta.nullable ? add : create_add(top)(input))(meta.nullable, _chunkISRAPRZNjs.ValueFactory.NULL());
    if (checkOptional || !meta.isRequired()) (meta.isRequired() ? create_add(top)(input) : add)(!meta.isRequired(), _chunkISRAPRZNjs.ValueFactory.UNDEFINED());
    if (meta.functional === true) if (_chunkKX6W4A6Gjs.OptionPredicator.functional(project.options) || meta.size() !== 1) add(true, _typescript2.default.factory.createStringLiteral("function"), _chunkISRAPRZNjs.ValueFactory.TYPEOF(input));
    else binaries.push({
      combined: false,
      expression: config.success
    });
    for (const constant of meta.constants) if (_chunkDEEK72LSjs.AtomicPredicator.constant(meta)(constant.type)) for (const v of constant.values) add(true, getConstantValue(v.value));
    if (meta.escaped !== null) binaries.push({
      combined: false,
      expression: meta.escaped.original.size() === 1 && meta.escaped.original.natives.length === 1 ? _chunkVLX66HCHjs.check_native.call(void 0, meta.escaped.original.natives[0])(input) : _typescript2.default.factory.createLogicalAnd(CheckerProgrammer2.decode(project)(config)(importer)(input, meta.escaped.original, explore), _typescript2.default.factory.createLogicalAnd(IsProgrammer.decode_to_json(false)(input), decode_escaped(project)(config)(importer)(input, meta.escaped.returns, explore)))
    });
    for (const atom of meta.atomics) if (_chunkDEEK72LSjs.AtomicPredicator.atomic(meta)(atom.type) === false) continue;
    else if (atom.type === "number") binaries.push({
      expression: config.atomist(explore)(_chunkBAWO7PHKjs.check_number.call(void 0, project, config.numeric)(atom)(input))(input),
      combined: false
    });
    else if (atom.type === "bigint") binaries.push({
      expression: config.atomist(explore)(_chunkIANZ5MK3js.check_bigint.call(void 0, project)(atom)(input))(input),
      combined: false
    });
    else if (atom.type === "string") binaries.push({
      expression: config.atomist(explore)(_chunkK7LGCK5Cjs.check_string.call(void 0, project)(atom)(input))(input),
      combined: false
    });
    else add(true, _typescript2.default.factory.createStringLiteral(atom.type), _chunkISRAPRZNjs.ValueFactory.TYPEOF(input));
    if (meta.templates.length) {
      if (_chunkDEEK72LSjs.AtomicPredicator.template(meta)) binaries.push({
        expression: config.atomist(explore)(_chunkNBLB3YSVjs.check_template.call(void 0, meta.templates)(input))(input),
        combined: false
      });
    }
    for (const native of meta.natives) binaries.push({
      expression: _chunkVLX66HCHjs.check_native.call(void 0, native)(input),
      combined: false
    });
    const instances = [];
    const prepare = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (pre, expected) => (body) => instances.push({
      pre,
      expected,
      body
    }), "prepare");
    if (meta.sets.length) {
      const install = prepare(_chunkVLX66HCHjs.check_native.call(void 0, "Set")(input), meta.sets.map((elem) => `Set<${elem.getName()}>`).join(" | "));
      if (meta.sets.some((elem) => elem.any)) install(null);
      else install(explore_sets(project)(config)(importer)(input, meta.sets, {
        ...explore,
        from: "array"
      }));
    }
    if (meta.maps.length) {
      const install = prepare(_chunkVLX66HCHjs.check_native.call(void 0, "Map")(input), meta.maps.map(({ key, value }) => `Map<${key}, ${value}>`).join(" | "));
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
        expression: _chunk2F43GCPEjs.ExpressionFactory.isArray(input),
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
    if (meta.objects.length > 0) prepare(_chunk2F43GCPEjs.ExpressionFactory.isObject({
      checkNull: true,
      checkArray: meta.objects.some((obj) => obj.properties.every((prop) => !prop.key.isSoleLiteral() || !prop.value.isRequired()))
    })(input), meta.objects.map((obj) => obj.name).join(" | "))(explore_objects(config)(importer)(input, meta, {
      ...explore,
      from: "object"
    }));
    if (instances.length) {
      const transformer = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (merger) => (ins) => ins.body ? {
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
        expression: config.combiner(explore)("or")(input, instances.map(transformer(_typescript2.default.factory.createLogicalAnd)), meta.getName()),
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
    const func = _chunkFWJ4HRE5js.FeatureProgrammer.decode_object(config)(importer);
    return (input, obj, explore) => {
      obj.validated = true;
      return func(input, obj, explore);
    };
  };
  const decode_array = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (input, array, explore) => {
    if (array.type.recursive === false) return decode_array_inline(project)(config)(importer)(input, array, explore);
    explore = {
      ...explore,
      source: "function",
      from: "array"
    };
    return _typescript2.default.factory.createLogicalOr(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(importer.useLocal(`${config.prefix}a${array.type.index}`)), void 0, _chunkFWJ4HRE5js.FeatureProgrammer.argumentsArray(config)({
      ...explore,
      source: "function",
      from: "array"
    })(input)), config.joiner.failure(input, array.type.name, explore));
  }, "decode_array");
  const decode_array_inline = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (input, array, explore) => {
    const length = _chunkDGWJGIAZjs.check_array_length.call(void 0, project)(array)(input);
    const main = _chunkFWJ4HRE5js.FeatureProgrammer.decode_array({
      prefix: config.prefix,
      trace: config.trace,
      path: config.path,
      decoder: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => CheckerProgrammer2.decode(project)(config)(importer), "decoder")
    })(importer)(config.joiner.array)(input, array, explore);
    return length.expression === null && length.conditions.length === 0 ? main : _typescript2.default.factory.createLogicalAnd(config.atomist(explore)(length)(input), main);
  }, "decode_array_inline");
  const decode_tuple = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (input, tuple, explore) => {
    if (tuple.type.recursive === false) return decode_tuple_inline(project)(config)(importer)(input, tuple.type, explore);
    explore = {
      ...explore,
      source: "function",
      from: "array"
    };
    return _typescript2.default.factory.createLogicalOr(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(importer.useLocal(`${config.prefix}t${tuple.type.index}`)), void 0, _chunkFWJ4HRE5js.FeatureProgrammer.argumentsArray(config)({
      ...explore,
      source: "function"
    })(input)), config.joiner.failure(input, tuple.type.name, explore));
  }, "decode_tuple");
  const decode_tuple_inline = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (input, tuple, explore) => {
    const binaries = tuple.elements.filter((meta) => meta.rest === null).map((meta, index) => CheckerProgrammer2.decode(project)(config)(importer)(_typescript2.default.factory.createElementAccessExpression(input, index), meta, {
      ...explore,
      from: "array",
      postfix: explore.postfix.length ? `${explore.postfix.slice(0, -1)}[${index}]"` : `"[${index}]"`
    }));
    const rest = tuple.elements.length && tuple.elements.at(-1).rest !== null ? CheckerProgrammer2.decode(project)(config)(importer)(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(input)("slice"), void 0, [
      _chunk2F43GCPEjs.ExpressionFactory.number(tuple.elements.length - 1)
    ]), _chunkPDHSW2UWjs.wrap_metadata_rest_tuple.call(void 0, tuple.elements.at(-1).rest), {
      ...explore,
      start: tuple.elements.length - 1
    }) : null;
    const arrayLength = _typescript2.default.factory.createPropertyAccessExpression(input, "length");
    return config.combiner(explore)("and")(input, [
      ...rest === null ? tuple.elements.every((t) => t.optional === false) ? [
        {
          combined: false,
          expression: _typescript2.default.factory.createStrictEquality(arrayLength, _chunk2F43GCPEjs.ExpressionFactory.number(tuple.elements.length))
        }
      ] : [
        {
          combined: false,
          expression: _typescript2.default.factory.createLogicalAnd(_typescript2.default.factory.createLessThanEquals(_chunk2F43GCPEjs.ExpressionFactory.number(tuple.elements.filter((t) => t.optional === false).length), arrayLength), _typescript2.default.factory.createGreaterThanEquals(_chunk2F43GCPEjs.ExpressionFactory.number(tuple.elements.length), arrayLength))
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
  const decode_escaped = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (input, meta, explore) => _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createParenthesizedExpression(_typescript2.default.factory.createArrowFunction(void 0, void 0, [
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("input", _chunkPK6R5VEJjs.TypeFactory.keyword("any"))
  ], void 0, void 0, CheckerProgrammer2.decode(project)(config)(importer)(_typescript2.default.factory.createIdentifier("input"), meta, explore))), void 0, [
    _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(input)("toJSON"), void 0, [])
  ]), "decode_escaped");
  const explore_sets = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (input, sets, explore) => _typescript2.default.factory.createCallExpression(_chunk3K5SH635js.UnionExplorer.set({
    checker: CheckerProgrammer2.decode(project)(config)(importer),
    decoder: decode_array(project)(config)(importer),
    empty: config.success,
    success: config.success,
    failure: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input2, expected, explore2) => _typescript2.default.factory.createReturnStatement(config.joiner.failure(input2, expected, explore2)), "failure")
  })([])(input, sets, explore), void 0, void 0), "explore_sets");
  const explore_maps = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (input, maps, explore) => _typescript2.default.factory.createCallExpression(_chunk3K5SH635js.UnionExplorer.map({
    checker: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input2, entry, explore2) => {
      const func = CheckerProgrammer2.decode(project)(config)(importer);
      return _typescript2.default.factory.createLogicalAnd(func(_typescript2.default.factory.createElementAccessExpression(input2, 0), entry[0], {
        ...explore2,
        postfix: `${explore2.postfix}[0]`
      }), func(_typescript2.default.factory.createElementAccessExpression(input2, 1), entry[1], {
        ...explore2,
        postfix: `${explore2.postfix}[1]`
      }));
    }, "checker"),
    decoder: decode_array(project)(config)(importer),
    empty: config.success,
    success: config.success,
    failure: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input2, expected, explore2) => _typescript2.default.factory.createReturnStatement(config.joiner.failure(input2, expected, explore2)), "failure")
  })([])(input, maps, explore), void 0, void 0), "explore_maps");
  const explore_tuples = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (input, tuples, explore) => explore_array_like_union_types(config)(importer)(_chunk3K5SH635js.UnionExplorer.tuple({
    checker: decode_tuple(project)(config)(importer),
    decoder: decode_tuple(project)(config)(importer),
    empty: config.success,
    success: config.success,
    failure: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input2, expected, explore2) => _typescript2.default.factory.createReturnStatement(config.joiner.failure(input2, expected, explore2)), "failure")
  }))(input, tuples, explore), "explore_tuples");
  const explore_arrays = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (input, arrays, explore) => explore_array_like_union_types(config)(importer)(_chunk3K5SH635js.UnionExplorer.array({
    checker: CheckerProgrammer2.decode(project)(config)(importer),
    decoder: decode_array(project)(config)(importer),
    empty: config.success,
    success: config.success,
    failure: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input2, expected, explore2) => _typescript2.default.factory.createReturnStatement(config.joiner.failure(input2, expected, explore2)), "failure")
  }))(input, arrays, explore), "explore_arrays");
  const explore_arrays_and_tuples = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (config) => (importer) => (input, elements, explore) => explore_array_like_union_types(config)(importer)(_chunk3K5SH635js.UnionExplorer.array_or_tuple({
    checker: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (front, target, explore2, array) => target instanceof _chunkSIGOR7QQjs.MetadataTuple ? decode_tuple(project)(config)(importer)(front, target, explore2) : config.atomist(explore2)({
      expected: elements.map((elem) => elem instanceof _chunkUNOXPWQEjs.MetadataArray ? elem.getName() : elem.type.name).join(" | "),
      expression: CheckerProgrammer2.decode(project)(config)(importer)(front, target, explore2),
      conditions: []
    })(array), "checker"),
    decoder: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input2, target, explore2) => target instanceof _chunkSIGOR7QQjs.MetadataTuple ? decode_tuple(project)(config)(importer)(input2, target, explore2) : decode_array(project)(config)(importer)(input2, target, explore2), "decoder"),
    empty: config.success,
    success: config.success,
    failure: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input2, expected, explore2) => _typescript2.default.factory.createReturnStatement(config.joiner.failure(input2, expected, explore2)), "failure")
  }))(input, elements, explore), "explore_arrays_and_tuples");
  const explore_array_like_union_types = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (config) => (importer) => (factory) => (input, elements, explore) => {
    const arrow = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (parameters) => (explore2) => (input2) => factory(parameters)(input2, elements, explore2), "arrow");
    if (elements.every((e) => e.type.recursive === false)) _typescript2.default.factory.createCallExpression(arrow([])(explore)(input), void 0, []);
    explore = {
      ...explore,
      source: "function",
      from: "array"
    };
    return _typescript2.default.factory.createLogicalOr(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(importer.emplaceUnion(config.prefix, elements.map((e) => e.type.name).join(" | "), () => arrow(_chunkFWJ4HRE5js.FeatureProgrammer.parameterDeclarations(config)(_chunkPK6R5VEJjs.TypeFactory.keyword("any"))(_typescript2.default.factory.createIdentifier("input")))({
      ...explore,
      postfix: ""
    })(_typescript2.default.factory.createIdentifier("input")))), void 0, _chunkFWJ4HRE5js.FeatureProgrammer.argumentsArray(config)(explore)(input)), config.joiner.failure(input, elements.map((e) => e.type.name).join(" | "), explore));
  }, "explore_array_like_union_types");
  const explore_objects = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (config) => (importer) => (input, meta, explore) => meta.objects.length === 1 ? CheckerProgrammer2.decode_object(config)(importer)(input, meta.objects[0], explore) : _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(importer.useLocal(`${config.prefix}u${meta.union_index}`)), void 0, _chunkFWJ4HRE5js.FeatureProgrammer.argumentsArray(config)(explore)(input)), "explore_objects");
})(CheckerProgrammer || (CheckerProgrammer = exports.CheckerProgrammer = {}));
var create_add = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (binaries) => (defaultInput) => (exact, left, right = defaultInput) => {
  const factory = exact ? _typescript2.default.factory.createStrictEquality : _typescript2.default.factory.createStrictInequality;
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
    equals: !!_optionalChain([options, 'optionalAccess', _6 => _6.object]),
    trace: false,
    path: false,
    numeric: _chunkKX6W4A6Gjs.OptionPredicator.numeric({
      numeric: _optionalChain([options, 'optionalAccess', _7 => _7.numeric])
    }),
    atomist: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => (entry) => () => [
      ...entry.expression ? [
        entry.expression
      ] : [],
      ...entry.conditions.length === 0 ? [] : [
        entry.conditions.map((set) => set.map((s) => s.expression).reduce((a, b) => _typescript2.default.factory.createLogicalAnd(a, b))).reduce((a, b) => _typescript2.default.factory.createLogicalOr(a, b))
      ]
    ].reduce((x, y) => _typescript2.default.factory.createLogicalAnd(x, y)), "atomist"),
    combiner: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => (type) => {
      const initial = type === "and" ? _typescript2.default.factory.createTrue() : _typescript2.default.factory.createFalse();
      const binder = type === "and" ? _typescript2.default.factory.createLogicalAnd : _typescript2.default.factory.createLogicalOr;
      return (_input, binaries) => binaries.length ? binaries.map((binary) => binary.expression).reduce((x, y) => binder(x, y)) : initial;
    }, "combiner"),
    joiner: {
      object: _optionalChain([options, 'optionalAccess', _8 => _8.object]) || _chunkI6NSYWAVjs.check_object.call(void 0, {
        equals: !!_optionalChain([options, 'optionalAccess', _9 => _9.object]),
        undefined: _chunkKX6W4A6Gjs.OptionPredicator.undefined({
          undefined: _optionalChain([options, 'optionalAccess', _10 => _10.undefined])
        }),
        assert: true,
        reduce: _typescript2.default.factory.createLogicalAnd,
        positive: _typescript2.default.factory.createTrue(),
        superfluous: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _typescript2.default.factory.createFalse(), "superfluous")
      })(project)(importer),
      array: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input, arrow) => _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(input)("every"), void 0, [
        arrow
      ]), "array"),
      failure: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _typescript2.default.factory.createFalse(), "failure")
    },
    success: _typescript2.default.factory.createTrue()
  });
  IsProgrammer2.write = (project) => (modulo, disable) => (equals) => {
    const importer = disable === {} ? _chunkCKFIH46Pjs.disable_function_importer_declare.call(void 0, new (0, _chunkYAAJ76CEjs.FunctionImporter)(modulo.getText())) : new (0, _chunkYAAJ76CEjs.FunctionImporter)(modulo.getText());
    const config = {
      ...IsProgrammer2.configure({
        object: _chunkI6NSYWAVjs.check_object.call(void 0, {
          equals,
          undefined: _chunkKX6W4A6Gjs.OptionPredicator.undefined(project.options),
          assert: true,
          reduce: _typescript2.default.factory.createLogicalAnd,
          positive: _typescript2.default.factory.createTrue(),
          superfluous: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _typescript2.default.factory.createFalse(), "superfluous")
        })(project)(importer),
        numeric: _chunkKX6W4A6Gjs.OptionPredicator.numeric(project.options)
      })(project)(importer),
      trace: equals,
      addition: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => importer.declare(modulo), "addition")
    };
    config.decoder = () => (input, target, explore) => {
      if (target.size() === 1 && target.objects.length === 1 && target.isRequired() === true && target.nullable === false) {
        const obj = target.objects[0];
        if (obj._Is_simple(explore.from === "top" ? 0 : 1) && (equals === false || _chunkKX6W4A6Gjs.OptionPredicator.undefined(project.options) === false)) return _typescript2.default.factory.createLogicalAnd(_chunk2F43GCPEjs.ExpressionFactory.isObject({
          checkNull: true,
          checkArray: false
        })(input), config.joiner.object(_typescript2.default.factory.createAsExpression(input, _chunkPK6R5VEJjs.TypeFactory.keyword("any")), _chunkA44UIBYDjs.feature_object_entries.call(void 0, config)(importer)(obj)(_typescript2.default.factory.createAsExpression(input, _chunkPK6R5VEJjs.TypeFactory.keyword("any")), "top")));
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
  IsProgrammer2.decode_to_json = (checkNull) => (input) => _typescript2.default.factory.createLogicalAnd(_chunk2F43GCPEjs.ExpressionFactory.isObject({
    checkArray: false,
    checkNull
  })(input), _typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral("function"), _chunkISRAPRZNjs.ValueFactory.TYPEOF(_chunkUUZFPK7Njs.IdentifierFactory.access(input)("toJSON"))));
  IsProgrammer2.decode_functional = (input) => _typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral("function"), _chunkISRAPRZNjs.ValueFactory.TYPEOF(input));
})(IsProgrammer || (IsProgrammer = exports.IsProgrammer = {}));




exports.IsProgrammer = IsProgrammer; exports.CheckerProgrammer = CheckerProgrammer;
//# sourceMappingURL=chunk-NWMPQT3J.js.map