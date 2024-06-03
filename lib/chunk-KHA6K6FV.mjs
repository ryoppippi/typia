import {
  is
} from "./chunk-JL3OMPIR.mjs";
import {
  $join
} from "./chunk-X5JY6VGL.mjs";
import {
  $report
} from "./chunk-2QB3XKXB.mjs";
import {
  $every
} from "./chunk-B345UMTR.mjs";
import {
  $guard
} from "./chunk-7UKAL7BO.mjs";
import {
  RandomGenerator_exports
} from "./chunk-3TFN5QJ6.mjs";
import {
  TypeGuardError
} from "./chunk-ERALXJG2.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/functional/Namespace/index.ts
var assert = /* @__PURE__ */ __name((method) => ({
  ...is(),
  join: $join,
  every: $every,
  guard: $guard(`typia.${method}`),
  predicate: /* @__PURE__ */ __name((matched, exceptionable, closure) => {
    if (matched === false && exceptionable === true) throw new TypeGuardError({
      ...closure(),
      method: `typia.${method}`
    });
    return matched;
  }, "predicate")
}), "assert");
var validate = /* @__PURE__ */ __name(() => ({
  ...is(),
  join: $join,
  report: $report,
  predicate: /* @__PURE__ */ __name((res) => (matched, exceptionable, closure) => {
    if (matched === false && exceptionable === true) (() => {
      res.success &&= false;
      const errorList = res.errors;
      const error = closure();
      if (errorList.length) {
        const last = errorList[errorList.length - 1].path;
        if (last.length >= error.path.length && last.substring(0, error.path.length) === error.path) return;
      }
      errorList.push(error);
      return;
    })();
    return matched;
  }, "predicate")
}), "validate");
var random = /* @__PURE__ */ __name(() => ({
  generator: RandomGenerator_exports,
  pick: RandomGenerator_exports.pick
}), "random");

export {
  assert,
  validate,
  random
};
//# sourceMappingURL=chunk-KHA6K6FV.mjs.map