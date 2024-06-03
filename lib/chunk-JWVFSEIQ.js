"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunkSL6Y5DQGjs = require('./chunk-SL6Y5DQG.js');


var _chunkF7FRTCGWjs = require('./chunk-F7FRTCGW.js');


var _chunkNRPYKJYUjs = require('./chunk-NRPYKJYU.js');


var _chunkYAAJ76CEjs = require('./chunk-YAAJ76CE.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkT3PGTOEHjs = require('./chunk-T3PGTOEH.js');


var _chunkH3MUGVKWjs = require('./chunk-H3MUGVKW.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkMCMQ56RXjs = require('./chunk-MCMQ56RX.js');


var _chunk6TJDJHWOjs = require('./chunk-6TJDJHWO.js');


var _chunk6GHU2XFNjs = require('./chunk-6GHU2XFN.js');


var _chunkTBFJDOPAjs = require('./chunk-TBFJDOPA.js');


var _chunkSIGOR7QQjs = require('./chunk-SIGOR7QQ.js');


var _chunkUNOXPWQEjs = require('./chunk-UNOXPWQE.js');


var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkERQBF2DGjs = require('./chunk-ERQBF2DG.js');


var _chunkH3SMZNB3js = require('./chunk-H3SMZNB3.js');


var _chunkX72M22NMjs = require('./chunk-X72M22NM.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/RandomProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var RandomProgrammer;
(function(RandomProgrammer2) {
  RandomProgrammer2.write = (project) => (modulo) => (init) => {
    const importer = new (0, _chunkYAAJ76CEjs.FunctionImporter)(modulo.getText());
    return (type, name) => {
      const collection = new (0, _chunkERQBF2DGjs.MetadataCollection)();
      const result = _chunk6TJDJHWOjs.MetadataFactory.analyze(project.checker, project.context)({
        escape: false,
        constant: true,
        absorb: true,
        validate: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (meta) => {
          const output2 = [];
          if (meta.natives.some((n) => n === "WeakSet")) output2.push(`WeakSet is not supported.`);
          else if (meta.natives.some((n) => n === "WeakMap")) output2.push(`WeakMap is not supported.`);
          return output2;
        }, "validate")
      })(collection)(type);
      if (result.success === false) throw _chunkH3MUGVKWjs.TransformerError.from(`typia.${importer.method}`)(result.errors);
      const functions = {
        objects: write_object_functions(importer)(collection),
        arrays: write_array_functions(importer)(collection),
        tuples: write_tuple_functions(importer)(collection)
      };
      const output = decode(importer)({
        function: false,
        recursive: false
      })(result.data);
      return _typescript2.default.factory.createArrowFunction(void 0, void 0, [
        _chunkUUZFPK7Njs.IdentifierFactory.parameter("generator", _typescript2.default.factory.createTypeReferenceNode("Partial<typia.IRandomGenerator>"), _nullishCoalesce(init, () => ( _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.QuestionToken))))
      ], _typescript2.default.factory.createImportTypeNode(_typescript2.default.factory.createLiteralTypeNode(_typescript2.default.factory.createStringLiteral("typia")), void 0, _typescript2.default.factory.createIdentifier("Resolved"), [
        _typescript2.default.factory.createTypeReferenceNode(_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type))))
      ], false), void 0, _typescript2.default.factory.createBlock([
        ...importer.declare(modulo),
        ...functions.objects,
        ...functions.arrays,
        ...functions.tuples,
        _typescript2.default.factory.createReturnStatement(output)
      ], true));
    };
  };
  const write_object_functions = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (collection) => collection.objects().map((obj, i) => _chunkTYMSCBZGjs.StatementFactory.constant(PREFIX.object(i), _typescript2.default.factory.createArrowFunction(void 0, void 0, [
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("_recursive", _chunkPK6R5VEJjs.TypeFactory.keyword("boolean"), _typescript2.default.factory.createIdentifier(String(obj.recursive))),
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("_depth", _chunkPK6R5VEJjs.TypeFactory.keyword("number"), _chunk2F43GCPEjs.ExpressionFactory.number(0))
  ], _chunkPK6R5VEJjs.TypeFactory.keyword("any"), void 0, _chunkF7FRTCGWjs.RandomJoiner.object(COALESCE(importer))(decode(importer)({
    recursive: obj.recursive,
    function: true
  }))(obj)))), "write_object_functions");
  const write_array_functions = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (collection) => collection.arrays().filter((a) => a.recursive).map((array, i) => _chunkTYMSCBZGjs.StatementFactory.constant(PREFIX.array(i), _typescript2.default.factory.createArrowFunction(void 0, void 0, [
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("length", _chunkPK6R5VEJjs.TypeFactory.keyword("number")),
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("_recursive", _chunkPK6R5VEJjs.TypeFactory.keyword("boolean"), _typescript2.default.factory.createTrue()),
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("_depth", _chunkPK6R5VEJjs.TypeFactory.keyword("number"), _chunk2F43GCPEjs.ExpressionFactory.number(0))
  ], _chunkPK6R5VEJjs.TypeFactory.keyword("any"), void 0, _chunkF7FRTCGWjs.RandomJoiner.array(COALESCE(importer))(decode(importer)({
    recursive: true,
    function: true
  }))({
    recursive: true,
    function: true
  })(_typescript2.default.factory.createIdentifier("length"))(array.value)))), "write_array_functions");
  const write_tuple_functions = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (collection) => collection.tuples().filter((a) => a.recursive).map((tuple, i) => _chunkTYMSCBZGjs.StatementFactory.constant(PREFIX.tuple(i), _typescript2.default.factory.createArrowFunction(void 0, void 0, [
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("_recursive", _chunkPK6R5VEJjs.TypeFactory.keyword("boolean"), _typescript2.default.factory.createTrue()),
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("_depth", _chunkPK6R5VEJjs.TypeFactory.keyword("number"), _chunk2F43GCPEjs.ExpressionFactory.number(0))
  ], _chunkPK6R5VEJjs.TypeFactory.keyword("any"), void 0, _chunkF7FRTCGWjs.RandomJoiner.tuple(decode(importer)({
    function: true,
    recursive: true
  }))(tuple.elements)))), "write_tuple_functions");
  const decode = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (explore) => (meta) => {
    const expressions = [];
    if (meta.any) expressions.push(_typescript2.default.factory.createStringLiteral("any type used..."));
    if (meta.isRequired() === false || meta.functional === true) expressions.push(_typescript2.default.factory.createIdentifier("undefined"));
    if (meta.nullable === true) expressions.push(_typescript2.default.factory.createNull());
    for (const constant of meta.constants) for (const { value } of constant.values) expressions.push(decode_atomic(value));
    for (const template of meta.templates) expressions.push(decode_template(importer)(explore)(template));
    for (const atomic of meta.atomics) if (atomic.type === "boolean") expressions.push(decode_boolean(importer));
    else if (atomic.type === "number") expressions.push(...decode_number(importer)(atomic));
    else if (atomic.type === "string") expressions.push(...decode_string(importer)(atomic));
    else if (atomic.type === "bigint") expressions.push(...decode_bigint(importer)(atomic));
    if (meta.escaped) expressions.push(decode(importer)(explore)(meta.escaped.returns));
    for (const array of meta.arrays) expressions.push(...decode_array(importer)(explore)(array));
    for (const tuple of meta.tuples) expressions.push(decode_tuple(importer)(explore)(tuple));
    for (const o of meta.objects) expressions.push(decode_object(importer)(explore)(o));
    for (const native of meta.natives) expressions.push(decode_native(importer)(native));
    for (const set of meta.sets) expressions.push(decode_set(importer)(explore)(set));
    for (const map of meta.maps) expressions.push(decode_map(importer)(explore)(map));
    if (expressions.length === 1) return expressions[0];
    return _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createCallExpression(importer.use("pick"), void 0, [
      _typescript2.default.factory.createArrayLiteralExpression(expressions.map((expr) => _typescript2.default.factory.createArrowFunction(void 0, void 0, [], void 0, void 0, expr)), true)
    ]), void 0, void 0);
  }, "decode");
  const decode_boolean = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => _typescript2.default.factory.createCallExpression(COALESCE(importer)("boolean"), void 0, void 0), "decode_boolean");
  const decode_atomic = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => typeof value === "boolean" ? _typescript2.default.factory.createIdentifier(value.toString()) : typeof value === "number" ? _chunk2F43GCPEjs.ExpressionFactory.number(value) : typeof value === "string" ? _typescript2.default.factory.createStringLiteral(value) : _chunk2F43GCPEjs.ExpressionFactory.bigint(Number(value)), "decode_atomic");
  const decode_template = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (explore) => (template) => _chunkT3PGTOEHjs.TemplateFactory.generate(template.map((meta) => decode(importer)(explore)(meta))), "decode_template");
  const decode_number = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (atomic) => (atomic.tags.length ? atomic.tags : [
    []
  ]).map((tags) => {
    const type = tags.find((t) => t.kind === "type" && (t.value === "int32" || t.value === "int64")) ? "int" : tags.find((t) => t.kind === "type" && (t.value === "uint32" || t.value === "uint64")) ? "uint" : "double";
    const multiply = tags.find((t) => t.kind === "multipleOf");
    return _chunkSL6Y5DQGjs.random_custom.call(void 0, COALESCE(importer))("number")(tags)(_chunkNRPYKJYUjs.RandomRanger.number({
      type,
      transform: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => _chunk2F43GCPEjs.ExpressionFactory.number(value), "transform"),
      setter: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (args) => _typescript2.default.factory.createCallExpression(type !== "double" || multiply !== void 0 ? COALESCE(importer)("integer") : COALESCE(importer)("number"), void 0, args.map((val) => _chunk2F43GCPEjs.ExpressionFactory.number(val))), "setter")
    })({
      minimum: 0,
      maximum: 100,
      gap: 10
    })(tags));
  }), "decode_number");
  const decode_bigint = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (atomic) => (atomic.tags.length ? atomic.tags : [
    []
  ]).map((tags) => _chunkSL6Y5DQGjs.random_custom.call(void 0, COALESCE(importer))("bigint")(tags)(_chunkNRPYKJYUjs.RandomRanger.number({
    type: tags.find((t) => t.kind === "type" && (t.value === "uint" || t.value === "uint64")) ? "uint" : "int",
    transform: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => _chunk2F43GCPEjs.ExpressionFactory.bigint(value), "transform"),
    setter: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (args) => _typescript2.default.factory.createCallExpression(COALESCE(importer)("bigint"), void 0, args.map((value) => _chunk2F43GCPEjs.ExpressionFactory.bigint(value))), "setter")
  })({
    minimum: 0,
    maximum: 100,
    gap: 10
  })(tags))), "decode_bigint");
  const decode_string = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (atomic) => (atomic.tags.length ? atomic.tags : [
    []
  ]).map((tags) => _chunkSL6Y5DQGjs.random_custom.call(void 0, COALESCE(importer))("string")(tags)((() => {
    for (const t of tags) if (t.kind === "format") return _typescript2.default.factory.createCallExpression(COALESCE(importer)(emendFormat(t.value)), void 0, void 0);
    else if (t.kind === "pattern") return _typescript2.default.factory.createCallExpression(COALESCE(importer)("pattern"), void 0, [
      _typescript2.default.factory.createIdentifier(`/${t.value}/`)
    ]);
    const tail = _chunkNRPYKJYUjs.RandomRanger.length(COALESCE(importer))({
      minimum: 5,
      maximum: 25,
      gap: 5
    })({
      minimum: "minLength",
      maximum: "maxLength"
    })(tags);
    return _typescript2.default.factory.createCallExpression(COALESCE(importer)("string"), void 0, tail ? [
      tail
    ] : void 0);
  })())), "decode_string");
  const decode_array = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (explore) => (array) => {
    const lengths = (array.tags.length ? array.tags : [
      []
    ]).map((tags) => _chunkNRPYKJYUjs.RandomRanger.length(COALESCE(importer))({
      minimum: 0,
      maximum: 3,
      gap: 3
    })({
      minimum: "minItems",
      maximum: "maxItems"
    })(tags));
    if (array.type.recursive) return lengths.map((len) => _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(importer.useLocal(PREFIX.array(array.type.index))), void 0, [
      _nullishCoalesce(len, () => ( COALESCE(importer)("length"))),
      _typescript2.default.factory.createTrue(),
      explore.recursive ? _typescript2.default.factory.createAdd(_chunk2F43GCPEjs.ExpressionFactory.number(1), _typescript2.default.factory.createIdentifier("_depth")) : _chunk2F43GCPEjs.ExpressionFactory.number(0)
    ]));
    return lengths.map((len) => {
      const expr = _chunkF7FRTCGWjs.RandomJoiner.array(COALESCE(importer))(decode(importer)(explore))(explore)(len)(array.type.value);
      return explore.recursive ? _typescript2.default.factory.createConditionalExpression(_typescript2.default.factory.createLogicalAnd(_typescript2.default.factory.createIdentifier("_recursive"), _typescript2.default.factory.createLessThan(_chunk2F43GCPEjs.ExpressionFactory.number(5), _typescript2.default.factory.createIdentifier("_depth"))), void 0, _typescript2.default.factory.createIdentifier("[]"), void 0, expr) : expr;
    });
  }, "decode_array");
  const decode_tuple = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (explore) => (tuple) => tuple.type.recursive ? _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(importer.useLocal(PREFIX.tuple(tuple.type.index))), void 0, [
    _typescript2.default.factory.createTrue(),
    explore.recursive ? _typescript2.default.factory.createAdd(_chunk2F43GCPEjs.ExpressionFactory.number(1), _typescript2.default.factory.createIdentifier("_depth")) : _chunk2F43GCPEjs.ExpressionFactory.number(0)
  ]) : _chunkF7FRTCGWjs.RandomJoiner.tuple(decode(importer)(explore))(tuple.type.elements), "decode_tuple");
  const decode_object = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (explore) => (object) => _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(importer.useLocal(PREFIX.object(object.index))), void 0, explore.function ? [
    explore.recursive ? _typescript2.default.factory.createTrue() : _typescript2.default.factory.createIdentifier("_recursive"),
    _typescript2.default.factory.createConditionalExpression(_typescript2.default.factory.createIdentifier("_recursive"), void 0, _typescript2.default.factory.createAdd(_chunk2F43GCPEjs.ExpressionFactory.number(1), _typescript2.default.factory.createIdentifier("_depth")), void 0, _typescript2.default.factory.createIdentifier("_depth"))
  ] : void 0), "decode_object");
  const decode_set = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (explore) => (meta) => _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier("Set"), void 0, [
    decode_array(importer)(explore)(_chunkUNOXPWQEjs.MetadataArray.create({
      tags: [],
      type: _chunkX72M22NMjs.MetadataArrayType.create({
        value: meta,
        recursive: false,
        index: null,
        nullables: [],
        name: `Set<${meta.getName()}>`
      })
    }))[0]
  ]), "decode_set");
  const decode_map = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (explore) => (map) => _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier("Map"), void 0, [
    decode_array(importer)(explore)(_chunkUNOXPWQEjs.MetadataArray.create({
      tags: [],
      type: _chunkX72M22NMjs.MetadataArrayType.create({
        name: `Map<${map.key.getName()}, ${map.value.getName()}>`,
        index: null,
        recursive: false,
        nullables: [],
        value: _chunk6GHU2XFNjs.Metadata.create({
          ..._chunk6GHU2XFNjs.Metadata.initialize(),
          tuples: [
            (() => {
              const type = _chunkH3SMZNB3js.MetadataTupleType.create({
                name: `[${map.key.getName()}, ${map.value.getName()}]`,
                index: null,
                recursive: false,
                nullables: [],
                elements: [
                  map.key,
                  map.value
                ]
              });
              type.of_map = true;
              return _chunkSIGOR7QQjs.MetadataTuple.create({
                type,
                tags: []
              });
            })()
          ]
        })
      })
    }))[0]
  ]), "decode_map");
  const decode_native = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (type) => {
    if (type === "Boolean") return decode_boolean(importer);
    else if (type === "Number") return decode_number(importer)(_chunkTBFJDOPAjs.MetadataAtomic.create({
      type: "number",
      tags: []
    }))[0];
    else if (type === "String") return decode_string(importer)(_chunkTBFJDOPAjs.MetadataAtomic.create({
      type: "string",
      tags: []
    }))[0];
    else if (type === "Date") return decode_native_date(importer);
    else if (type === "Uint8Array" || type === "Uint8ClampedArray" || type === "Uint16Array" || type === "Uint32Array" || type === "BigUint64Array" || type === "Int8Array" || type === "Int16Array" || type === "Int32Array" || type === "BigInt64Array" || type === "Float32Array" || type === "Float64Array") return decode_native_byte_array(importer)(type);
    else if (type === "ArrayBuffer" || type === "SharedArrayBuffer") return decode_native_array_buffer(importer)(type);
    else if (type === "DataView") return decode_native_data_view(importer);
    else if (type === "Blob") return decode_native_blob(importer);
    else if (type === "File") return decode_native_file(importer);
    else return _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier(type), void 0, []);
  }, "decode_native");
  const decode_native_date = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier("Date"), void 0, [
    _typescript2.default.factory.createCallExpression(COALESCE(importer)("datetime"), void 0, [])
  ]), "decode_native_date");
  const decode_native_byte_array = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (type) => {
    new BigInt64Array();
    const [minimum, maximum] = (() => {
      if (type === "Uint8Array" || type === "Uint8ClampedArray") return [
        0,
        255
      ];
      else if (type === "Uint16Array") return [
        0,
        65535
      ];
      else if (type === "Uint32Array") return [
        0,
        4294967295
      ];
      else if (type === "BigUint64Array") return [
        0,
        18446744073709552e3
      ];
      else if (type === "Int8Array") return [
        -128,
        127
      ];
      else if (type === "Int16Array") return [
        -32768,
        32767
      ];
      else if (type === "Int32Array") return [
        -2147483648,
        2147483647
      ];
      else if (type === "BigInt64Array") return [
        -9223372036854776e3,
        9223372036854776e3
      ];
      else if (type === "Float32Array") return [
        -1175494351e29,
        34028235e31
      ];
      return [
        Number.MIN_VALUE,
        Number.MAX_VALUE
      ];
    })();
    const literal = type === "BigInt64Array" || type === "BigUint64Array" ? _chunk2F43GCPEjs.ExpressionFactory.bigint : _chunk2F43GCPEjs.ExpressionFactory.number;
    return _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier(type), [], [
      _typescript2.default.factory.createCallExpression(COALESCE(importer)("array"), void 0, [
        _typescript2.default.factory.createArrowFunction(void 0, void 0, [], _chunkPK6R5VEJjs.TypeFactory.keyword("any"), void 0, _typescript2.default.factory.createCallExpression(COALESCE(importer)(type === "Float32Array" || type === "Float64Array" ? "number" : type === "BigInt64Array" || type === "BigUint64Array" ? "bigint" : "integer"), void 0, [
          literal(minimum),
          literal(maximum)
        ]))
      ])
    ]);
  }, "decode_native_byte_array");
  const decode_native_blob = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier("Blob"), void 0, [
    _typescript2.default.factory.createArrayLiteralExpression([
      decode_native_byte_array(importer)("Uint8Array")
    ], true)
  ]), "decode_native_blob");
  const decode_native_file = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier("File"), void 0, [
    _typescript2.default.factory.createArrayLiteralExpression([
      decode_native_byte_array(importer)("Uint8Array")
    ], true),
    _typescript2.default.factory.createTemplateExpression(_typescript2.default.factory.createTemplateHead(""), [
      _typescript2.default.factory.createTemplateSpan(_typescript2.default.factory.createCallExpression(COALESCE(importer)("string"), void 0, [
        _typescript2.default.factory.createNumericLiteral(8)
      ]), _typescript2.default.factory.createTemplateMiddle(".")),
      _typescript2.default.factory.createTemplateSpan(_typescript2.default.factory.createCallExpression(COALESCE(importer)("string"), void 0, [
        _typescript2.default.factory.createNumericLiteral(3)
      ]), _typescript2.default.factory.createTemplateTail(""))
    ])
  ]), "decode_native_file");
  const decode_native_array_buffer = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (type) => type === "ArrayBuffer" ? _chunkUUZFPK7Njs.IdentifierFactory.access(decode_native_byte_array(importer)("Uint8Array"))("buffer") : _chunk2F43GCPEjs.ExpressionFactory.selfCall(_typescript2.default.factory.createBlock([
    _chunkTYMSCBZGjs.StatementFactory.constant("length", _typescript2.default.factory.createCallExpression(COALESCE(importer)("integer"), void 0, [])),
    _chunkTYMSCBZGjs.StatementFactory.constant("buffer", _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier("SharedArrayBuffer"), [], [
      _typescript2.default.factory.createIdentifier("length")
    ])),
    _chunkTYMSCBZGjs.StatementFactory.constant("bytes", _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier("Uint8Array"), [], [
      _typescript2.default.factory.createIdentifier("buffer")
    ])),
    _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createIdentifier("bytes"))("set"), void 0, [
      _typescript2.default.factory.createCallExpression(COALESCE(importer)("array"), void 0, [
        _typescript2.default.factory.createArrowFunction(void 0, void 0, [], _chunkPK6R5VEJjs.TypeFactory.keyword("any"), void 0, _typescript2.default.factory.createCallExpression(COALESCE(importer)("integer"), void 0, [
          _chunk2F43GCPEjs.ExpressionFactory.number(0),
          _chunk2F43GCPEjs.ExpressionFactory.number(255)
        ])),
        _typescript2.default.factory.createIdentifier("length")
      ]),
      _chunk2F43GCPEjs.ExpressionFactory.number(0)
    ])),
    _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createIdentifier("buffer"))
  ], true)), "decode_native_array_buffer");
  const decode_native_data_view = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => _typescript2.default.factory.createNewExpression(_typescript2.default.factory.createIdentifier("DataView"), [], [
    _chunkUUZFPK7Njs.IdentifierFactory.access(decode_native_byte_array(importer)("Uint8Array"))("buffer")
  ]), "decode_native_data_view");
})(RandomProgrammer || (RandomProgrammer = exports.RandomProgrammer = {}));
var PREFIX = {
  object: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (i) => `$ro${i}`, "object"),
  array: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (i) => `$ra${i}`, "array"),
  tuple: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (i) => `$rt${i}`, "tuple")
};
var COALESCE = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (name) => _chunk2F43GCPEjs.ExpressionFactory.coalesce(_chunkMCMQ56RXjs.Escaper.variable(name) ? _typescript2.default.factory.createPropertyAccessChain(_typescript2.default.factory.createIdentifier("generator"), _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.QuestionDotToken), _typescript2.default.factory.createIdentifier(name)) : _typescript2.default.factory.createElementAccessChain(_typescript2.default.factory.createIdentifier("generator"), _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.QuestionDotToken), _typescript2.default.factory.createStringLiteral(name)))(_chunkUUZFPK7Njs.IdentifierFactory.access(importer.use("generator"))(name)), "COALESCE");
var emendFormat = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (key) => key === "date-time" ? "datetime" : key.split("-").map((str, i) => i === 0 || str.length === 0 ? str : str[0].toUpperCase() + str.substring(1)).join(""), "emendFormat");



exports.RandomProgrammer = RandomProgrammer;
//# sourceMappingURL=chunk-JWVFSEIQ.js.map