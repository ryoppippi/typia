import type ts from "typescript/lib/tsclibrary";

import { FileTransformer } from "./transformers/FileTransformer";

const transform: ts.CustomTransformersModuleFactory = ({ typescript }) => ({
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
export = transform;
