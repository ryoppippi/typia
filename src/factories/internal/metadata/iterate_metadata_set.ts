import type ts from "typescript/lib/tsclibrary";

import { Metadata } from "../../../metadata/Metadata";

import { IProject } from "../../../transformers/IProject";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { TypeFactory } from "../../TypeFactory";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_set =
    (p: IProject.IModule) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (meta: Metadata) =>
    (type: ts.Type): boolean => {
        type = p.checker.getApparentType(type);

        const name = TypeFactory.getFullName(p)(type, type.symbol);
        const generic = type.aliasSymbol
            ? type.aliasTypeArguments
            : p.checker.getTypeArguments(type as ts.TypeReference);
        if (name.substring(0, 4) !== "Set<" || generic?.length !== 1)
            return false;

        const key: ts.Type = generic[0]!;
        ArrayUtil.set(
            meta.sets,
            explore_metadata(p)(options)(collection)(false)(key),
            (elem) => elem.getName(),
        );
        return true;
    };
