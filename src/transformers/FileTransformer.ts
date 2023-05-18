import type ts from "typescript/lib/tsclibrary";

import { TsNodeUtil } from "../utils/TsNodeUtil";

import { IProject } from "./IProject";
import { NodeTransformer } from "./NodeTransformer";

export namespace FileTransformer {
    export const transform =
        (project: IProject) =>
        (context: ts.TransformationContext) =>
        (file: ts.SourceFile): ts.SourceFile =>
            file.isDeclarationFile
                ? file
                : project.tsc.visitEachChild(
                      file,
                      (node) => iterate_node(project)(context)(node),
                      context,
                  );

    const iterate_node =
        (project: IProject) =>
        (context: ts.TransformationContext) =>
        (node: ts.Node): ts.Node =>
            project.tsc.visitEachChild(
                try_transform_node(project)(node),
                (child) => iterate_node(project)(context)(child),
                context,
            );

    const try_transform_node =
        (project: IProject) =>
        (node: ts.Node): ts.Node => {
            try {
                return NodeTransformer.transform(project)(node);
            } catch (exp) {
                if (!(exp instanceof Error)) throw exp;

                const file: ts.SourceFile = TsNodeUtil.getSourceFile(
                    project.tsc,
                )(node);
                const { line, character } =
                    project.tsc.getLineAndCharacterOfPosition(file, node.pos);
                exp.message += ` - ${file.fileName}:${line + 1}:${
                    character + 1
                }`;
                throw exp;
            }
        };
}
