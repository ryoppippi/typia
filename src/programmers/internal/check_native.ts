import type ts from "typescript/lib/tsclibrary";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

/**
 * @internal
 */
export const check_native =
    (tsc: typeof ts) => (type: string) => (input: ts.Expression) => {
        const instanceOf = ExpressionFactory.isInstanceOf(tsc)(type)(input);
        return ATOMIC_LIKE.has(type)
            ? tsc.factory.createLogicalOr(
                  tsc.factory.createStrictEquality(
                      tsc.factory.createStringLiteral(type.toLowerCase()),
                      tsc.factory.createTypeOfExpression(input),
                  ),
                  instanceOf,
              )
            : instanceOf;
    };

const ATOMIC_LIKE = new Set(["Boolean", "Number", "String"]);
