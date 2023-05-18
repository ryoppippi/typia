import { JSDocTagInfo } from "typescript";
import type ts from "typescript/lib/tsclibrary";

import { IMetadataTag } from "../../metadata/IMetadataTag";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { check_custom } from "./check_custom";
import { check_string_tags } from "./check_string_tags";

/**
 * @internal
 */
export const check_string =
    (tsc: typeof ts) =>
    (importer: FunctionImporter) =>
    (metaTags: IMetadataTag[]) =>
    (jsDocTags: JSDocTagInfo[]) =>
    (input: ts.Expression) => ({
        expression: tsc.factory.createStrictEquality(
            tsc.factory.createStringLiteral("string"),
            tsc.factory.createTypeOfExpression(input),
        ),
        tags: [
            ...check_string_tags(tsc)(importer)(metaTags)(input),
            ...check_custom(tsc)("string")(importer)(jsDocTags)(input),
        ],
    });
