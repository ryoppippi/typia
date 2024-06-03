"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunkVYRJRZRTjs = require('./chunk-VYRJRZRT.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/functional/$guard.ts
var $guard = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (method) => (exceptionable, props, factory) => {
  if (exceptionable === true) throw (_nullishCoalesce(factory, () => ( ((props2) => new (0, _chunkVYRJRZRTjs.TypeGuardError)(props2)))))({
    method,
    path: props.path,
    expected: props.expected,
    value: props.value
  });
  return false;
}, "$guard");



exports.$guard = $guard;
//# sourceMappingURL=chunk-BYRRG63H.js.map