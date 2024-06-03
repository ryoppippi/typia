import {
  PatternUtil
} from "./chunk-NF35EQJD.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/template_to_pattern.ts
var template_to_pattern = /* @__PURE__ */ __name((top) => (template) => {
  const pattern = template.map((meta) => metadata_to_pattern(false)(meta)).join("");
  return top ? PatternUtil.fix(pattern) : pattern;
}, "template_to_pattern");

// src/programmers/internal/metadata_to_pattern.ts
var metadata_to_pattern = /* @__PURE__ */ __name((top) => (meta) => {
  if (meta.atomics.find((a) => a.type === "string") !== void 0) return "(.*)";
  const values = meta.constants.map((c) => {
    if (c.type !== "string") return c.values.map((v) => v.toString());
    return c.values.map((v) => v.value).map((str) => PatternUtil.escape(str));
  }).flat();
  for (const a of meta.atomics) if (a.type === "number" || a.type === "bigint") values.push(PatternUtil.NUMBER);
  else if (a.type === "boolean") values.push(PatternUtil.BOOLEAN);
  for (const childTpl of meta.templates) values.push("(" + template_to_pattern(false)(childTpl) + ")");
  const pattern = values.length === 1 ? values[0] : "(" + values.join("|") + ")";
  return top ? PatternUtil.fix(pattern) : pattern;
}, "metadata_to_pattern");

export {
  metadata_to_pattern,
  template_to_pattern
};
//# sourceMappingURL=chunk-TE33WDSA.mjs.map