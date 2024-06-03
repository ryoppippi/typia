"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunk7TNPR4MVjs = require('./chunk-7TNPR4MV.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/factories/internal/metadata/iterate_metadata_coalesce.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var iterate_metadata_coalesce = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (meta, type) => {
  const filter = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (flag) => (type.getFlags() & flag) !== 0, "filter");
  if (filter(_typescript2.default.TypeFlags.Unknown) || filter(_typescript2.default.TypeFlags.Any)) {
    _chunk7TNPR4MVjs.Writable.call(void 0, meta).any = true;
    return true;
  } else if (filter(_typescript2.default.TypeFlags.Null)) {
    _chunk7TNPR4MVjs.Writable.call(void 0, meta).nullable = true;
    return true;
  } else if (filter(_typescript2.default.TypeFlags.Undefined) || filter(_typescript2.default.TypeFlags.Never) || filter(_typescript2.default.TypeFlags.Void) || filter(_typescript2.default.TypeFlags.VoidLike)) {
    _chunk7TNPR4MVjs.Writable.call(void 0, meta).required = false;
    return true;
  } else if (_chunkPK6R5VEJjs.TypeFactory.isFunction(type) === true) {
    _chunk7TNPR4MVjs.Writable.call(void 0, meta).functional = true;
    return true;
  }
  return false;
}, "iterate_metadata_coalesce");



exports.iterate_metadata_coalesce = iterate_metadata_coalesce;
//# sourceMappingURL=chunk-LQ63DG4E.js.map