import {
  Singleton
} from "./chunk-FWYK5AVK.mjs";
import {
  NodeTransformer
} from "./chunk-CWPPZAXV.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/transformers/FileTransformer.ts
import ts from "typescript";
var FileTransformer;
(function(FileTransformer2) {
  FileTransformer2.transform = (environments) => (context) => (file) => {
    if (file.isDeclarationFile) return file;
    const project = {
      ...environments,
      context
    };
    checkJsDocParsingMode.get(project, file);
    return ts.visitEachChild(file, (node) => iterate_node(project)(node), context);
  };
  const iterate_node = /* @__PURE__ */ __name((project) => (node) => ts.visitEachChild(try_transform_node(project)(node) ?? node, (child) => iterate_node(project)(child), project.context), "iterate_node");
  const try_transform_node = /* @__PURE__ */ __name((project) => (node) => {
    try {
      return NodeTransformer.transform(project)(node);
    } catch (exp) {
      if (!isTransformerError(exp)) throw exp;
      const diagnostic = ts.createDiagnosticForNode(node, {
        key: exp.code,
        category: ts.DiagnosticCategory.Error,
        message: exp.message,
        code: `(${exp.code})`
      });
      project.extras.addDiagnostic(diagnostic);
      return null;
    }
  }, "try_transform_node");
})(FileTransformer || (FileTransformer = {}));
var isTransformerError = /* @__PURE__ */ __name((error) => typeof error === "object" && error !== null && error.constructor.name === "TransformerError" && typeof error.code === "string" && typeof error.message === "string", "isTransformerError");
var checkJsDocParsingMode = new Singleton((project, file) => {
  if (typeof file.jsDocParsingMode === "number" && file.jsDocParsingMode !== 0) {
    project.extras.addDiagnostic(ts.createDiagnosticForNode(file, {
      code: `(typia setup)`,
      key: "jsDocParsingMode",
      category: ts.DiagnosticCategory.Warning,
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

export {
  FileTransformer
};
//# sourceMappingURL=chunk-H6WC7R6V.mjs.map