import {
  $throws
} from "./chunk-RFZBHBM7.mjs";
import {
  is
} from "./chunk-JL3OMPIR.mjs";
import {
  $convention
} from "./chunk-3UX7U24R.mjs";
import {
  NamingConvention_exports
} from "./chunk-WOK6UZUJ.mjs";
import {
  __export,
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/functional/Namespace/notations.ts
var notations_exports = {};
__export(notations_exports, {
  camel: () => camel,
  pascal: () => pascal,
  snake: () => snake
});
var camel = /* @__PURE__ */ __name((method) => ({
  ...base(method),
  any: $convention(NamingConvention_exports.camel)
}), "camel");
var pascal = /* @__PURE__ */ __name((method) => ({
  ...base(method),
  any: $convention(NamingConvention_exports.pascal)
}), "pascal");
var snake = /* @__PURE__ */ __name((method) => ({
  ...base(method),
  any: $convention(NamingConvention_exports.snake)
}), "snake");
var base = /* @__PURE__ */ __name((method) => ({
  ...is(),
  throws: $throws(`notations.${method}`)
}), "base");

export {
  camel,
  pascal,
  snake,
  notations_exports
};
//# sourceMappingURL=chunk-TV23ZDC6.mjs.map