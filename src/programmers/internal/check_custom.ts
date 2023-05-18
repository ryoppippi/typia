import type ts from "typescript/lib/tsclibrary";

import { IJsDocTagInfo } from "../../metadata/IJsDocTagInfo";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { ICheckEntry } from "../helpers/ICheckEntry";
import { get_comment_tags } from "./get_comment_tags";

/**
 * @internal
 */
export const check_custom =
    (tsc: typeof ts) =>
    (type: string, alias?: string) =>
    (importer: FunctionImporter) =>
    (jsDocTags: IJsDocTagInfo[]) =>
    (input: ts.Expression): ICheckEntry.ITag[] =>
        get_comment_tags(true)(jsDocTags).map((tag) => ({
            expected: `${alias ?? type} (@${tag.name}${
                tag.value?.length ? ` ${tag.value}` : ""
            })`,
            expression: tsc.factory.createCallExpression(
                importer.use("is_custom"),
                undefined,
                [
                    tsc.factory.createStringLiteral(tag.name),
                    tsc.factory.createStringLiteral(type),
                    tsc.factory.createStringLiteral(tag.value ?? ""),
                    input,
                ],
            ),
        }));
