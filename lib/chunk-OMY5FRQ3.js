"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkHCTJVXGJjs = require('./chunk-HCTJVXGJ.js');


var _chunkH3MUGVKWjs = require('./chunk-H3MUGVKW.js');


var _chunkMCMQ56RXjs = require('./chunk-MCMQ56RX.js');


var _chunk6TJDJHWOjs = require('./chunk-6TJDJHWO.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/factories/ProtobufFactory.ts
var ProtobufFactory;
(function(ProtobufFactory2) {
  ProtobufFactory2.metadata = (method) => (checker, context) => (collection) => (type) => {
    const result = _chunk6TJDJHWOjs.MetadataFactory.analyze(checker, context)({
      escape: false,
      constant: true,
      absorb: true,
      validate
    })(collection)(type);
    if (result.success === false) throw _chunkH3MUGVKWjs.TransformerError.from(`typia.protobuf.${method}`)(result.errors);
    return result.data;
  };
  const validate = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (meta, explore) => {
    const errors = [];
    const insert = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (msg) => errors.push(msg), "insert");
    if (explore.top === true) {
      const onlyObject = meta.size() === 1 && meta.objects.length === 1 && meta.objects[0].properties.every((p) => p.key.isSoleLiteral()) && meta.isRequired() === true && meta.nullable === false;
      if (onlyObject === false) insert("target type must be a sole and static object type");
    }
    const noSupport = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (msg) => insert(`does not support ${msg}`), "noSupport");
    if (meta.any) noSupport("any type");
    if (meta.functional) noSupport("functional type");
    if (meta.tuples.length) noSupport("tuple type");
    if (meta.sets.length) noSupport("Set type");
    if (meta.natives.length) for (const native of meta.natives) {
      if (native === "Uint8Array") continue;
      const instead = BANNED_NATIVE_TYPES.get(native);
      if (instead === void 0) noSupport(`${native} type`);
      else noSupport(`${native} type. Use ${instead} type instead.`);
    }
    if (meta.atomics.length) {
      const numbers = _chunkHCTJVXGJjs.ProtobufUtil.getNumbers(meta);
      const bigints = _chunkHCTJVXGJjs.ProtobufUtil.getBigints(meta);
      for (const type of [
        "int64",
        "uint64"
      ]) if (numbers.some((n) => n === type) && bigints.some((b) => b === type)) insert(`tags.Type<"${type}"> cannot be used in both number and bigint types. Recommend to remove from number type`);
    }
    if (meta.arrays.length && meta.arrays.some((array) => !!array.type.value.arrays.length)) noSupport("over two dimenstional array type");
    if (meta.arrays.length && meta.arrays.some((array) => array.type.value.isRequired() === false || array.type.value.nullable === true)) noSupport("optional type in array");
    if (meta.arrays.length && meta.arrays.some((a) => a.type.value.size() > 1 && a.type.value.constants.length !== 1 && _optionalChain([a, 'access', _ => _.type, 'access', _2 => _2.value, 'access', _3 => _3.constants, 'access', _4 => _4[0], 'optionalAccess', _5 => _5.values, 'access', _6 => _6.length]) !== a.type.value.size())) noSupport("union type in array");
    if (meta.arrays.length && meta.arrays.some((a) => a.type.value.maps.length || a.type.value.objects.length && a.type.value.objects.some((o) => _chunkHCTJVXGJjs.ProtobufUtil.isStaticObject(o) === false))) noSupport("dynamic object in array");
    if (meta.size() > 1 && meta.arrays.length) noSupport("union type with array type");
    if (meta.objects.length && meta.objects.some((obj) => obj.properties.length === 0)) noSupport("empty object type");
    if (meta.objects.length && meta.objects.some((obj) => obj.properties.filter((p) => !p.key.isSoleLiteral()).length > 1)) noSupport("object type with multiple dynamic key typed properties. Keep only one.");
    if (meta.objects.length && meta.objects.some((obj) => obj.properties.some((p) => p.key.isSoleLiteral()) && obj.properties.some((p) => !p.key.isSoleLiteral()))) noSupport("object type with mixed static and dynamic key typed properties. Keep statics or dynamic only.");
    if (meta.objects.length && meta.objects.some((obj) => obj.properties.some((p) => p.key.isSoleLiteral() === true && _chunkMCMQ56RXjs.Escaper.variable(p.key.getSoleLiteral()) === false))) noSupport(`object type with invalid static key name.`);
    if (meta.objects.length && isDynamicObject(meta.objects[0]) && meta.objects[0].properties.some((p) => !!p.value.arrays.length)) noSupport("dynamic object with array value type");
    if (meta.size() > 1 && meta.objects.length && isDynamicObject(meta.objects[0])) noSupport("union type with dynamic object type");
    if (meta.objects.length && meta.objects.some((obj) => isDynamicObject(obj) && obj.properties.some((p) => _chunkHCTJVXGJjs.ProtobufUtil.isUnion(p.value)))) noSupport("union type in dynamic property");
    if (meta.maps.length && meta.maps.some((m) => _chunkHCTJVXGJjs.ProtobufUtil.isUnion(m.key))) noSupport("union key typed map");
    if (meta.maps.length && meta.maps.some((m) => _chunkHCTJVXGJjs.ProtobufUtil.getAtomics(m.key).length !== 1)) noSupport("non-atomic key typed map");
    if (meta.maps.length && meta.maps.some((m) => m.key.isRequired() === false || m.key.nullable)) noSupport("optional key typed map");
    if (meta.maps.length && meta.maps.some((m) => !!m.value.arrays.length)) noSupport("map type with array value type");
    if (meta.size() > 1 && meta.maps.length) noSupport("union type with map type");
    if (meta.maps.length && meta.maps.some((m) => _chunkHCTJVXGJjs.ProtobufUtil.isUnion(m.value))) noSupport("union type in map value type");
    return errors;
  }, "validate");
})(ProtobufFactory || (ProtobufFactory = exports.ProtobufFactory = {}));
var isDynamicObject = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (obj) => obj.properties[0].key.isSoleLiteral() === false, "isDynamicObject");
var BANNED_NATIVE_TYPES = new Map([
  [
    "Date",
    "string"
  ],
  [
    "Boolean",
    "boolean"
  ],
  [
    "BigInt",
    "bigint"
  ],
  [
    "Number",
    "number"
  ],
  [
    "String",
    "string"
  ],
  ...[
    "Buffer",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "BigUint64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "BigInt64Array",
    "Float32Array",
    "Float64Array",
    "DataView",
    "ArrayBuffer",
    "SharedArrayBuffer"
  ].map((name) => [
    name,
    "Uint8Array"
  ]),
  [
    "WeakSet",
    "Array"
  ],
  [
    "WeakMap",
    "Map"
  ]
]);



exports.ProtobufFactory = ProtobufFactory;
//# sourceMappingURL=chunk-OMY5FRQ3.js.map