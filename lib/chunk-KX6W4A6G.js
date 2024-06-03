"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/programmers/helpers/OptionPredicator.ts
var OptionPredicator;
(function(OptionPredicator2) {
  OptionPredicator2.numeric = (options) => OptionPredicator2.finite(options) || options.numeric === true;
  OptionPredicator2.functional = (options) => options.functional === true;
  OptionPredicator2.finite = (options) => options.finite === true;
  OptionPredicator2.undefined = (options) => options.undefined !== false;
})(OptionPredicator || (OptionPredicator = exports.OptionPredicator = {}));



exports.OptionPredicator = OptionPredicator;
//# sourceMappingURL=chunk-KX6W4A6G.js.map