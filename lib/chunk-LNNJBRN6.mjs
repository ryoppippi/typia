import {
  ArrayUtil
} from "./chunk-BDIZKMW2.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/factories/internal/metadata/iterate_metadata_native.ts
var iterate_metadata_native = /* @__PURE__ */ __name((checker) => (meta, type) => {
  const validator = validate(checker)(type);
  const name = TypeFactory.getFullName(checker)(type, type.getSymbol());
  const simple = SIMPLES.get(name);
  if (simple && validator(simple)) {
    ArrayUtil.set(meta.natives, name, (str) => str);
    return true;
  }
  for (const generic of GENERICS) if (name.substring(0, generic.name.length) === generic.name && validator(generic)) {
    ArrayUtil.set(meta.natives, generic.name ?? name, (str) => str);
    return true;
  }
  return false;
}, "iterate_metadata_native");
var validate = /* @__PURE__ */ __name((checker) => (type) => (info) => (info.methods ?? []).every((method) => {
  const returnType = TypeFactory.getReturnType(checker)(type)(method.name);
  return returnType !== null && checker.typeToString(returnType) === method.return;
}) && (info.properties ?? []).every((property) => {
  const prop = checker.getPropertyOfType(type, property.name);
  const propType = prop?.valueDeclaration ? checker.getTypeAtLocation(prop?.valueDeclaration) : void 0;
  return propType !== void 0 && checker.typeToString(propType) === property.type;
}), "validate");
var getBinaryProps = /* @__PURE__ */ __name((className) => ({
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

export {
  iterate_metadata_native
};
//# sourceMappingURL=chunk-LNNJBRN6.mjs.map