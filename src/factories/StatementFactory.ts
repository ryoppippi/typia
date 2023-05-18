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
}
