"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/transformers/ImportTransformer.ts
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var ImportTransformer;
(function(ImportTransformer2) {
  ImportTransformer2.transform = (from) => (to) => (context) => (file) => transform_file(from)(to)(context)(file);
  const transform_file = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (top) => (to) => (context) => (file) => {
    if (file.isDeclarationFile) return file;
    const from = get_directory_path(_path2.default.resolve(file.getSourceFile().fileName));
    to = from.replace(top, to);
    return _typescript2.default.visitEachChild(file, (node) => transform_node(top)(from)(to)(node), context);
  }, "transform_file");
  const transform_node = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (top) => (from) => (to) => (node) => {
    if (!_typescript2.default.isImportDeclaration(node) || !_typescript2.default.isStringLiteral(node.moduleSpecifier)) return node;
    const text = node.moduleSpecifier.text;
    if (text[0] !== ".") return node;
    const location = _path2.default.resolve(from, text);
    if (location.indexOf(top) === 0) return node;
    const replaced = (() => {
      const simple = _path2.default.relative(to, location).split(_path2.default.sep).join("/");
      return simple[0] === "." ? simple : `./${simple}`;
    })();
    return _typescript2.default.factory.createImportDeclaration(void 0, node.importClause, _typescript2.default.factory.createStringLiteral(replaced), node.assertClause);
  }, "transform_node");
})(ImportTransformer || (ImportTransformer = exports.ImportTransformer = {}));
var get_directory_path = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (file) => {
  const splitted = _path2.default.resolve(file).split(_path2.default.sep);
  splitted.pop();
  return _path2.default.resolve(splitted.join(_path2.default.sep));
}, "get_directory_path");



exports.ImportTransformer = ImportTransformer;
//# sourceMappingURL=chunk-YH7AXL7R.js.map