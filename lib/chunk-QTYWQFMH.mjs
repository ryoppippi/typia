import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/functional/$strlen.ts
var $strlen = /* @__PURE__ */ __name((s) => {
  let b;
  let i;
  let c;
  for (b = i = 0; c = s.charCodeAt(i++); b += c >> 11 ? 3 : c >> 7 ? 2 : 1) ;
  return b;
}, "$strlen");

export {
  $strlen
};
//# sourceMappingURL=chunk-QTYWQFMH.mjs.map