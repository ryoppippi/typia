import type ts from "typescript/lib/tsclibrary";

import { IMetadataTag } from "../../metadata/IMetadataTag";

/**
 * @internal
 */
export const check_array_length =
    (tsc: typeof ts) => (metaTags: IMetadataTag[]) => (input: ts.Expression) =>
        metaTags
            .map((tag) => ({
                tag,
                expression:
                    tag.kind === "items"
                        ? tsc.factory.createStrictEquality(
                              tsc.factory.createNumericLiteral(tag.value),
                              input,
                          )
                        : tag.kind === "minItems"
                        ? tsc.factory.createLessThanEquals(
                              tsc.factory.createNumericLiteral(tag.value),
                              input,
                          )
                        : tag.kind === "maxItems"
                        ? tsc.factory.createGreaterThanEquals(
                              tsc.factory.createNumericLiteral(tag.value),
                              input,
                          )
                        : null!,
            }))
            .filter((tuple) => tuple.expression !== null)
            .map(({ tag, expression }) => ({
                expected: `Array.length (@${tag.kind} ${tag.value})`,
                expression,
            }));
