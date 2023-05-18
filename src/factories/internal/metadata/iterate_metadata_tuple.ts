import type ts from "typescript/lib/tsclibrary";

import { Metadata } from "../../../metadata/Metadata";

import { IProject } from "../../../transformers/IProject";

import { Writable } from "../../../typings/Writable";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_tuple =
    ({ tsc, checker }: IProject.IModule) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (meta: Metadata) =>
    (type: ts.TupleType): boolean => {
        if (!checker.isTupleType(type)) return false;

        const elementFlags: readonly ts.ElementFlags[] =
            type.elementFlags ??
            (type.target as ts.TupleType)?.elementFlags ??
            [];

        const children: Metadata[] = checker
            .getTypeArguments(type as ts.TypeReference)
            .map((elem, i) => {
                const child: Metadata = explore_metadata({ tsc, checker })(
                    options,
                )(collection)(false)(elem);

                // CHECK OPTIONAL
                const flag: ts.ElementFlags | undefined = elementFlags[i];
                if (flag === tsc.ElementFlags.Optional)
                    Writable(child).optional = true;

                // REST TYPE
                if (flag !== tsc.ElementFlags.Rest) return child;
                const wrapper: Metadata = Metadata.initialize();
                Writable(wrapper).rest = child;
                return wrapper;
            });
        ArrayUtil.set(meta.tuples, children, join_tuple_names);
        return true;
    };

const join_tuple_names = (metas: Metadata[]): string =>
    `[${metas.map((m) => m.getName).join(", ")}]`;
