import { JSDocTagInfo } from "typescript";
import type ts from "typescript/lib/tsclibrary";

import { TsNodeUtil } from "./TsNodeUtil";

export namespace TsSymbolUtil {
    export const comments =
        (tsc: typeof ts) =>
        (symbol: ts.Symbol): string | undefined => {
            const node = symbol.declarations?.[0];
            if (!node) return undefined;

            const range: ts.TextRange = tsc.getCommentRange(node);
            const text: string = TsNodeUtil.getSourceFile(tsc)(
                node,
            ).text.substring(range.pos, range.end);
            return filter(text).join("\n");
        };

    export const getCommentTags =
        (tsc: typeof ts) =>
        (symbol: ts.Symbol): JSDocTagInfo[] | undefined => {
            const node = symbol.declarations?.[0];
            if (!node) return undefined;

            const tagList: ts.JSDocTag[] = tsc
                .getJSDocTags(node)
                .map(emendTag(tsc));
            // if (
            //     tagList.some(
            //         (tag) => tag.tagName.escapedText.toString() === "type",
            //     )
            // ) {
            //     const entire = tsc.getJSDocCommentsAndTags(node);
            //     const texts = entire.map((e) =>
            //         tsc.isJSDoc(e) ? jsDocToText(e) : jsTagToText(e),
            //     );
            //     console.log(texts);
            // }

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
                .split("\n")
                .map((str) => trim(str))
                .filter((str) => !!str.length)
                .join("\n");
            return comment.length
                ? {
                      ...tag,
                      comment,
                  }
                : tag;
        };

    const filter = (text: string): string[] => {
        const elements: string[] = text.split("\n");
        const first: number = lastIndexOf(elements)((elem) =>
            elem.trim().startsWith("/**"),
        );
        const last: number = lastIndexOf(elements)((elem) =>
            elem.trim().endsWith("*/"),
        );

        const cut: string[] = elements.slice(first, last + 1);
        return cut
            .map((elem, i) => {
                if (i === 0) elem = elem.substring(elem.lastIndexOf("/**") + 3);
                if (i === cut.length - 1)
                    elem = elem.substring(0, elem.lastIndexOf("*/"));
                return trim(elem);
            })
            .filter((elem) => elem.length > 0);
    };

    const lastIndexOf =
        <T>(array: T[]) =>
        (pred: (elem: T) => boolean) => {
            for (let i = array.length - 1; i >= 0; i--)
                if (pred(array[i]!)) return i;
            return -1;
        };

    const trim = (str: string): string => {
        const vulnerable = (ch: string) =>
            ch === " " ||
            ch === "\n" ||
            ch == "\r" ||
            ch === "\t" ||
            ch === "*";
        let start: number;
        let end: number;
        for (start = 0; start < str.length; ++start)
            if (!vulnerable(str.charAt(start))) break;
        for (end = str.length - 1; end >= 0; --end)
            if (!vulnerable(str.charAt(end))) break;
        return start > end ? "" : str.substring(start, end + 1).trim();
    };
}

// const jsDocToText = (doc: ts.JSDoc): string =>
//     [jsCommentToText(doc.comment), ...(doc.tags ?? []).map(jsTagToText)]
//         .filter((str) => !!str.length)
//         .join(" ");

// const jsTagToText = (doc: ts.JSDocTag): string =>
//     ["@" + doc.tagName.escapedText.toString(), jsCommentToText(doc.comment)]
//         .filter((str) => !!str.length)
//         .join(" ");

// const jsCommentToText = (
//     comment: string | ts.NodeArray<ts.JSDocComment> | undefined,
// ): string =>
//     comment === undefined
//         ? ""
//         : typeof comment === "string"
//         ? comment
//         : comment.map((c) => c.text).join("");
