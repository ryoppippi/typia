import {
  TypeGuardError
} from "./chunk-ERALXJG2.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/functional/$number.ts
var $number = /* @__PURE__ */ __name((value) => {
  if (isFinite(value) === false) throw new TypeGuardError({
    method: "typia.json.stringify",
    expected: "number",
    value,
    message: "Error on typia.json.stringify(): infinite or not a number."
  });
  return value;
}, "$number");

export {
  $number
};
//# sourceMappingURL=chunk-P563YOO2.mjs.map