import type ts from "typescript/lib/tsclibrary";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { IProject } from "../transformers/IProject";

import { IsProgrammer } from "./IsProgrammer";
import { StringifyProgrammer } from "./StringifyProgrammer";

export namespace IsStringifyProgrammer {
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
                        p.tsc.factory.createTypeReferenceNode(
                            name ?? TypeFactory.getFullName(p)(type),
                        ),
                    ),
                ],
                p.tsc.factory.createUnionTypeNode([
                    TypeFactory.keyword(p.tsc)("string"),
                    p.tsc.factory.createLiteralTypeNode(
                        p.tsc.factory.createNull(),
                    ),
                ]),
                undefined,
                p.tsc.factory.createBlock([
                    StatementFactory.constant(p.tsc)(
                        "is",
                        IsProgrammer.write({
                            ...p,
                            options: {
                                ...p.options,
                                functional: false,
                                numeric: true,
                            },
                        })(modulo)(false)(type, name),
                    ),
                    StatementFactory.constant(p.tsc)(
                        "stringify",
                        StringifyProgrammer.write({
                            ...p,
                            options: {
                                ...p.options,
                                functional: false,
                                numeric: false,
                            },
                        })(modulo)(type, name),
                    ),
                    p.tsc.factory.createReturnStatement(
                        p.tsc.factory.createConditionalExpression(
                            p.tsc.factory.createCallExpression(
                                p.tsc.factory.createIdentifier("is"),
                                undefined,
                                [p.tsc.factory.createIdentifier("input")],
                            ),
                            undefined,
                            p.tsc.factory.createCallExpression(
                                p.tsc.factory.createIdentifier("stringify"),
                                undefined,
                                [p.tsc.factory.createIdentifier("input")],
                            ),
                            undefined,
                            p.tsc.factory.createNull(),
                        ),
                    ),
                ]),
            );
}
