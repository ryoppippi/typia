import type ts from "typescript/lib/tsclibrary";

export namespace TsTypeUtil {
    export const isLiteral =
        (tsc: typeof ts) =>
        (type: ts.Type): type is ts.LiteralType =>
            !!(
                type.flags &
                (tsc.TypeFlags.StringLiteral |
                    tsc.TypeFlags.NumberLiteral |
                    tsc.TypeFlags.BigIntLiteral)
            );

    export const isTypeParameter =
        (tsc: typeof ts) =>
        (type: ts.Type): type is ts.TypeParameter =>
            !!(type.flags & tsc.TypeFlags.TypeParameter);

    export const isUnionOrIntersection =
        (tsc: typeof ts) =>
        (type: ts.Type): type is ts.UnionOrIntersectionType =>
            !!(type.flags & tsc.TypeFlags.UnionOrIntersection);

    export const isUnion =
        (tsc: typeof ts) =>
        (type: ts.Type): type is ts.UnionType =>
            !!(type.flags & tsc.TypeFlags.Union);

    export const isIntersection =
        (tsc: typeof ts) =>
        (type: ts.Type): type is ts.IntersectionType =>
            !!(type.flags & tsc.TypeFlags.Intersection);

    export const isClass =
        (tsc: typeof ts) =>
        (type: ts.Type): type is ts.InterfaceType =>
            !!((tsc as any).getObjectFlags(type) & tsc.ObjectFlags.Class);
}
