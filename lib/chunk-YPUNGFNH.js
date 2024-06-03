"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkTBFJDOPAjs = require('./chunk-TBFJDOPA.js');


var _chunkA7ORGSGMjs = require('./chunk-A7ORGSGM.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/factories/internal/metadata/iterate_metadata_atomic.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var same = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (type) => {
  if (type === null) return () => false;
  return (flag) => (type.getFlags() & flag) !== 0;
}, "same");
var iterate_metadata_atomic = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (meta, type) => {
  const filter = same(type);
  const check = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (info) => {
    if (filter(info.atomic) || filter(info.literal)) {
      _chunkA7ORGSGMjs.ArrayUtil.add(meta.atomics, _chunkTBFJDOPAjs.MetadataAtomic.create({
        type: info.name,
        tags: []
      }), (x, y) => x.type === y.type);
      return true;
    }
    return false;
  }, "check");
  return ATOMICS.some((info) => check(info));
}, "iterate_metadata_atomic");
var ATOMICS = [
  {
    name: "boolean",
    atomic: _typescript2.default.TypeFlags.BooleanLike,
    literal: _typescript2.default.TypeFlags.BooleanLiteral
  },
  {
    name: "number",
    atomic: _typescript2.default.TypeFlags.NumberLike,
    literal: _typescript2.default.TypeFlags.NumberLiteral
  },
  {
    name: "bigint",
    atomic: _typescript2.default.TypeFlags.BigInt,
    literal: _typescript2.default.TypeFlags.BigIntLiteral
  },
  {
    name: "string",
    atomic: _typescript2.default.TypeFlags.StringLike,
    literal: _typescript2.default.TypeFlags.StringLiteral
  }
];



exports.iterate_metadata_atomic = iterate_metadata_atomic;
//# sourceMappingURL=chunk-YPUNGFNH.js.map