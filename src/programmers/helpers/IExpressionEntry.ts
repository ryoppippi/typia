import type ts from "typescript/lib/tsclibrary";

import { Metadata } from "../../metadata/Metadata";

export interface IExpressionEntry<
    Expression extends ts.ConciseBody = ts.ConciseBody,
> {
    input: ts.Expression;
    key: Metadata;
    meta: Metadata;
    expression: Expression;
}
