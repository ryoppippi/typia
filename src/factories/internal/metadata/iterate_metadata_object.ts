import type ts from "typescript/lib/tsclibrary";

import { Metadata } from "../../../metadata/Metadata";
import { MetadataObject } from "../../../metadata/MetadataObject";

import { IProject } from "../../../transformers/IProject";

import { ArrayUtil } from "../../../utils/ArrayUtil";
import { TsTypeUtil } from "../../../utils/TsTypeUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { emplace_metadata_object } from "./emplace_metadata_object";
import { iterate_metadata } from "./iterate_metadata";

export const iterate_metadata_object =
    ({ tsc, checker }: IProject.IModule) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (parentResolved: boolean) =>
    (meta: Metadata) =>
    (type: ts.Type): boolean => {
        const filter = (flag: ts.TypeFlags) => (type.flags & flag) !== 0;
        if (
            !filter(tsc.TypeFlags.Object) &&
            !TsTypeUtil.isIntersection(tsc)(type) &&
            (type as any).intrinsicName !== "object"
        )
            return false;
        else if (TsTypeUtil.isIntersection(tsc)(type)) {
            const fakeCollection = new MetadataCollection();
            const fakeSchema: Metadata = Metadata.initialize();

            type.types.forEach((t) =>
                iterate_metadata({ tsc, checker })(options)(fakeCollection)(
                    parentResolved,
                )(fakeSchema)(t),
            );
            if (
                fakeSchema.objects.length === 0 ||
                fakeSchema.objects.length !== fakeSchema.size()
            )
                return true;
        }

        const obj: MetadataObject = emplace_metadata_object({ tsc, checker })(
            options,
        )(collection)(type, meta.nullable);
        ArrayUtil.add(meta.objects, obj, (elem) => elem.name === obj.name);
        return true;
    };
