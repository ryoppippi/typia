import type ts from "typescript/lib/tsclibrary";

import { MetadataCollection } from "../factories/MetadataCollection";
import { MetadataFactory } from "../factories/MetadataFactory";

import { Metadata } from "../metadata/Metadata";

import { IProject } from "../transformers/IProject";

import { Atomic } from "../typings/Atomic";

import { ArrayUtil } from "../utils/ArrayUtil";

export namespace LiteralsProgrammer {
    /**
     * @deprecated Use `write()` function instead
     */
    export const generate = (project: IProject) => (type: ts.Type) =>
        write(project)(type);

    export const write = (p: IProject) => (type: ts.Type) => {
        const meta: Metadata = MetadataFactory.analyze(p)({
            resolve: true,
            constant: true,
            validate: (meta) => {
                const length: number =
                    meta.constants
                        .map((c) => c.values.length)
                        .reduce((a, b) => a + b, 0) +
                    meta.atomics.filter((type) => type === "boolean").length;
                if (0 === length) throw new Error(ErrorMessages.NO);
                else if (meta.size() !== length)
                    throw new Error(ErrorMessages.ONLY);
            },
        })(new MetadataCollection())(type);
        const values: Set<Atomic.Type> = new Set([
            ...ArrayUtil.flat<Atomic.Type>(meta.constants.map((c) => c.values)),
            ...(meta.atomics.filter((type) => type === "boolean").length
                ? [true, false]
                : []),
        ]);
        return p.tsc.factory.createAsExpression(
            p.tsc.factory.createArrayLiteralExpression(
                [...values].map((v) =>
                    typeof v === "boolean"
                        ? v
                            ? p.tsc.factory.createTrue()
                            : p.tsc.factory.createFalse()
                        : typeof v === "number"
                        ? p.tsc.factory.createNumericLiteral(v)
                        : typeof v === "bigint"
                        ? p.tsc.factory.createBigIntLiteral(v.toString())
                        : p.tsc.factory.createStringLiteral(v),
                ),
                true,
            ),
            p.tsc.factory.createTypeReferenceNode("const"),
        );
    };
}

enum ErrorMessages {
    NO = "Error on typia.literals(): no literal type found.",
    ONLY = "Error on typia.literals(): only literal type allowed.",
}
