"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/functional/$strlen.ts
var $strlen = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (s) => {
  let b;
  let i;
  let c;
  for (b = i = 0; c = s.charCodeAt(i++); b += c >> 11 ? 3 : c >> 7 ? 2 : 1) ;
  return b;
}, "$strlen");



exports.$strlen = $strlen;
//# sourceMappingURL=chunk-FWB2UBAK.js.map