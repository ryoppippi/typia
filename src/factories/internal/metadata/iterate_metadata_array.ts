import type ts from "typescript/lib/tsclibrary";

import { Metadata } from "../../../metadata/Metadata";

import { IProject } from "../../../transformers/IProject";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_array =
    ({ tsc, checker }: IProject.IModule) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (meta: Metadata) =>
    (type: ts.Type): boolean => {
        if (!checker.isArrayType(type) && !checker.isArrayLikeType(type))
            return false;

        const value: ts.Type | null =
            checker.getIndexTypeOfType(type, tsc.IndexKind.Number) ?? null;
        ArrayUtil.set(
            meta.arrays,
            explore_metadata({ tsc, checker })(options)(collection)(false)(
                value,
            ),
            (elem) => elem.getName(),
        );
        return true;
    };
