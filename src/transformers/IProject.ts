import type ts from "typescript/lib/tsclibrary";

import { ITransformOptions } from "./ITransformOptions";

export interface IProject {
    tsc: typeof ts;
    program: ts.Program;
    compilerOptions: ts.CompilerOptions;
    checker: ts.TypeChecker;
    printer: ts.Printer;
    options: ITransformOptions;
}
export namespace IProject {
    export interface IModule {
        tsc: typeof ts;
        checker: ts.TypeChecker;
    }
}
