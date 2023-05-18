import type ts from "typescript/lib/tsclibrary";

import { Metadata } from "../../../metadata/Metadata";

import { IProject } from "../../../transformers/IProject";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { TypeFactory } from "../../TypeFactory";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_map =
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
        if (name.substring(0, 4) !== "Map<" || generic?.length !== 2)
            return false;

        const key: ts.Type = generic[0]!;
        const value: ts.Type = generic[1]!;

        ArrayUtil.set(
            meta.maps,
            {
                key: explore_metadata(p)(options)(collection)(false)(key),
                value: explore_metadata(p)(options)(collection)(false)(value),
            },
            (elem) => `Map<${elem.key.getName()}, ${elem.value.getName()}>`,
        );
        return true;
    };
