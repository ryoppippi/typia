import type ts from "typescript/lib/tsclibrary";

export namespace ValueFactory {
    export const NULL = (tsc: typeof ts) => tsc.factory.createNull();
    export const UNDEFINED = (tsc: typeof ts) =>
        tsc.factory.createIdentifier("undefined");
    export const BOOLEAN = (tsc: typeof ts) => (value: boolean) =>
        value ? tsc.factory.createTrue() : tsc.factory.createFalse();
    export const INPUT =
        (tsc: typeof ts) =>
        (str: string = "input") =>
            tsc.factory.createIdentifier(str);
    export const TYPEOF = (tsc: typeof ts) => (input: ts.Expression) =>
        tsc.factory.createTypeOfExpression(input);
}
