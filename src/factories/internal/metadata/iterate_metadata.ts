import type ts from "typescript/lib/tsclibrary";

import { Metadata } from "../../../metadata/Metadata";

import { IProject } from "../../../transformers/IProject";

import { TsTypeUtil } from "../../../utils/TsTypeUtil";

// import { ArrayUtil } from "../../../utils/ArrayUtil";
import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { iterate_metadata_array } from "./iterate_metadata_array";
import { iterate_metadata_atomic } from "./iterate_metadata_atomic";
import { iterate_metadata_coalesce } from "./iterate_metadata_coalesce";
import { iterate_metadata_constant } from "./iterate_metadata_constant";
import { iterate_metadata_map } from "./iterate_metadata_map";
import { iterate_metadata_native } from "./iterate_metadata_native";
import { iterate_metadata_object } from "./iterate_metadata_object";
import { iterate_metadata_resolve } from "./iterate_metadata_resolve";
import { iterate_metadata_set } from "./iterate_metadata_set";
import { iterate_metadata_template } from "./iterate_metadata_template";
import { iterate_metadata_tuple } from "./iterate_metadata_tuple";
import { iterate_metadata_union } from "./iterate_metadata_union";

export const iterate_metadata =
    (p: IProject.IModule) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (parentResolved: boolean) =>
    (meta: Metadata) =>
    (type: ts.Type): void => {
        if (TsTypeUtil.isTypeParameter(p.tsc)(type) === true)
            throw new Error(
                `Error on typia.MetadataFactory.generate(): non-specified generic argument on ${meta.getName()}.`,
            );

        // CHECK UNION & toJSON()
        if (
            iterate_metadata_union(p)(options)(collection)(parentResolved)(
                meta,
            )(type) ||
            iterate_metadata_resolve(p)(options)(collection)(parentResolved)(
                meta,
            )(type)
        )
            return;

        // ITERATE CASES
        iterate_metadata_coalesce(p.tsc)(meta)(type) ||
            iterate_metadata_constant(p)(options)(meta)(type) ||
            iterate_metadata_template(p)(options)(collection)(meta)(type) ||
            iterate_metadata_atomic(p.tsc)(meta)(type) ||
            iterate_metadata_tuple(p)(options)(collection)(meta)(
                type as ts.TupleType,
            ) ||
            iterate_metadata_array(p)(options)(collection)(meta)(type) ||
            iterate_metadata_native(p)(meta)(type) ||
            iterate_metadata_map(p)(options)(collection)(meta)(type) ||
            iterate_metadata_set(p)(options)(collection)(meta)(type) ||
            iterate_metadata_object(p)(options)(collection)(parentResolved)(
                meta,
            )(type);
    };
