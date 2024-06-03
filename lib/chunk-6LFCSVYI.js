"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkQ6A4PISPjs = require('./chunk-Q6A4PISP.js');


var _chunkYAAJ76CEjs = require('./chunk-YAAJ76CE.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkH3MUGVKWjs = require('./chunk-H3MUGVKW.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkMCMQ56RXjs = require('./chunk-MCMQ56RX.js');


var _chunk6TJDJHWOjs = require('./chunk-6TJDJHWO.js');


var _chunkERQBF2DGjs = require('./chunk-ERQBF2DG.js');


var _chunkX72M22NMjs = require('./chunk-X72M22NM.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/http/HttpFormDataProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var HttpFormDataProgrammer;
(function(HttpFormDataProgrammer2) {
  HttpFormDataProgrammer2.write = (project) => (modulo) => (type, name) => {
    const importer = new (0, _chunkYAAJ76CEjs.FunctionImporter)(modulo.getText());
    const collection = new (0, _chunkERQBF2DGjs.MetadataCollection)();
    const result = _chunk6TJDJHWOjs.MetadataFactory.analyze(project.checker, project.context)({
      escape: false,
      constant: true,
      absorb: true,
      validate: HttpFormDataProgrammer2.validate
    })(collection)(type);
    if (result.success === false) throw _chunkH3MUGVKWjs.TransformerError.from(`typia.http.${importer.method}`)(result.errors);
    const object = result.data.objects[0];
    const statements = decode_object(importer)(object);
    return _typescript2.default.factory.createArrowFunction(void 0, void 0, [
      _chunkUUZFPK7Njs.IdentifierFactory.parameter("input", _typescript2.default.factory.createTypeReferenceNode("FormData"))
    ], _typescript2.default.factory.createImportTypeNode(_typescript2.default.factory.createLiteralTypeNode(_typescript2.default.factory.createStringLiteral("typia")), void 0, _typescript2.default.factory.createIdentifier("Resolved"), [
      _typescript2.default.factory.createTypeReferenceNode(_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type))))
    ], false), void 0, _typescript2.default.factory.createBlock([
      ...importer.declare(modulo),
      ...statements
    ], true));
  };
  HttpFormDataProgrammer2.validate = (meta, explore) => {
    const errors = [];
    const insert = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (msg) => errors.push(msg), "insert");
    if (explore.top === true) {
      if (meta.objects.length !== 1 || meta.bucket() !== 1) insert("only one object type is allowed.");
      if (meta.nullable === true) insert("formdata parameters cannot be null.");
      if (meta.isRequired() === false) insert("formdata parameters cannot be undefined.");
    } else if (explore.nested !== null && explore.nested instanceof _chunkX72M22NMjs.MetadataArrayType) {
      const atomics = _chunkQ6A4PISPjs.HttpMetadataUtil.atomics(meta);
      const expected = meta.atomics.length + meta.templates.length + meta.constants.map((c) => c.values.length).reduce((a, b) => a + b, 0) + meta.natives.filter((n) => n === "Blob" || n === "File").length;
      if (atomics.size > 1) insert("union type is not allowed in array.");
      if (meta.size() !== expected) insert("only atomic, constant or blob (file) types are allowed in array.");
    } else if (explore.object && explore.property !== null) {
      if (typeof explore.property === "object") insert("dynamic property is not allowed.");
      if (meta.tuples.length) insert("tuple type is not allowed.");
      if (_chunkQ6A4PISPjs.HttpMetadataUtil.isUnion(meta)) insert("union type is not allowed.");
      if (meta.objects.length || meta.sets.length || meta.maps.length || meta.natives.filter((n) => n !== "Blob" && n !== "File").length) insert("nested object type is not allowed.");
    }
    return errors;
  };
  const decode_object = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (object) => {
    const output = _typescript2.default.factory.createIdentifier("output");
    return [
      _chunkTYMSCBZGjs.StatementFactory.constant("output", _typescript2.default.factory.createObjectLiteralExpression(object.properties.map((prop) => decode_regular_property(importer)(prop)), true)),
      _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createAsExpression(output, _chunkPK6R5VEJjs.TypeFactory.keyword("any")))
    ];
  }, "decode_object");
  const decode_regular_property = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (property) => {
    const key = property.key.constants[0].values[0].value;
    const value = property.value;
    const [type, isArray] = value.atomics.length ? [
      value.atomics[0].type,
      false
    ] : value.constants.length ? [
      value.constants[0].type,
      false
    ] : value.templates.length ? [
      "string",
      false
    ] : value.natives.includes("Blob") ? [
      "blob",
      false
    ] : value.natives.includes("File") ? [
      "file",
      false
    ] : (() => {
      const meta = _nullishCoalesce(_optionalChain([value, 'access', _ => _.arrays, 'access', _2 => _2[0], 'optionalAccess', _3 => _3.type, 'access', _4 => _4.value]), () => ( value.tuples[0].type.elements[0]));
      return meta.atomics.length ? [
        meta.atomics[0].type,
        true
      ] : meta.templates.length ? [
        "string",
        true
      ] : meta.natives.includes("Blob") ? [
        "blob",
        true
      ] : meta.natives.includes("File") ? [
        "file",
        true
      ] : [
        meta.constants[0].type,
        true
      ];
    })();
    return _typescript2.default.factory.createPropertyAssignment(_chunkMCMQ56RXjs.Escaper.variable(key) ? key : _typescript2.default.factory.createStringLiteral(key), isArray ? decode_array(importer)(value)(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("input.getAll"), void 0, [
      _typescript2.default.factory.createStringLiteral(key)
    ]))("map"), void 0, [
      _typescript2.default.factory.createArrowFunction(void 0, void 0, [
        _chunkUUZFPK7Njs.IdentifierFactory.parameter("elem")
      ], void 0, void 0, decode_value(importer)(type)(false)(_typescript2.default.factory.createIdentifier("elem")))
    ])) : decode_value(importer)(type)(value.nullable === false && value.isRequired() === false)(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("input.get"), void 0, [
      _typescript2.default.factory.createStringLiteral(key)
    ])));
  }, "decode_regular_property");
  const decode_value = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (type) => (onlyUndefindable) => (value) => {
    const call = _typescript2.default.factory.createCallExpression(importer.use(type), void 0, [
      value
    ]);
    return onlyUndefindable ? _typescript2.default.factory.createBinaryExpression(call, _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.QuestionQuestionToken), _typescript2.default.factory.createIdentifier("undefined")) : call;
  }, "decode_value");
  const decode_array = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (value) => (expression) => value.nullable || value.isRequired() === false ? _typescript2.default.factory.createCallExpression(importer.use("array"), void 0, [
    expression,
    value.nullable ? _typescript2.default.factory.createNull() : _typescript2.default.factory.createIdentifier("undefined")
  ]) : expression, "decode_array");
})(HttpFormDataProgrammer || (HttpFormDataProgrammer = exports.HttpFormDataProgrammer = {}));



exports.HttpFormDataProgrammer = HttpFormDataProgrammer;
//# sourceMappingURL=chunk-6LFCSVYI.js.map