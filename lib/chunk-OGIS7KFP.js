"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJQ5LXG7Djs = require('./chunk-JQ5LXG7D.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/template_to_pattern.ts
var template_to_pattern = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (top) => (template) => {
  const pattern = template.map((meta) => metadata_to_pattern(false)(meta)).join("");
  return top ? _chunkJQ5LXG7Djs.PatternUtil.fix(pattern) : pattern;
}, "template_to_pattern");

// src/programmers/internal/metadata_to_pattern.ts
var metadata_to_pattern = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (top) => (meta) => {
  if (meta.atomics.find((a) => a.type === "string") !== void 0) return "(.*)";
  const values = meta.constants.map((c) => {
    if (c.type !== "string") return c.values.map((v) => v.toString());
    return c.values.map((v) => v.value).map((str) => _chunkJQ5LXG7Djs.PatternUtil.escape(str));
  }).flat();
  for (const a of meta.atomics) if (a.type === "number" || a.type === "bigint") values.push(_chunkJQ5LXG7Djs.PatternUtil.NUMBER);
  else if (a.type === "boolean") values.push(_chunkJQ5LXG7Djs.PatternUtil.BOOLEAN);
  for (const childTpl of meta.templates) values.push("(" + template_to_pattern(false)(childTpl) + ")");
  const pattern = values.length === 1 ? values[0] : "(" + values.join("|") + ")";
  return top ? _chunkJQ5LXG7Djs.PatternUtil.fix(pattern) : pattern;
}, "metadata_to_pattern");




exports.metadata_to_pattern = metadata_to_pattern; exports.template_to_pattern = template_to_pattern;
//# sourceMappingURL=chunk-OGIS7KFP.js.map