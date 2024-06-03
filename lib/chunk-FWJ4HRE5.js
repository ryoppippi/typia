"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkA44UIBYDjs = require('./chunk-A44UIBYD.js');


var _chunk3K5SH635js = require('./chunk-3K5SH635.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkISRAPRZNjs = require('./chunk-ISRAPRZN.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/FeatureProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var FeatureProgrammer;
(function(FeatureProgrammer2) {
  FeatureProgrammer2.write = (project) => (config) => (importer) => (type, name) => {
    const [collection, meta] = config.initializer(project)(importer)(type);
    const output = config.decoder()(_chunkISRAPRZNjs.ValueFactory.INPUT(), meta, {
      tracable: config.path || config.trace,
      source: "top",
      from: "top",
      postfix: '""'
    });
    const functions = {
      objects: (_nullishCoalesce(_optionalChain([config, 'access', _2 => _2.generator, 'access', _3 => _3.objects, 'optionalCall', _4 => _4()]), () => ( FeatureProgrammer2.write_object_functions(config)(importer))))(collection),
      unions: (_nullishCoalesce(_optionalChain([config, 'access', _5 => _5.generator, 'access', _6 => _6.unions, 'optionalCall', _7 => _7()]), () => ( FeatureProgrammer2.write_union_functions(config))))(collection),
      arrays: config.generator.arrays()(collection),
      tuples: config.generator.tuples()(collection)
    };
    const added = (_nullishCoalesce(config.addition, () => ( (() => []))))(collection);
    return _typescript2.default.factory.createArrowFunction(void 0, void 0, FeatureProgrammer2.parameterDeclarations(config)(config.types.input(type, name))(_chunkISRAPRZNjs.ValueFactory.INPUT()), config.types.output(type, name), void 0, _typescript2.default.factory.createBlock([
      ...added,
      ...functions.objects.filter((_, i) => importer.hasLocal(`${config.prefix}o${i}`)),
      ...functions.unions.filter((_, i) => importer.hasLocal(`${config.prefix}u${i}`)),
      ...functions.arrays.filter((_, i) => importer.hasLocal(`${config.prefix}a${i}`)),
      ...functions.tuples.filter((_, i) => importer.hasLocal(`${config.prefix}t${i}`)),
      ..._typescript2.default.isBlock(output) ? output.statements : [
        _typescript2.default.factory.createReturnStatement(output)
      ]
    ], true));
  };
  FeatureProgrammer2.write_object_functions = (config) => (importer) => (collection) => collection.objects().map((obj) => _chunkTYMSCBZGjs.StatementFactory.constant(`${config.prefix}o${obj.index}`, _typescript2.default.factory.createArrowFunction(void 0, void 0, FeatureProgrammer2.parameterDeclarations(config)(_chunkPK6R5VEJjs.TypeFactory.keyword("any"))(_chunkISRAPRZNjs.ValueFactory.INPUT()), _nullishCoalesce(config.objector.type, () => ( _chunkPK6R5VEJjs.TypeFactory.keyword("any"))), void 0, config.objector.joiner(_typescript2.default.factory.createIdentifier("input"), _chunkA44UIBYDjs.feature_object_entries.call(void 0, config)(importer)(obj)(_typescript2.default.factory.createIdentifier("input")), obj))));
  FeatureProgrammer2.write_union_functions = (config) => (collection) => collection.unions().map((union, i) => _chunkTYMSCBZGjs.StatementFactory.constant(`${config.prefix}u${i}`, write_union(config)(union)));
  const write_union = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (config) => {
    const explorer = _chunk3K5SH635js.UnionExplorer.object(config);
    const input = _chunkISRAPRZNjs.ValueFactory.INPUT();
    return (meta) => _typescript2.default.factory.createArrowFunction(void 0, void 0, FeatureProgrammer2.parameterDeclarations(config)(_chunkPK6R5VEJjs.TypeFactory.keyword("any"))(_chunkISRAPRZNjs.ValueFactory.INPUT()), _chunkPK6R5VEJjs.TypeFactory.keyword("any"), void 0, explorer(input, meta, {
      tracable: config.path || config.trace,
      source: "function",
      from: "object",
      postfix: ""
    }));
  }, "write_union");
  FeatureProgrammer2.decode_array = (config) => (importer) => (combiner) => {
    const rand = importer.increment().toString();
    const tail = config.path || config.trace ? [
      _chunkUUZFPK7Njs.IdentifierFactory.parameter("_index" + rand, _chunkPK6R5VEJjs.TypeFactory.keyword("number"))
    ] : [];
    return (input, array, explore) => {
      const arrow = _typescript2.default.factory.createArrowFunction(void 0, void 0, [
        _chunkUUZFPK7Njs.IdentifierFactory.parameter("elem", _chunkPK6R5VEJjs.TypeFactory.keyword("any")),
        ...tail
      ], void 0, void 0, config.decoder()(_chunkISRAPRZNjs.ValueFactory.INPUT("elem"), array.type.value, {
        tracable: explore.tracable,
        source: explore.source,
        from: "array",
        postfix: FeatureProgrammer2.index(_nullishCoalesce(explore.start, () => ( null)))(explore.postfix)(rand)
      }));
      return combiner(input, arrow);
    };
  };
  FeatureProgrammer2.decode_object = (config) => (importer) => (input, obj, explore) => _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(importer.useLocal(`${config.prefix}o${obj.index}`)), void 0, FeatureProgrammer2.argumentsArray(config)(explore)(input));
  FeatureProgrammer2.index = (start) => (prev) => (rand) => {
    const tail = start !== null ? `"[" + (${start} + _index${rand}) + "]"` : `"[" + _index${rand} + "]"`;
    if (prev === "") return tail;
    else if (prev[prev.length - 1] === `"`) return prev.substring(0, prev.length - 1) + tail.substring(1);
    return prev + ` + ${tail}`;
  };
  FeatureProgrammer2.argumentsArray = (config) => (explore) => {
    const tail = config.path === false && config.trace === false ? [] : config.path === true && config.trace === true ? [
      _typescript2.default.factory.createIdentifier(explore.postfix ? `_path + ${explore.postfix}` : "_path"),
      explore.source === "function" ? _typescript2.default.factory.createIdentifier(`${explore.tracable} && _exceptionable`) : explore.tracable ? _typescript2.default.factory.createTrue() : _typescript2.default.factory.createFalse()
    ] : config.path === true ? [
      _typescript2.default.factory.createIdentifier(explore.postfix ? `_path + ${explore.postfix}` : "_path")
    ] : [
      explore.source === "function" ? _typescript2.default.factory.createIdentifier(`${explore.tracable} && _exceptionable`) : explore.tracable ? _typescript2.default.factory.createTrue() : _typescript2.default.factory.createFalse()
    ];
    return (input) => [
      input,
      ...tail
    ];
  };
  FeatureProgrammer2.parameterDeclarations = (props) => (type) => {
    const tail = [];
    if (props.path) tail.push(_chunkUUZFPK7Njs.IdentifierFactory.parameter("_path", _chunkPK6R5VEJjs.TypeFactory.keyword("string")));
    if (props.trace) tail.push(_chunkUUZFPK7Njs.IdentifierFactory.parameter("_exceptionable", _chunkPK6R5VEJjs.TypeFactory.keyword("boolean"), _typescript2.default.factory.createTrue()));
    return (input) => [
      _chunkUUZFPK7Njs.IdentifierFactory.parameter(input, type),
      ...tail
    ];
  };
})(FeatureProgrammer || (FeatureProgrammer = exports.FeatureProgrammer = {}));



exports.FeatureProgrammer = FeatureProgrammer;
//# sourceMappingURL=chunk-FWJ4HRE5.js.map