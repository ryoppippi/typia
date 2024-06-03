"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/utils/MapUtil.ts
var MapUtil;
(function(MapUtil2) {
  MapUtil2.take = (dict) => (key, generator) => {
    const oldbie = dict.get(key);
    if (oldbie) return oldbie;
    const value = generator();
    dict.set(key, value);
    return value;
  };
})(MapUtil || (MapUtil = exports.MapUtil = {}));



exports.MapUtil = MapUtil;
//# sourceMappingURL=chunk-KB6237G4.js.map