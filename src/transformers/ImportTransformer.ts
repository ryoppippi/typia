import path from "path";
import type ts from "typescript/lib/tsclibrary";

import { TsNodeUtil } from "../utils/TsNodeUtil";

export namespace ImportTransformer {
    export const transform =
        (tsc: typeof ts) =>
        (from: string) =>
        (to: string) =>
        (context: ts.TransformationContext) =>
        (file: ts.SourceFile) =>
            transform_file(tsc)(from)(to)(context)(file);

    const transform_file =
        (tsc: typeof ts) =>
        (top: string) =>
        (to: string) =>
        (context: ts.TransformationContext) =>
        (file: ts.SourceFile): ts.SourceFile => {
            if (file.isDeclarationFile) return file;

            const from: string = get_directory_path(
                path.resolve(TsNodeUtil.getSourceFile(tsc)(file).fileName),
            );
            to = from.replace(top, to);

            return tsc.visitEachChild(
                file,
                (node) => transform_node(tsc)(top)(from)(to)(node),
                context,
            );
        };

    const transform_node =
        (tsc: typeof ts) =>
        (top: string) =>
        (from: string) =>
        (to: string) =>
        (node: ts.Node) => {
            if (
                !tsc.isImportDeclaration(node) ||
                !tsc.isStringLiteral(node.moduleSpecifier)
            )
                return node;

            const text: string = node.moduleSpecifier.text;
            if (text[0] !== ".") return node;

            const location: string = path.resolve(from, text);
            if (location.indexOf(top) === 0) return node;

            const replaced: string = (() => {
                const simple: string = path
                    .relative(to, location)
                    .split(path.sep)
                    .join("/");
                return simple[0] === "." ? simple : `./${simple}`;
            })();

            return tsc.factory.createImportDeclaration(
                undefined,
                node.importClause,
                tsc.factory.createStringLiteral(replaced),
                node.assertClause,
            );
        };
}

const get_directory_path = (file: string): string => {
    const splitted: string[] = path.resolve(file).split(path.sep);
    splitted.pop();
    return path.resolve(splitted.join(path.sep));
};
