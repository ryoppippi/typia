import type ts from "typescript/lib/tsclibrary";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { IProject } from "../transformers/IProject";

import { IsProgrammer } from "./IsProgrammer";

export namespace IsParseProgrammer {
    export const write =
        (p: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type, name?: string) =>
            p.tsc.factory.createArrowFunction(
                undefined,
                undefined,
                [
                    IdentifierFactory.parameter(p.tsc)(
                        "input",
                        TypeFactory.keyword(p.tsc)("any"),
                    ),
                ],
                p.tsc.factory.createTypeReferenceNode(
                    `typia.Primitive<${
                        name ?? TypeFactory.getFullName(p)(type)
                    }>`,
                ),
                undefined,
                p.tsc.factory.createBlock([
                    StatementFactory.constant(p.tsc)(
                        "is",
                        IsProgrammer.write({
                            ...p,
                            options: {
                                ...p.options,
                                functional: false,
                                numeric: false,
                            },
                        })(modulo)(false)(type, name),
                    ),
                    p.tsc.factory.createExpressionStatement(
                        p.tsc.factory.createBinaryExpression(
                            p.tsc.factory.createIdentifier("input"),
                            p.tsc.SyntaxKind.EqualsToken,
                            p.tsc.factory.createCallExpression(
                                p.tsc.factory.createIdentifier("JSON.parse"),
                                undefined,
                                [p.tsc.factory.createIdentifier("input")],
                            ),
                        ),
                    ),
                    p.tsc.factory.createReturnStatement(
                        p.tsc.factory.createConditionalExpression(
                            p.tsc.factory.createCallExpression(
                                p.tsc.factory.createIdentifier("is"),
                                undefined,
                                [p.tsc.factory.createIdentifier("input")],
                            ),
                            undefined,
                            p.tsc.factory.createAsExpression(
                                p.tsc.factory.createIdentifier("input"),
                                TypeFactory.keyword(p.tsc)("any"),
                            ),
                            undefined,
                            p.tsc.factory.createNull(),
                        ),
                    ),
                ]),
            );
}
