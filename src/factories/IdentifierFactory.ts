import type ts from "typescript/lib/tsclibrary";

import { Escaper } from "../utils/Escaper";

export namespace IdentifierFactory {
    export const identifier = (tsc: typeof ts) => (name: string) =>
        Escaper.variable(name)
            ? tsc.factory.createIdentifier(name)
            : tsc.factory.createStringLiteral(name);

    export const access =
        (tsc: typeof ts) => (target: ts.Expression) => (property: string) => {
            const postfix = identifier(tsc)(property);
            return tsc.isStringLiteral(postfix)
                ? tsc.factory.createElementAccessExpression(target, postfix)
                : tsc.factory.createPropertyAccessExpression(target, postfix);
        };

    export const postfix = (str: string): string =>
        Escaper.variable(str)
            ? `".${str}"`
            : `"[${JSON.stringify(str).split('"').join('\\"')}]"`;

    export const parameter =
        (tsc: typeof ts) =>
        (
            name: string | ts.BindingName,
            type?: ts.TypeNode,
            init?:
                | ts.Expression
                | ts.PunctuationToken<ts.SyntaxKind.QuestionToken>,
        ) => {
            // instead of ts.version >= "4.8"
            if (tsc.getDecorators !== undefined)
                return tsc.factory.createParameterDeclaration(
                    undefined,
                    undefined,
                    name,
                    init?.kind === tsc.SyntaxKind.QuestionToken
                        ? tsc.factory.createToken(tsc.SyntaxKind.QuestionToken)
                        : undefined,
                    type,
                    init && init.kind !== tsc.SyntaxKind.QuestionToken
                        ? init
                        : undefined,
                );
            // eslint-disable-next-line
            return (tsc.factory.createParameterDeclaration as any)(
                undefined,
                undefined,
                undefined,
                name,
                init?.kind === tsc.SyntaxKind.QuestionToken
                    ? tsc.factory.createToken(tsc.SyntaxKind.QuestionToken)
                    : undefined,
                type,
                init && init.kind !== tsc.SyntaxKind.QuestionToken
                    ? init
                    : undefined,
            );
        };
}
