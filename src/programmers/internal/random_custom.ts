import type ts from "typescript/lib/tsclibrary";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { LiteralFactory } from "../../factories/LiteralFactory";

import { ICommentTag } from "../../metadata/ICommentTag";

import { Customizable } from "../../typings/Customizable";

/**
 * @internal
 */
export const random_custom =
    (tsc: typeof ts) =>
    (accessor: (name: string) => ts.Expression) =>
    (type: keyof Customizable) =>
    (comments: ICommentTag[]) =>
    (expression: ts.Expression) =>
        ExpressionFactory.coalesce(tsc)(
            tsc.factory.createCallChain(
                tsc.factory.createPropertyAccessChain(
                    accessor("customs"),
                    tsc.factory.createToken(tsc.SyntaxKind.QuestionDotToken),
                    tsc.factory.createIdentifier(type),
                ),
                tsc.factory.createToken(tsc.SyntaxKind.QuestionDotToken),
                undefined,
                [LiteralFactory.generate(tsc)(comments)],
            ),
        )(expression);
