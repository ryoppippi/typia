"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/functional/$string.ts
var $string = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (str) => {
  const len = str.length;
  let result = "";
  let last = -1;
  let point = 255;
  for (var i = 0; i < len; i++) {
    point = str.charCodeAt(i);
    if (point < 32) {
      return JSON.stringify(str);
    }
    if (point >= 55296 && point <= 57343) {
      return JSON.stringify(str);
    }
    if (point === 34 || // '"'
    point === 92) {
      last === -1 && (last = 0);
      result += str.slice(last, i) + "\\";
      last = i;
    }
  }
  return last === -1 && '"' + str + '"' || '"' + result + str.slice(last) + '"';
}, "$string");



exports.$string = $string;
//# sourceMappingURL=chunk-6F3YHQWX.js.map