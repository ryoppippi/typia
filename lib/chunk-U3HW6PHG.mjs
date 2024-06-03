import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/factories/CommentFactory.ts
import ts from "typescript";
var CommentFactory;
(function(CommentFactory2) {
  CommentFactory2.description = (symbol, includeTags = false) => {
    const node = symbol.declarations?.[0];
    if (!node) return void 0;
    const [major, minor] = ts.versionMajorMinor.split(".").map(Number);
    if (major < 5 || major === 5 && minor < 1) {
      const content2 = [];
      const main = ts.displayPartsToString(symbol.getDocumentationComment(void 0));
      if (main.length) {
        content2.push(main);
        if (includeTags && symbol.getJsDocTags().length) content2.push("");
      }
      if (includeTags) for (const tag of symbol.getJsDocTags()) {
        content2.push(tag.text ? `@${tag.name} ${ts.displayPartsToString(tag.text)}` : `@${tag.name}`);
      }
      return content2.length ? content2.map((line) => line.split("\r\n").join("\n")).join("\n") : void 0;
    }
    const elements = ts.getJSDocCommentsAndTags(node);
    if (elements.length === 0) return void 0;
    const content = [];
    for (const comment of elements) {
      if (ts.isJSDoc(comment)) {
        const parsed = ts.getTextOfJSDocComment(comment.comment);
        if (parsed?.length) {
          content.push(parsed);
          if (includeTags && comment.tags?.length) content.push("");
        }
        if (includeTags) for (const tag of comment.tags ?? []) content.push(parseJSDocTag(tag));
      } else if (includeTags) content.push(parseJSDocTag(comment));
    }
    const output = content.map((line) => line.split("\r\n").join("\n")).join("\n");
    return output.length ? output : void 0;
  };
  CommentFactory2.merge = (comments) => comments.map((part) => part.text).map((str) => str.split("\r\n").join("\n")).join("");
})(CommentFactory || (CommentFactory = {}));
var parseJSDocTag = /* @__PURE__ */ __name((tag) => {
  const name = tag.name?.getText();
  const parsed = ts.getTextOfJSDocComment(tag.comment);
  return [
    `@${tag.tagName.text}`,
    name,
    parsed
  ].filter((str) => !!str?.length).join(" ");
}, "parseJSDocTag");

export {
  CommentFactory
};
//# sourceMappingURL=chunk-U3HW6PHG.mjs.map