import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/application_v31_tuple.ts
var application_v31_tuple = /* @__PURE__ */ __name((generator) => (tuple) => {
  const tail = tuple.type.elements.at(-1);
  const prefixItems = tuple.type.isRest() ? tuple.type.elements.slice(0, -1) : tuple.type.elements;
  return {
    type: "array",
    prefixItems: prefixItems.map(generator),
    additionalItems: tail ? generator(tail) : false
  };
}, "application_v31_tuple");

export {
  application_v31_tuple
};
//# sourceMappingURL=chunk-7RFWXQYJ.mjs.map