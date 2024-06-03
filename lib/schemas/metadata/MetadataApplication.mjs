import {
  MetadataComponents
} from "../../chunk-5L4BJ7DS.mjs";
import "../../chunk-WJSELHNL.mjs";
import {
  Metadata
} from "../../chunk-RD644GUB.mjs";
import "../../chunk-X7O4QE24.mjs";
import "../../chunk-NKBJZZWD.mjs";
import "../../chunk-AKMTTBJF.mjs";
import "../../chunk-4Q3FYUW7.mjs";
import "../../chunk-HXFVCUNO.mjs";
import "../../chunk-BDIZKMW2.mjs";
import "../../chunk-T4RZTIDZ.mjs";
import "../../chunk-Q72Q7WWM.mjs";
import "../../chunk-S6FVASNO.mjs";
import "../../chunk-JXCRSL4P.mjs";
import "../../chunk-QOF767UG.mjs";
import {
  __name
} from "../../chunk-TX5EWQFG.mjs";

// src/schemas/metadata/MetadataApplication.ts
var MetadataApplication = class _MetadataApplication {
  static {
    __name(this, "MetadataApplication");
  }
  metadatas;
  components;
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
    const components = MetadataComponents.from(app.components);
    const metadatas = app.metadatas.map((metadata) => Metadata.from(metadata, components.dictionary));
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
export {
  MetadataApplication
};
//# sourceMappingURL=MetadataApplication.mjs.map