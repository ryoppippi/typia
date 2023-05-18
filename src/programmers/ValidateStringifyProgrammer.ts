import type ts from "typescript/lib/tsclibrary";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { IProject } from "../transformers/IProject";

import { StringifyProgrammer } from "./StringifyProgrammer";
import { ValidateProgrammer } from "./ValidateProgrammer";

export namespace ValidateStringifyProgrammer {
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
                        p.tsc.factory.createTypeReferenceNode(
                            name ?? TypeFactory.getFullName(p)(type),
                        ),
                    ),
                ],
                p.tsc.factory.createTypeReferenceNode(
                    "typia.IValidation<string>",
                ),
                undefined,
                p.tsc.factory.createBlock([
                    StatementFactory.constant(p.tsc)(
                        "validate",
                        ValidateProgrammer.write({
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
                    StatementFactory.constant(p.tsc)(
                        "output",
                        p.tsc.factory.createAsExpression(
                            p.tsc.factory.createCallExpression(
                                p.tsc.factory.createIdentifier("validate"),
                                undefined,
                                [p.tsc.factory.createIdentifier("input")],
                            ),
                            TypeFactory.keyword(p.tsc)("any"),
                        ),
                    ),
                    p.tsc.factory.createIfStatement(
                        p.tsc.factory.createIdentifier("output.success"),
                        p.tsc.factory.createExpressionStatement(
                            p.tsc.factory.createBinaryExpression(
                                p.tsc.factory.createIdentifier("output.data"),
                                p.tsc.SyntaxKind.EqualsToken,
                                p.tsc.factory.createCallExpression(
                                    p.tsc.factory.createIdentifier("stringify"),
                                    undefined,
                                    [p.tsc.factory.createIdentifier("input")],
                                ),
                            ),
                        ),
                    ),
                    p.tsc.factory.createReturnStatement(
                        p.tsc.factory.createIdentifier("output"),
                    ),
                ]),
            );
}
