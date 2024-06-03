import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/functional/$convention.ts
var $convention = /* @__PURE__ */ __name((rename) => {
  const main = /* @__PURE__ */ __name((input) => {
    if (typeof input === "object") if (input === null) return null;
    else if (Array.isArray(input)) return input.map(main);
    else if (input instanceof Boolean || input instanceof BigInt || input instanceof Number || input instanceof String) return input.valueOf();
    else if (input instanceof Date) return new Date(input);
    else if (input instanceof Uint8Array || input instanceof Uint8ClampedArray || input instanceof Uint16Array || input instanceof Uint32Array || input instanceof BigUint64Array || input instanceof Int8Array || input instanceof Int16Array || input instanceof Int32Array || input instanceof BigInt64Array || input instanceof Float32Array || input instanceof Float64Array || input instanceof DataView) return input;
    else return object(input);
    return input;
  }, "main");
  const object = /* @__PURE__ */ __name((input) => Object.fromEntries(Object.entries(input).map(([key, value]) => [
    rename(key),
    main(value)
  ])), "object");
  return main;
}, "$convention");

export {
  $convention
};
//# sourceMappingURL=chunk-3UX7U24R.mjs.map