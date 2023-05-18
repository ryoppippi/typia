import type ts from "typescript/lib/tsclibrary";

import { LiteralFactory } from "../../../factories/LiteralFactory";
import { MetadataCollection } from "../../../factories/MetadataCollection";
import { MetadataFactory } from "../../../factories/MetadataFactory";

import { IMetadataApplication } from "../../../metadata/IMetadataApplication";
import { Metadata } from "../../../metadata/Metadata";

import { TsTypeUtil } from "../../../utils/TsTypeUtil";

import { IProject } from "../../IProject";

export namespace MetadataTransformer {
    export const transform =
        (p: IProject) =>
        (expression: ts.CallExpression): ts.Expression => {
            if (!expression.typeArguments?.length)
                throw new Error(NO_GENERIC_ARGUMENT);

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

            // METADATA
            const collection: MetadataCollection = new MetadataCollection();
            const metadatas: Array<Metadata> = typeList.map((type) =>
                MetadataFactory.analyze(p)({
                    resolve: false,
                    constant: true,
                })(collection)(type),
            );

            // CONVERT TO PRIMITIVE TYPE
            const app: IMetadataApplication = {
                metadatas: metadatas.map((metadata) => metadata.toJSON()),
                collection: collection.objects().map((obj) => obj.toJSON()),
            };
            return LiteralFactory.generate(p.tsc)(app);
        };
}

const NO_GENERIC_ARGUMENT = "Error on typia.metadata(): no generic argument.";
const GENERIC_ARGUMENT =
    "Error on typia.metadata(): non-specified generic argument(s).";
