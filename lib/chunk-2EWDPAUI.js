"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/application_v31_native.ts
var application_v31_native = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (components) => (name) => {
  if (name === "Blob" || name === "File") return {
    type: "string",
    format: "binary"
  };
  if (_optionalChain([components, 'access', _ => _.schemas, 'optionalAccess', _2 => _2[name]]) === void 0) {
    components.schemas ??= {};
    components.schemas[name] ??= {
      type: "object",
      properties: {}
    };
  }
  return {
    $ref: `#/components/schemas/${name}`
  };
}, "application_v31_native");



exports.application_v31_native = application_v31_native;
//# sourceMappingURL=chunk-2EWDPAUI.js.map