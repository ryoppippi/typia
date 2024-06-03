"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkTBFJDOPAjs = require('./chunk-TBFJDOPA.js');


var _chunkA7ORGSGMjs = require('./chunk-A7ORGSGM.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/factories/internal/metadata/emend_metadata_atomics.ts
var emend_metadata_atomics = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (meta) => {
  for (const a of meta.atomics) {
    if (is_not_pure(a)) continue;
    const index = meta.constants.findIndex((c) => c.type === a.type);
    if (index !== -1) meta.constants.splice(index, 1);
  }
  {
    const index = meta.constants.findIndex((c) => c.type === "boolean");
    if (index !== -1 && meta.constants[index].values.length === 2) {
      const temp = meta.constants.splice(index, 1)[0];
      _chunkA7ORGSGMjs.ArrayUtil.take(meta.atomics, (a) => a.type === "boolean", () => _chunkTBFJDOPAjs.MetadataAtomic.create({
        type: "boolean",
        tags: _nullishCoalesce(temp.values[0].tags, () => ( []))
      }));
    }
  }
  if (meta.templates.length) {
    const atomic = meta.atomics.find((a) => a.type === "string");
    if (atomic !== void 0 && false === is_not_pure(atomic)) meta.templates.splice(0, meta.templates.length);
  }
}, "emend_metadata_atomics");
var is_not_pure = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (atomic) => atomic.tags.length !== 0 && atomic.tags.every((row) => row.length !== 0 && row.every((c) => !!_optionalChain([c, 'access', _ => _.validate, 'optionalAccess', _2 => _2.length]))), "is_not_pure");



exports.emend_metadata_atomics = emend_metadata_atomics;
//# sourceMappingURL=chunk-BQIGA573.js.map