import type ts from "typescript/lib/tsclibrary";

export namespace ExpressionFactory {
    export const isRequired =
        (tsc: typeof ts) =>
        (input: ts.Expression): ts.Expression =>
            tsc.factory.createStrictInequality(
                tsc.factory.createIdentifier("undefined"),
                input,
            );

    export const isArray =
        (tsc: typeof ts) =>
        (input: ts.Expression): ts.Expression =>
            tsc.factory.createCallExpression(
                tsc.factory.createIdentifier("Array.isArray"),
                undefined,
                [input],
            );

    export const isObject =
        (tsc: typeof ts) =>
        (options: { checkNull: boolean; checkArray: boolean }) =>
        (input: ts.Expression): ts.Expression => {
            const conditions: ts.Expression[] = [
                tsc.factory.createStrictEquality(
                    tsc.factory.createStringLiteral("object"),
                    tsc.factory.createTypeOfExpression(input),
                ),
            ];
            if (options.checkNull === true)
                conditions.push(
                    tsc.factory.createStrictInequality(
                        tsc.factory.createNull(),
                        input,
                    ),
                );
            if (options.checkArray === true)
                conditions.push(
                    tsc.factory.createStrictEquality(
                        tsc.factory.createFalse(),
                        tsc.factory.createCallExpression(
                            tsc.factory.createIdentifier("Array.isArray"),
                            undefined,
                            [input],
                        ),
                    ),
                );

            return conditions.length === 1
                ? conditions[0]!
                : conditions.reduce((x, y) =>
                      tsc.factory.createLogicalAnd(x, y),
                  );
        };

    export const isInstanceOf =
        (tsc: typeof ts) =>
        (type: string) =>
        (input: ts.Expression): ts.Expression => {
            return tsc.factory.createBinaryExpression(
                input,
                tsc.factory.createToken(tsc.SyntaxKind.InstanceOfKeyword),
                tsc.factory.createIdentifier(type),
            );
        };

    export const coalesce =
        (tsc: typeof ts) =>
        (x: ts.Expression) =>
        (y: ts.Expression): ts.Expression =>
            tsc.factory.createBinaryExpression(
                x,
                tsc.factory.createToken(tsc.SyntaxKind.QuestionQuestionToken),
                y,
            );
}
