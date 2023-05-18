import { JSDocTagInfo } from "typescript";
import type ts from "typescript/lib/tsclibrary";

import { TsNodeUtil } from "./TsNodeUtil";

export namespace TsSymbolUtil {
    export const comments =
        (tsc: typeof ts) =>
        (symbol: ts.Symbol): string | undefined => {
            const node = symbol.declarations?.[0];
            if (!node) return undefined;

            return tsc
                .getJSDocCommentsAndTags(node)
                .map((doc) =>
                    doc.kind === tsc.SyntaxKind.JSDoc
                        ? jsDocToText(tsc)(doc as ts.JSDoc)
                        : jsTagToText(emendTag(tsc)(doc)),
                )
                .join(" ");
        };

    export const getCommentTags =
        (tsc: typeof ts) =>
        (symbol: ts.Symbol): JSDocTagInfo[] | undefined => {
            const node = symbol.declarations?.[0];
            if (!node) return undefined;

            // tsc.getJSDocCommentsAndTags()
            const tagList: ts.JSDocTag[] = tsc
                .getJSDocTags(node)
                .map(emendTag(tsc));
            return tagList.map((tag) => ({
                name: tag.tagName.escapedText.toString(),
                text:
                    tag.comment === undefined
                        ? undefined
                        : typeof tag.comment === "string"
                        ? [{ text: tag.comment, kind: "text" }]
                        : tag.comment.map((text) => ({
                              text: text.text,
                              kind:
                                  text.kind === tsc.SyntaxKind.JSDocText
                                      ? "text"
                                      : text.kind === tsc.SyntaxKind.JSDocLink
                                      ? "link"
                                      : text.kind ===
                                        tsc.SyntaxKind.JSDocLinkCode
                                      ? "link-code"
                                      : "link-plain",
                          })),
            }));
        };

    const emendTag =
        (tsc: typeof ts) =>
        (tag: ts.JSDocTag): ts.JSDocTag => {
            if (tag.comment !== undefined) return tag;

            const tagName: string = tag.tagName.escapedText.toString();
            const comment: string = TsNodeUtil.getSourceFile(tsc)(tag)
                .text.substring(tag.pos, tag.end)
                .replace(`@${tagName}`, "")
                .trim();
            return comment.length
                ? {
                      ...tag,
                      comment: "",
                  }
                : tag;
        };

    const jsDocToText =
        (tsc: typeof ts) =>
        (doc: ts.JSDoc): string =>
            [
                jsCommentToText(doc.comment),
                ...(doc.tags ?? []).map(emendTag(tsc)).map(jsTagToText),
            ]
                .filter((str) => !!str.length)
                .join(" ");

    const jsTagToText = (doc: ts.JSDocTag): string =>
        ["@" + doc.tagName.escapedText.toString(), jsCommentToText(doc.comment)]
            .filter((str) => !!str.length)
            .join(" ");

    const jsCommentToText = (
        comment: string | ts.NodeArray<ts.JSDocComment> | undefined,
    ): string =>
        comment === undefined
            ? ""
            : typeof comment === "string"
            ? comment
            : comment.map((c) => c.text).join("");
}
