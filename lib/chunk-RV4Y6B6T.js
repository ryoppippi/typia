"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/utils/StringUtil/StringUtil.ts
var StringUtil_exports = {};
_chunkUZ5BS2M3js.__export.call(void 0, StringUtil_exports, {
  capitalize: () => capitalize,
  escapeDuplicate: () => escapeDuplicate
});
var capitalize = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (str) => str.length ? str[0].toUpperCase() + str.slice(1) : str, "capitalize");
var escapeDuplicate = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (keep) => (change) => keep.includes(change) ? escapeDuplicate(keep)(`_${change}`) : change, "escapeDuplicate");





exports.capitalize = capitalize; exports.escapeDuplicate = escapeDuplicate; exports.StringUtil_exports = StringUtil_exports;
//# sourceMappingURL=chunk-RV4Y6B6T.js.map