import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/functional/$string.ts
var $string = /* @__PURE__ */ __name((str) => {
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

export {
  $string
};
//# sourceMappingURL=chunk-P5ITYPJY.mjs.map