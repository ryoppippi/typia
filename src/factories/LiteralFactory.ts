import type ts from "typescript/lib/tsclibrary";

import { IdentifierFactory } from "./IdentifierFactory";

export namespace LiteralFactory {
    export const generate =
        (tsc: typeof ts) =>
        (input: any): ts.Expression => {
            if (input === null) return tsc.factory.createNull();
            else if (tsc.isIdentifier(input)) return input;
            else if (input instanceof Array) return generate_array(tsc)(input);
            else if (typeof input === "object")
                return generate_object(tsc)(input);
            else if (typeof input === "string")
                return generate_string(tsc)(input);
            else if (typeof input === "boolean")
                return generate_value(tsc)(input);
            else if (typeof input === "number")
                return generate_value(tsc)(input);
            else if (typeof input === "bigint")
                return generate_value(tsc)(input);
            else throw new Error("Unknown type.");
        };

    const generate_object =
        (tsc: typeof ts) =>
        (obj: object): ts.ObjectLiteralExpression =>
            tsc.factory.createObjectLiteralExpression(
                Object.entries(obj)
                    .filter((tuple) => tuple[1] !== undefined)
                    .map(([key, value]) =>
                        tsc.factory.createPropertyAssignment(
                            IdentifierFactory.identifier(tsc)(key),
                            generate(tsc)(value),
                        ),
                    ),
                true,
            );

    const generate_array =
        (tsc: typeof ts) =>
        (array: any[]): ts.ArrayLiteralExpression =>
            tsc.factory.createArrayLiteralExpression(
                array.map(generate(tsc)),
                true,
            );

    const generate_value =
        (tsc: typeof ts) =>
        (value: number | boolean | bigint): ts.Identifier =>
            tsc.factory.createIdentifier(value.toString());

    const generate_string =
        (tsc: typeof ts) =>
        (value: string): ts.StringLiteral =>
            tsc.factory.createStringLiteral(value);
}
