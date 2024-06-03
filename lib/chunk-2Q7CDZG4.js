"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/application_v30_native.ts
var application_v30_native = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (components) => (name) => (nullable) => {
  if (name === "Blob" || name === "File") return {
    type: "string",
    format: "binary",
    nullable
  };
  const key = `${name}${nullable ? ".Nullable" : ""}`;
  if (_optionalChain([components, 'access', _ => _.schemas, 'optionalAccess', _2 => _2[key]]) === void 0) {
    components.schemas ??= {};
    components.schemas[key] ??= {
      type: "object",
      properties: {},
      nullable
    };
  }
  return {
    $ref: `#/components/schemas/${key}`
  };
}, "application_v30_native");



exports.application_v30_native = application_v30_native;
//# sourceMappingURL=chunk-2Q7CDZG4.js.map