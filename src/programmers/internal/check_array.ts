import type ts from "typescript/lib/tsclibrary";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IJsDocTagInfo } from "../../metadata/IJsDocTagInfo";
import { IMetadataTag } from "../../metadata/IMetadataTag";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { ICheckEntry } from "../helpers/ICheckEntry";
import { check_array_length } from "./check_array_length";
import { check_custom } from "./check_custom";

/**
 * @internal
 */
export const check_array =
    (tsc: typeof ts) =>
    (importer: FunctionImporter) =>
    (metaTags: IMetadataTag[]) =>
    (jsDocTags: IJsDocTagInfo[]) =>
    (input: ts.Expression): ICheckEntry => ({
        expression: ExpressionFactory.isArray(tsc)(input),
        tags: [
            ...check_array_length(tsc)(metaTags)(
                IdentifierFactory.access(tsc)(input)("length"),
            ),
            ...check_custom(tsc)("array", "Array")(importer)(jsDocTags)(input),
            // check custom array for legacy (3.7.0)
        ],
    });
