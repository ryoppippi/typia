import type ts from "typescript/lib/tsclibrary";

import { LiteralsProgrammer } from "../../../programmers/LiteralsProgrammer";

import { TsTypeUtil } from "../../../utils/TsTypeUtil";

import { IProject } from "../../IProject";

export namespace LiteralsTransformer {
    export const transform =
        (p: IProject) =>
        (expression: ts.CallExpression): ts.Expression => {
            // CHECK GENERIC ARGUMENT EXISTENCE
            if (!expression.typeArguments?.[0]) throw new Error(NOT_SPECIFIED);

            // GET TYPE INFO
            const node: ts.TypeNode = expression.typeArguments[0];
            const type: ts.Type = p.checker.getTypeFromTypeNode(node);

            if (TsTypeUtil.isTypeParameter(p.tsc)(type))
                throw new Error(NO_GENERIC_ARGUMENT);

            // DO TRANSFORM
            return LiteralsProgrammer.write(p)(type);
        };
}

const NOT_SPECIFIED =
    "Error on typia.literals(): generic argument is not specified.";
const NO_GENERIC_ARGUMENT =
    "Error on typia.literals(): non-specified generic argument.";
