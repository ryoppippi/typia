"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunk6P6Q2LJHjs = require('./chunk-6P6Q2LJH.js');


var _chunk56YW7YRRjs = require('./chunk-56YW7YRR.js');


var _chunkA7ORGSGMjs = require('./chunk-A7ORGSGM.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/factories/internal/metadata/iterate_metadata_constant.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var iterate_metadata_constant = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (options) => (meta, type) => {
  if (!options.constant) return false;
  const filter = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (flag) => (type.getFlags() & flag) !== 0, "filter");
  if (type.isLiteral()) {
    const value = typeof type.value === "object" ? BigInt(`${type.value.negative ? "-" : ""}${type.value.base10Value}`) : type.value;
    const constant = _chunkA7ORGSGMjs.ArrayUtil.take(meta.constants, (elem) => elem.type === typeof value, () => _chunk6P6Q2LJHjs.MetadataConstant.create({
      type: typeof value,
      values: []
    }));
    _chunkA7ORGSGMjs.ArrayUtil.add(constant.values, _chunk56YW7YRRjs.MetadataConstantValue.create({
      value,
      tags: []
    }), (a, b) => a.value === b.value);
    return true;
  } else if (filter(_typescript2.default.TypeFlags.BooleanLiteral)) {
    const value = checker.typeToString(type) === "true";
    const constant = _chunkA7ORGSGMjs.ArrayUtil.take(meta.constants, (elem) => elem.type === "boolean", () => _chunk6P6Q2LJHjs.MetadataConstant.create({
      type: "boolean",
      values: []
    }));
    _chunkA7ORGSGMjs.ArrayUtil.add(constant.values, _chunk56YW7YRRjs.MetadataConstantValue.create({
      value,
      tags: []
    }), (a, b) => a.value === b.value);
    return true;
  }
  return false;
}, "iterate_metadata_constant");



exports.iterate_metadata_constant = iterate_metadata_constant;
//# sourceMappingURL=chunk-IR52KWTE.js.map