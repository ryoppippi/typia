import { transpile as TsTranspile } from "typescript";
import type ts from "typescript/lib/tsclibrary";

export namespace StatementFactory {
    export const constant =
        (tsc: typeof ts) => (name: string, initializer?: ts.Expression) =>
            tsc.factory.createVariableStatement(
                undefined,
                tsc.factory.createVariableDeclarationList(
                    [
                        tsc.factory.createVariableDeclaration(
                            name,
                            undefined,
                            undefined,
                            initializer,
                        ),
                    ],
                    tsc.NodeFlags.Const,
                ),
            );

    export const transpile = (tsc: typeof ts) => (script: string) =>
        tsc.factory.createExpressionStatement(
            tsc.factory.createIdentifier(TsTranspile(script)), // @todo
        );
}
