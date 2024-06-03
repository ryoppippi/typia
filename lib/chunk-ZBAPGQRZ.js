"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6GHU2XFNjs = require('./chunk-6GHU2XFN.js');


var _chunk6P6Q2LJHjs = require('./chunk-6P6Q2LJH.js');


var _chunk56YW7YRRjs = require('./chunk-56YW7YRR.js');

// src/factories/internal/metadata/MetadataHelper.ts
var MetadataHelper;
(function(MetadataHelper2) {
  MetadataHelper2.literal_to_metadata = (key) => {
    const metadata = _chunk6GHU2XFNjs.Metadata.initialize();
    metadata.constants.push(_chunk6P6Q2LJHjs.MetadataConstant.create({
      type: "string",
      values: [
        _chunk56YW7YRRjs.MetadataConstantValue.create({
          value: key,
          tags: void 0
        })
      ]
    }));
    return metadata;
  };
})(MetadataHelper || (MetadataHelper = exports.MetadataHelper = {}));



exports.MetadataHelper = MetadataHelper;
//# sourceMappingURL=chunk-ZBAPGQRZ.js.map