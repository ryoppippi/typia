import {
  random_custom
} from "./chunk-OEARGCQO.mjs";
import {
  RandomJoiner
} from "./chunk-VUSMZL4A.mjs";
import {
  RandomRanger
} from "./chunk-6LKF5L6N.mjs";
import {
  FunctionImporter
} from "./chunk-5TRLONIA.mjs";
import {
  StatementFactory
} from "./chunk-RR3Z23V6.mjs";
import {
  TemplateFactory
} from "./chunk-IDSD77P4.mjs";
import {
  TransformerError
} from "./chunk-77LTYCTZ.mjs";
import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";
import {
  Escaper
} from "./chunk-DISTKAQW.mjs";
import {
  MetadataFactory
} from "./chunk-MNHXN4HB.mjs";
import {
  Metadata
} from "./chunk-RD644GUB.mjs";
import {
  MetadataAtomic
} from "./chunk-X7O4QE24.mjs";
import {
  MetadataTuple
} from "./chunk-4Q3FYUW7.mjs";
import {
  MetadataArray
} from "./chunk-HXFVCUNO.mjs";
import {
  ExpressionFactory
} from "./chunk-TJUGWBRO.mjs";
import {
  MetadataCollection
} from "./chunk-MX63JLF5.mjs";
import {
  MetadataTupleType
} from "./chunk-Q72Q7WWM.mjs";
import {
  MetadataArrayType
} from "./chunk-S6FVASNO.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/RandomProgrammer.ts
import ts from "typescript";
var RandomProgrammer;
(function(RandomProgrammer2) {
  RandomProgrammer2.write = (project) => (modulo) => (init) => {
    const importer = new FunctionImporter(modulo.getText());
    return (type, name) => {
      const collection = new MetadataCollection();
      const result = MetadataFactory.analyze(project.checker, project.context)({
        escape: false,
        constant: true,
        absorb: true,
        validate: /* @__PURE__ */ __name((meta) => {
          const output2 = [];
          if (meta.natives.some((n) => n === "WeakSet")) output2.push(`WeakSet is not supported.`);
          else if (meta.natives.some((n) => n === "WeakMap")) output2.push(`WeakMap is not supported.`);
          return output2;
        }, "validate")
      })(collection)(type);
      if (result.success === false) throw TransformerError.from(`typia.${importer.method}`)(result.errors);
      const functions = {
        objects: write_object_functions(importer)(collection),
        arrays: write_array_functions(importer)(collection),
        tuples: write_tuple_functions(importer)(collection)
      };
      const output = decode(importer)({
        function: false,
        recursive: false
      })(result.data);
      return ts.factory.createArrowFunction(void 0, void 0, [
        IdentifierFactory.parameter("generator", ts.factory.createTypeReferenceNode("Partial<typia.IRandomGenerator>"), init ?? ts.factory.createToken(ts.SyntaxKind.QuestionToken))
      ], ts.factory.createImportTypeNode(ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral("typia")), void 0, ts.factory.createIdentifier("Resolved"), [
        ts.factory.createTypeReferenceNode(name ?? TypeFactory.getFullName(project.checker)(type))
      ], false), void 0, ts.factory.createBlock([
        ...importer.declare(modulo),
        ...functions.objects,
        ...functions.arrays,
        ...functions.tuples,
        ts.factory.createReturnStatement(output)
      ], true));
    };
  };
  const write_object_functions = /* @__PURE__ */ __name((importer) => (collection) => collection.objects().map((obj, i) => StatementFactory.constant(PREFIX.object(i), ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("_recursive", TypeFactory.keyword("boolean"), ts.factory.createIdentifier(String(obj.recursive))),
    IdentifierFactory.parameter("_depth", TypeFactory.keyword("number"), ExpressionFactory.number(0))
  ], TypeFactory.keyword("any"), void 0, RandomJoiner.object(COALESCE(importer))(decode(importer)({
    recursive: obj.recursive,
    function: true
  }))(obj)))), "write_object_functions");
  const write_array_functions = /* @__PURE__ */ __name((importer) => (collection) => collection.arrays().filter((a) => a.recursive).map((array, i) => StatementFactory.constant(PREFIX.array(i), ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("length", TypeFactory.keyword("number")),
    IdentifierFactory.parameter("_recursive", TypeFactory.keyword("boolean"), ts.factory.createTrue()),
    IdentifierFactory.parameter("_depth", TypeFactory.keyword("number"), ExpressionFactory.number(0))
  ], TypeFactory.keyword("any"), void 0, RandomJoiner.array(COALESCE(importer))(decode(importer)({
    recursive: true,
    function: true
  }))({
    recursive: true,
    function: true
  })(ts.factory.createIdentifier("length"))(array.value)))), "write_array_functions");
  const write_tuple_functions = /* @__PURE__ */ __name((importer) => (collection) => collection.tuples().filter((a) => a.recursive).map((tuple, i) => StatementFactory.constant(PREFIX.tuple(i), ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter("_recursive", TypeFactory.keyword("boolean"), ts.factory.createTrue()),
    IdentifierFactory.parameter("_depth", TypeFactory.keyword("number"), ExpressionFactory.number(0))
  ], TypeFactory.keyword("any"), void 0, RandomJoiner.tuple(decode(importer)({
    function: true,
    recursive: true
  }))(tuple.elements)))), "write_tuple_functions");
  const decode = /* @__PURE__ */ __name((importer) => (explore) => (meta) => {
    const expressions = [];
    if (meta.any) expressions.push(ts.factory.createStringLiteral("any type used..."));
    if (meta.isRequired() === false || meta.functional === true) expressions.push(ts.factory.createIdentifier("undefined"));
    if (meta.nullable === true) expressions.push(ts.factory.createNull());
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
    return ts.factory.createCallExpression(ts.factory.createCallExpression(importer.use("pick"), void 0, [
      ts.factory.createArrayLiteralExpression(expressions.map((expr) => ts.factory.createArrowFunction(void 0, void 0, [], void 0, void 0, expr)), true)
    ]), void 0, void 0);
  }, "decode");
  const decode_boolean = /* @__PURE__ */ __name((importer) => ts.factory.createCallExpression(COALESCE(importer)("boolean"), void 0, void 0), "decode_boolean");
  const decode_atomic = /* @__PURE__ */ __name((value) => typeof value === "boolean" ? ts.factory.createIdentifier(value.toString()) : typeof value === "number" ? ExpressionFactory.number(value) : typeof value === "string" ? ts.factory.createStringLiteral(value) : ExpressionFactory.bigint(Number(value)), "decode_atomic");
  const decode_template = /* @__PURE__ */ __name((importer) => (explore) => (template) => TemplateFactory.generate(template.map((meta) => decode(importer)(explore)(meta))), "decode_template");
  const decode_number = /* @__PURE__ */ __name((importer) => (atomic) => (atomic.tags.length ? atomic.tags : [
    []
  ]).map((tags) => {
    const type = tags.find((t) => t.kind === "type" && (t.value === "int32" || t.value === "int64")) ? "int" : tags.find((t) => t.kind === "type" && (t.value === "uint32" || t.value === "uint64")) ? "uint" : "double";
    const multiply = tags.find((t) => t.kind === "multipleOf");
    return random_custom(COALESCE(importer))("number")(tags)(RandomRanger.number({
      type,
      transform: /* @__PURE__ */ __name((value) => ExpressionFactory.number(value), "transform"),
      setter: /* @__PURE__ */ __name((args) => ts.factory.createCallExpression(type !== "double" || multiply !== void 0 ? COALESCE(importer)("integer") : COALESCE(importer)("number"), void 0, args.map((val) => ExpressionFactory.number(val))), "setter")
    })({
      minimum: 0,
      maximum: 100,
      gap: 10
    })(tags));
  }), "decode_number");
  const decode_bigint = /* @__PURE__ */ __name((importer) => (atomic) => (atomic.tags.length ? atomic.tags : [
    []
  ]).map((tags) => random_custom(COALESCE(importer))("bigint")(tags)(RandomRanger.number({
    type: tags.find((t) => t.kind === "type" && (t.value === "uint" || t.value === "uint64")) ? "uint" : "int",
    transform: /* @__PURE__ */ __name((value) => ExpressionFactory.bigint(value), "transform"),
    setter: /* @__PURE__ */ __name((args) => ts.factory.createCallExpression(COALESCE(importer)("bigint"), void 0, args.map((value) => ExpressionFactory.bigint(value))), "setter")
  })({
    minimum: 0,
    maximum: 100,
    gap: 10
  })(tags))), "decode_bigint");
  const decode_string = /* @__PURE__ */ __name((importer) => (atomic) => (atomic.tags.length ? atomic.tags : [
    []
  ]).map((tags) => random_custom(COALESCE(importer))("string")(tags)((() => {
    for (const t of tags) if (t.kind === "format") return ts.factory.createCallExpression(COALESCE(importer)(emendFormat(t.value)), void 0, void 0);
    else if (t.kind === "pattern") return ts.factory.createCallExpression(COALESCE(importer)("pattern"), void 0, [
      ts.factory.createIdentifier(`/${t.value}/`)
    ]);
    const tail = RandomRanger.length(COALESCE(importer))({
      minimum: 5,
      maximum: 25,
      gap: 5
    })({
      minimum: "minLength",
      maximum: "maxLength"
    })(tags);
    return ts.factory.createCallExpression(COALESCE(importer)("string"), void 0, tail ? [
      tail
    ] : void 0);
  })())), "decode_string");
  const decode_array = /* @__PURE__ */ __name((importer) => (explore) => (array) => {
    const lengths = (array.tags.length ? array.tags : [
      []
    ]).map((tags) => RandomRanger.length(COALESCE(importer))({
      minimum: 0,
      maximum: 3,
      gap: 3
    })({
      minimum: "minItems",
      maximum: "maxItems"
    })(tags));
    if (array.type.recursive) return lengths.map((len) => ts.factory.createCallExpression(ts.factory.createIdentifier(importer.useLocal(PREFIX.array(array.type.index))), void 0, [
      len ?? COALESCE(importer)("length"),
      ts.factory.createTrue(),
      explore.recursive ? ts.factory.createAdd(ExpressionFactory.number(1), ts.factory.createIdentifier("_depth")) : ExpressionFactory.number(0)
    ]));
    return lengths.map((len) => {
      const expr = RandomJoiner.array(COALESCE(importer))(decode(importer)(explore))(explore)(len)(array.type.value);
      return explore.recursive ? ts.factory.createConditionalExpression(ts.factory.createLogicalAnd(ts.factory.createIdentifier("_recursive"), ts.factory.createLessThan(ExpressionFactory.number(5), ts.factory.createIdentifier("_depth"))), void 0, ts.factory.createIdentifier("[]"), void 0, expr) : expr;
    });
  }, "decode_array");
  const decode_tuple = /* @__PURE__ */ __name((importer) => (explore) => (tuple) => tuple.type.recursive ? ts.factory.createCallExpression(ts.factory.createIdentifier(importer.useLocal(PREFIX.tuple(tuple.type.index))), void 0, [
    ts.factory.createTrue(),
    explore.recursive ? ts.factory.createAdd(ExpressionFactory.number(1), ts.factory.createIdentifier("_depth")) : ExpressionFactory.number(0)
  ]) : RandomJoiner.tuple(decode(importer)(explore))(tuple.type.elements), "decode_tuple");
  const decode_object = /* @__PURE__ */ __name((importer) => (explore) => (object) => ts.factory.createCallExpression(ts.factory.createIdentifier(importer.useLocal(PREFIX.object(object.index))), void 0, explore.function ? [
    explore.recursive ? ts.factory.createTrue() : ts.factory.createIdentifier("_recursive"),
    ts.factory.createConditionalExpression(ts.factory.createIdentifier("_recursive"), void 0, ts.factory.createAdd(ExpressionFactory.number(1), ts.factory.createIdentifier("_depth")), void 0, ts.factory.createIdentifier("_depth"))
  ] : void 0), "decode_object");
  const decode_set = /* @__PURE__ */ __name((importer) => (explore) => (meta) => ts.factory.createNewExpression(ts.factory.createIdentifier("Set"), void 0, [
    decode_array(importer)(explore)(MetadataArray.create({
      tags: [],
      type: MetadataArrayType.create({
        value: meta,
        recursive: false,
        index: null,
        nullables: [],
        name: `Set<${meta.getName()}>`
      })
    }))[0]
  ]), "decode_set");
  const decode_map = /* @__PURE__ */ __name((importer) => (explore) => (map) => ts.factory.createNewExpression(ts.factory.createIdentifier("Map"), void 0, [
    decode_array(importer)(explore)(MetadataArray.create({
      tags: [],
      type: MetadataArrayType.create({
        name: `Map<${map.key.getName()}, ${map.value.getName()}>`,
        index: null,
        recursive: false,
        nullables: [],
        value: Metadata.create({
          ...Metadata.initialize(),
          tuples: [
            (() => {
              const type = MetadataTupleType.create({
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
              return MetadataTuple.create({
                type,
                tags: []
              });
            })()
          ]
        })
      })
    }))[0]
  ]), "decode_map");
  const decode_native = /* @__PURE__ */ __name((importer) => (type) => {
    if (type === "Boolean") return decode_boolean(importer);
    else if (type === "Number") return decode_number(importer)(MetadataAtomic.create({
      type: "number",
      tags: []
    }))[0];
    else if (type === "String") return decode_string(importer)(MetadataAtomic.create({
      type: "string",
      tags: []
    }))[0];
    else if (type === "Date") return decode_native_date(importer);
    else if (type === "Uint8Array" || type === "Uint8ClampedArray" || type === "Uint16Array" || type === "Uint32Array" || type === "BigUint64Array" || type === "Int8Array" || type === "Int16Array" || type === "Int32Array" || type === "BigInt64Array" || type === "Float32Array" || type === "Float64Array") return decode_native_byte_array(importer)(type);
    else if (type === "ArrayBuffer" || type === "SharedArrayBuffer") return decode_native_array_buffer(importer)(type);
    else if (type === "DataView") return decode_native_data_view(importer);
    else if (type === "Blob") return decode_native_blob(importer);
    else if (type === "File") return decode_native_file(importer);
    else return ts.factory.createNewExpression(ts.factory.createIdentifier(type), void 0, []);
  }, "decode_native");
  const decode_native_date = /* @__PURE__ */ __name((importer) => ts.factory.createNewExpression(ts.factory.createIdentifier("Date"), void 0, [
    ts.factory.createCallExpression(COALESCE(importer)("datetime"), void 0, [])
  ]), "decode_native_date");
  const decode_native_byte_array = /* @__PURE__ */ __name((importer) => (type) => {
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
    const literal = type === "BigInt64Array" || type === "BigUint64Array" ? ExpressionFactory.bigint : ExpressionFactory.number;
    return ts.factory.createNewExpression(ts.factory.createIdentifier(type), [], [
      ts.factory.createCallExpression(COALESCE(importer)("array"), void 0, [
        ts.factory.createArrowFunction(void 0, void 0, [], TypeFactory.keyword("any"), void 0, ts.factory.createCallExpression(COALESCE(importer)(type === "Float32Array" || type === "Float64Array" ? "number" : type === "BigInt64Array" || type === "BigUint64Array" ? "bigint" : "integer"), void 0, [
          literal(minimum),
          literal(maximum)
        ]))
      ])
    ]);
  }, "decode_native_byte_array");
  const decode_native_blob = /* @__PURE__ */ __name((importer) => ts.factory.createNewExpression(ts.factory.createIdentifier("Blob"), void 0, [
    ts.factory.createArrayLiteralExpression([
      decode_native_byte_array(importer)("Uint8Array")
    ], true)
  ]), "decode_native_blob");
  const decode_native_file = /* @__PURE__ */ __name((importer) => ts.factory.createNewExpression(ts.factory.createIdentifier("File"), void 0, [
    ts.factory.createArrayLiteralExpression([
      decode_native_byte_array(importer)("Uint8Array")
    ], true),
    ts.factory.createTemplateExpression(ts.factory.createTemplateHead(""), [
      ts.factory.createTemplateSpan(ts.factory.createCallExpression(COALESCE(importer)("string"), void 0, [
        ts.factory.createNumericLiteral(8)
      ]), ts.factory.createTemplateMiddle(".")),
      ts.factory.createTemplateSpan(ts.factory.createCallExpression(COALESCE(importer)("string"), void 0, [
        ts.factory.createNumericLiteral(3)
      ]), ts.factory.createTemplateTail(""))
    ])
  ]), "decode_native_file");
  const decode_native_array_buffer = /* @__PURE__ */ __name((importer) => (type) => type === "ArrayBuffer" ? IdentifierFactory.access(decode_native_byte_array(importer)("Uint8Array"))("buffer") : ExpressionFactory.selfCall(ts.factory.createBlock([
    StatementFactory.constant("length", ts.factory.createCallExpression(COALESCE(importer)("integer"), void 0, [])),
    StatementFactory.constant("buffer", ts.factory.createNewExpression(ts.factory.createIdentifier("SharedArrayBuffer"), [], [
      ts.factory.createIdentifier("length")
    ])),
    StatementFactory.constant("bytes", ts.factory.createNewExpression(ts.factory.createIdentifier("Uint8Array"), [], [
      ts.factory.createIdentifier("buffer")
    ])),
    ts.factory.createExpressionStatement(ts.factory.createCallExpression(IdentifierFactory.access(ts.factory.createIdentifier("bytes"))("set"), void 0, [
      ts.factory.createCallExpression(COALESCE(importer)("array"), void 0, [
        ts.factory.createArrowFunction(void 0, void 0, [], TypeFactory.keyword("any"), void 0, ts.factory.createCallExpression(COALESCE(importer)("integer"), void 0, [
          ExpressionFactory.number(0),
          ExpressionFactory.number(255)
        ])),
        ts.factory.createIdentifier("length")
      ]),
      ExpressionFactory.number(0)
    ])),
    ts.factory.createReturnStatement(ts.factory.createIdentifier("buffer"))
  ], true)), "decode_native_array_buffer");
  const decode_native_data_view = /* @__PURE__ */ __name((importer) => ts.factory.createNewExpression(ts.factory.createIdentifier("DataView"), [], [
    IdentifierFactory.access(decode_native_byte_array(importer)("Uint8Array"))("buffer")
  ]), "decode_native_data_view");
})(RandomProgrammer || (RandomProgrammer = {}));
var PREFIX = {
  object: /* @__PURE__ */ __name((i) => `$ro${i}`, "object"),
  array: /* @__PURE__ */ __name((i) => `$ra${i}`, "array"),
  tuple: /* @__PURE__ */ __name((i) => `$rt${i}`, "tuple")
};
var COALESCE = /* @__PURE__ */ __name((importer) => (name) => ExpressionFactory.coalesce(Escaper.variable(name) ? ts.factory.createPropertyAccessChain(ts.factory.createIdentifier("generator"), ts.factory.createToken(ts.SyntaxKind.QuestionDotToken), ts.factory.createIdentifier(name)) : ts.factory.createElementAccessChain(ts.factory.createIdentifier("generator"), ts.factory.createToken(ts.SyntaxKind.QuestionDotToken), ts.factory.createStringLiteral(name)))(IdentifierFactory.access(importer.use("generator"))(name)), "COALESCE");
var emendFormat = /* @__PURE__ */ __name((key) => key === "date-time" ? "datetime" : key.split("-").map((str, i) => i === 0 || str.length === 0 ? str : str[0].toUpperCase() + str.substring(1)).join(""), "emendFormat");

export {
  RandomProgrammer
};
//# sourceMappingURL=chunk-XMPAKDMK.mjs.map