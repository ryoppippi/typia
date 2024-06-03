import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/functional/$report.ts
var $report = /* @__PURE__ */ __name((array) => {
  const reportable = /* @__PURE__ */ __name((path) => {
    if (array.length === 0) return true;
    const last = array[array.length - 1].path;
    return path.length > last.length || last.substring(0, path.length) !== path;
  }, "reportable");
  return (exceptable, error) => {
    if (exceptable && reportable(error.path)) array.push(error);
    return false;
  };
}, "$report");

export {
  $report
};
//# sourceMappingURL=chunk-2QB3XKXB.mjs.map