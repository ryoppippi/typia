// src/programmers/helpers/StringifyPredicator.ts
var StringifyPredicator;
(function(StringifyPredicator2) {
  StringifyPredicator2.require_escape = (value) => value.split("").some((ch) => ESCAPED.some((escaped) => escaped === ch));
  StringifyPredicator2.undefindable = (meta) => meta.isRequired() === false || meta.escaped !== null && meta.escaped.returns.isRequired() === false;
  const ESCAPED = [
    '"',
    "\\",
    "\b",
    "\f",
    "\n",
    "\n",
    "\r",
    "	"
  ];
})(StringifyPredicator || (StringifyPredicator = {}));

export {
  StringifyPredicator
};
//# sourceMappingURL=chunk-N3MDAUGP.mjs.map