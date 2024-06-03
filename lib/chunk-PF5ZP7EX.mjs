import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/utils/NameEncoder.ts
var NameEncoder;
(function(NameEncoder2) {
  function encode(str) {
    for (const [before, after] of REPLACERS) str = str.split(before).join(after);
    return str;
  }
  __name(encode, "encode");
  NameEncoder2.encode = encode;
  function decode(str) {
    for (const [before, after] of REPLACERS) if (after !== "") str = str.split(after).join(before);
    return str;
  }
  __name(decode, "decode");
  NameEncoder2.decode = decode;
})(NameEncoder || (NameEncoder = {}));
var REPLACERS = [
  [
    "$",
    "_dollar_"
  ],
  [
    "&",
    "_and_"
  ],
  [
    "|",
    "_or_"
  ],
  [
    "{",
    "_blt_"
  ],
  [
    "}",
    "_bgt_"
  ],
  [
    "<",
    "_lt_"
  ],
  [
    ">",
    "_gt_"
  ],
  [
    "(",
    "_lp_"
  ],
  [
    ")",
    "_rp_"
  ],
  [
    "[",
    "_alt_"
  ],
  [
    "]",
    "_agt_"
  ],
  [
    ",",
    "_comma_"
  ],
  [
    "`",
    "_backquote_"
  ],
  [
    "'",
    "_singlequote_"
  ],
  [
    '"',
    "_doublequote_"
  ],
  [
    " ",
    "_space_"
  ]
];

export {
  NameEncoder
};
//# sourceMappingURL=chunk-PF5ZP7EX.mjs.map