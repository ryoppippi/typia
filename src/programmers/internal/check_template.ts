import type ts from "typescript/lib/tsclibrary";

import { IJsDocTagInfo } from "../../metadata/IJsDocTagInfo";
import { IMetadataTag } from "../../metadata/IMetadataTag";
import { Metadata } from "../../metadata/Metadata";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { ICheckEntry } from "../helpers/ICheckEntry";
import { check_custom } from "./check_custom";
import { check_string_tags } from "./check_string_tags";
import { template_to_pattern } from "./template_to_pattern";

/**
 * @internal
 */
export const check_template =
    (tsc: typeof ts) =>
    (importer: FunctionImporter) =>
    (metaTags: IMetadataTag[]) =>
    (jsDocTags: IJsDocTagInfo[]) =>
    (templates: Metadata[][]) =>
    (input: ts.Expression): ICheckEntry => {
        // TYPEOF STRING & TAGS
        const conditions: ts.Expression[] = [
            tsc.factory.createStrictEquality(
                tsc.factory.createStringLiteral("string"),
                tsc.factory.createTypeOfExpression(input),
            ),
        ];

        // TEMPLATES
        const internal: ts.Expression[] = templates.map((tpl) =>
            tsc.factory.createCallExpression(
                tsc.factory.createIdentifier(
                    `RegExp(/${template_to_pattern(true)(tpl)}/).test`,
                ),
                undefined,
                [input],
            ),
        );
        conditions.push(
            internal.length === 1
                ? internal[0]!
                : internal.reduce((x, y) => tsc.factory.createLogicalOr(x, y)),
        );

        // COMBINATION
        return {
            expression: conditions.reduce((x, y) =>
                tsc.factory.createLogicalAnd(x, y),
            ),
            tags: [
                ...check_string_tags(tsc)(importer)(metaTags)(input),
                ...check_custom(tsc)("string")(importer)(jsDocTags)(input),
            ],
        };
    };
