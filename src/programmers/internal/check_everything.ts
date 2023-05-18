import type ts from "typescript/lib/tsclibrary";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { TypeFactory } from "../../factories/TypeFactory";

/**
 * @internal
 */
export const check_everything = (tsc: typeof ts) => (array: ts.Expression) =>
    tsc.factory.createCallExpression(
        IdentifierFactory.access(tsc)(array)("every"),
        undefined,
        [
            tsc.factory.createArrowFunction(
                undefined,
                undefined,
                [
                    IdentifierFactory.parameter(tsc)(
                        "flag",
                        TypeFactory.keyword(tsc)("boolean"),
                    ),
                ],
                undefined,
                undefined,
                tsc.factory.createIdentifier("flag"),
            ),
        ],
    );
