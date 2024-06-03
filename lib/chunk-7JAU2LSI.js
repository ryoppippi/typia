"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunk6UEDAFQSjs = require('./chunk-6UEDAFQS.js');


var _chunk2P7YMZW2js = require('./chunk-2P7YMZW2.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/transformers/FileTransformer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var FileTransformer;
(function(FileTransformer2) {
  FileTransformer2.transform = (environments) => (context) => (file) => {
    if (file.isDeclarationFile) return file;
    const project = {
      ...environments,
      context
    };
    checkJsDocParsingMode.get(project, file);
    return _typescript2.default.visitEachChild(file, (node) => iterate_node(project)(node), context);
  };
  const iterate_node = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (node) => _typescript2.default.visitEachChild(_nullishCoalesce(try_transform_node(project)(node), () => ( node)), (child) => iterate_node(project)(child), project.context), "iterate_node");
  const try_transform_node = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (project) => (node) => {
    try {
      return _chunk2P7YMZW2js.NodeTransformer.transform(project)(node);
    } catch (exp) {
      if (!isTransformerError(exp)) throw exp;
      const diagnostic = _typescript2.default.createDiagnosticForNode(node, {
        key: exp.code,
        category: _typescript2.default.DiagnosticCategory.Error,
        message: exp.message,
        code: `(${exp.code})`
      });
      project.extras.addDiagnostic(diagnostic);
      return null;
    }
  }, "try_transform_node");
})(FileTransformer || (FileTransformer = exports.FileTransformer = {}));
var isTransformerError = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (error) => typeof error === "object" && error !== null && error.constructor.name === "TransformerError" && typeof error.code === "string" && typeof error.message === "string", "isTransformerError");
var checkJsDocParsingMode = new (0, _chunk6UEDAFQSjs.Singleton)((project, file) => {
  if (typeof file.jsDocParsingMode === "number" && file.jsDocParsingMode !== 0) {
    project.extras.addDiagnostic(_typescript2.default.createDiagnosticForNode(file, {
      code: `(typia setup)`,
      key: "jsDocParsingMode",
      category: _typescript2.default.DiagnosticCategory.Warning,
      message: [
        `Run "npx typia setup" or "npx typia patch" command again.`,
        ``,
        `Since TypeScript v5.3 update, "tsc" no more parses JSDoc comments. Therefore, "typia" also cannot utilize those JSDoc comments too, and it damages on some features of "typia" like "comment tags" or "JSON schema" generator.`,
        ``,
        `To solve this problem, run "npx typia setup" or "npx typia patch" command to hack the TypeScript compiler to revive the JSDoc parsing feature.`,
        ``,
        `  - reference: https://github.com/microsoft/TypeScript/pull/55739`
      ].join("\n")
    }));
  }
});



exports.FileTransformer = FileTransformer;
//# sourceMappingURL=chunk-7JAU2LSI.js.map