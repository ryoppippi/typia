import {
  ExpressionFactory
} from "./chunk-TJUGWBRO.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/helpers/RandomRanger.ts
import ts from "typescript";
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
    return ts.factory.createCallExpression(coalesce("integer"), void 0, [
      ExpressionFactory.number(props.minimum),
      ExpressionFactory.number(props.maximum)
    ]);
  };
  RandomRanger2.number = (config) => (defs) => (tags) => {
    const range = {
      minimum: {
        value: getter(tags)("minimum") ?? getter(tags)("exclusiveMinimum"),
        exclusive: getter(tags)("exclusiveMinimum") !== void 0
      },
      maximum: {
        value: getter(tags)("maximum") ?? getter(tags)("exclusiveMaximum"),
        exclusive: getter(tags)("exclusiveMaximum") !== void 0
      },
      stepper: void 0,
      multiply: getter(tags)("multipleOf")
    };
    if (range.multiply !== void 0) {
      const { minimum: minimum2, maximum: maximum2 } = multiplier(defs.gap)(range)(range.multiply);
      return ts.factory.createMultiply(config.transform(range.multiply), config.setter([
        minimum2,
        maximum2
      ]));
    }
    const integer = /* @__PURE__ */ __name((value) => value === Math.floor(value), "integer");
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
    const minimum = range.minimum.value ?? (range.maximum.value !== void 0 ? range.maximum.value - defs.gap : defs.minimum);
    const maximum = range.maximum.value ?? (range.minimum.value !== void 0 ? range.minimum.value + defs.gap : defs.maximum);
    return config.setter([
      minimum,
      maximum
    ]);
  };
})(RandomRanger || (RandomRanger = {}));
var getter = /* @__PURE__ */ __name((tags) => (kind) => {
  const value = tags.find((t) => t.kind === kind && (typeof t.value === "number" || typeof t.value === "bigint"))?.value;
  return value !== void 0 ? Number(value) : void 0;
}, "getter");
var multiplier = /* @__PURE__ */ __name((gap) => (range) => (m) => {
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

export {
  RandomRanger
};
//# sourceMappingURL=chunk-6LKF5L6N.mjs.map