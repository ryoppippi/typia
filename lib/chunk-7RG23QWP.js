"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/utils/NameEncoder.ts
var NameEncoder;
(function(NameEncoder2) {
  function encode(str) {
    for (const [before, after] of REPLACERS) str = str.split(before).join(after);
    return str;
  }
  _chunkUZ5BS2M3js.__name.call(void 0, encode, "encode");
  NameEncoder2.encode = encode;
  function decode(str) {
    for (const [before, after] of REPLACERS) if (after !== "") str = str.split(after).join(before);
    return str;
  }
  _chunkUZ5BS2M3js.__name.call(void 0, decode, "decode");
  NameEncoder2.decode = decode;
})(NameEncoder || (NameEncoder = exports.NameEncoder = {}));
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



exports.NameEncoder = NameEncoder;
//# sourceMappingURL=chunk-7RG23QWP.js.map