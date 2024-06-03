"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVYRJRZRTjs = require('./chunk-VYRJRZRT.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/functional/$number.ts
var $number = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => {
  if (isFinite(value) === false) throw new (0, _chunkVYRJRZRTjs.TypeGuardError)({
    method: "typia.json.stringify",
    expected: "number",
    value,
    message: "Error on typia.json.stringify(): infinite or not a number."
  });
  return value;
}, "$number");



exports.$number = $number;
//# sourceMappingURL=chunk-MDSM2XO5.js.map