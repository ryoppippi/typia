import {
  FormatCheatSheet
} from "./chunk-Q6EPFKEA.mjs";
import {
  Writable
} from "./chunk-QOF767UG.mjs";
import {
  MetadataTypeTagFactory
} from "./chunk-RCWUP74J.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/factories/MetadataCommentTagFactory.ts
var MetadataCommentTagFactory;
(function(MetadataCommentTagFactory2) {
  MetadataCommentTagFactory2.analyze = (errors) => (metadata) => (commentList, explore) => {
    const messages = [];
    const report = /* @__PURE__ */ __name((msg) => {
      messages.push(msg);
      return null;
    }, "report");
    const validateReport = /* @__PURE__ */ __name((property) => (msg) => {
      messages.push(`the property ${property === null ? `["typia.tag"]` : `["typia.tag.${property}"]`} ${msg}.`);
      return false;
    }, "validateReport");
    for (const comment of commentList) {
      const tagger = parse(report)(comment);
      if (tagger === null) continue;
      for (const [key, value] of Object.entries(tagger)) {
        const filtered = value.filter((v) => v.validate !== null);
        if (key === "array") {
          if (metadata.arrays.length === 0) {
            report(`requires array type`);
            continue;
          }
          for (const a of metadata.arrays) {
            Writable(a).tags = a.tags.filter((x) => MetadataTypeTagFactory.validate(validateReport)("array")([
              ...x,
              ...filtered
            ]));
            if (a.tags.length === 0) a.tags.push(filtered);
            else for (const tags of a.tags) tags.push(...filtered);
          }
        } else {
          const atomic = metadata.atomics.find((a) => a.type == key);
          if (atomic === void 0) if (key === "bigint" || key === "number") {
            const opposite = key === "bigint" ? "number" : "bigint";
            if (tagger[opposite] !== void 0 && metadata.atomics.some((a) => a.type === opposite)) continue;
          } else if (key === "string" && value[0]?.kind === "format" && value[0]?.value === "date-time") continue;
          else report(`requires ${key} type`);
          else {
            Writable(atomic).tags = atomic.tags.filter((x) => MetadataTypeTagFactory.validate(validateReport)(key)([
              ...x,
              ...filtered
            ]));
            if (atomic.tags.length === 0) atomic.tags.push(filtered);
            else for (const tags of atomic.tags) tags.push(...filtered);
          }
        }
      }
    }
    if (messages.length !== 0) errors.push({
      name: "comment tag(s)",
      explore,
      messages
    });
  };
  const parse = /* @__PURE__ */ __name((report) => (comment) => {
    const parser = PARSER[comment.name];
    if (parser === void 0) return {};
    const text = (comment.text || [])[0]?.text;
    if (text === void 0 && comment.name !== "uniqueItems") return report(`no comment tag value`);
    return parser(report)(text);
  }, "parse");
})(MetadataCommentTagFactory || (MetadataCommentTagFactory = {}));
var PARSER = {
  /* -----------------------------------------------------------
      ARRAY
  ----------------------------------------------------------- */
  items: /* @__PURE__ */ __name((report) => (Value) => ({
    array: [
      {
        name: `MinItems<${Value}>`,
        target: "array",
        kind: "minItems",
        value: parse_integer(report)(true)(Value),
        validate: `${Value} <= $input.length`,
        exclusive: true,
        schema: {
          minItems: parse_integer(report)(true)(Value)
        }
      },
      {
        name: `MaxItems<${Value}>`,
        target: "array",
        kind: "maxItems",
        value: parse_integer(report)(true)(Value),
        validate: `$input.length <= ${Value}`,
        exclusive: true,
        schema: {
          maxItems: parse_integer(report)(true)(Value)
        }
      }
    ]
  }), "items"),
  minItems: /* @__PURE__ */ __name((report) => (Value) => ({
    array: [
      {
        name: `MinItems<${Value}>`,
        target: "array",
        kind: "minItems",
        value: parse_integer(report)(true)(Value),
        validate: `${Value} <= $input.length`,
        exclusive: true,
        schema: {
          minItems: parse_integer(report)(true)(Value)
        }
      }
    ]
  }), "minItems"),
  maxItems: /* @__PURE__ */ __name((report) => (Value) => ({
    array: [
      {
        name: `MaxItems<${Value}>`,
        target: "array",
        kind: "maxItems",
        value: parse_integer(report)(true)(Value),
        validate: `$input.length <= ${Value}`,
        exclusive: true,
        schema: {
          maxItems: parse_integer(report)(true)(Value)
        }
      }
    ]
  }), "maxItems"),
  uniqueItems: /* @__PURE__ */ __name(() => () => ({
    array: [
      {
        name: `UniqueItems`,
        target: "array",
        kind: "uniqueItems",
        value: true,
        validate: `true === ($input.length === 0 || new Set($input).size === $input.length)`,
        exclusive: true,
        schema: {
          uniqueItems: true
        }
      }
    ]
  }), "uniqueItems"),
  /* -----------------------------------------------------------
      NUMBER
  ----------------------------------------------------------- */
  type: /* @__PURE__ */ __name(() => (Value) => {
    if (Value.startsWith("{") && Value.endsWith("}")) Value = Value.substring(1, Value.length - 1);
    if (Value === "int") Value = "int32";
    else if (Value === "uint") Value = "uint32";
    if ([
      "int32",
      "uint32",
      "int64",
      "uint64",
      "float",
      "double"
    ].includes(Value) === false) return {};
    return {
      number: [
        {
          name: `Type<${JSON.stringify(Value)}>`,
          target: "number",
          kind: "type",
          value: Value,
          validate: Value === "int32" ? `Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647` : Value === "uint32" ? `Math.floor($input) === $input && 0 <= $input && $input <= 4294967295` : Value === "int64" ? `Math.floor($input) === $input && -9223372036854775808 <= $input && $input <= 9223372036854775807` : Value === "uint64" ? `Math.floor($input) === $input && 0 <= $input && $input <= 18446744073709551615` : Value === "float" ? `-1.175494351e38 <= $input && $input <= 3.4028235e38` : `true`,
          exclusive: true,
          schema: [
            "int32",
            "uint32",
            "int64",
            "uint64"
          ].includes(Value) ? {
            type: "integer"
          } : void 0
        }
      ],
      bigint: Value === "int64" || "uint64" ? [
        {
          name: `Type<${JSON.stringify(Value)}>`,
          target: "bigint",
          kind: "type",
          value: Value,
          validate: Value === "int64" ? "true" : "BigInt(0) <= $input",
          exclusive: true,
          schema: void 0
        }
      ] : []
    };
  }, "type"),
  minimum: /* @__PURE__ */ __name((report) => (Value) => ({
    number: [
      {
        name: `Minimum<${Value}>`,
        target: "number",
        kind: "minimum",
        value: parse_number(report)(Value),
        validate: `${Value} <= $input`,
        exclusive: [
          "minimum",
          "exclusiveMinimum"
        ],
        schema: {
          minimum: parse_number(report)(Value)
        }
      }
    ],
    bigint: [
      {
        name: `Minimum<${Value}n>`,
        target: "bigint",
        kind: "minimum",
        value: (() => {
          const value = parse_integer(report)(false)(Value);
          return value === null ? null : BigInt(value);
        })(),
        validate: `${Value} <= $input`,
        exclusive: [
          "minimum",
          "exclusiveMinimum"
        ],
        schema: void 0
      }
    ]
  }), "minimum"),
  maximum: /* @__PURE__ */ __name((report) => (Value) => ({
    number: [
      {
        name: `Maximum<${Value}>`,
        target: "number",
        kind: "maximum",
        value: parse_number(report)(Value),
        validate: `$input <= ${Value}`,
        exclusive: [
          "maximum",
          "exclusiveMaximum"
        ],
        schema: {
          maximum: parse_number(report)(Value)
        }
      }
    ],
    bigint: [
      {
        name: `Maximum<${Value}n>`,
        target: "bigint",
        kind: "maximum",
        value: (() => {
          const value = parse_integer(report)(false)(Value);
          return value === null ? null : BigInt(value);
        })(),
        validate: `$input <= ${Value}`,
        exclusive: [
          "maximum",
          "exclusiveMaximum"
        ],
        schema: void 0
      }
    ]
  }), "maximum"),
  exclusiveMinimum: /* @__PURE__ */ __name((report) => (Value) => ({
    number: [
      {
        name: `ExclusiveMinimum<${Value}>`,
        target: "number",
        kind: "exclusiveMinimum",
        value: parse_number(report)(Value),
        validate: `${Value} < $input`,
        exclusive: [
          "minimum",
          "exclusiveMinimum"
        ],
        schema: {
          exclusiveMinimum: true,
          minimum: parse_number(report)(Value)
        }
      }
    ],
    bigint: [
      {
        name: `ExclusiveMinimum<${Value}n>`,
        target: "bigint",
        kind: "exclusiveMinimum",
        value: (() => {
          const value = parse_integer(report)(false)(Value);
          return value === null ? null : BigInt(value);
        })(),
        validate: `${Value} < $input`,
        exclusive: [
          "minimum",
          "exclusiveMinimum"
        ],
        schema: void 0
      }
    ]
  }), "exclusiveMinimum"),
  exclusiveMaximum: /* @__PURE__ */ __name((report) => (Value) => ({
    number: [
      {
        name: `ExclusiveMaximum<${Value}>`,
        target: "number",
        kind: "exclusiveMaximum",
        value: parse_number(report)(Value),
        validate: `$input < ${Value}`,
        exclusive: [
          "maximum",
          "exclusiveMaximum"
        ],
        schema: {
          exclusiveMaximum: true,
          maximum: parse_number(report)(Value)
        }
      }
    ],
    bigint: [
      {
        name: `ExclusiveMaximum<${Value}n>`,
        target: "bigint",
        kind: "exclusiveMaximum",
        value: (() => {
          const value = parse_integer(report)(false)(Value);
          return value === null ? null : BigInt(value);
        })(),
        validate: `$input < ${Value}`,
        exclusive: [
          "maximum",
          "exclusiveMaximum"
        ],
        schema: void 0
      }
    ]
  }), "exclusiveMaximum"),
  multipleOf: /* @__PURE__ */ __name((report) => (Value) => ({
    number: [
      {
        name: `MultipleOf<${Value}>`,
        target: "number",
        kind: "multipleOf",
        value: parse_number(report)(Value),
        validate: `$input % ${Value} === 0`,
        exclusive: true,
        schema: {
          multipleOf: parse_number(report)(Value)
        }
      }
    ],
    bigint: [
      {
        name: `MultipleOf<${Value}n>`,
        target: "bigint",
        kind: "multipleOf",
        value: (() => {
          const value = parse_integer(report)(false)(Value);
          return value === null ? null : BigInt(value);
        })(),
        validate: `$input % ${Value}n === 0n`,
        exclusive: true,
        schema: void 0
      }
    ]
  }), "multipleOf"),
  /* -----------------------------------------------------------
      STRING
  ----------------------------------------------------------- */
  format: /* @__PURE__ */ __name(() => (Value) => {
    const matched = FORMATS.get(Value);
    if (matched === void 0) return {};
    return {
      string: [
        {
          name: `Format<${JSON.stringify(matched[0])}>`,
          target: "string",
          kind: "format",
          value: matched[0],
          validate: matched[1],
          exclusive: true,
          schema: {
            format: matched[0]
          }
        }
      ]
    };
  }, "format"),
  pattern: /* @__PURE__ */ __name(() => (Value) => ({
    string: [
      {
        name: `Pattern<${JSON.stringify(Value)}>`,
        target: "string",
        kind: "pattern",
        value: Value,
        validate: `RegExp(/${Value}/).test($input)`,
        exclusive: [
          "format"
        ],
        schema: {
          pattern: Value
        }
      }
    ]
  }), "pattern"),
  length: /* @__PURE__ */ __name((report) => (Value) => ({
    string: [
      {
        name: `MinLength<${Value}>`,
        target: "string",
        kind: "minLength",
        value: parse_number(report)(Value),
        validate: `${Value} <= $input.length`,
        exclusive: true,
        schema: {
          minLength: parse_number(report)(Value)
        }
      },
      {
        name: `MaxLength<${Value}>`,
        target: "string",
        kind: "maxLength",
        value: parse_number(report)(Value),
        validate: `$input.length <= ${Value}`,
        exclusive: true,
        schema: {
          maxLength: parse_number(report)(Value)
        }
      }
    ]
  }), "length"),
  minLength: /* @__PURE__ */ __name((report) => (Value) => ({
    string: [
      {
        name: `MinLength<${Value}>`,
        target: "string",
        kind: "minLength",
        value: parse_number(report)(Value),
        validate: `${Value} <= $input.length`,
        exclusive: true,
        schema: {
          minLength: parse_number(report)(Value)
        }
      }
    ]
  }), "minLength"),
  maxLength: /* @__PURE__ */ __name((report) => (Value) => ({
    string: [
      {
        name: `MaxLength<${Value}>`,
        target: "string",
        kind: "maxLength",
        value: parse_number(report)(Value),
        validate: `$input.length <= ${Value}`,
        exclusive: true,
        schema: {
          maxLength: parse_number(report)(Value)
        }
      }
    ]
  }), "maxLength")
};
var parse_number = /* @__PURE__ */ __name((report) => (str) => {
  const value = Number(str);
  if (isNaN(value) === true) return report(`invalid number`);
  return value;
}, "parse_number");
var parse_integer = /* @__PURE__ */ __name((report) => (unsigned) => (str) => {
  const value = parse_number(report)(str);
  if (value === null) return null;
  else if (Math.floor(value) !== value) return report(`invalid integer`);
  else if (unsigned === true && value < 0) return report(`invalid unsigned integer`);
  return value;
}, "parse_integer");
var FORMATS = new Map([
  ...Object.entries(FormatCheatSheet).map(([key, value]) => [
    key,
    [
      key,
      value
    ]
  ]),
  [
    "datetime",
    [
      "date-time",
      `!isNaN(new Date($input).getTime())`
    ]
  ],
  [
    "dateTime",
    [
      "date-time",
      `!isNaN(new Date($input).getTime())`
    ]
  ]
]);

export {
  MetadataCommentTagFactory
};
//# sourceMappingURL=chunk-NSJTAKAP.mjs.map