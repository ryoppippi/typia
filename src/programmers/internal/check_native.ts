import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

/**
 * @internal
 */
export const check_native = (p: { type: string; input: ts.Expression }) => {
  const instanceOf = ExpressionFactory.isInstanceOf(p.type)(p.input);
  return ATOMIC_LIKE.has(p.type)
    ? ts.factory.createLogicalOr(
        ts.factory.createStrictEquality(
          ts.factory.createStringLiteral(p.type.toLowerCase()),
          ts.factory.createTypeOfExpression(p.input),
        ),
        instanceOf,
      )
    : instanceOf;
};

const ATOMIC_LIKE = new Set(["Boolean", "Number", "String"]);
