"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/utils/PatternUtil.ts
var PatternUtil;
(function(PatternUtil2) {
  PatternUtil2.fix = (str) => {
    const first = str.indexOf(PatternUtil2.STRING);
    const last = str.lastIndexOf(PatternUtil2.STRING);
    return [
      first === -1 || none("(")(str.slice(0, first)) ? "^" : "",
      str,
      last === -1 || none(")")(str.slice(last + PatternUtil2.STRING.length)) ? "$" : ""
    ].join("");
  };
  PatternUtil2.escape = (str) => {
    return str.replace(/[|\\/{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  };
  PatternUtil2.NUMBER = "[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?";
  PatternUtil2.BOOLEAN = "true|false";
  PatternUtil2.STRING = "(.*)";
})(PatternUtil || (PatternUtil = exports.PatternUtil = {}));
var none = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (parenthesis) => (str) => {
  for (const ch of str) if (ch !== parenthesis) return true;
  return false;
}, "none");



exports.PatternUtil = PatternUtil;
//# sourceMappingURL=chunk-JQ5LXG7D.js.map