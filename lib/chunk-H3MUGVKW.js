"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMCMQ56RXjs = require('./chunk-MCMQ56RX.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/transformers/TransformerError.ts
var TransformerError = class extends Error {
  static {
    _chunkUZ5BS2M3js.__name.call(void 0, this, "TransformerError");
  }
  
  constructor(props) {
    super(props.message);
    this.code = props.code;
    const proto = new.target.prototype;
    if (Object.setPrototypeOf) Object.setPrototypeOf(this, proto);
    else this.__proto__ = proto;
  }
};
(function(TransformerError2) {
  TransformerError2.from = (method) => (errors) => {
    const body = errors.map((e) => {
      const subject = e.explore.object === null ? "" : join(e.explore.object)(e.explore.property);
      const type = `${subject.length ? `${subject}: ` : ""}${e.name}`;
      return `- ${type}
${e.messages.map((msg) => `  - ${msg}`).join("\n")}`;
    }).join("\n\n");
    return new TransformerError2({
      code: method,
      message: `unsupported type detected

${body}`
    });
  };
  const join = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (object) => (key) => {
    if (key === null) return object.name;
    else if (typeof key === "object") return `${object.name}[key]`;
    else if (_chunkMCMQ56RXjs.Escaper.variable(key)) return `${object.name}.${key}`;
    return `${object.name}[${JSON.stringify(key)}]`;
  }, "join");
})(TransformerError || (TransformerError = exports.TransformerError = {}));



exports.TransformerError = TransformerError;
//# sourceMappingURL=chunk-H3MUGVKW.js.map