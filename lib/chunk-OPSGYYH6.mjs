import {
  iterate_metadata_comment_tags
} from "./chunk-FUWVKZXY.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/factories/internal/metadata/iterate_metadata_collection.ts
var iterate_metadata_collection = /* @__PURE__ */ __name((errors) => (collection) => {
  for (const array of collection.arrays()) if (array.recursive === null) collection.setArrayRecursive(array, isArrayRecursive(/* @__PURE__ */ new Set())(array)(array.value));
  for (const tuple of collection.tuples()) if (tuple.recursive === null) {
    const visited = /* @__PURE__ */ new Set();
    collection.setTupleRecursive(tuple, tuple.elements.some(isTupleRecursive(visited)(tuple)));
  }
  for (const obj of collection.objects()) {
    iterate_metadata_comment_tags(errors)(obj);
    if (obj.recursive === null) {
      const visited = /* @__PURE__ */ new Set();
      collection.setObjectRecursive(obj, obj.properties.some((p) => isObjectRecursive(visited)(obj)(p.value)));
    }
  }
}, "iterate_metadata_collection");
var isArrayRecursive = /* @__PURE__ */ __name((visited) => (array) => (meta) => {
  if (visited.has(meta)) return false;
  visited.add(meta);
  return meta.arrays.some((a) => a.type === array || isArrayRecursive(visited)(array)(a.type.value)) || meta.aliases.some((alias) => isArrayRecursive(visited)(array)(alias.value)) || meta.tuples.some((t) => !t.type.recursive && t.type.elements.some((e) => isArrayRecursive(visited)(array)(e))) || meta.maps.some((m) => isArrayRecursive(visited)(array)(m.value)) || meta.sets.some((s) => isArrayRecursive(visited)(array)(s)) || meta.escaped !== null && isArrayRecursive(visited)(array)(meta.escaped.returns) || meta.rest !== null && isArrayRecursive(visited)(array)(meta.rest);
}, "isArrayRecursive");
var isTupleRecursive = /* @__PURE__ */ __name((visited) => (tuple) => (meta) => {
  if (visited.has(meta)) return false;
  visited.add(meta);
  return meta.tuples.some((t) => t.type === tuple || t.type.elements.some((e) => isTupleRecursive(visited)(tuple)(e))) || meta.arrays.some((a) => !a.type.recursive && isTupleRecursive(visited)(tuple)(a.type.value)) || meta.maps.some((m) => isTupleRecursive(visited)(tuple)(m.value)) || meta.sets.some((s) => isTupleRecursive(visited)(tuple)(s)) || meta.aliases.some((alias) => isTupleRecursive(visited)(tuple)(alias.value)) || meta.escaped !== null && isTupleRecursive(visited)(tuple)(meta.escaped.returns) || meta.rest !== null && isTupleRecursive(visited)(tuple)(meta.rest);
}, "isTupleRecursive");
var isObjectRecursive = /* @__PURE__ */ __name((visited) => (obj) => (meta) => {
  if (visited.has(meta)) return false;
  visited.add(meta);
  return meta.objects.some((o) => obj === o || o.properties.some((prop) => isObjectRecursive(visited)(obj)(prop.value))) || meta.aliases.some((alias) => isObjectRecursive(visited)(obj)(alias.value)) || meta.arrays.some((array) => !array.type.recursive && isObjectRecursive(visited)(obj)(array.type.value)) || meta.tuples.some((tuple) => !tuple.type.recursive && tuple.type.elements.some((elem) => isObjectRecursive(visited)(obj)(elem))) || meta.maps.some((map) => isObjectRecursive(visited)(obj)(map.value)) || meta.sets.some((value) => isObjectRecursive(visited)(obj)(value)) || meta.escaped !== null && isObjectRecursive(visited)(obj)(meta.escaped.returns) || meta.rest !== null && isObjectRecursive(visited)(obj)(meta.rest);
}, "isObjectRecursive");

export {
  iterate_metadata_collection
};
//# sourceMappingURL=chunk-OPSGYYH6.mjs.map