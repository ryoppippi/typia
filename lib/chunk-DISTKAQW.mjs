// src/utils/Escaper.ts
var Escaper;
(function(Escaper2) {
  Escaper2.variable = (str) => Escaper2.reserved(str) === false && /^[a-zA-Z_$][a-zA-Z_$0-9]*$/g.test(str);
  Escaper2.reserved = (str) => RESERVED.has(str);
})(Escaper || (Escaper = {}));
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
  "package",
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
  Escaper
};
//# sourceMappingURL=chunk-DISTKAQW.mjs.map