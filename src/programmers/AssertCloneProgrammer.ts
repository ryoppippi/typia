import type ts from "typescript/lib/tsclibrary";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { IProject } from "../transformers/IProject";

import { AssertProgrammer } from "./AssertProgrammer";
import { CloneProgrammer } from "./CloneProgrammer";

export namespace AssertCloneProgrammer {
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
                        "assert",
                        AssertProgrammer.write(p)(modulo)(false)(type, name),
                    ),
                    StatementFactory.constant(p.tsc)(
                        "clone",
                        CloneProgrammer.write({
                            ...p,
                            options: {
                                ...p.options,
                                functional: false,
                                numeric: false,
                            },
                        })(modulo)(type, name),
                    ),
                    p.tsc.factory.createExpressionStatement(
                        p.tsc.factory.createCallExpression(
                            p.tsc.factory.createIdentifier("assert"),
                            undefined,
                            [p.tsc.factory.createIdentifier("input")],
                        ),
                    ),
                    StatementFactory.constant(p.tsc)(
                        "output",
                        p.tsc.factory.createCallExpression(
                            p.tsc.factory.createIdentifier("clone"),
                            undefined,
                            [p.tsc.factory.createIdentifier("input")],
                        ),
                    ),
                    p.tsc.factory.createReturnStatement(
                        p.tsc.factory.createIdentifier("output"),
                    ),
                ]),
            );
}
