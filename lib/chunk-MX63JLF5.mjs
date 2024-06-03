import {
  MetadataAlias
} from "./chunk-T4RZTIDZ.mjs";
import {
  MetadataTupleType
} from "./chunk-Q72Q7WWM.mjs";
import {
  MetadataArrayType
} from "./chunk-S6FVASNO.mjs";
import {
  MetadataObject
} from "./chunk-JXCRSL4P.mjs";
import {
  MapUtil
} from "./chunk-NDRJDMPV.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";
import {
  Writable
} from "./chunk-QOF767UG.mjs";
import {
  CommentFactory
} from "./chunk-U3HW6PHG.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/factories/MetadataCollection.ts
var MetadataCollection = class {
  static {
    __name(this, "MetadataCollection");
  }
  options;
  objects_;
  object_unions_;
  aliases_;
  arrays_;
  tuples_;
  names_;
  object_index_;
  recursive_array_index_;
  recursive_tuple_index_;
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
      const str = TypeFactory.getFullName(checker)(type);
      return this.options?.replace ? this.options.replace(str) : str;
    })();
    const duplicates = MapUtil.take(this.names_)(name, () => /* @__PURE__ */ new Map());
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
    MapUtil.take(this.object_unions_)(key, () => meta.objects);
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
    const obj = MetadataObject.create({
      name: $id,
      properties: [],
      description: (type.aliasSymbol && CommentFactory.description(type.aliasSymbol)) ?? (type.symbol && CommentFactory.description(type.symbol)) ?? void 0,
      jsDocTags: type.aliasSymbol?.getJsDocTags() ?? type.symbol?.getJsDocTags() ?? [],
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
    const alias = MetadataAlias.create({
      name: $id,
      value: null,
      description: CommentFactory.description(symbol) ?? null,
      recursive: null,
      nullables: [],
      jsDocTags: symbol.getJsDocTags() ?? []
    });
    this.aliases_.set(type, alias);
    return [
      alias,
      true,
      (meta) => Writable(alias).value = meta
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
    const array = MetadataArrayType.create({
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
      (meta) => Writable(array).value = meta
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
    const tuple = MetadataTupleType.create({
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
      (elements) => Writable(tuple).elements = elements
    ];
  }
  /**
  * @internal
  */
  setObjectRecursive(obj, recursive) {
    Writable(obj).recursive = recursive;
  }
  /**
  * @internal
  */
  setAliasRecursive(alias, recursive) {
    Writable(alias).recursive = recursive;
  }
  /**
  * @internal
  */
  setArrayRecursive(array, recursive) {
    Writable(array).recursive = recursive;
    if (recursive) Writable(array).index = this.recursive_array_index_++;
  }
  setTupleRecursive(tuple, recursive) {
    Writable(tuple).recursive = recursive;
    if (recursive) Writable(tuple).index = this.recursive_tuple_index_++;
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
})(MetadataCollection || (MetadataCollection = {}));
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

export {
  MetadataCollection
};
//# sourceMappingURL=chunk-MX63JLF5.mjs.map