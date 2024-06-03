import {
  FileTransformer
} from "./chunk-H6WC7R6V.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/transform.ts
import ts from "typescript";
var transform = /* @__PURE__ */ __name((program, options, extras) => {
  const compilerOptions = program.getCompilerOptions();
  const strict = compilerOptions.strictNullChecks !== void 0 ? !!compilerOptions.strictNullChecks : !!compilerOptions.strict;
  if (strict === false) extras.addDiagnostic({
    category: ts.DiagnosticCategory.Error,
    code: "(typia)",
    file: void 0,
    start: void 0,
    length: void 0,
    messageText: "strict mode is required."
  });
  return FileTransformer.transform({
    program,
    compilerOptions,
    checker: program.getTypeChecker(),
    printer: ts.createPrinter(),
    options: options ?? {},
    extras
  });
}, "transform");
var transform_default = transform;

export {
  transform,
  transform_default
};
//# sourceMappingURL=chunk-SQOUZHEJ.mjs.map