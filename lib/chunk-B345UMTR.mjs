import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/functional/$every.ts
var $every = /* @__PURE__ */ __name((array, pred) => {
  let error = null;
  for (let i = 0; i < array.length; ++i) if (null !== (error = pred(array[i], i))) return error;
  return null;
}, "$every");

export {
  $every
};
//# sourceMappingURL=chunk-B345UMTR.mjs.map