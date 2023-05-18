import type ts from "typescript/lib/tsclibrary";

import { Metadata } from "../../../metadata/Metadata";

import { Writable } from "../../../typings/Writable";

import { TypeFactory } from "../../TypeFactory";

export const iterate_metadata_coalesce =
    (tsc: typeof ts) =>
    (meta: Metadata) =>
    (type: ts.Type): boolean => {
        const filter = (flag: ts.TypeFlags) => (type.flags & flag) !== 0;
        if (filter(tsc.TypeFlags.Unknown) || filter(tsc.TypeFlags.Any)) {
            Writable(meta).any = true;
            return true;
        } else if (filter(tsc.TypeFlags.Null)) {
            Writable(meta).nullable = true;
            return true;
        } else if (
            filter(tsc.TypeFlags.Undefined) ||
            filter(tsc.TypeFlags.Never) ||
            filter(tsc.TypeFlags.Void) ||
            filter(tsc.TypeFlags.VoidLike)
        ) {
            Writable(meta).required = false;
            return true;
        } else if (TypeFactory.isFunction(tsc)(type) === true) {
            Writable(meta).functional = true;
            return true;
        }
        return false;
    };
