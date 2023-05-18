import type ts from "typescript/lib/tsclibrary";

import { Metadata } from "../../../metadata/Metadata";

import { Atomic } from "../../../typings/Atomic";

import { ArrayUtil } from "../../../utils/ArrayUtil";

const same = (type: ts.Type | null) => {
    if (type === null) return () => false;
    return (flag: ts.TypeFlags) => (type.flags & flag) !== 0;
};

export const iterate_metadata_atomic =
    (tsc: typeof ts) =>
    (meta: Metadata) =>
    (type: ts.Type): boolean => {
        // PREPARE INTERNAL FUNCTIONS
        const filter = same(type);
        const check = (info: IAtomicInfo) => {
            if (filter(info.atomic) || filter(info.literal)) {
                ArrayUtil.add(meta.atomics, info.name);
                return true;
            }
            return false;
        };

        // CHECK EACH TYPES
        return ATOMICS(tsc).some((info) => check(info));
    };

const ATOMICS = (tsc: typeof ts): IAtomicInfo[] => [
    {
        name: "boolean",
        atomic: tsc.TypeFlags.BooleanLike,
        literal: tsc.TypeFlags.BooleanLiteral,
    },
    {
        name: "number",
        atomic: tsc.TypeFlags.NumberLike,
        literal: tsc.TypeFlags.NumberLiteral,
    },
    {
        name: "bigint",
        atomic: tsc.TypeFlags.BigInt,
        literal: tsc.TypeFlags.BigIntLiteral,
    },
    {
        name: "string",
        atomic: tsc.TypeFlags.StringLike,
        literal: tsc.TypeFlags.StringLiteral,
    },
];

interface IAtomicInfo {
    name: Atomic.Literal;
    atomic: ts.TypeFlags;
    literal: ts.TypeFlags;
}
