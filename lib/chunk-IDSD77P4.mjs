import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/factories/TemplateFactory.ts
import ts from "typescript";
var TemplateFactory;
(function(TemplateFactory2) {
  TemplateFactory2.generate = (expressions) => {
    if (expressions.every((exp) => ts.isStringLiteral(exp))) return ts.factory.createStringLiteral(expressions.map((str) => str.text).join(""));
    const it = {
      value: "",
      index: 0
    };
    gather(expressions)(it);
    const head = ts.factory.createTemplateHead(it.value);
    const spans = [];
    while (true) {
      const elem = expressions[it.index++];
      gather(expressions)(it);
      const broken = it.index === expressions.length;
      spans.push(ts.factory.createTemplateSpan(elem, broken ? ts.factory.createTemplateTail(it.value) : ts.factory.createTemplateMiddle(it.value)));
      if (broken === true) break;
    }
    return ts.factory.createTemplateExpression(head, spans);
  };
  const gather = /* @__PURE__ */ __name((expressions) => (it) => {
    const found = expressions.findIndex((elem, index) => index >= it.index && !ts.isStringLiteral(elem));
    const last = found !== -1 ? found : expressions.length;
    it.value = expressions.slice(it.index, last).map((elem) => elem.text).reduce((x, y) => x + y, "");
    it.index = last;
  }, "gather");
})(TemplateFactory || (TemplateFactory = {}));

export {
  TemplateFactory
};
//# sourceMappingURL=chunk-IDSD77P4.mjs.map