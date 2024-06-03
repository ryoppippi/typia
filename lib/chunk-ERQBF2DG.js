"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkFDUFUJMYjs = require('./chunk-FDUFUJMY.js');


var _chunkH3SMZNB3js = require('./chunk-H3SMZNB3.js');


var _chunkX72M22NMjs = require('./chunk-X72M22NM.js');


var _chunkQ2DBVBM3js = require('./chunk-Q2DBVBM3.js');


var _chunkKB6237G4js = require('./chunk-KB6237G4.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunk7TNPR4MVjs = require('./chunk-7TNPR4MV.js');


var _chunk272AIHZNjs = require('./chunk-272AIHZN.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/factories/MetadataCollection.ts
var MetadataCollection = class {
  static {
    _chunkUZ5BS2M3js.__name.call(void 0, this, "MetadataCollection");
  }
  
  
  
  
  
  
  
  
  
  
  constructor(options) {
    this.options = options;
    this.objects_ = /* @__PURE__ */ new Map();
    this.object_unions_ = /* @__PURE__ */ new Map();
    this.aliases_ = /* @__PURE__ */ new Map();
    this.arrays_ = /* @__PURE__ */ new Map();
    this.tuples_ = /* @__PURE__ */ new Map();
    this.names_ = /* @__PURE__ */ new Map();
    this.object_index_ = 0;
    this.recursive_array_index_ = 0;
    this.recursive_tuple_index_ = 0;
  }
  /* -----------------------------------------------------------
      ACCESSORS
  ----------------------------------------------------------- */
  aliases() {
    return [
      ...this.aliases_.values()
    ];
  }
  objects() {
    return [
      ...this.objects_.values()
    ];
  }
  unions() {
    return [
      ...this.object_unions_.values()
    ];
  }
  arrays() {
    return [
      ...this.arrays_.values()
    ];
  }
  tuples() {
    return [
      ...this.tuples_.values()
    ];
  }
  getName(checker, type) {
    const name = (() => {
      const str = _chunkPK6R5VEJjs.TypeFactory.getFullName(checker)(type);
      return _optionalChain([this, 'access', _ => _.options, 'optionalAccess', _2 => _2.replace]) ? this.options.replace(str) : str;
    })();
    const duplicates = _chunkKB6237G4js.MapUtil.take(this.names_)(name, () => /* @__PURE__ */ new Map());
    const oldbie = duplicates.get(type);
    if (oldbie !== void 0) return oldbie;
    const addicted = duplicates.size ? `${name}.o${duplicates.size}` : name;
    duplicates.set(type, addicted);
    return addicted;
  }
  /**
  * @internal
  */
  getUnionIndex(meta) {
    const key = meta.objects.map((obj) => obj.name).join(" | ");
    _chunkKB6237G4js.MapUtil.take(this.object_unions_)(key, () => meta.objects);
    return [
      ...this.object_unions_.keys()
    ].indexOf(key);
  }
  /* -----------------------------------------------------------
      INSTANCES
  ----------------------------------------------------------- */
  emplace(checker, type) {
    const oldbie = this.objects_.get(type);
    if (oldbie !== void 0) return [
      oldbie,
      false
    ];
    const $id = this.getName(checker, type);
    const obj = _chunkQ2DBVBM3js.MetadataObject.create({
      name: $id,
      properties: [],
      description: _nullishCoalesce(_nullishCoalesce((type.aliasSymbol && _chunk272AIHZNjs.CommentFactory.description(type.aliasSymbol)), () => ( (type.symbol && _chunk272AIHZNjs.CommentFactory.description(type.symbol)))), () => ( void 0)),
      jsDocTags: _nullishCoalesce(_nullishCoalesce(_optionalChain([type, 'access', _3 => _3.aliasSymbol, 'optionalAccess', _4 => _4.getJsDocTags, 'call', _5 => _5()]), () => ( _optionalChain([type, 'access', _6 => _6.symbol, 'optionalAccess', _7 => _7.getJsDocTags, 'call', _8 => _8()]))), () => ( [])),
      validated: false,
      index: this.object_index_++,
      recursive: null,
      nullables: []
    });
    this.objects_.set(type, obj);
    return [
      obj,
      true
    ];
  }
  emplaceAlias(checker, type, symbol) {
    const oldbie = this.aliases_.get(type);
    if (oldbie !== void 0) return [
      oldbie,
      false,
      () => {
      }
    ];
    const $id = this.getName(checker, type);
    const alias = _chunkFDUFUJMYjs.MetadataAlias.create({
      name: $id,
      value: null,
      description: _nullishCoalesce(_chunk272AIHZNjs.CommentFactory.description(symbol), () => ( null)),
      recursive: null,
      nullables: [],
      jsDocTags: _nullishCoalesce(symbol.getJsDocTags(), () => ( []))
    });
    this.aliases_.set(type, alias);
    return [
      alias,
      true,
      (meta) => _chunk7TNPR4MVjs.Writable.call(void 0, alias).value = meta
    ];
  }
  emplaceArray(checker, type) {
    const oldbie = this.arrays_.get(type);
    if (oldbie !== void 0) return [
      oldbie,
      false,
      () => {
      }
    ];
    const $id = this.getName(checker, type);
    const array = _chunkX72M22NMjs.MetadataArrayType.create({
      name: $id,
      value: null,
      index: null,
      recursive: null,
      nullables: []
    });
    this.arrays_.set(type, array);
    return [
      array,
      true,
      (meta) => _chunk7TNPR4MVjs.Writable.call(void 0, array).value = meta
    ];
  }
  emplaceTuple(checker, type) {
    const oldbie = this.tuples_.get(type);
    if (oldbie !== void 0) return [
      oldbie,
      false,
      () => {
      }
    ];
    const $id = this.getName(checker, type);
    const tuple = _chunkH3SMZNB3js.MetadataTupleType.create({
      name: $id,
      elements: null,
      index: null,
      recursive: null,
      nullables: []
    });
    this.tuples_.set(type, tuple);
    return [
      tuple,
      true,
      (elements) => _chunk7TNPR4MVjs.Writable.call(void 0, tuple).elements = elements
    ];
  }
  /**
  * @internal
  */
  setObjectRecursive(obj, recursive) {
    _chunk7TNPR4MVjs.Writable.call(void 0, obj).recursive = recursive;
  }
  /**
  * @internal
  */
  setAliasRecursive(alias, recursive) {
    _chunk7TNPR4MVjs.Writable.call(void 0, alias).recursive = recursive;
  }
  /**
  * @internal
  */
  setArrayRecursive(array, recursive) {
    _chunk7TNPR4MVjs.Writable.call(void 0, array).recursive = recursive;
    if (recursive) _chunk7TNPR4MVjs.Writable.call(void 0, array).index = this.recursive_array_index_++;
  }
  setTupleRecursive(tuple, recursive) {
    _chunk7TNPR4MVjs.Writable.call(void 0, tuple).recursive = recursive;
    if (recursive) _chunk7TNPR4MVjs.Writable.call(void 0, tuple).index = this.recursive_tuple_index_++;
  }
  toJSON() {
    return {
      objects: this.objects().map((o) => o.toJSON()),
      aliases: this.aliases().map((d) => d.toJSON()),
      arrays: [
        ...this.arrays_.values()
      ].map((a) => a.toJSON()),
      tuples: [
        ...this.tuples_.values()
      ].map((t) => t.toJSON())
    };
  }
};
(function(MetadataCollection2) {
  MetadataCollection2.replace = (str) => {
    let replaced = str;
    for (const [before] of REPLACERS) replaced = replaced.split(before).join("");
    if (replaced.length !== 0) return replaced;
    for (const [before, after] of REPLACERS) str = str.split(before).join(after);
    return str;
  };
  MetadataCollection2.escape = (str) => {
    for (const [before, after] of REPLACERS) if (after !== "") str = str.split(after).join(before);
    return str;
  };
})(MetadataCollection || (MetadataCollection = exports.MetadataCollection = {}));
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
  ],
  [
    "?",
    "_question_"
  ],
  [
    ":",
    "_colon_"
  ],
  [
    ";",
    "_semicolon_"
  ]
];



exports.MetadataCollection = MetadataCollection;
//# sourceMappingURL=chunk-ERQBF2DG.js.map