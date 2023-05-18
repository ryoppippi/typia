import type ts from "typescript/lib/tsclibrary";

import { Metadata } from "../../../metadata/Metadata";

import { IProject } from "../../../transformers/IProject";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { TypeFactory } from "../../TypeFactory";

export const iterate_metadata_native =
    (p: IProject.IModule) =>
    (meta: Metadata) =>
    (type: ts.Type): boolean => {
        const validator = validate(p)(type);
        const name: string = TypeFactory.getFullName(p)(type, type.symbol);

        const simple = SIMPLES.get(name);
        if (simple && validator(simple)) {
            ArrayUtil.set(meta.natives, name, (str) => str);
            return true;
        }

        const complicate = COMPLICATES.get(name);
        if (complicate && validator(complicate)) {
            ArrayUtil.set(meta.natives, complicate.name ?? name, (str) => str);
            return true;
        }

        for (const generic of GENERICS)
            if (
                name.substring(0, generic.name.length) === generic.name &&
                validator(generic)
            ) {
                ArrayUtil.set(meta.natives, generic.name ?? name, (str) => str);
                return true;
            }
        return false;
    };

const validate =
    (p: IProject.IModule) => (type: ts.Type) => (info: IClassInfo) =>
        (info.methods ?? []).every((method) => {
            const returnType = TypeFactory.getReturnType(p)(type)(method.name);
            return (
                returnType !== null &&
                p.checker.typeToString(returnType) === method.return
            );
        }) &&
        (info.properties ?? []).every((property) => {
            const prop = p.checker.getPropertyOfType(type, property.name);
            const propType = prop?.valueDeclaration
                ? p.checker.getTypeAtLocation(prop?.valueDeclaration)
                : undefined;
            return (
                propType !== undefined &&
                p.checker.typeToString(propType) === property.type
            );
        });

const getBinaryProps = (className: string): IClassInfo => ({
    name: className,
    methods: [
        ...["indexOf", "lastIndexOf"].map((name) => ({
            name,
            return: "number",
        })),
        ...["some", "every"].map((name) => ({
            name,
            return: "boolean",
        })),
        ...["join", "toLocaleString"].map((name) => ({
            name,
            return: "string",
        })),
        ...["reverse", "slice", "subarray"].map((name) => ({
            name,
            return: className,
        })),
    ],
    properties: ["BYTES_PER_ELEMENT", "length", "byteLength", "byteOffset"].map(
        (name) => ({
            name,
            type: "number",
        }),
    ),
});
const SIMPLES: Map<string, IClassInfo> = new Map([
    [
        "Date",
        {
            methods: ["getTime", "getFullYear", "getMonth", "getMinutes"].map(
                (name) => ({
                    name,
                    return: "number",
                }),
            ),
        },
    ],
    [
        "Boolean",
        {
            methods: [
                {
                    name: "valueOf",
                    return: "boolean",
                },
            ],
        },
    ],
    [
        "Number",
        {
            methods: [
                ...["toFixed", "toExponential", "toPrecision"].map((name) => ({
                    name,
                    return: "string",
                })),
                {
                    name: "valueOf",
                    return: "number",
                },
            ],
        },
    ],
    [
        "String",
        {
            methods: [
                "charAt",
                "concat",
                "valueOf",
                "trim",
                "replace",
                "substring",
            ].map((name) => ({
                name,
                return: "string",
            })),
        },
    ],
    ...[
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "BigUint64Array",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "BigInt64Array",
        "Float32Array",
        "Float64Array",
    ].map((name) => [name, getBinaryProps(name)] as const),
    ...["ArrayBuffer", "SharedArrayBuffer"].map((className) => {
        const info: IClassInfo = {
            methods: [
                {
                    name: "slice",
                    return: className,
                },
            ],
            properties: [
                {
                    name: "byteLength",
                    type: "number",
                },
            ],
        };
        return [className, info] as const;
    }),
    [
        "DataView",
        {
            methods: [
                "getFloat32",
                "getFloat64",
                "getInt8",
                "getInt16",
                "getInt32",
                "getUint8",
                "getUint16",
                "getUint32",
            ].map((name) => ({
                name,
                return: "number",
            })),
        },
    ],
]);
const COMPLICATES: Map<string, IClassInfo> = new Map([
    [`'buffer'.global.Buffer`, getBinaryProps("Buffer")],
]);
const GENERICS: Array<IClassInfo & { name: string }> = [
    "WeakMap",
    "WeakSet",
].map((name) => ({
    name,
    methods: ["has", "delete"].map((name) => ({
        name,
        return: "boolean",
    })),
}));

interface IClassInfo {
    name?: string;
    methods?: IMethod[];
    properties?: IProperty[];
}
interface IProperty {
    name: string;
    type: string;
}
interface IMethod {
    name: string;
    return: string;
}
