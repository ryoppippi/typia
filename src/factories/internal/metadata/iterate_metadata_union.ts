import type ts from "typescript/lib/tsclibrary";

import { Metadata } from "../../../metadata/Metadata";

import { IProject } from "../../../transformers/IProject";

import { Writable } from "../../../typings/Writable";

import { TsTypeUtil } from "../../../utils/TsTypeUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { TypeFactory } from "../../TypeFactory";
import { iterate_metadata } from "./iterate_metadata";

export const iterate_metadata_union =
    (p: IProject.IModule) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (parentResolved: boolean) =>
    (meta: Metadata) =>
    (type: ts.Type): boolean => {
        if (!TsTypeUtil.isUnion(p.tsc)(type)) return false;
        else if (options.resolve === false || parentResolved === true) {
            type.types.forEach((t) =>
                iterate_metadata(p)(options)(collection)(false)(meta)(t),
            );
            return true;
        }

        const filter = (flag: ts.TypeFlags, t: ts.Type) =>
            (t.flags & flag) !== 0;
        const normals: ts.Type[] = [];
        const toJsons: ts.Type[] = [];

        for (const individual of type.types) {
            if (filter(p.tsc.TypeFlags.Object, individual)) {
                const resolved: ts.Type | null =
                    TypeFactory.resolve(p)(individual);
                if (resolved !== null) toJsons.push(resolved);
                else normals.push(individual);
            } else normals.push(individual);
        }
        if (toJsons.length !== 0) {
            Writable(meta).resolved = (() => {
                const union: Metadata = Metadata.initialize();
                toJsons.forEach((t) =>
                    iterate_metadata(p)(options)(collection)(true)(meta)(t),
                );
                if (union.objects.length > 1)
                    union.union_index = collection.getUnionIndex(union);
                return union;
            })();
        }
        normals.forEach((t) =>
            iterate_metadata(p)(options)(collection)(false)(meta)(t),
        );
        return true;
    };
