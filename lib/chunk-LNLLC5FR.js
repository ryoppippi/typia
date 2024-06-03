"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6GHU2XFNjs = require('./chunk-6GHU2XFN.js');


var _chunkQ2DBVBM3js = require('./chunk-Q2DBVBM3.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/factories/internal/metadata/iterate_metadata_sort.ts
var iterate_metadata_sort = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (collection) => (meta) => {
  const visited = /* @__PURE__ */ new Set();
  for (const array of collection.arrays()) iterate(visited)(collection)(array.value);
  for (const tuple of collection.tuples()) for (const element of tuple.elements) iterate(visited)(collection)(element);
  for (const object of collection.objects()) for (const property of object.properties) iterate(visited)(collection)(property.value);
  iterate(visited)(collection)(meta);
}, "iterate_metadata_sort");
var iterate = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (visited) => (collection) => (meta) => {
  if (visited.has(meta)) return;
  visited.add(meta);
  for (const map of meta.maps) iterate(visited)(collection)(map.value);
  for (const set of meta.sets) iterate(visited)(collection)(set);
  if (meta.escaped !== null) iterate(visited)(collection)(meta.escaped.returns);
  if (meta.rest !== null) iterate(visited)(collection)(meta.rest);
  if (meta.objects.length > 1) {
    meta.objects.sort((x, y) => _chunkQ2DBVBM3js.MetadataObject.covers(x, y) ? -1 : _chunkQ2DBVBM3js.MetadataObject.covers(y, x) ? 1 : 0);
    meta.union_index = collection.getUnionIndex(meta);
  }
  if (meta.arrays.length > 1) meta.arrays.sort((x, y) => _chunk6GHU2XFNjs.Metadata.covers(x.type.value, y.type.value) ? -1 : _chunk6GHU2XFNjs.Metadata.covers(y.type.value, x.type.value) ? 1 : 0);
  if (meta.tuples.length > 1) meta.tuples.sort((x, y) => {
    const xt = _chunk6GHU2XFNjs.Metadata.initialize();
    const yt = _chunk6GHU2XFNjs.Metadata.initialize();
    xt.tuples.push(x);
    yt.tuples.push(y);
    return _chunk6GHU2XFNjs.Metadata.covers(xt, yt) ? -1 : _chunk6GHU2XFNjs.Metadata.covers(yt, xt) ? 1 : 0;
  });
  for (const constant of meta.constants) if (constant.type === "string") constant.values.sort();
  else if (constant.type === "number") constant.values.sort((a, b) => a.value - b.value);
  else if (constant.type === "bigint") constant.values.sort((a, b) => a.value < b.value ? -1 : 1);
  else constant.values.sort((a, _b) => a.value === false ? -1 : 1);
}, "iterate");



exports.iterate_metadata_sort = iterate_metadata_sort;
//# sourceMappingURL=chunk-LNLLC5FR.js.map