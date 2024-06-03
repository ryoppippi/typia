"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/factories/MetadataTypeTagSchemaFactory.ts
var MetadataTypeTagSchemaFactory;
(function(MetadataTypeTagSchemaFactory2) {
  MetadataTypeTagSchemaFactory2.object = (report) => (obj) => {
    if (obj.recursive) {
      report(`${obj.name} has recursive type`);
      return void 0;
    }
    const output = {};
    for (const p of obj.properties) {
      const key = p.key.getSoleLiteral();
      if (key === null) {
        report(`${obj.name} has non-literal key type: ${p.key.getName()}`);
        continue;
      }
      output[key] = iterate(report)({
        object: obj,
        key
      })(p.value);
    }
    return output;
  };
  const iterate = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (report) => (parent) => (meta) => {
    if (meta.any || meta.atomics.length || meta.arrays.length || meta.natives.length || meta.functional) report(`${parent.object.name}.${parent.key} has non-literal type`);
    else if (meta.size() > 1) report(`${parent.object.name}.${parent.key} has union type`);
    else if (meta.size() === 0) if (meta.nullable) return null;
    else if (meta.isRequired() === true) report(`${parent.object.name}.${parent.key} has non-literal type`);
    else return void 0;
    else if (meta.constants.length) return meta.constants[0].values[0].value;
    else if (meta.tuples.length) {
      const tuple = meta.tuples[0];
      if (tuple.type.isRest()) report(`${parent.object.name}.${parent.key} has rest tuple type`);
      else if (tuple.type.recursive) report(`${parent.object.name}.${parent.key} has recursive tuple type`);
      else if (tuple.type.elements.some((e) => e.required === false)) report(`${parent.object.name}.${parent.key} has optional tuple type`);
      return tuple.type.elements.map(iterate(report)(parent));
    } else if (meta.objects.length) return MetadataTypeTagSchemaFactory2.object(report)(meta.objects[0]);
    else report(`${parent.object.name}.${parent.key} has non-literal type`);
  }, "iterate");
})(MetadataTypeTagSchemaFactory || (MetadataTypeTagSchemaFactory = exports.MetadataTypeTagSchemaFactory = {}));



exports.MetadataTypeTagSchemaFactory = MetadataTypeTagSchemaFactory;
//# sourceMappingURL=chunk-MDU65SDY.js.map