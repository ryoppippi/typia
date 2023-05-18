import type ts from "typescript/lib/tsclibrary";

export interface ICheckEntry {
    expression: ts.Expression;
    tags: ICheckEntry.ITag[];
}
export namespace ICheckEntry {
    export interface ITag {
        expected: string;
        expression: ts.Expression;
    }
}
