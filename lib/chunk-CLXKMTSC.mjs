import {
  __export,
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/utils/StringUtil/StringUtil.ts
var StringUtil_exports = {};
__export(StringUtil_exports, {
  capitalize: () => capitalize,
  escapeDuplicate: () => escapeDuplicate
});
var capitalize = /* @__PURE__ */ __name((str) => str.length ? str[0].toUpperCase() + str.slice(1) : str, "capitalize");
var escapeDuplicate = /* @__PURE__ */ __name((keep) => (change) => keep.includes(change) ? escapeDuplicate(keep)(`_${change}`) : change, "escapeDuplicate");

export {
  capitalize,
  escapeDuplicate,
  StringUtil_exports
};
//# sourceMappingURL=chunk-CLXKMTSC.mjs.map