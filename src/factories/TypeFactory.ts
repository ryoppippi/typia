import type ts from "typescript/lib/tsclibrary";

import { IProject } from "../transformers/IProject";

import { TsNodeUtil } from "../utils/TsNodeUtil";
import { TsTypeUtil } from "../utils/TsTypeUtil";

export namespace TypeFactory {
    export const resolve =
        (project: IProject.IModule) =>
        (type: ts.Type): ts.Type | null =>
            getReturnType(project)(type)("toJSON");

    export const isFunction =
        (tsc: typeof ts) =>
        (type: ts.Type): boolean =>
            getFunction(tsc)(type) !== null;

    const getFunction = (tsc: typeof ts) => (type: ts.Type) => {
        const node = type.symbol?.declarations?.[0];
        if (node === undefined) return null;

        return tsc.isFunctionLike(node)
            ? node
            : tsc.isPropertyAssignment(node) || tsc.isPropertyDeclaration(node)
            ? tsc.isFunctionLike(node.initializer)
                ? node.initializer
                : null
            : null;
    };

    export const getReturnType =
        ({ tsc, checker }: IProject.IModule) =>
        (type: ts.Type) =>
        (name: string): ts.Type | null => {
            // FIND TO-JSON METHOD
            const symbol: ts.Symbol | undefined = checker.getPropertyOfType(
                type,
                name,
            );
            if (!symbol) return null;
            else if (!symbol.valueDeclaration) return null;

            // GET FUNCTION DECLARATION
            const functor: ts.Type = checker.getTypeOfSymbolAtLocation(
                symbol,
                symbol.valueDeclaration,
            );

            // RETURNS THE RETURN-TYPE
            const signature: ts.Signature | undefined =
                checker.getSignaturesOfType(functor, tsc.SignatureKind.Call)[0];
            return signature
                ? checker.getReturnTypeOfSignature(signature)
                : null;
        };

    export const getFullName =
        (p: IProject.IModule) =>
        (type: ts.Type, symbol?: ts.Symbol): string => {
            // PRIMITIVE
            symbol ??= type.aliasSymbol ?? type.symbol;
            if (symbol === undefined) return p.checker.typeToString(type);

            // UNION OR INTERSECT
            if (
                type.aliasSymbol === undefined &&
                TsTypeUtil.isUnionOrIntersection(p.tsc)(type)
            ) {
                const joiner: string = TsTypeUtil.isIntersection(p.tsc)(type)
                    ? " & "
                    : " | ";
                return type.types
                    .map((child) => getFullName(p)(child))
                    .join(joiner);
            }

            //----
            // SPECIALIZATION
            //----
            const name: string = get_name(p.tsc)(symbol);

            // CHECK GENERIC
            const generic: readonly ts.Type[] = type.aliasSymbol
                ? type.aliasTypeArguments ?? []
                : p.checker.getTypeArguments(type as ts.TypeReference);
            return generic.length
                ? name === "Promise"
                    ? getFullName(p)(generic[0]!)
                    : `${name}<${generic
                          .map((child) => getFullName(p)(child))
                          .join(", ")}>`
                : name;
        };

    const explore_name =
        (tsc: typeof ts) =>
        (decl: ts.Node) =>
        (name: string): string =>
            tsc.isModuleBlock(decl)
                ? explore_name(tsc)(decl.parent.parent)(
                      `${TsNodeUtil.getFullText(tsc)(
                          decl.parent.name,
                      ).trim()}.${name}`,
                  )
                : name;

    const get_name =
        (tsc: typeof ts) =>
        (symbol: ts.Symbol): string => {
            const parent = symbol.declarations?.[0]?.parent;
            return parent
                ? explore_name(tsc)(parent)(symbol.escapedName.toString())
                : "__type";
        };

    export const keyword =
        (tsc: typeof ts) =>
        (
            type:
                | "void"
                | "any"
                | "unknown"
                | "boolean"
                | "number"
                | "bigint"
                | "string",
        ) => {
            return tsc.factory.createKeywordTypeNode(
                type === "void"
                    ? tsc.SyntaxKind.VoidKeyword
                    : type === "any"
                    ? tsc.SyntaxKind.AnyKeyword
                    : type === "unknown"
                    ? tsc.SyntaxKind.UnknownKeyword
                    : type === "boolean"
                    ? tsc.SyntaxKind.BooleanKeyword
                    : type === "number"
                    ? tsc.SyntaxKind.NumberKeyword
                    : type === "bigint"
                    ? tsc.SyntaxKind.BigIntKeyword
                    : tsc.SyntaxKind.StringKeyword,
            );
        };
}
