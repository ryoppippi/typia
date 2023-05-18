import { SymbolDisplayPart } from "typescript";

export namespace CommentFactory {
    export const string = (comments: SymbolDisplayPart[]): string =>
        comments
            .map((part) => part.text)
            .map((str) => str.split("\r\n").join("\n"))
            .join("");

    /**
     * @deprecated
     */
    export const generate = string;
}
