import {
  Escaper
} from "./chunk-DISTKAQW.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/transformers/TransformerError.ts
var TransformerError = class extends Error {
  static {
    __name(this, "TransformerError");
  }
  code;
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
  const join = /* @__PURE__ */ __name((object) => (key) => {
    if (key === null) return object.name;
    else if (typeof key === "object") return `${object.name}[key]`;
    else if (Escaper.variable(key)) return `${object.name}.${key}`;
    return `${object.name}[${JSON.stringify(key)}]`;
  }, "join");
})(TransformerError || (TransformerError = {}));

export {
  TransformerError
};
//# sourceMappingURL=chunk-77LTYCTZ.mjs.map