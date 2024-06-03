"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6GHU2XFNjs = require('./chunk-6GHU2XFN.js');


var _chunkA7ORGSGMjs = require('./chunk-A7ORGSGM.js');


var _chunkKB6237G4js = require('./chunk-KB6237G4.js');

// src/programmers/helpers/UnionPredicator.ts
var UnionPredicator;
(function(UnionPredicator2) {
  UnionPredicator2.object = (targets) => {
    const matrix = /* @__PURE__ */ new Map();
    for (const obj of targets) for (const prop of obj.properties) {
      const key = prop.key.getSoleLiteral();
      if (key !== null) _chunkKB6237G4js.MapUtil.take(matrix)(key, () => _chunkA7ORGSGMjs.ArrayUtil.repeat(targets.length, () => null));
    }
    targets.forEach((obj, i) => {
      for (const prop of obj.properties) {
        const key = prop.key.getSoleLiteral();
        if (key !== null) matrix.get(key)[i] = prop;
      }
    });
    const output = [];
    targets.forEach((obj, i) => {
      const children = [];
      obj.properties.forEach((prop) => {
        if (prop.value.isRequired() === false) return;
        const key = prop.key.getSoleLiteral();
        if (key === null) return;
        const neighbors = matrix.get(key).filter((oppo, k) => i !== k && oppo !== null);
        const unique = neighbors.length === 0 || neighbors.every((n) => !_chunk6GHU2XFNjs.Metadata.intersects(prop.value, n.value));
        if (unique === true) children.push({
          property: prop,
          neighbour: neighbors.length !== 0
        });
      });
      if (children.length === 0) return;
      const top = children.find((child) => child.property.value.isConstant()) || children[0];
      output.push({
        index: i,
        object: obj,
        ...top
      });
    });
    return output;
  };
})(UnionPredicator || (UnionPredicator = exports.UnionPredicator = {}));



exports.UnionPredicator = UnionPredicator;
//# sourceMappingURL=chunk-DXJQZ2DF.js.map