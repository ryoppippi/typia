"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/factories/TemplateFactory.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var TemplateFactory;
(function(TemplateFactory2) {
  TemplateFactory2.generate = (expressions) => {
    if (expressions.every((exp) => _typescript2.default.isStringLiteral(exp))) return _typescript2.default.factory.createStringLiteral(expressions.map((str) => str.text).join(""));
    const it = {
      value: "",
      index: 0
    };
    gather(expressions)(it);
    const head = _typescript2.default.factory.createTemplateHead(it.value);
    const spans = [];
    while (true) {
      const elem = expressions[it.index++];
      gather(expressions)(it);
      const broken = it.index === expressions.length;
      spans.push(_typescript2.default.factory.createTemplateSpan(elem, broken ? _typescript2.default.factory.createTemplateTail(it.value) : _typescript2.default.factory.createTemplateMiddle(it.value)));
      if (broken === true) break;
    }
    return _typescript2.default.factory.createTemplateExpression(head, spans);
  };
  const gather = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (expressions) => (it) => {
    const found = expressions.findIndex((elem, index) => index >= it.index && !_typescript2.default.isStringLiteral(elem));
    const last = found !== -1 ? found : expressions.length;
    it.value = expressions.slice(it.index, last).map((elem) => elem.text).reduce((x, y) => x + y, "");
    it.index = last;
  }, "gather");
})(TemplateFactory || (TemplateFactory = exports.TemplateFactory = {}));



exports.TemplateFactory = TemplateFactory;
//# sourceMappingURL=chunk-T3PGTOEH.js.map