"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/factories/CommentFactory.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var CommentFactory;
(function(CommentFactory2) {
  CommentFactory2.description = (symbol, includeTags = false) => {
    const node = _optionalChain([symbol, 'access', _ => _.declarations, 'optionalAccess', _2 => _2[0]]);
    if (!node) return void 0;
    const [major, minor] = _typescript2.default.versionMajorMinor.split(".").map(Number);
    if (major < 5 || major === 5 && minor < 1) {
      const content2 = [];
      const main = _typescript2.default.displayPartsToString(symbol.getDocumentationComment(void 0));
      if (main.length) {
        content2.push(main);
        if (includeTags && symbol.getJsDocTags().length) content2.push("");
      }
      if (includeTags) for (const tag of symbol.getJsDocTags()) {
        content2.push(tag.text ? `@${tag.name} ${_typescript2.default.displayPartsToString(tag.text)}` : `@${tag.name}`);
      }
      return content2.length ? content2.map((line) => line.split("\r\n").join("\n")).join("\n") : void 0;
    }
    const elements = _typescript2.default.getJSDocCommentsAndTags(node);
    if (elements.length === 0) return void 0;
    const content = [];
    for (const comment of elements) {
      if (_typescript2.default.isJSDoc(comment)) {
        const parsed = _typescript2.default.getTextOfJSDocComment(comment.comment);
        if (_optionalChain([parsed, 'optionalAccess', _3 => _3.length])) {
          content.push(parsed);
          if (includeTags && _optionalChain([comment, 'access', _4 => _4.tags, 'optionalAccess', _5 => _5.length])) content.push("");
        }
        if (includeTags) for (const tag of _nullishCoalesce(comment.tags, () => ( []))) content.push(parseJSDocTag(tag));
      } else if (includeTags) content.push(parseJSDocTag(comment));
    }
    const output = content.map((line) => line.split("\r\n").join("\n")).join("\n");
    return output.length ? output : void 0;
  };
  CommentFactory2.merge = (comments) => comments.map((part) => part.text).map((str) => str.split("\r\n").join("\n")).join("");
})(CommentFactory || (CommentFactory = exports.CommentFactory = {}));
var parseJSDocTag = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (tag) => {
  const name = _optionalChain([tag, 'access', _6 => _6.name, 'optionalAccess', _7 => _7.getText, 'call', _8 => _8()]);
  const parsed = _typescript2.default.getTextOfJSDocComment(tag.comment);
  return [
    `@${tag.tagName.text}`,
    name,
    parsed
  ].filter((str) => !!_optionalChain([str, 'optionalAccess', _9 => _9.length])).join(" ");
}, "parseJSDocTag");



exports.CommentFactory = CommentFactory;
//# sourceMappingURL=chunk-272AIHZN.js.map