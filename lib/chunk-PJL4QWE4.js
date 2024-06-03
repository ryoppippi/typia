"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkA7ORGSGMjs = require('./chunk-A7ORGSGM.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/factories/internal/metadata/iterate_metadata_native.ts
var iterate_metadata_native = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (meta, type) => {
  const validator = validate(checker)(type);
  const name = _chunkPK6R5VEJjs.TypeFactory.getFullName(checker)(type, type.getSymbol());
  const simple = SIMPLES.get(name);
  if (simple && validator(simple)) {
    _chunkA7ORGSGMjs.ArrayUtil.set(meta.natives, name, (str) => str);
    return true;
  }
  for (const generic of GENERICS) if (name.substring(0, generic.name.length) === generic.name && validator(generic)) {
    _chunkA7ORGSGMjs.ArrayUtil.set(meta.natives, _nullishCoalesce(generic.name, () => ( name)), (str) => str);
    return true;
  }
  return false;
}, "iterate_metadata_native");
var validate = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (type) => (info) => (_nullishCoalesce(info.methods, () => ( []))).every((method) => {
  const returnType = _chunkPK6R5VEJjs.TypeFactory.getReturnType(checker)(type)(method.name);
  return returnType !== null && checker.typeToString(returnType) === method.return;
}) && (_nullishCoalesce(info.properties, () => ( []))).every((property) => {
  const prop = checker.getPropertyOfType(type, property.name);
  const propType = _optionalChain([prop, 'optionalAccess', _ => _.valueDeclaration]) ? checker.getTypeAtLocation(_optionalChain([prop, 'optionalAccess', _2 => _2.valueDeclaration])) : void 0;
  return propType !== void 0 && checker.typeToString(propType) === property.type;
}), "validate");
var getBinaryProps = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (className) => ({
  name: className,
  methods: [
    ...[
      "indexOf",
      "lastIndexOf"
    ].map((name) => ({
      name,
      return: "number"
    })),
    ...[
      "some",
      "every"
    ].map((name) => ({
      name,
      return: "boolean"
    })),
    ...[
      "join",
      "toLocaleString"
    ].map((name) => ({
      name,
      return: "string"
    })),
    ...[
      "reverse",
      "slice",
      "subarray"
    ].map((name) => ({
      name,
      return: className
    }))
  ],
  properties: [
    "BYTES_PER_ELEMENT",
    "length",
    "byteLength",
    "byteOffset"
  ].map((name) => ({
    name,
    type: "number"
  }))
}), "getBinaryProps");
var SIMPLES = new Map([
  [
    "Date",
    {
      methods: [
        "getTime",
        "getFullYear",
        "getMonth",
        "getMinutes"
      ].map((name) => ({
        name,
        return: "number"
      }))
    }
  ],
  [
    "Boolean",
    {
      methods: [
        {
          name: "valueOf",
          return: "boolean"
        }
      ]
    }
  ],
  [
    "Number",
    {
      methods: [
        ...[
          "toFixed",
          "toExponential",
          "toPrecision"
        ].map((name) => ({
          name,
          return: "string"
        })),
        {
          name: "valueOf",
          return: "number"
        }
      ]
    }
  ],
  [
    "String",
    {
      methods: [
        "charAt",
        "concat",
        "valueOf",
        "trim",
        "replace",
        "substring"
      ].map((name) => ({
        name,
        return: "string"
      }))
    }
  ],
  ...[
    "Uint8Array",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "BigUint64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "BigInt64Array",
    "Float32Array",
    "Float64Array"
  ].map((name) => [
    name,
    getBinaryProps(name)
  ]),
  ...[
    "ArrayBuffer",
    "SharedArrayBuffer"
  ].map((className) => {
    const info = {
      methods: [
        {
          name: "slice",
          return: className
        }
      ],
      properties: [
        {
          name: "byteLength",
          type: "number"
        }
      ]
    };
    return [
      className,
      info
    ];
  }),
  ...[
    "Blob",
    "File"
  ].map((className) => [
    className,
    {
      methods: [
        {
          name: "arrayBuffer",
          return: "Promise<ArrayBuffer>"
        },
        {
          name: "slice",
          return: "Blob"
        },
        {
          name: "text",
          return: "Promise<string>"
        }
      ],
      properties: [
        {
          name: "size",
          type: "number"
        },
        {
          name: "type",
          type: "string"
        }
      ]
    }
  ]),
  [
    "DataView",
    {
      methods: [
        "getFloat32",
        "getFloat64",
        "getInt8",
        "getInt16",
        "getInt32",
        "getUint8",
        "getUint16",
        "getUint32"
      ].map((name) => ({
        name,
        return: "number"
      }))
    }
  ]
]);
var GENERICS = [
  "WeakMap",
  "WeakSet"
].map((name) => ({
  name,
  methods: [
    "has",
    "delete"
  ].map((name2) => ({
    name: name2,
    return: "boolean"
  }))
}));



exports.iterate_metadata_native = iterate_metadata_native;
//# sourceMappingURL=chunk-PJL4QWE4.js.map