import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/transformers/ImportTransformer.ts
import path from "path";
import ts from "typescript";
var ImportTransformer;
(function(ImportTransformer2) {
  ImportTransformer2.transform = (from) => (to) => (context) => (file) => transform_file(from)(to)(context)(file);
  const transform_file = /* @__PURE__ */ __name((top) => (to) => (context) => (file) => {
    if (file.isDeclarationFile) return file;
    const from = get_directory_path(path.resolve(file.getSourceFile().fileName));
    to = from.replace(top, to);
    return ts.visitEachChild(file, (node) => transform_node(top)(from)(to)(node), context);
  }, "transform_file");
  const transform_node = /* @__PURE__ */ __name((top) => (from) => (to) => (node) => {
    if (!ts.isImportDeclaration(node) || !ts.isStringLiteral(node.moduleSpecifier)) return node;
    const text = node.moduleSpecifier.text;
    if (text[0] !== ".") return node;
    const location = path.resolve(from, text);
    if (location.indexOf(top) === 0) return node;
    const replaced = (() => {
      const simple = path.relative(to, location).split(path.sep).join("/");
      return simple[0] === "." ? simple : `./${simple}`;
    })();
    return ts.factory.createImportDeclaration(void 0, node.importClause, ts.factory.createStringLiteral(replaced), node.assertClause);
  }, "transform_node");
})(ImportTransformer || (ImportTransformer = {}));
var get_directory_path = /* @__PURE__ */ __name((file) => {
  const splitted = path.resolve(file).split(path.sep);
  splitted.pop();
  return path.resolve(splitted.join(path.sep));
}, "get_directory_path");

export {
  ImportTransformer
};
//# sourceMappingURL=chunk-F3OZXVTA.mjs.map