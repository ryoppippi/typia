import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/helpers/ProtobufUtil.ts
var ProtobufUtil;
(function(ProtobufUtil2) {
  ProtobufUtil2.isStaticObject = (obj) => obj.properties.length >= 1 && obj.properties.every((p) => p.key.isSoleLiteral());
  ProtobufUtil2.size = (meta) => ProtobufUtil2.getAtomics(meta).length + meta.arrays.length + meta.tuples.length + meta.natives.length + meta.objects.length + meta.maps.length;
  ProtobufUtil2.isUnion = (meta) => ProtobufUtil2.size(meta) > 1;
  ProtobufUtil2.getAtomics = (meta) => {
    const set = /* @__PURE__ */ new Set();
    if (meta.templates.length) set.add("string");
    for (const c of meta.constants) if (c.type === "boolean") set.add("bool");
    else if (c.type === "bigint") set.add("uint64");
    else if (c.type === "number") set.add(deduce_numeric_type(c.values.map((v) => v.value)));
    else if (c.type === "string") set.add("string");
    for (const atomic of meta.atomics) if (atomic.type === "boolean") set.add("bool");
    else if (atomic.type === "bigint") decode_bigint(atomic.tags).forEach((t) => set.add(t));
    else if (atomic.type === "number") decode_number(atomic.tags).forEach((t) => set.add(t));
    else if (atomic.type === "string") set.add("string");
    return [
      ...set
    ].sort(compare);
  };
  ProtobufUtil2.getNumbers = (meta) => {
    const set = /* @__PURE__ */ new Set();
    for (const c of meta.constants) if (c.type === "number") set.add(deduce_numeric_type(c.values.map((v) => v.value)));
    for (const atomic of meta.atomics) if (atomic.type === "number") decode_number(atomic.tags).forEach((t) => set.add(t));
    return [
      ...set
    ].sort(compare);
  };
  ProtobufUtil2.getBigints = (meta) => {
    const set = /* @__PURE__ */ new Set();
    for (const c of meta.constants) if (c.type === "bigint") set.add("uint64");
    for (const atomic of meta.atomics) if (atomic.type === "bigint") decode_bigint(atomic.tags).forEach((t) => set.add(t));
    return [
      ...set
    ].sort(compare);
  };
  const compare = /* @__PURE__ */ __name((x, y) => ATOMIC_ORDER.get(x) - ATOMIC_ORDER.get(y), "compare");
})(ProtobufUtil || (ProtobufUtil = {}));
var ATOMIC_ORDER = new Map([
  "bool",
  "int32",
  "uint32",
  "int64",
  "uint64",
  "float",
  "double",
  "string"
].map((str, i) => [
  str,
  i
]));
var deduce_numeric_type = /* @__PURE__ */ __name((values) => values.every((v) => Math.floor(v) === v) ? values.every((v) => -2147483648 <= v && v <= 2147483647) ? "int32" : "int64" : "double", "deduce_numeric_type");
var decode_bigint = /* @__PURE__ */ __name((typeTags) => {
  if (typeTags.length === 0) return [
    "int64"
  ];
  const types = /* @__PURE__ */ new Set();
  for (const row of typeTags) {
    const value = row.find((tag) => tag.kind === "type" && (tag.value === "int64" || tag.value === "uint64"))?.value;
    types.add(value ?? "int64");
  }
  return [
    ...types
  ];
}, "decode_bigint");
var decode_number = /* @__PURE__ */ __name((typeTags) => {
  if (typeTags.length === 0) return [
    "double"
  ];
  const types = /* @__PURE__ */ new Set();
  for (const row of typeTags) {
    const value = row.find((tag) => tag.kind === "type" && (tag.value === "int32" || tag.value === "uint32" || tag.value === "int64" || tag.value === "uint64" || tag.value === "float" || tag.value === "double"))?.value;
    types.add(value ?? "double");
  }
  return [
    ...types
  ];
}, "decode_number");

export {
  ProtobufUtil
};
//# sourceMappingURL=chunk-URL374Q3.mjs.map