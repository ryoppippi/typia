import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/application_escaped.ts
var application_escaped = /* @__PURE__ */ __name((generator) => (resolved) => {
  const output = generator(resolved.returns);
  if (output === null) return [];
  if (is_date(/* @__PURE__ */ new Set())(resolved.original)) {
    const string = is_string(output) ? output : is_one_of(output) ? output.oneOf.find(is_string) : void 0;
    if (string !== void 0 && string.format !== "date" && string.format !== "date-time") string.format = "date-time";
  }
  return is_one_of(output) ? output.oneOf : [
    output
  ];
}, "application_escaped");
var is_string = /* @__PURE__ */ __name((elem) => elem.type === "string", "is_string");
var is_one_of = /* @__PURE__ */ __name((elem) => Array.isArray(elem.oneOf), "is_one_of");
var is_date = /* @__PURE__ */ __name((visited) => (meta) => {
  if (visited.has(meta)) return false;
  visited.add(meta);
  return meta.natives.some((name) => name === "Date") || meta.arrays.some((array) => is_date(visited)(array.type.value)) || meta.tuples.some((tuple) => tuple.type.elements.some(is_date(visited))) || meta.aliases.some((alias) => is_date(visited)(alias.value));
}, "is_date");

export {
  application_escaped
};
//# sourceMappingURL=chunk-GB3XQCYD.mjs.map