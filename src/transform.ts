import type ts from "typescript/lib/tsclibrary";

import { FileTransformer } from "./transformers/FileTransformer";
import { ITransformOptions } from "./transformers/ITransformOptions";

const regular: ts.CustomTransformersModuleFactory = ({ typescript }) => ({
    create: (info) => ({
        before: [
            (context) => (file) =>
                FileTransformer.transform({
                    tsc: typescript,
                    program: info.program,
                    compilerOptions: info.program.getCompilerOptions(),
                    checker: info.program.getTypeChecker(),
                    printer: typescript.createPrinter(),
                    options: info.config ?? {},
                })(context)(file),
        ],
    }),
});

const patch = (
    program: ts.Program,
    options?: ITransformOptions,
): ts.TransformerFactory<ts.SourceFile> => {
    const tsc = require("typescript");
    return FileTransformer.transform({
        tsc,
        program,
        compilerOptions: program.getCompilerOptions(),
        checker: program.getTypeChecker(),
        printer: tsc.createPrinter(),
        options: options || {},
    });
};

const transform = (x: any, y?: any) =>
    x.typescript ? regular(x) : patch(x, y);
export = transform as typeof regular | typeof patch;
