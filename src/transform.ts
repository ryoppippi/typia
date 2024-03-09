import ts from "typescript";

import { FileTransformer } from "./transformers/FileTransformer";
import { ITypiaProject } from "./transformers/ITypiaProject";
import { ITypiaTransformOptions } from "./transformers/ITypiaTransformOptions";

export const transform = (
  program: ts.Program,
  options: ITypiaTransformOptions | undefined,
  extras: ITypiaProject["extras"],
): ts.TransformerFactory<ts.SourceFile> => {
  const compilerOptions: ts.CompilerOptions = program.getCompilerOptions();
  const strict: boolean =
    compilerOptions.strictNullChecks !== undefined
      ? !!compilerOptions.strictNullChecks
      : !!compilerOptions.strict;
  if (strict === false)
    extras.addDiagnostic({
      category: ts.DiagnosticCategory.Error,
      code: "(typia)" as any,
      file: undefined,
      start: undefined,
      length: undefined,
      messageText: "strict mode is required.",
    });
  return FileTransformer.transform({
    program,
    compilerOptions,
    checker: program.getTypeChecker(),
    printer: ts.createPrinter(),
    options: options ?? {},
    extras,
  });
};
export default transform;
