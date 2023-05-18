import type ts from "typescript/lib/tsclibrary";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IMetadataTag } from "../../metadata/IMetadataTag";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { ICheckEntry } from "../helpers/ICheckEntry";

/**
 * @internal
 */
export const check_string_tags =
    (tsc: typeof ts) =>
    (importer: FunctionImporter) =>
    (tagList: IMetadataTag[]) =>
    (input: ts.Expression): ICheckEntry.ITag[] => {
        const conditions: [IMetadataTag, ts.Expression][] = [];
        for (const tag of tagList)
            if (tag.kind === "format")
                conditions.push([
                    tag,
                    tsc.factory.createCallExpression(
                        importer.use(`is_${tag.value}`),
                        undefined,
                        [input],
                    ),
                ]);
            else if (tag.kind === "pattern")
                conditions.push([
                    tag,
                    tsc.factory.createCallExpression(
                        tsc.factory.createIdentifier(
                            `RegExp(/${tag.value}/).test`,
                        ),
                        undefined,
                        [input],
                    ),
                ]);
            else if (tag.kind === "length")
                conditions.push([
                    tag,
                    tsc.factory.createStrictEquality(
                        tsc.factory.createNumericLiteral(tag.value),
                        IdentifierFactory.access(tsc)(input)("length"),
                    ),
                ]);
            else if (tag.kind === "minLength")
                conditions.push([
                    tag,
                    tsc.factory.createLessThanEquals(
                        tsc.factory.createNumericLiteral(tag.value),
                        IdentifierFactory.access(tsc)(input)("length"),
                    ),
                ]);
            else if (tag.kind === "maxLength")
                conditions.push([
                    tag,
                    tsc.factory.createGreaterThanEquals(
                        tsc.factory.createNumericLiteral(tag.value),
                        IdentifierFactory.access(tsc)(input)("length"),
                    ),
                ]);
        return conditions.map(([tag, expression]) => ({
            expected: `string (@${tag.kind} ${tag.value})`,
            expression,
        }));
    };
