"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkA7ORGSGMjs = require('./chunk-A7ORGSGM.js');

// src/programmers/helpers/AtomicPredicator.ts
var AtomicPredicator;
(function(AtomicPredicator2) {
  AtomicPredicator2.constant = (meta) => (name) => !_chunkA7ORGSGMjs.ArrayUtil.has(meta.natives, (native) => native.toLowerCase() === name);
  AtomicPredicator2.atomic = (meta) => (name) => !_chunkA7ORGSGMjs.ArrayUtil.has(meta.natives, (native) => native.toLowerCase() === name);
  AtomicPredicator2.native = (name) => LIKE.has(name.toLowerCase());
  AtomicPredicator2.template = (meta) => !_chunkA7ORGSGMjs.ArrayUtil.has(meta.natives, (native) => native.toLowerCase() === "string");
})(AtomicPredicator || (AtomicPredicator = exports.AtomicPredicator = {}));
var LIKE = /* @__PURE__ */ new Set([
  "boolean",
  "bigint",
  "number",
  "string"
]);



exports.AtomicPredicator = AtomicPredicator;
//# sourceMappingURL=chunk-DEEK72LS.js.map