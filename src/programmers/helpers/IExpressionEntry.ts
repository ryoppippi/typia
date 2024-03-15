import ts from "typescript";

import { Metadata } from "../../schemas/metadata/Metadata";

/**
 * @internal
 */
export interface IExpressionEntry<
  Expression extends ts.ConciseBody = ts.ConciseBody,
> {
  input: ts.Expression;
  key: Metadata;
  meta: Metadata;
  expression: Expression;
}
