import {
  $tail
} from "./chunk-3YEWR4VS.mjs";
import {
  $throws
} from "./chunk-RFZBHBM7.mjs";
import {
  is
} from "./chunk-JL3OMPIR.mjs";
import {
  $number
} from "./chunk-P563YOO2.mjs";
import {
  $rest
} from "./chunk-BBL77UNG.mjs";
import {
  $string
} from "./chunk-P5ITYPJY.mjs";
import {
  __export,
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/functional/Namespace/json.ts
var json_exports = {};
__export(json_exports, {
  stringify: () => stringify
});
var stringify = /* @__PURE__ */ __name((method) => ({
  ...is(),
  number: $number,
  string: $string,
  tail: $tail,
  rest: $rest,
  throws: $throws(`json.${method}`)
}), "stringify");

export {
  stringify,
  json_exports
};
//# sourceMappingURL=chunk-3J5LOGBO.mjs.map