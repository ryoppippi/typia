import type ts from "typescript/lib/tsclibrary";

import { RandomProgrammer } from "../../../programmers/RandomProgrammer";

import { TsNodeUtil } from "../../../utils/TsNodeUtil";
import { TsTypeUtil } from "../../../utils/TsTypeUtil";

import { IProject } from "../../IProject";

export namespace RandomTransformer {
    export const transform =
        (p: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (expression: ts.CallExpression): ts.Expression => {
            // CHECK GENERIC ARGUMENT EXISTENCE
            if (!expression.typeArguments?.[0]) throw new Error(NOT_SPECIFIED);

            // GET TYPE INFO
            const node: ts.TypeNode = expression.typeArguments[0];
            const type: ts.Type = p.checker.getTypeFromTypeNode(node);

            if (TsTypeUtil.isTypeParameter(p.tsc)(type))
                throw new Error(NO_GENERIC_ARGUMENT);

            // DO TRANSFORM
            return p.tsc.factory.createCallExpression(
                RandomProgrammer.write({
                    ...p,
                    options: {
                        ...p.options,
                        functional: false,
                        numeric: false,
                    },
                })(modulo)()(type, TsNodeUtil.getFullText(p.tsc)(node).trim()),
                undefined,
                expression.arguments.length
                    ? [expression.arguments[0]!]
                    : undefined,
            );
        };
}

const NOT_SPECIFIED =
    "Error on typia.random(): generic argument is not specified.";
const NO_GENERIC_ARGUMENT =
    "Error on typia.random(): non-specified generic argument.";
