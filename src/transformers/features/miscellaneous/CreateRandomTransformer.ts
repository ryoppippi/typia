import type ts from "typescript/lib/tsclibrary";

import { RandomProgrammer } from "../../../programmers/RandomProgrammer";

import { TsNodeUtil } from "../../../utils/TsNodeUtil";
import { TsTypeUtil } from "../../../utils/TsTypeUtil";

import { IProject } from "../../IProject";

export namespace CreateRandomTransformer {
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
            return RandomProgrammer.write({
                ...p,
                options: {
                    ...p.options,
                    functional: false,
                    numeric: false,
                },
            })(modulo)(expression.arguments?.[0])(
                type,
                TsNodeUtil.getFullText(p.tsc)(node).trim(),
            );
        };
}

const NOT_SPECIFIED =
    "Error on typia.createRandom(): generic argument is not specified.";
const NO_GENERIC_ARGUMENT =
    "Error on typia.createRandom(): non-specified generic argument.";
