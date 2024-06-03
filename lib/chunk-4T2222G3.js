"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunkNWMPQT3Jjs = require('./chunk-NWMPQT3J.js');


var _chunkTPC3R5ASjs = require('./chunk-TPC3R5AS.js');


var _chunkDXJQZ2DFjs = require('./chunk-DXJQZ2DF.js');


var _chunkYAAJ76CEjs = require('./chunk-YAAJ76CE.js');


var _chunkSYNQXHRUjs = require('./chunk-SYNQXHRU.js');


var _chunkOMY5FRQ3js = require('./chunk-OMY5FRQ3.js');


var _chunkHCTJVXGJjs = require('./chunk-HCTJVXGJ.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkGXEQC72Cjs = require('./chunk-GXEQC72C.js');


var _chunk6GHU2XFNjs = require('./chunk-6GHU2XFN.js');


var _chunkTBFJDOPAjs = require('./chunk-TBFJDOPA.js');


var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkERQBF2DGjs = require('./chunk-ERQBF2DG.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunkNLCVBCAHjs = require('./chunk-NLCVBCAH.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/protobuf/ProtobufEncodeProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var ProtobufEncodeProgrammer;
(function(ProtobufEncodeProgrammer2) {
  ProtobufEncodeProgrammer2.write = (project) => (modulo) => (type, name) => {
    const importer = new (0, _chunkYAAJ76CEjs.FunctionImporter)(modulo.getText());
    const collection = new (0, _chunkERQBF2DGjs.MetadataCollection)();
    const meta = _chunkOMY5FRQ3js.ProtobufFactory.metadata(modulo.getText())(project.checker, project.context)(collection)(type);
    const callEncoder = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (writer) => (factory) => _chunkTYMSCBZGjs.StatementFactory.constant(writer, _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("encoder"), void 0, [
      factory
    ])), "callEncoder");
    const block = [
      _chunkTYMSCBZGjs.StatementFactory.constant("encoder", write_encoder(project)(importer)(collection)(meta)),
      callEncoder("sizer")(_typescript2.default.factory.createNewExpression(importer.use("Sizer"), void 0, [])),
      callEncoder("writer")(_typescript2.default.factory.createNewExpression(importer.use("Writer"), void 0, [
        _typescript2.default.factory.createIdentifier("sizer")
      ])),
      _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(WRITER())("buffer"), void 0, void 0))
    ];
    return _typescript2.default.factory.createArrowFunction(void 0, void 0, [
      _chunkUUZFPK7Njs.IdentifierFactory.parameter("input", _typescript2.default.factory.createTypeReferenceNode(_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type)))))
    ], _typescript2.default.factory.createTypeReferenceNode("Uint8Array"), void 0, _typescript2.default.factory.createBlock([
      ...importer.declare(modulo, false),
      ...block
    ], true));
  };
  const write_encoder = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (importer) => (collection) => (meta) => {
    const functors = collection.objects().filter((obj) => _chunkHCTJVXGJjs.ProtobufUtil.isStaticObject(obj)).map((obj) => _chunkTYMSCBZGjs.StatementFactory.constant(`${PREFIX}o${obj.index}`, write_object_function(project)(importer)(_typescript2.default.factory.createIdentifier("input"), obj, {
      source: "function",
      from: "object",
      tracable: false,
      postfix: ""
    })));
    const main = decode(project)(importer)(null)(_typescript2.default.factory.createIdentifier("input"), meta, {
      source: "top",
      from: "top",
      tracable: false,
      postfix: ""
    });
    return _typescript2.default.factory.createArrowFunction(void 0, void 0, [
      _chunkUUZFPK7Njs.IdentifierFactory.parameter("writer")
    ], _chunkPK6R5VEJjs.TypeFactory.keyword("any"), void 0, _typescript2.default.factory.createBlock([
      ...importer.declareUnions(),
      ...functors,
      ..._chunkNWMPQT3Jjs.IsProgrammer.write_function_statements(project)(importer)(collection),
      ...main.statements,
      _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createIdentifier("writer"))
    ], true));
  }, "write_encoder");
  const write_object_function = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (importer) => (input, obj, explore) => {
    let index = 1;
    const body = obj.properties.map((p) => {
      const block = decode(project)(importer)(index)(_chunkUUZFPK7Njs.IdentifierFactory.access(input)(p.key.getSoleLiteral()), p.value, explore);
      index += _chunkHCTJVXGJjs.ProtobufUtil.size(p.value);
      return [
        _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createIdentifier(`// property "${p.key.getSoleLiteral()}"`)),
        ...block.statements
      ];
    }).flat();
    return _typescript2.default.factory.createArrowFunction(void 0, void 0, [
      _chunkUUZFPK7Njs.IdentifierFactory.parameter("input")
    ], _chunkPK6R5VEJjs.TypeFactory.keyword("any"), void 0, _typescript2.default.factory.createBlock(body, true));
  }, "write_object_function");
  const decode = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (importer) => (index) => (input, meta, explore) => {
    const wrapper = meta.isRequired() && meta.nullable === false ? (block) => block : meta.isRequired() === false && meta.nullable === true ? (block) => _typescript2.default.factory.createBlock([
      _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createLogicalAnd(_typescript2.default.factory.createStrictInequality(_typescript2.default.factory.createIdentifier("undefined"), input), _typescript2.default.factory.createStrictInequality(_typescript2.default.factory.createNull(), input)), block)
    ], true) : meta.isRequired() === false ? (block) => _typescript2.default.factory.createBlock([
      _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createStrictInequality(_typescript2.default.factory.createIdentifier("undefined"), input), block)
    ], true) : (block) => _typescript2.default.factory.createBlock([
      _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createStrictInequality(_typescript2.default.factory.createNull(), input), block)
    ], true);
    const unions = [];
    const numbers = _chunkHCTJVXGJjs.ProtobufUtil.getNumbers(meta);
    const bigints = _chunkHCTJVXGJjs.ProtobufUtil.getBigints(meta);
    for (const atom of _chunkHCTJVXGJjs.ProtobufUtil.getAtomics(meta)) if (atom === "bool") unions.push({
      type: "bool",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral("boolean"), _typescript2.default.factory.createTypeOfExpression(input)), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (index2) => decode_bool(index2)(input), "value")
    });
    else if (atom === "int32" || atom === "uint32" || atom === "float" || atom === "double") unions.push(decode_number(numbers)(atom)(input));
    else if (atom === "int64" || atom === "uint64") if (numbers.some((n) => n === atom)) unions.push(decode_number(numbers)(atom)(input));
    else unions.push(decode_bigint(bigints)(atom)(input));
    else if (atom === "string") unions.push({
      type: "string",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral("string"), _typescript2.default.factory.createTypeOfExpression(input)), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (index2) => decode_bytes("string")(index2)(input), "value")
    });
    if (meta.natives.length) unions.push({
      type: "bytes",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk2F43GCPEjs.ExpressionFactory.isInstanceOf("Uint8Array")(input), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (index2) => decode_bytes("bytes")(index2)(input), "value")
    });
    if (meta.arrays.length) unions.push({
      type: "array",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk2F43GCPEjs.ExpressionFactory.isArray(input), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (index2) => decode_array(project)(importer)(index2)(input, meta.arrays[0], {
        ...explore,
        from: "array"
      }), "value")
    });
    if (meta.maps.length) unions.push({
      type: "map",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk2F43GCPEjs.ExpressionFactory.isInstanceOf("Map")(input), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (index2) => decode_map(project)(importer)(index2)(input, meta.maps[0], {
        ...explore,
        from: "array"
      }), "value")
    });
    if (meta.objects.length) unions.push({
      type: "object",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk2F43GCPEjs.ExpressionFactory.isObject({
        checkNull: true,
        checkArray: false
      })(input), "is"),
      value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (index2) => explore_objects(project)(importer)(0)(index2)(input, meta.objects, {
        ...explore,
        from: "object"
      }), "value")
    });
    if (unions.length === 1) return wrapper(unions[0].value(index));
    else return wrapper(iterate(importer)(index)(unions)(meta.getName())(input));
  }, "decode");
  const iterate = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (index) => (unions) => (expected) => (input) => _typescript2.default.factory.createBlock([
    unions.map((u, i) => _typescript2.default.factory.createIfStatement(u.is(), u.value(index ? index + i : null), i === unions.length - 1 ? create_throw_error(importer)(expected)(input) : void 0)).reverse().reduce((a, b) => _typescript2.default.factory.createIfStatement(b.expression, b.thenStatement, a))
  ], true), "iterate");
  const decode_map = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (importer) => (index) => (input, map, explore) => {
    const each = [
      _typescript2.default.factory.createExpressionStatement(decode_tag(_chunkNLCVBCAHjs.ProtobufWire.LEN)(index)),
      _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(WRITER())("fork"), void 0, void 0)),
      ...decode(project)(importer)(1)(_typescript2.default.factory.createIdentifier("key"), map.key, explore).statements,
      ...decode(project)(importer)(2)(_typescript2.default.factory.createIdentifier("value"), map.value, explore).statements,
      _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(WRITER())("ldelim"), void 0, void 0))
    ];
    return _typescript2.default.factory.createBlock([
      _typescript2.default.factory.createForOfStatement(void 0, _chunkTYMSCBZGjs.StatementFactory.entry("key")("value"), input, _typescript2.default.factory.createBlock(each))
    ], true);
  }, "decode_map");
  const decode_object = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (importer) => (index) => (input, object, explore) => {
    const top = object.properties[0];
    if (top.key.isSoleLiteral() === false) return decode_map(project)(importer)(index)(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("Object.entries"), [], [
      input
    ]), _chunkGXEQC72Cjs.MetadataProperty.create({
      ...top,
      key: (() => {
        const key = _chunk6GHU2XFNjs.Metadata.initialize();
        key.atomics.push(_chunkTBFJDOPAjs.MetadataAtomic.create({
          type: "string",
          tags: []
        }));
        return key;
      })()
    }), explore);
    return _typescript2.default.factory.createBlock([
      _typescript2.default.factory.createIdentifier(`//${index !== null ? ` ${index} -> ` : ""}${object.name}`),
      ...index !== null ? [
        decode_tag(_chunkNLCVBCAHjs.ProtobufWire.LEN)(index),
        _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(WRITER())("fork"), void 0, void 0)
      ] : [],
      _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(importer.useLocal(`${PREFIX}o${object.index}`)), [], [
        input
      ]),
      ...index !== null ? [
        _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(WRITER())("ldelim"), void 0, void 0)
      ] : []
    ].map((expr) => _typescript2.default.factory.createExpressionStatement(expr)), true);
  }, "decode_object");
  const decode_array = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (importer) => (index) => (input, array, explore) => {
    const wire = get_standalone_wire(array.type.value);
    const forLoop = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (index2) => _typescript2.default.factory.createForOfStatement(void 0, _typescript2.default.factory.createVariableDeclarationList([
      _typescript2.default.factory.createVariableDeclaration("elem")
    ], _typescript2.default.NodeFlags.Const), input, decode(project)(importer)(index2)(_typescript2.default.factory.createIdentifier("elem"), array.type.value, explore)), "forLoop");
    const length = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (block) => _typescript2.default.factory.createBlock([
      _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createStrictInequality(_chunk2F43GCPEjs.ExpressionFactory.number(0), _chunkUUZFPK7Njs.IdentifierFactory.access(input)("length")), block)
    ], true), "length");
    if (wire === _chunkNLCVBCAHjs.ProtobufWire.LEN) return length(_typescript2.default.factory.createBlock([
      forLoop(index)
    ], true));
    return length(_typescript2.default.factory.createBlock([
      _typescript2.default.factory.createExpressionStatement(decode_tag(_chunkNLCVBCAHjs.ProtobufWire.LEN)(index)),
      _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(WRITER())("fork"), void 0, void 0)),
      forLoop(null),
      _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(WRITER())("ldelim"), void 0, void 0))
    ], true));
  }, "decode_array");
  const decode_bool = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (index) => (input) => _typescript2.default.factory.createBlock([
    ...index !== null ? [
      decode_tag(_chunkNLCVBCAHjs.ProtobufWire.VARIANT)(index)
    ] : [],
    _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(WRITER())("bool"), void 0, [
      input
    ])
  ].map((exp) => _typescript2.default.factory.createExpressionStatement(exp)), true), "decode_bool");
  const decode_number = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (candidates) => (type) => (input) => ({
    type,
    is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => candidates.length === 1 ? _typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral("number"), _typescript2.default.factory.createTypeOfExpression(input)) : _typescript2.default.factory.createLogicalAnd(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral("number"), _typescript2.default.factory.createTypeOfExpression(input)), _chunkSYNQXHRUjs.NumericRangeFactory.number(type)(input)), "is"),
    value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (index) => _typescript2.default.factory.createBlock([
      ...index !== null ? [
        decode_tag(get_numeric_wire(type))(index)
      ] : [],
      _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(WRITER())(type), void 0, [
        input
      ])
    ].map((exp) => _typescript2.default.factory.createExpressionStatement(exp)), true), "value")
  }), "decode_number");
  const decode_bigint = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (candidates) => (type) => (input) => ({
    type,
    is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => candidates.length === 1 ? _typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral("bigint"), _typescript2.default.factory.createTypeOfExpression(input)) : _typescript2.default.factory.createLogicalAnd(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral("bigint"), _typescript2.default.factory.createTypeOfExpression(input)), _chunkSYNQXHRUjs.NumericRangeFactory.bigint(type)(input)), "is"),
    value: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (index) => _typescript2.default.factory.createBlock([
      ...index !== null ? [
        decode_tag(_chunkNLCVBCAHjs.ProtobufWire.VARIANT)(index)
      ] : [],
      _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(WRITER())(type), void 0, [
        input
      ])
    ].map((exp) => _typescript2.default.factory.createExpressionStatement(exp)), true), "value")
  }), "decode_bigint");
  const decode_bytes = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (method) => (index) => (input) => _typescript2.default.factory.createBlock([
    decode_tag(_chunkNLCVBCAHjs.ProtobufWire.LEN)(index),
    _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(WRITER())(method), void 0, [
      input
    ])
  ].map((expr) => _typescript2.default.factory.createExpressionStatement(expr)), true), "decode_bytes");
  const decode_tag = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (wire) => (index) => _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(WRITER())("uint32"), void 0, [
    _chunk2F43GCPEjs.ExpressionFactory.number(index << 3 | wire)
  ]), "decode_tag");
  const get_standalone_wire = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (meta) => {
    if (meta.arrays.length || meta.objects.length || meta.maps.length || meta.natives.length) return _chunkNLCVBCAHjs.ProtobufWire.LEN;
    const v = _chunkHCTJVXGJjs.ProtobufUtil.getAtomics(meta)[0];
    if (v === "string") return _chunkNLCVBCAHjs.ProtobufWire.LEN;
    else if (v === "bool" || v === "int32" || v === "uint32" || v === "int64" || v === "uint64") return _chunkNLCVBCAHjs.ProtobufWire.VARIANT;
    else if (v === "float") return _chunkNLCVBCAHjs.ProtobufWire.I32;
    return _chunkNLCVBCAHjs.ProtobufWire.I64;
  }, "get_standalone_wire");
  const get_numeric_wire = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (type) => type === "double" ? _chunkNLCVBCAHjs.ProtobufWire.I64 : type === "float" ? _chunkNLCVBCAHjs.ProtobufWire.I32 : _chunkNLCVBCAHjs.ProtobufWire.VARIANT, "get_numeric_wire");
  const explore_objects = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (importer) => (level) => (index) => (input, targets, explore, indexes) => {
    if (targets.length === 1) return decode_object(project)(importer)(indexes ? indexes.get(targets[0]) : index)(input, targets[0], explore);
    const expected = `(${targets.map((t) => t.name).join(" | ")})`;
    const specList = _chunkDXJQZ2DFjs.UnionPredicator.object(targets);
    indexes ??= new Map(targets.map((t, i) => [
      t,
      index + i
    ]));
    if (specList.length === 0) {
      const condition2 = _chunkTPC3R5ASjs.decode_union_object.call(void 0, _chunkNWMPQT3Jjs.IsProgrammer.decode_object(project)(importer))((i, o, e) => _chunk2F43GCPEjs.ExpressionFactory.selfCall(decode_object(project)(importer)(indexes.get(o))(i, o, e)))((expr) => expr)((value, expected2) => create_throw_error(importer)(expected2)(value))(input, targets, explore);
      return _chunkTYMSCBZGjs.StatementFactory.block(condition2);
    }
    const remained = targets.filter((t) => specList.find((s) => s.object === t) === void 0);
    const condition = specList.filter((spec) => spec.property.key.getSoleLiteral() !== null).map((spec, i, array) => {
      const key = spec.property.key.getSoleLiteral();
      const accessor = _chunkUUZFPK7Njs.IdentifierFactory.access(input)(key);
      const pred = spec.neighbour ? _chunkNWMPQT3Jjs.IsProgrammer.decode(project)(importer)(accessor, spec.property.value, {
        ...explore,
        tracable: false,
        postfix: _chunkUUZFPK7Njs.IdentifierFactory.postfix(key)
      }) : _chunk2F43GCPEjs.ExpressionFactory.isRequired(accessor);
      return _typescript2.default.factory.createIfStatement(pred, _typescript2.default.factory.createExpressionStatement(_chunk2F43GCPEjs.ExpressionFactory.selfCall(decode_object(project)(importer)(indexes.get(spec.object))(input, spec.object, explore))), i === array.length - 1 ? remained.length ? _typescript2.default.factory.createExpressionStatement(_chunk2F43GCPEjs.ExpressionFactory.selfCall(explore_objects(project)(importer)(level + 1)(index)(input, remained, explore, indexes))) : create_throw_error(importer)(expected)(input) : void 0);
    }).reverse().reduce((a, b) => _typescript2.default.factory.createIfStatement(b.expression, b.thenStatement, a));
    return _typescript2.default.factory.createBlock([
      condition
    ], true);
  }, "explore_objects");
  const PREFIX = "$pe";
  const create_throw_error = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (expected) => (value) => _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createCallExpression(importer.use("throws"), [], [
    _typescript2.default.factory.createObjectLiteralExpression([
      _typescript2.default.factory.createPropertyAssignment("expected", _typescript2.default.factory.createStringLiteral(expected)),
      _typescript2.default.factory.createPropertyAssignment("value", value)
    ], true)
  ])), "create_throw_error");
})(ProtobufEncodeProgrammer || (ProtobufEncodeProgrammer = exports.ProtobufEncodeProgrammer = {}));
var WRITER = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _typescript2.default.factory.createIdentifier("writer"), "WRITER");



exports.ProtobufEncodeProgrammer = ProtobufEncodeProgrammer;
//# sourceMappingURL=chunk-4T2222G3.js.map