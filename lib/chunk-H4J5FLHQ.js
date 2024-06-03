"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkQ6A4PISPjs = require('./chunk-Q6A4PISP.js');


var _chunkYAAJ76CEjs = require('./chunk-YAAJ76CE.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkH3MUGVKWjs = require('./chunk-H3MUGVKW.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkMCMQ56RXjs = require('./chunk-MCMQ56RX.js');


var _chunk6TJDJHWOjs = require('./chunk-6TJDJHWO.js');


var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkERQBF2DGjs = require('./chunk-ERQBF2DG.js');


var _chunkX72M22NMjs = require('./chunk-X72M22NM.js');


var _chunkKB6237G4js = require('./chunk-KB6237G4.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/http/HttpHeadersProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var HttpHeadersProgrammer;
(function(HttpHeadersProgrammer2) {
  HttpHeadersProgrammer2.INPUT_TYPE = "Record<string, string | string[] | undefined>";
  HttpHeadersProgrammer2.write = (project) => (modulo) => (type, name) => {
    const importer = new (0, _chunkYAAJ76CEjs.FunctionImporter)(modulo.getText());
    const collection = new (0, _chunkERQBF2DGjs.MetadataCollection)();
    const result = _chunk6TJDJHWOjs.MetadataFactory.analyze(project.checker, project.context)({
      escape: false,
      constant: true,
      absorb: true,
      validate: HttpHeadersProgrammer2.validate
    })(collection)(type);
    if (result.success === false) throw _chunkH3MUGVKWjs.TransformerError.from(`typia.http.${importer.method}`)(result.errors);
    const object = result.data.objects[0];
    const statements = decode_object(importer)(object);
    return _typescript2.default.factory.createArrowFunction(void 0, void 0, [
      _chunkUUZFPK7Njs.IdentifierFactory.parameter("input", _typescript2.default.factory.createTypeReferenceNode(HttpHeadersProgrammer2.INPUT_TYPE))
    ], _typescript2.default.factory.createImportTypeNode(_typescript2.default.factory.createLiteralTypeNode(_typescript2.default.factory.createStringLiteral("typia")), void 0, _typescript2.default.factory.createIdentifier("Resolved"), [
      _typescript2.default.factory.createTypeReferenceNode(_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type))))
    ], false), void 0, _typescript2.default.factory.createBlock([
      ...importer.declare(modulo),
      ...statements
    ], true));
  };
  HttpHeadersProgrammer2.validate = (meta, explore) => {
    const errors = [];
    const insert = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (msg) => errors.push(msg), "insert");
    if (explore.top === true) {
      if (meta.objects.length !== 1 || meta.bucket() !== 1) insert("only one object type is allowed.");
      if (meta.nullable === true) insert("headers cannot be null.");
      if (meta.isRequired() === false) insert("headers cannot be null.");
    } else if (explore.nested !== null && explore.nested instanceof _chunkX72M22NMjs.MetadataArrayType) {
      const atomics = _chunkQ6A4PISPjs.HttpMetadataUtil.atomics(meta);
      const expected = meta.atomics.length + meta.templates.length + meta.constants.map((c) => c.values.length).reduce((a, b) => a + b, 0);
      if (atomics.size > 1) insert("union type is not allowed in array.");
      if (meta.size() !== expected) insert("only atomic or constant types are allowed in array.");
      if (meta.nullable === true) insert("nullable type is not allowed in array.");
      if (meta.isRequired() === false) insert("optional type is not allowed in array.");
    } else if (explore.object && explore.property !== null) {
      if (typeof explore.property === "object") insert("dynamic property is not allowed.");
      if (meta.tuples.length) insert("tuple type is not allowed.");
      if (_chunkQ6A4PISPjs.HttpMetadataUtil.isUnion(meta)) insert("union type is not allowed.");
      if (meta.objects.length || meta.sets.length || meta.maps.length || meta.natives.length) insert("nested object type is not allowed.");
      if (meta.nullable === true) insert("nullable type is not allowed.");
      const isArray = meta.arrays.length >= 1 || meta.tuples.length >= 1;
      if (typeof explore.property === "string" && explore.property.toLowerCase() === "set-cookie" && isArray === false) insert(`${explore.property} property must be array.`);
      if (typeof explore.property === "string" && SINGULAR.has(explore.property.toLowerCase()) && isArray === true) insert("property cannot be array.");
    } else if (explore.object && explore.property === null) {
      const counter = /* @__PURE__ */ new Map();
      for (const prop of explore.object.properties) {
        const key = prop.key.getSoleLiteral();
        if (key === null) continue;
        _chunkKB6237G4js.MapUtil.take(counter)(key.toLowerCase(), () => /* @__PURE__ */ new Set()).add(key);
      }
      for (const [key, set] of counter) if (set.size > 1) insert(`duplicated keys when converting to lowercase letters: [${[
        ...set
      ].join(", ")}] -> ${key}`);
    }
    return errors;
  };
  const decode_object = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (object) => {
    const output = _typescript2.default.factory.createIdentifier("output");
    const optionals = [];
    return [
      _chunkTYMSCBZGjs.StatementFactory.constant("output", _typescript2.default.factory.createObjectLiteralExpression(object.properties.map((prop) => {
        if (!prop.value.isRequired() && prop.value.arrays.length + prop.value.tuples.length > 0) optionals.push(prop.key.constants[0].values[0].value);
        return decode_regular_property(importer)(prop);
      }), true)),
      ...optionals.map((key) => {
        const access = _chunkUUZFPK7Njs.IdentifierFactory.access(output)(key);
        return _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createStrictEquality(_chunk2F43GCPEjs.ExpressionFactory.number(0), _chunkUUZFPK7Njs.IdentifierFactory.access(access)("length")), _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createDeleteExpression(access)));
      }),
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
    ] : (() => {
      const meta = _nullishCoalesce(_optionalChain([value, 'access', _ => _.arrays, 'access', _2 => _2[0], 'optionalAccess', _3 => _3.type, 'access', _4 => _4.value]), () => ( value.tuples[0].type.elements[0]));
      return meta.atomics.length ? [
        meta.atomics[0].type,
        true
      ] : meta.templates.length ? [
        "string",
        true
      ] : [
        meta.constants[0].type,
        true
      ];
    })();
    const accessor = _chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createIdentifier("input"))(key.toLowerCase());
    return _typescript2.default.factory.createPropertyAssignment(_chunkMCMQ56RXjs.Escaper.variable(key) ? key : _typescript2.default.factory.createStringLiteral(key), isArray ? key === "set-cookie" ? accessor : decode_array(importer)(type)(key)(value)(accessor) : decode_value(importer)(type)(accessor));
  }, "decode_regular_property");
  const decode_value = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (type) => (value) => type === "string" ? value : _typescript2.default.factory.createCallExpression(importer.use(type), void 0, [
    value
  ]), "decode_value");
  const decode_array = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (type) => (key) => (value) => (accessor) => {
    const split = _typescript2.default.factory.createCallChain(_typescript2.default.factory.createPropertyAccessChain(_typescript2.default.factory.createCallChain(_typescript2.default.factory.createPropertyAccessChain(accessor, _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.QuestionDotToken), _typescript2.default.factory.createIdentifier("split")), void 0, void 0, [
      _typescript2.default.factory.createStringLiteral(key === "cookie" ? "; " : ", ")
    ]), _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.QuestionDotToken), _typescript2.default.factory.createIdentifier("map")), void 0, void 0, [
      importer.use(type)
    ]);
    return _typescript2.default.factory.createConditionalExpression(_chunk2F43GCPEjs.ExpressionFactory.isArray(accessor), void 0, _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(accessor)("map"), void 0, [
      importer.use(type)
    ]), void 0, value.isRequired() === false ? split : _typescript2.default.factory.createBinaryExpression(split, _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.QuestionQuestionToken), _typescript2.default.factory.createArrayLiteralExpression([], false)));
  }, "decode_array");
})(HttpHeadersProgrammer || (HttpHeadersProgrammer = exports.HttpHeadersProgrammer = {}));
var SINGULAR = /* @__PURE__ */ new Set([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "server",
  "user-agent"
]);



exports.HttpHeadersProgrammer = HttpHeadersProgrammer;
//# sourceMappingURL=chunk-H4J5FLHQ.js.map