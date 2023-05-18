import type ts from "typescript/lib/tsclibrary";

import { IJsDocTagInfo } from "../../metadata/IJsDocTagInfo";
import { IMetadataTag } from "../../metadata/IMetadataTag";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { ICheckEntry } from "../helpers/ICheckEntry";
import { check_custom } from "./check_custom";

/**
 * @internal
 */
export const check_bigint =
    (tsc: typeof ts) =>
    (importer: FunctionImporter) =>
    (metaTags: IMetadataTag[]) =>
    (jsDocTag: IJsDocTagInfo[]) =>
    (input: ts.Expression): ICheckEntry => {
        const entries: [IMetadataTag, ts.Expression][] = [];
        for (const tag of metaTags) {
            if (tag.kind === "multipleOf")
                entries.push([
                    tag,
                    tsc.factory.createStrictEquality(
                        cast(tsc)(0),
                        tsc.factory.createModulo(input, cast(tsc)(tag.value)),
                    ),
                ]);
            else if (tag.kind === "step") {
                const modulo = tsc.factory.createModulo(
                    input,
                    cast(tsc)(tag.value),
                );
                const minimum =
                    (metaTags.find(
                        (tag) =>
                            tag.kind === "minimum" ||
                            tag.kind === "exclusiveMinimum",
                    )?.value as number | undefined) ?? undefined;
                entries.push([
                    tag,
                    tsc.factory.createStrictEquality(
                        cast(tsc)(0),
                        minimum !== undefined
                            ? tsc.factory.createSubtract(
                                  modulo,
                                  cast(tsc)(minimum),
                              )
                            : modulo,
                    ),
                ]);
            } else if (tag.kind === "minimum")
                entries.push([
                    tag,
                    tsc.factory.createLessThanEquals(
                        cast(tsc)(tag.value),
                        input,
                    ),
                ]);
            else if (tag.kind === "maximum")
                entries.push([
                    tag,
                    tsc.factory.createGreaterThanEquals(
                        cast(tsc)(tag.value),
                        input,
                    ),
                ]);
            else if (tag.kind === "exclusiveMinimum")
                entries.push([
                    tag,
                    tsc.factory.createLessThan(cast(tsc)(tag.value), input),
                ]);
            else if (tag.kind === "exclusiveMaximum")
                entries.push([
                    tag,
                    tsc.factory.createGreaterThan(cast(tsc)(tag.value), input),
                ]);
        }
        return {
            expression: tsc.factory.createStrictEquality(
                tsc.factory.createStringLiteral("bigint"),
                tsc.factory.createTypeOfExpression(input),
            ),
            tags: [
                ...entries.map(([tag, expression]) => ({
                    expected: `bigint (@${tag.kind} ${tag.value})`,
                    expression,
                })),
                ...check_custom(tsc)("bigint")(importer)(jsDocTag)(input),
            ],
        };
    };

const cast = (tsc: typeof ts) => (value: number) =>
    tsc.factory.createIdentifier(`${Math.floor(value)}n`);
