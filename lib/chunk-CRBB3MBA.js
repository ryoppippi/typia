"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/functional/$every.ts
var $every = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (array, pred) => {
  let error = null;
  for (let i = 0; i < array.length; ++i) if (null !== (error = pred(array[i], i))) return error;
  return null;
}, "$every");



exports.$every = $every;
//# sourceMappingURL=chunk-CRBB3MBA.js.map