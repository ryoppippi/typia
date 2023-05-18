import { JSDocTagInfo } from "typescript";
import type ts from "typescript/lib/tsclibrary";

import { IMetadataTag } from "../../metadata/IMetadataTag";
import { Metadata } from "../../metadata/Metadata";

import { IProject } from "../../transformers/IProject";

import { CheckerProgrammer } from "../CheckerProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporeter";

/**
 * @internal
 * @todo Faster union checking logic is required
 */
export const check_union_tuple =
    (project: IProject) =>
    (config: CheckerProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
        _front: ts.Expression,
        elements: Metadata[],
        explore: CheckerProgrammer.IExplore,
        tags: IMetadataTag[],
        jsDocTags: JSDocTagInfo[],
        array: ts.Expression,
    ) =>
        CheckerProgrammer.decode_tuple(project)(config)(importer)(true)(
            array,
            elements,
            explore,
            tags,
            jsDocTags,
        );
