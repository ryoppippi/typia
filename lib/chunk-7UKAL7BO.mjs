import {
  TypeGuardError
} from "./chunk-ERALXJG2.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/functional/$guard.ts
var $guard = /* @__PURE__ */ __name((method) => (exceptionable, props, factory) => {
  if (exceptionable === true) throw (factory ?? ((props2) => new TypeGuardError(props2)))({
    method,
    path: props.path,
    expected: props.expected,
    value: props.value
  });
  return false;
}, "$guard");

export {
  $guard
};
//# sourceMappingURL=chunk-7UKAL7BO.mjs.map