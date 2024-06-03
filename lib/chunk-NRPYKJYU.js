"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/helpers/RandomRanger.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var RandomRanger;
(function(RandomRanger2) {
  RandomRanger2.length = (coalesce) => (defs) => (acc) => (tags) => {
    const props = {
      minimum: getter(tags)(acc.minimum),
      maximum: getter(tags)(acc.maximum)
    };
    if (props.minimum === void 0 && props.maximum === void 0) return void 0;
    if (props.maximum !== void 0 && props.minimum === void 0) {
      if (props.maximum <= 0) {
        props.maximum = 0;
        props.minimum = 0;
      } else if (props.maximum < defs.gap) props.minimum = defs.minimum === 0 ? 0 : 1;
    }
    props.minimum ??= defs.minimum;
    props.maximum ??= defs.maximum;
    if (props.maximum < props.minimum) props.maximum += defs.gap;
    return _typescript2.default.factory.createCallExpression(coalesce("integer"), void 0, [
      _chunk2F43GCPEjs.ExpressionFactory.number(props.minimum),
      _chunk2F43GCPEjs.ExpressionFactory.number(props.maximum)
    ]);
  };
  RandomRanger2.number = (config) => (defs) => (tags) => {
    const range = {
      minimum: {
        value: _nullishCoalesce(getter(tags)("minimum"), () => ( getter(tags)("exclusiveMinimum"))),
        exclusive: getter(tags)("exclusiveMinimum") !== void 0
      },
      maximum: {
        value: _nullishCoalesce(getter(tags)("maximum"), () => ( getter(tags)("exclusiveMaximum"))),
        exclusive: getter(tags)("exclusiveMaximum") !== void 0
      },
      stepper: void 0,
      multiply: getter(tags)("multipleOf")
    };
    if (range.multiply !== void 0) {
      const { minimum: minimum2, maximum: maximum2 } = multiplier(defs.gap)(range)(range.multiply);
      return _typescript2.default.factory.createMultiply(config.transform(range.multiply), config.setter([
        minimum2,
        maximum2
      ]));
    }
    const integer = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => value === Math.floor(value), "integer");
    if (config.type === "int") {
      if (range.minimum.value !== void 0) {
        if (range.minimum.exclusive) {
          range.minimum.exclusive = false;
          if (integer(range.minimum.value)) range.minimum.value += 1;
        }
        range.minimum.value = Math.ceil(range.minimum.value);
      }
      if (range.maximum.value !== void 0) {
        if (range.maximum.exclusive) {
          range.maximum.exclusive = false;
          if (integer(range.maximum.value)) range.maximum.value -= 1;
        }
        range.maximum.value = Math.floor(range.maximum.value);
      }
    }
    if (config.type === "uint") {
      if (range.minimum.value === void 0) range.minimum.value = 0;
      else if (range.minimum.value <= 0) {
        range.minimum.value = 0;
        range.minimum.exclusive = false;
      }
    }
    const minimum = _nullishCoalesce(range.minimum.value, () => ( (range.maximum.value !== void 0 ? range.maximum.value - defs.gap : defs.minimum)));
    const maximum = _nullishCoalesce(range.maximum.value, () => ( (range.minimum.value !== void 0 ? range.minimum.value + defs.gap : defs.maximum)));
    return config.setter([
      minimum,
      maximum
    ]);
  };
})(RandomRanger || (RandomRanger = exports.RandomRanger = {}));
var getter = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (tags) => (kind) => {
  const value = _optionalChain([tags, 'access', _ => _.find, 'call', _2 => _2((t) => t.kind === kind && (typeof t.value === "number" || typeof t.value === "bigint")), 'optionalAccess', _3 => _3.value]);
  return value !== void 0 ? Number(value) : void 0;
}, "getter");
var multiplier = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (gap) => (range) => (m) => {
  const minimum = range.minimum.value === void 0 ? 0 : (() => {
    const x = m * Math.ceil(range.minimum.value / m);
    return range.minimum.exclusive && x === range.minimum.value ? x + m : x;
  })() / m;
  const maximum = range.maximum.value === void 0 ? gap : (() => {
    const y = m * Math.floor(range.maximum.value / m);
    return range.maximum.exclusive && y === range.maximum.value ? y - m : y;
  })() / m;
  return {
    minimum,
    maximum
  };
}, "multiplier");



exports.RandomRanger = RandomRanger;
//# sourceMappingURL=chunk-NRPYKJYU.js.map