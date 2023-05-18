import type ts from "typescript/lib/tsclibrary";

import { IJsDocTagInfo } from "../../metadata/IJsDocTagInfo";
import { IMetadataTag } from "../../metadata/IMetadataTag";

import { IProject } from "../../transformers/IProject";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { ICheckEntry } from "../helpers/ICheckEntry";
import { OptionPredicator } from "../helpers/OptionPredicator";
import { check_custom } from "./check_custom";

/**
 * @internal
 */
export const check_number =
    (p: IProject, numeric: boolean) =>
    (importer: FunctionImporter) =>
    (metaTags: IMetadataTag[]) =>
    (jsDocTag: IJsDocTagInfo[]) =>
    (input: ts.Expression): ICheckEntry => {
        const entries: [IMetadataTag, ts.Expression][] = [];
        for (const tag of metaTags)
            if (tag.kind === "type") {
                entries.push([
                    tag,
                    p.tsc.factory.createStrictEquality(
                        p.tsc.factory.createCallExpression(
                            p.tsc.factory.createIdentifier("parseInt"),
                            undefined,
                            [input],
                        ),
                        input,
                    ),
                ]);
                if (tag.value === "uint")
                    entries.push([
                        tag,
                        p.tsc.factory.createLessThanEquals(
                            p.tsc.factory.createNumericLiteral(0),
                            input,
                        ),
                    ]);
            } else if (tag.kind === "multipleOf")
                entries.push([
                    tag,
                    p.tsc.factory.createStrictEquality(
                        p.tsc.factory.createNumericLiteral(0),
                        p.tsc.factory.createModulo(
                            input,
                            p.tsc.factory.createNumericLiteral(tag.value),
                        ),
                    ),
                ]);
            else if (tag.kind === "step") {
                const modulo = p.tsc.factory.createModulo(
                    input,
                    p.tsc.factory.createNumericLiteral(tag.value),
                );
                const minimum =
                    (metaTags.find(
                        (tag) =>
                            tag.kind === "minimum" ||
                            tag.kind === "exclusiveMinimum",
                    )?.value as number | undefined) ?? undefined;
                entries.push([
                    tag,
                    p.tsc.factory.createStrictEquality(
                        p.tsc.factory.createNumericLiteral(0),
                        minimum !== undefined
                            ? p.tsc.factory.createSubtract(
                                  modulo,
                                  p.tsc.factory.createNumericLiteral(minimum),
                              )
                            : modulo,
                    ),
                ]);
            } else if (tag.kind === "minimum")
                entries.push([
                    tag,
                    p.tsc.factory.createLessThanEquals(
                        p.tsc.factory.createNumericLiteral(tag.value),
                        input,
                    ),
                ]);
            else if (tag.kind === "maximum")
                entries.push([
                    tag,
                    p.tsc.factory.createGreaterThanEquals(
                        p.tsc.factory.createNumericLiteral(tag.value),
                        input,
                    ),
                ]);
            else if (tag.kind === "exclusiveMinimum")
                entries.push([
                    tag,
                    p.tsc.factory.createLessThan(
                        p.tsc.factory.createNumericLiteral(tag.value),
                        input,
                    ),
                ]);
            else if (tag.kind === "exclusiveMaximum")
                entries.push([
                    tag,
                    p.tsc.factory.createGreaterThan(
                        p.tsc.factory.createNumericLiteral(tag.value),
                        input,
                    ),
                ]);

        return {
            expression: is_number(p, numeric)(metaTags)(input),
            tags: [
                ...entries.map(([tag, expression]) => ({
                    expected: `number (@${tag.kind} ${tag.value})`,
                    expression,
                })),
                ...check_custom(p.tsc)("number")(importer)(jsDocTag)(input),
            ],
        };
    };

/**
 * @internal
 */
const is_number =
    ({ tsc, options }: IProject, numeric: boolean) =>
    (metaTags: IMetadataTag[]) =>
    (input: ts.Expression) => {
        // TYPEOF STATEMENT
        const conditions: ts.Expression[] = [
            tsc.factory.createStrictEquality(
                tsc.factory.createStringLiteral("number"),
                tsc.factory.createTypeOfExpression(input),
            ),
        ];

        // CHECK FINITE AND NAN
        const finite: boolean =
            (!!metaTags.find(
                (tag) =>
                    tag.kind === "minimum" || tag.kind === "exclusiveMinimum",
            ) &&
                !!metaTags.find(
                    (tag) =>
                        tag.kind === "maximum" ||
                        tag.kind === "exclusiveMaximum",
                )) ||
            !!metaTags.find(
                (tag) => tag.kind === "step" || tag.kind === "multipleOf",
            );

        if (numeric === true && finite === false)
            if (OptionPredicator.finite(options))
                conditions.push(
                    tsc.factory.createCallExpression(
                        tsc.factory.createIdentifier("Number.isFinite"),
                        undefined,
                        [input],
                    ),
                );
            else if (OptionPredicator.numeric(options))
                conditions.push(
                    tsc.factory.createLogicalNot(
                        tsc.factory.createCallExpression(
                            tsc.factory.createIdentifier("Number.isNaN"),
                            undefined,
                            [input],
                        ),
                    ),
                );

        // COMBINATE
        return conditions.length === 1
            ? conditions[0]!
            : conditions.reduce((x, y) => tsc.factory.createLogicalAnd(x, y));
    };
