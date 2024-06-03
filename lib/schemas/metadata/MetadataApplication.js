"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVOR7NA2Hjs = require('../../chunk-VOR7NA2H.js');
require('../../chunk-GXEQC72C.js');


var _chunk6GHU2XFNjs = require('../../chunk-6GHU2XFN.js');
require('../../chunk-TBFJDOPA.js');
require('../../chunk-6P6Q2LJH.js');
require('../../chunk-56YW7YRR.js');
require('../../chunk-SIGOR7QQ.js');
require('../../chunk-UNOXPWQE.js');
require('../../chunk-A7ORGSGM.js');
require('../../chunk-FDUFUJMY.js');
require('../../chunk-H3SMZNB3.js');
require('../../chunk-X72M22NM.js');
require('../../chunk-Q2DBVBM3.js');
require('../../chunk-7TNPR4MV.js');


var _chunkUZ5BS2M3js = require('../../chunk-UZ5BS2M3.js');

// src/schemas/metadata/MetadataApplication.ts
var MetadataApplication = class _MetadataApplication {
  static {
    _chunkUZ5BS2M3js.__name.call(void 0, this, "MetadataApplication");
  }
  
  
  /**
  * @hidden
  */
  constructor(props) {
    this.metadatas = props.metadatas;
    this.components = props.components;
  }
  /**
  * @internal
  */
  static create(props) {
    return new _MetadataApplication(props);
  }
  static from(app) {
    const components = _chunkVOR7NA2Hjs.MetadataComponents.from(app.components);
    const metadatas = app.metadatas.map((metadata) => _chunk6GHU2XFNjs.Metadata.from(metadata, components.dictionary));
    return _MetadataApplication.create({
      metadatas,
      components
    });
  }
  toJSON() {
    return {
      metadatas: this.metadatas.map((metadata) => metadata.toJSON()),
      components: this.components.toJSON()
    };
  }
};


exports.MetadataApplication = MetadataApplication;
//# sourceMappingURL=MetadataApplication.js.map