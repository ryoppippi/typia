import type ts from "typescript/lib/tsclibrary";

import { Metadata } from "../../../metadata/Metadata";
import { MetadataConstant } from "../../../metadata/MetadataConstant";

import { IProject } from "../../../transformers/IProject";

import { ArrayUtil } from "../../../utils/ArrayUtil";
import { TsTypeUtil } from "../../../utils/TsTypeUtil";

import { MetadataFactory } from "../../MetadataFactory";

export const iterate_metadata_constant =
    ({ tsc, checker }: IProject.IModule) =>
    (options: MetadataFactory.IOptions) =>
    (meta: Metadata) =>
    (type: ts.Type): boolean => {
        if (!options.constant) return false;

        const filter = (flag: ts.TypeFlags) => (type.flags & flag) !== 0;
        if (TsTypeUtil.isLiteral(tsc)(type)) {
            const value: string | number | bigint =
                typeof type.value === "object"
                    ? BigInt(
                          `${type.value.negative ? "-" : ""}${
                              type.value.base10Value
                          }`,
                      )
                    : type.value;
            const constant: MetadataConstant = ArrayUtil.take(
                meta.constants,
                (elem) => elem.type === typeof value,
                () => ({
                    type: typeof value as "number",
                    values: [],
                }),
            );
            ArrayUtil.add(
                constant.values as Array<any>,
                value,
                (a, b) => a === b,
            );
            return true;
        } else if (filter(tsc.TypeFlags.BooleanLiteral)) {
            const value: boolean = checker.typeToString(type) === "true";
            const constant: MetadataConstant = ArrayUtil.take(
                meta.constants,
                (elem) => elem.type === "boolean",
                () => ({
                    type: "boolean",
                    values: [],
                }),
            );
            ArrayUtil.add(
                constant.values as boolean[],
                value,
                (a, b) => a === b,
            );
            return true;
        }
        return false;
    };
