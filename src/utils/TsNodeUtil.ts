import type ts from "typescript/lib/tsclibrary";

export namespace TsNodeUtil {
    export const getFullText =
        (tsc: typeof ts) =>
        (node: ts.Node, file?: ts.SourceFile): string =>
            (file ?? getSourceFile(tsc)(node)).text.substring(
                node.pos,
                node.end,
            );

    export const getSourceFile = (tsc: typeof ts) => (node: ts.Node) => {
        while (node && node.kind !== tsc.SyntaxKind.SourceFile)
            node = node.parent;
        return node as ts.SourceFile;
    };
}
