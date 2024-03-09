import ts from "typescript";

import { ITypiaTransformOptions } from "./ITypiaTransformOptions";

export interface ITypiaProject {
  program: ts.Program;
  compilerOptions: ts.CompilerOptions;
  checker: ts.TypeChecker;
  printer: ts.Printer;
  options: ITypiaTransformOptions;
  extras: {
    addDiagnostic: (diag: ts.Diagnostic) => number;
  };
}
