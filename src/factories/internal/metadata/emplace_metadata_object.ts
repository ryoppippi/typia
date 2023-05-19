import { JSDocTagInfo } from "typescript";
import type ts from "typescript/lib/tsclibrary";

import { Metadata } from "../../../metadata/Metadata";
import { MetadataObject } from "../../../metadata/MetadataObject";
import { MetadataProperty } from "../../../metadata/MetadataProperty";

import { IProject } from "../../../transformers/IProject";

import { Writable } from "../../../typings/Writable";

import { ArrayUtil } from "../../../utils/ArrayUtil";
import { TsSymbolUtil } from "../../../utils/TsSymbolUtil";
import { TsTypeUtil } from "../../../utils/TsTypeUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { MetadataTagFactory } from "../../MetadataTagFactory";
import { MetadataHelper } from "./MetadataHelper";
import { explore_metadata } from "./explore_metadata";

export const emplace_metadata_object =
    ({ tsc, checker }: IProject.IModule) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (parent: ts.Type, nullable: boolean): MetadataObject => {
        // EMPLACE OBJECT
        const [obj, newbie] = collection.emplace({ tsc, checker }, parent);
        ArrayUtil.add(obj.nullables, nullable, (elem) => elem === nullable);
        if (newbie === false) return obj;

        // PREPARE ASSETS
        const pred: (node: ts.Declaration) => boolean = TsTypeUtil.isClass(tsc)(
            parent,
        )
            ? (node) =>
                  (tsc.isPropertyDeclaration(node) || tsc.isParameter(node)) &&
                  node.modifiers !== undefined &&
                  node.modifiers.every(
                      (mod) =>
                          mod.kind !== tsc.SyntaxKind.PrivateKeyword &&
                          mod.kind !== tsc.SyntaxKind.ProtectedKeyword &&
                          mod.kind !== tsc.SyntaxKind.StaticKeyword &&
                          (tsc.isParameter(node) || isProperty(tsc)(node)),
                  )
            : (node) => isProperty(tsc)(node);

        const insert =
            (key: Metadata) =>
            (value: Metadata) =>
            (identifier: () => string) =>
            (
                symbol: ts.Symbol | undefined,
                filter?: (doc: JSDocTagInfo) => boolean,
            ): MetadataProperty => {
                // COMMENTS AND TAGS
                const description: string | undefined = symbol
                    ? TsSymbolUtil.comments(tsc)(symbol)
                    : undefined;
                const jsDocTags: JSDocTagInfo[] = (
                    (symbol
                        ? TsSymbolUtil.getCommentTags(tsc)(symbol)
                        : undefined) ?? []
                ).filter(filter ?? (() => true));

                // THE PROPERTY
                const property = MetadataProperty.create({
                    key,
                    value,
                    description,
                    jsDocTags,
                    tags: MetadataTagFactory.generate(value)(jsDocTags)(() =>
                        identifier(),
                    ),
                });
                obj.properties.push(property);
                return property;
            };

        //----
        // REGULAR PROPERTIES
        //----
        for (const prop of checker.getAugmentedPropertiesOfType(parent)) {
            // CHECK NODE IS A FORMAL PROPERTY
            const [node, type] = (() => {
                const node = (prop.declarations ?? [])[0] as
                    | ts.PropertyDeclaration
                    | undefined;
                const type: ts.Type | undefined = node
                    ? checker.getTypeOfSymbolAtLocation(prop, node)
                    : "getTypeOfPropertyOfType" in checker
                    ? (checker as any).getTypeOfPropertyOfType(
                          parent,
                          prop.escapedName.toString(),
                      )
                    : undefined;
                return [node, type];
            })();
            if ((node && pred(node) === false) || type === undefined) continue;

            // CHECK INTERNAL TAG
            const tagList = node ? tsc.getJSDocTags(node) : [];
            if (tagList.find((tag) => tag.tagName.escapedText === "internal"))
                continue;

            // GET EXACT TYPE
            const key: Metadata = MetadataHelper.literal_to_metadata(
                prop.escapedName.toString(),
            );
            const value: Metadata = explore_metadata({ tsc, checker })(options)(
                collection,
            )(false)(type);

            // INSERT WITH REQUIRED CONFIGURATION
            if (node?.questionToken) {
                Writable(value).required = false;
                Writable(value).optional = true;
            }
            insert(key)(value)(
                () => `${obj.name}.${prop.escapedName.toString()}`,
            )(prop);
        }

        //----
        // DYNAMIC PROPERTIES
        //----
        for (const index of checker.getIndexInfosOfType(parent)) {
            // GET EXACT TYPE
            const analyzer = (type: ts.Type) =>
                explore_metadata({ tsc, checker })(options)(collection)(false)(
                    type,
                );
            const key: Metadata = analyzer(index.keyType);
            const value: Metadata = analyzer(index.type);

            // INSERT WITH REQUIRED CONFIGURATION
            insert(key)(value)(() => `${obj.name}[${key.getName()}]`)(
                index.declaration?.parent
                    ? checker.getSymbolAtLocation(index.declaration.parent)
                    : undefined,
                (doc) => doc.name !== "default",
            );
        }

        return obj;
    };

const isProperty = (tsc: typeof ts) => (node: ts.Declaration) =>
    tsc.isPropertyDeclaration(node) ||
    tsc.isPropertyAssignment(node) ||
    tsc.isPropertySignature(node) ||
    tsc.isTypeLiteralNode(node);
