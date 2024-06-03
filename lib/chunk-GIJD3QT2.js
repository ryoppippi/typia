"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunkYAAJ76CEjs = require('./chunk-YAAJ76CE.js');


var _chunkOMY5FRQ3js = require('./chunk-OMY5FRQ3.js');


var _chunkHCTJVXGJjs = require('./chunk-HCTJVXGJ.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunk6TJDJHWOjs = require('./chunk-6TJDJHWO.js');


var _chunkGXEQC72Cjs = require('./chunk-GXEQC72C.js');


var _chunk6GHU2XFNjs = require('./chunk-6GHU2XFN.js');


var _chunkTBFJDOPAjs = require('./chunk-TBFJDOPA.js');


var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkERQBF2DGjs = require('./chunk-ERQBF2DG.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/protobuf/ProtobufDecodeProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var ProtobufDecodeProgrammer;
(function(ProtobufDecodeProgrammer2) {
  ProtobufDecodeProgrammer2.write = (project) => (modulo) => (type, name) => {
    const importer = new (0, _chunkYAAJ76CEjs.FunctionImporter)(modulo.getText());
    const collection = new (0, _chunkERQBF2DGjs.MetadataCollection)();
    const meta = _chunkOMY5FRQ3js.ProtobufFactory.metadata(modulo.getText())(project.checker, project.context)(collection)(type);
    const functors = collection.objects().filter((obj) => _chunkHCTJVXGJjs.ProtobufUtil.isStaticObject(obj)).map((obj) => _chunkTYMSCBZGjs.StatementFactory.constant(`${PREFIX}o${obj.index}`, write_object_function(project)(importer)(obj)));
    const reader = _chunkTYMSCBZGjs.StatementFactory.constant("reader", _typescript2.default.factory.createNewExpression(importer.use("Reader"), void 0, [
      _typescript2.default.factory.createIdentifier("input")
    ]));
    return _typescript2.default.factory.createArrowFunction(void 0, void 0, [
      _chunkUUZFPK7Njs.IdentifierFactory.parameter("input", _typescript2.default.factory.createTypeReferenceNode("Uint8Array"))
    ], _typescript2.default.factory.createImportTypeNode(_typescript2.default.factory.createLiteralTypeNode(_typescript2.default.factory.createStringLiteral("typia")), void 0, _typescript2.default.factory.createIdentifier("Resolved"), [
      _typescript2.default.factory.createTypeReferenceNode(_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type))))
    ], false), void 0, _typescript2.default.factory.createBlock([
      ...importer.declare(modulo),
      ...functors,
      reader,
      _typescript2.default.factory.createReturnStatement(decode_regular_object(true)(meta.objects[0]))
    ], true));
  };
  const write_object_function = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (importer) => (obj) => _typescript2.default.factory.createArrowFunction(void 0, void 0, [
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("reader"),
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("length", _chunkPK6R5VEJjs.TypeFactory.keyword("number"), _chunk2F43GCPEjs.ExpressionFactory.number(-1))
  ], _chunkPK6R5VEJjs.TypeFactory.keyword("any"), void 0, _typescript2.default.factory.createBlock([
    _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createBinaryExpression(_typescript2.default.factory.createIdentifier("length"), _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.EqualsToken), _typescript2.default.factory.createConditionalExpression(_typescript2.default.factory.createLessThan(_typescript2.default.factory.createIdentifier("length"), _chunk2F43GCPEjs.ExpressionFactory.number(0)), void 0, _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(READER())("size"), void 0, void 0), void 0, _typescript2.default.factory.createAdd(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(READER())("index"), void 0, void 0), _typescript2.default.factory.createIdentifier("length"))))),
    ...write_object_function_body(project)(importer)({
      condition: _typescript2.default.factory.createLessThan(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(READER())("index"), void 0, void 0), _typescript2.default.factory.createIdentifier("length")),
      tag: "tag",
      output: "output"
    })(obj.properties),
    _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createIdentifier("output"))
  ], true)), "write_object_function");
  const write_object_function_body = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (importer) => (props) => (properties) => {
    let i = 1;
    const clauses = properties.map((p) => {
      const clause = decode_property(project)(importer)(i)(_chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createIdentifier(props.output))(p.key.getSoleLiteral()), p.value);
      i += _chunkHCTJVXGJjs.ProtobufUtil.size(p.value);
      return clause;
    }).flat();
    return [
      _chunkTYMSCBZGjs.StatementFactory.constant(props.output, _typescript2.default.factory.createAsExpression(_typescript2.default.factory.createObjectLiteralExpression(properties.filter((p) => !(project.compilerOptions.exactOptionalPropertyTypes === true && p.value.optional === true)).map((p) => _typescript2.default.factory.createPropertyAssignment(_chunkUUZFPK7Njs.IdentifierFactory.identifier(p.key.getSoleLiteral()), write_property_default_value(p.value))), true), _chunkPK6R5VEJjs.TypeFactory.keyword("any"))),
      _typescript2.default.factory.createWhileStatement(props.condition, _typescript2.default.factory.createBlock([
        _chunkTYMSCBZGjs.StatementFactory.constant(props.tag, _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(READER())("uint32"), void 0, void 0)),
        _typescript2.default.factory.createSwitchStatement(_typescript2.default.factory.createUnsignedRightShift(_typescript2.default.factory.createIdentifier(props.tag), _chunk2F43GCPEjs.ExpressionFactory.number(3)), _typescript2.default.factory.createCaseBlock([
          ...clauses,
          _typescript2.default.factory.createDefaultClause([
            _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(READER())("skipType"), void 0, [
              _typescript2.default.factory.createBitwiseAnd(_typescript2.default.factory.createIdentifier(props.tag), _chunk2F43GCPEjs.ExpressionFactory.number(7))
            ])),
            _typescript2.default.factory.createBreakStatement()
          ])
        ]))
      ]))
    ];
  }, "write_object_function_body");
  const write_property_default_value = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => _typescript2.default.factory.createAsExpression(value.nullable ? _typescript2.default.factory.createNull() : value.isRequired() === false ? _typescript2.default.factory.createIdentifier("undefined") : value.arrays.length ? _typescript2.default.factory.createArrayLiteralExpression() : value.maps.length ? _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier("Map"), void 0, []) : value.natives.length ? _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier("Uint8Array"), void 0, []) : value.atomics.some((a) => a.type === "string") || value.constants.some((c) => c.type === "string" && c.values.some((v) => v.value === "")) || value.templates.some((tpl) => tpl.length === 1 && tpl[0].getName() === "string") ? _typescript2.default.factory.createStringLiteral("") : value.objects.length && value.objects.some((obj) => !_chunkHCTJVXGJjs.ProtobufUtil.isStaticObject(obj)) ? _typescript2.default.factory.createObjectLiteralExpression() : _typescript2.default.factory.createIdentifier("undefined"), _chunkPK6R5VEJjs.TypeFactory.keyword("any")), "write_property_default_value");
  const decode_property = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (importer) => (index) => (accessor, meta) => {
    const clauses = [];
    const emplace = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (name) => (v) => clauses.push(_typescript2.default.factory.createCaseClause(_chunk2F43GCPEjs.ExpressionFactory.number(index++), Array.isArray(v) ? [
      _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createIdentifier(`// type: ${name}`)),
      ...v,
      _typescript2.default.factory.createBreakStatement()
    ] : [
      _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createIdentifier(`// ${name}`)),
      _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createBinaryExpression(accessor, _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.EqualsToken), v)),
      _typescript2.default.factory.createBreakStatement()
    ])), "emplace");
    const required = meta.isRequired() && !meta.nullable;
    for (const atomic of _chunkHCTJVXGJjs.ProtobufUtil.getAtomics(meta)) emplace(atomic)(decode_atomic(meta)(atomic));
    if (meta.natives.length) emplace("bytes")(decode_bytes("bytes"));
    for (const array of meta.arrays) emplace(`Array<${array.type.value.getName()}>`)(decode_array(accessor, array, required));
    for (const map of meta.maps) emplace(`Map<string, ${map.value.getName()}>`)(decode_map(project)(importer)(accessor, map, required));
    for (const obj of meta.objects) emplace(obj.name)(_chunkHCTJVXGJjs.ProtobufUtil.isStaticObject(obj) ? decode_regular_object(false)(obj) : decode_dynamic_object(project)(importer)(accessor, obj, required));
    return clauses;
  }, "decode_property");
  const decode_atomic = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (meta) => (atomic) => {
    if (atomic === "string") return decode_bytes("string");
    const call = _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createIdentifier("reader"))(atomic), void 0, void 0);
    if (atomic !== "int64" && atomic !== "uint64") return call;
    const isNumber = _chunkHCTJVXGJjs.ProtobufUtil.getNumbers(meta).some((n) => n === atomic);
    return isNumber ? _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("Number"), void 0, [
      call
    ]) : call;
  }, "decode_atomic");
  const decode_bytes = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (method) => _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createIdentifier("reader"))(method), void 0, void 0), "decode_bytes");
  const decode_array = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (accessor, array, required) => {
    const statements = [];
    if (required === false) statements.push(_typescript2.default.factory.createBinaryExpression(accessor, _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.QuestionQuestionEqualsToken), _typescript2.default.factory.createAsExpression(_typescript2.default.factory.createArrayLiteralExpression(), _typescript2.default.factory.createTypeReferenceNode("any[]"))));
    const atomics = _chunkHCTJVXGJjs.ProtobufUtil.getAtomics(array.type.value);
    const decoder = atomics.length ? () => decode_atomic(array.type.value)(atomics[0]) : array.type.value.natives.length ? () => decode_bytes("bytes") : array.type.value.objects.length ? () => decode_regular_object(false)(array.type.value.objects[0]) : null;
    if (decoder === null) throw new Error("Never reach here.");
    else if (atomics.length && atomics[0] !== "string") {
      statements.push(_typescript2.default.factory.createIfStatement(_typescript2.default.factory.createStrictEquality(_chunk2F43GCPEjs.ExpressionFactory.number(2), _typescript2.default.factory.createBitwiseAnd(_typescript2.default.factory.createIdentifier("tag"), _chunk2F43GCPEjs.ExpressionFactory.number(7))), _typescript2.default.factory.createBlock([
        _chunkTYMSCBZGjs.StatementFactory.constant("piece", _typescript2.default.factory.createAdd(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(READER())("uint32"), void 0, void 0), _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(READER())("index"), void 0, void 0))),
        _typescript2.default.factory.createWhileStatement(_typescript2.default.factory.createLessThan(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(READER())("index"), void 0, void 0), _typescript2.default.factory.createIdentifier("piece")), _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(accessor)("push"), void 0, [
          decoder()
        ])))
      ], true), _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(accessor)("push"), void 0, [
        decoder()
      ]))));
    } else statements.push(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(accessor)("push"), void 0, [
      decoder()
    ]));
    return statements.map((stmt) => _typescript2.default.isExpression(stmt) ? _typescript2.default.factory.createExpressionStatement(stmt) : stmt);
  }, "decode_array");
  const decode_regular_object = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (top) => (obj) => _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(`${PREFIX}o${obj.index}`), void 0, [
    _typescript2.default.factory.createIdentifier("reader"),
    ...top ? [] : [
      _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(READER())("uint32"), void 0, void 0)
    ]
  ]), "decode_regular_object");
  const decode_dynamic_object = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (importer) => (accessor, obj, required) => {
    const top = obj.properties[0];
    return decode_entry(project)(importer)({
      initializer: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _typescript2.default.factory.createBinaryExpression(accessor, _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.QuestionQuestionEqualsToken), _typescript2.default.factory.createObjectLiteralExpression()), "initializer"),
      setter: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _typescript2.default.factory.createBinaryExpression(_typescript2.default.factory.createElementAccessExpression(accessor, _typescript2.default.factory.createIdentifier("entry.key")), _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.EqualsToken), _typescript2.default.factory.createIdentifier("entry.value")), "setter")
    })(_chunkGXEQC72Cjs.MetadataProperty.create({
      ...top,
      key: (() => {
        const key = _chunk6GHU2XFNjs.Metadata.initialize();
        key.atomics.push(_chunkTBFJDOPAjs.MetadataAtomic.create({
          type: "string",
          tags: []
        }));
        return key;
      })()
    }), required);
  }, "decode_dynamic_object");
  const decode_map = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (importer) => (accessor, map, required) => decode_entry(project)(importer)({
    initializer: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _typescript2.default.factory.createBinaryExpression(accessor, _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.QuestionQuestionEqualsToken), _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier("Map"), [
      _chunkPK6R5VEJjs.TypeFactory.keyword("any"),
      _chunkPK6R5VEJjs.TypeFactory.keyword("any")
    ], [])), "initializer"),
    setter: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(accessor)("set"), void 0, [
      _typescript2.default.factory.createIdentifier("entry.key"),
      _typescript2.default.factory.createIdentifier("entry.value")
    ]), "setter")
  })(map, required), "decode_map");
  const decode_entry = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (importer) => (props) => (map, required) => {
    const statements = [
      ...required ? [] : [
        _typescript2.default.factory.createExpressionStatement(props.initializer())
      ],
      _chunkTYMSCBZGjs.StatementFactory.constant("piece", _typescript2.default.factory.createAdd(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(READER())("uint32"), void 0, void 0), _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(READER())("index"), void 0, void 0))),
      ...write_object_function_body(project)(importer)({
        condition: _typescript2.default.factory.createLessThan(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(READER())("index"), void 0, void 0), _typescript2.default.factory.createIdentifier("piece")),
        tag: "kind",
        output: "entry"
      })([
        _chunkGXEQC72Cjs.MetadataProperty.create({
          key: _chunk6TJDJHWOjs.MetadataFactory.soleLiteral("key"),
          value: map.key,
          description: null,
          jsDocTags: []
        }),
        _chunkGXEQC72Cjs.MetadataProperty.create({
          key: _chunk6TJDJHWOjs.MetadataFactory.soleLiteral("value"),
          value: map.value,
          description: null,
          jsDocTags: []
        })
      ]),
      _typescript2.default.factory.createExpressionStatement(props.setter())
    ];
    return [
      _typescript2.default.factory.createExpressionStatement(_chunk2F43GCPEjs.ExpressionFactory.selfCall(_typescript2.default.factory.createBlock(statements, true)))
    ];
  }, "decode_entry");
})(ProtobufDecodeProgrammer || (ProtobufDecodeProgrammer = exports.ProtobufDecodeProgrammer = {}));
var PREFIX = "$pd";
var READER = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _typescript2.default.factory.createIdentifier("reader"), "READER");



exports.ProtobufDecodeProgrammer = ProtobufDecodeProgrammer;
//# sourceMappingURL=chunk-GIJD3QT2.js.map