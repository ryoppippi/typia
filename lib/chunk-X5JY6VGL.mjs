import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/functional/$join.ts
var $join = /* @__PURE__ */ __name((str) => variable(str) ? `.${str}` : `[${JSON.stringify(str)}]`, "$join");
var variable = /* @__PURE__ */ __name((str) => reserved(str) === false && /^[a-zA-Z_$][a-zA-Z_$0-9]*$/g.test(str), "variable");
var reserved = /* @__PURE__ */ __name((str) => RESERVED.has(str), "reserved");
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

export {
  $join
};
//# sourceMappingURL=chunk-X5JY6VGL.mjs.map