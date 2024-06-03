"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/functional/$report.ts
var $report = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (array) => {
  const reportable = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (path) => {
    if (array.length === 0) return true;
    const last = array[array.length - 1].path;
    return path.length > last.length || last.substring(0, path.length) !== path;
  }, "reportable");
  return (exceptable, error) => {
    if (exceptable && reportable(error.path)) array.push(error);
    return false;
  };
}, "$report");



exports.$report = $report;
//# sourceMappingURL=chunk-25MRAMDS.js.map