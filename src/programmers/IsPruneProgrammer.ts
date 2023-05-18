import type ts from "typescript/lib/tsclibrary";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { IProject } from "../transformers/IProject";

import { IsProgrammer } from "./IsProgrammer";
import { PruneProgrammer } from "./PruneProgrammer";

export namespace IsPruneProgrammer {
    /**
     * @deprecated Use `write()` function instead
     */
    export const generate =
        (project: IProject, modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type, name?: string) =>
            write(project)(modulo)(type, name);

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
                p.tsc.factory.createTypePredicateNode(
                    undefined,
                    "input",
                    p.tsc.factory.createTypeReferenceNode(
                        name ?? TypeFactory.getFullName(p)(type),
                    ),
                ),
                undefined,
                p.tsc.factory.createBlock([
                    StatementFactory.constant(p.tsc)(
                        "is",
                        IsProgrammer.write(p)(modulo)(false)(type, name),
                    ),
                    StatementFactory.constant(p.tsc)(
                        "prune",
                        PruneProgrammer.write({
                            ...p,
                            options: {
                                ...p.options,
                                functional: false,
                                numeric: false,
                            },
                        })(modulo)(type, name),
                    ),
                    p.tsc.factory.createIfStatement(
                        p.tsc.factory.createPrefixUnaryExpression(
                            p.tsc.SyntaxKind.ExclamationToken,
                            p.tsc.factory.createCallExpression(
                                p.tsc.factory.createIdentifier("is"),
                                undefined,
                                [p.tsc.factory.createIdentifier("input")],
                            ),
                        ),
                        p.tsc.factory.createReturnStatement(
                            p.tsc.factory.createFalse(),
                        ),
                    ),
                    p.tsc.factory.createExpressionStatement(
                        p.tsc.factory.createCallExpression(
                            p.tsc.factory.createIdentifier("prune"),
                            undefined,
                            [p.tsc.factory.createIdentifier("input")],
                        ),
                    ),
                    p.tsc.factory.createReturnStatement(
                        p.tsc.factory.createTrue(),
                    ),
                ]),
            );
}
