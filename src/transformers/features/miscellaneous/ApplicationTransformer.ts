import type ts from "typescript/lib/tsclibrary";

import { LiteralFactory } from "../../../factories/LiteralFactory";
import { MetadataCollection } from "../../../factories/MetadataCollection";
import { MetadataFactory } from "../../../factories/MetadataFactory";

import { Metadata } from "../../../metadata/Metadata";
import { IJsonApplication } from "../../../schemas/IJsonApplication";

import { ApplicationProgrammer } from "../../../programmers/ApplicationProgrammer";

import { TsTypeUtil } from "../../../utils/TsTypeUtil";

import { IProject } from "../../IProject";

export namespace ApplicationTransformer {
    export const transform =
        (p: IProject) =>
        (expression: ts.CallExpression): ts.Expression => {
            if (!expression.typeArguments?.length)
                throw new Error(NO_GENERIC_ARGUMENT);

            //----
            // GET ARGUMENTS
            //----
            // VALIDATE TUPLE ARGUMENTS
            const top: ts.Node = expression.typeArguments[0]!;
            if (!p.tsc.isTupleTypeNode(top)) return expression;
            else if (top.elements.some((child) => !p.tsc.isTypeNode(child)))
                return expression;

            // GET TYPES
            const typeList: ts.Type[] = top.elements.map((child) =>
                p.checker.getTypeFromTypeNode(child as ts.TypeNode),
            );
            if (
                typeList.some((type) => TsTypeUtil.isTypeParameter(p.tsc)(type))
            )
                throw new Error(GENERIC_ARGUMENT);

            // ADDITIONAL PARAMETERS
            const purpose: "swagger" | "ajv" = get_parameter(
                p,
                "Purpose",
                expression.typeArguments[1],
                (str) => str === "swagger" || str === "ajv",
                () => "swagger",
            );

            //----
            // GENERATORS
            //----
            // METADATA
            const collection: MetadataCollection = new MetadataCollection({
                replace: MetadataCollection.replace,
            });
            const metadatas: Array<Metadata> = typeList.map((type) =>
                MetadataFactory.analyze(p)({
                    resolve: true,
                    constant: true,
                    validate: (meta) => {
                        if (meta.atomics.find((str) => str === "bigint"))
                            throw new Error(NO_BIGIT);
                    },
                })(collection)(type),
            );

            // APPLICATION
            const app: IJsonApplication = ApplicationProgrammer.write({
                purpose,
            })(metadatas);

            // RETURNS WITH LITERAL EXPRESSION
            return LiteralFactory.generate(p.tsc)(app);
        };

    const get_parameter = <T extends string>(
        p: IProject.IModule,
        name: string,
        node: ts.TypeNode | undefined,
        predicator: (value: string) => boolean,
        defaulter: () => T,
    ): T => {
        if (!node) return defaulter();

        // CHECK LITERAL TYPE
        const type: ts.Type = p.checker.getTypeFromTypeNode(node);
        if (!TsTypeUtil.isLiteral(p.tsc)(type))
            throw new Error(
                `Error on typia.application(): generic argument "${name}" must be constant.`,
            );

        // GET VALUE AND VALIDATE IT
        const value = type.value;
        if (typeof value !== "string" || predicator(value) === false)
            throw new Error(
                `Error on typia.application(): invalid value on generic argument "${name}".`,
            );
        return value as T;
    };
}

const NO_GENERIC_ARGUMENT =
    "Error on typia.application(): no generic argument.";
const GENERIC_ARGUMENT =
    "Error on typia.application(): non-specified generic argument(s).";
const NO_BIGIT = "Error on typia.application(): does not allow bigint type.";
