import {
  StringUtil_exports
} from "./chunk-CLXKMTSC.mjs";
import {
  __export,
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/utils/NamingConvention/NamingConvention.ts
var NamingConvention_exports = {};
__export(NamingConvention_exports, {
  camel: () => camel,
  pascal: () => pascal,
  snake: () => snake
});
function snake(str) {
  const indexes = [];
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (65 <= code && code <= 90) indexes.push(i);
  }
  for (let i = indexes.length - 1; i > 0; --i) {
    const now = indexes[i];
    const prev = indexes[i - 1];
    if (now - prev === 1) indexes.splice(i, 1);
  }
  if (indexes.length !== 0 && indexes[0] === 0) indexes.splice(0, 1);
  if (indexes.length === 0) return str.toLowerCase();
  let ret = "";
  for (let i = 0; i < indexes.length; i++) {
    const first = i === 0 ? 0 : indexes[i - 1];
    const last = indexes[i];
    ret += str.substring(first, last).toLowerCase();
    ret += "_";
  }
  ret += str.substring(indexes[indexes.length - 1]).toLowerCase();
  return ret;
}
__name(snake, "snake");
function camel(str) {
  return unsnake((str2) => {
    if (str2.length === 0) return str2;
    else if (str2[0] === str2[0].toUpperCase()) return str2[0].toLowerCase() + str2.substring(1);
    else return str2;
  })(str);
}
__name(camel, "camel");
function pascal(str) {
  return unsnake((str2) => {
    if (str2.length === 0) return str2;
    else if (str2[0] === str2[0].toLowerCase()) return str2[0].toUpperCase() + str2.substring(1);
    else return str2;
  })(str);
}
__name(pascal, "pascal");
var unsnake = /* @__PURE__ */ __name((escaper) => (str) => {
  let prefix = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_") prefix += "_";
    else break;
  }
  if (prefix.length !== 0) str = str.substring(prefix.length);
  const indexes = [];
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch !== "_") continue;
    const last2 = indexes[indexes.length - 1];
    if (last2 === void 0 || last2[0] + last2[1] !== i) indexes.push([
      i,
      1
    ]);
    else ++last2[1];
  }
  if (indexes.length === 0) return prefix + escaper(str);
  let ret = "";
  for (let i = 0; i < indexes.length; i++) {
    const [first] = indexes[i];
    if (i === 0) if (first === 0) ret += "_";
    else ret += str.substring(0, first);
    else {
      const [prevFirst, prevLength] = indexes[i - 1];
      const piece2 = str.substring(prevFirst + prevLength, first);
      if (piece2.length) ret += StringUtil_exports.capitalize(piece2);
    }
  }
  const last = indexes[indexes.length - 1];
  const piece = str.substring(last[0] + last[1]);
  if (last.length) ret += StringUtil_exports.capitalize(piece);
  return prefix + escaper(ret);
}, "unsnake");

export {
  snake,
  camel,
  pascal,
  NamingConvention_exports
};
//# sourceMappingURL=chunk-WOK6UZUJ.mjs.map