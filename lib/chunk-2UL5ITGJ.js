"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4SNDEZATjs = require('./chunk-4SNDEZAT.js');


var _chunkGM7RA5R3js = require('./chunk-GM7RA5R3.js');


var _chunk25MRAMDSjs = require('./chunk-25MRAMDS.js');


var _chunkCRBB3MBAjs = require('./chunk-CRBB3MBA.js');


var _chunkBYRRG63Hjs = require('./chunk-BYRRG63H.js');


var _chunk2CS37RRUjs = require('./chunk-2CS37RRU.js');


var _chunkVYRJRZRTjs = require('./chunk-VYRJRZRT.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/functional/Namespace/index.ts
var assert = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (method) => ({
  ..._chunk4SNDEZATjs.is.call(void 0, ),
  join: _chunkGM7RA5R3js.$join,
  every: _chunkCRBB3MBAjs.$every,
  guard: _chunkBYRRG63Hjs.$guard.call(void 0, `typia.${method}`),
  predicate: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (matched, exceptionable, closure) => {
    if (matched === false && exceptionable === true) throw new (0, _chunkVYRJRZRTjs.TypeGuardError)({
      ...closure(),
      method: `typia.${method}`
    });
    return matched;
  }, "predicate")
}), "assert");
var validate = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => ({
  ..._chunk4SNDEZATjs.is.call(void 0, ),
  join: _chunkGM7RA5R3js.$join,
  report: _chunk25MRAMDSjs.$report,
  predicate: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (res) => (matched, exceptionable, closure) => {
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
var random = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => ({
  generator: _chunk2CS37RRUjs.RandomGenerator_exports,
  pick: _chunk2CS37RRUjs.RandomGenerator_exports.pick
}), "random");





exports.assert = assert; exports.validate = validate; exports.random = random;
//# sourceMappingURL=chunk-2UL5ITGJ.js.map