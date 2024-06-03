"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/application_plugin.ts
var application_plugin = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (schema, tags) => {
  const plugins = tags.map((row) => row.filter((t) => t.schema !== void 0)).filter((row) => row.length !== 0);
  if (plugins.length === 0) return [
    schema
  ];
  return plugins.map((row) => {
    const base = {
      ...schema
    };
    for (const tag of row) Object.assign(base, tag.schema);
    return base;
  });
}, "application_plugin");



exports.application_plugin = application_plugin;
//# sourceMappingURL=chunk-EFKU432C.js.map