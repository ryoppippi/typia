"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/functional/$join.ts
var $join = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (str) => variable(str) ? `.${str}` : `[${JSON.stringify(str)}]`, "$join");
var variable = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (str) => reserved(str) === false && /^[a-zA-Z_$][a-zA-Z_$0-9]*$/g.test(str), "variable");
var reserved = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (str) => RESERVED.has(str), "reserved");
var RESERVED = /* @__PURE__ */ new Set([
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "null",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with"
]);



exports.$join = $join;
//# sourceMappingURL=chunk-GM7RA5R3.js.map