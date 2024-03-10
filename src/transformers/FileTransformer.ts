import ts from "typescript";

import { Singleton } from "../utils/Singleton";

import { ITypiaProject } from "./ITypiaProject";
import { NodeTransformer } from "./NodeTransformer";
import { TransformerError } from "./TransformerError";
import { ImportProgrammer } from "../programmers/ImportProgrammer";
import { ITypiaContext } from "./ITypiaContext";

export namespace FileTransformer {
  export const transform =
    (project: ITypiaProject) =>
    (context: ts.TransformationContext) =>
    (file: ts.SourceFile): ts.SourceFile => {
      if (file.isDeclarationFile) return file;
      checkJsDocParsingMode.get(project, file);

      const props: ITypiaContext = {
        ...project,
        transform: context,
        importer: new ImportProgrammer(),
      };
      file = ts.visitEachChild(
        file,
        (node) => iterate_node(props)(node),
        context,
      );
      return ts.factory.createSourceFile(
        [...props.importer.toStatements(), ...file.statements],
        file.endOfFileToken as any,
        file.flags,
      );
    };

  const iterate_node =
    (props: ITypiaContext) =>
    (node: ts.Node): ts.Node =>
      ts.visitEachChild(
        try_transform_node(props)(node) ?? node,
        (child) => iterate_node(props)(child),
        props.transform,
      );

  const try_transform_node =
    (props: ITypiaContext) =>
    (node: ts.Node): ts.Node | null => {
      try {
        return NodeTransformer.transform(props)(node);
      } catch (exp) {
        // ONLY ACCEPT TRANSFORMER-ERROR
        if (!isTransformerError(exp)) throw exp;

        // REPORT DIAGNOSTIC
        const diagnostic = ts.createDiagnosticForNode(node, {
          key: exp.code,
          category: ts.DiagnosticCategory.Error,
          message: exp.message,
          code: `(${exp.code})` as any,
        });
        props.extras.addDiagnostic(diagnostic);
        return null;
      }
    };
}

const isTransformerError = (error: any): error is TransformerError =>
  typeof error === "object" &&
  error !== null &&
  error.constructor.name === "TransformerError" &&
  typeof error.code === "string" &&
  typeof error.message === "string";

const checkJsDocParsingMode = new Singleton(
  (project: ITypiaProject, file: ts.SourceFile) => {
    if (
      typeof file.jsDocParsingMode === "number" &&
      file.jsDocParsingMode !== 0
    ) {
      project.extras.addDiagnostic(
        ts.createDiagnosticForNode(file, {
          code: `(typia setup)` as any,
          key: "jsDocParsingMode",
          category: ts.DiagnosticCategory.Warning,
          message: [
            `Run "npx typia setup" or "npx typia patch" command again.`,
            ``,
            `Since TypeScript v5.3 update, "tsc" no more parses JSDoc comments. Therefore, "typia" also cannot utilize those JSDoc comments too, and it damages on some features of "typia" like "comment tags" or "JSON schema" generator.`,
            ``,
            `To solve this problem, run "npx typia setup" or "npx typia patch" command to hack the TypeScript compiler to revive the JSDoc parsing feature.`,
            ``,
            `  - reference: https://github.com/microsoft/TypeScript/pull/55739`,
          ].join("\n"),
        }),
      );
    }
  },
);
