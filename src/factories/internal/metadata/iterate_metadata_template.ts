import type ts from "typescript/lib/tsclibrary";

import { Metadata } from "../../../metadata/Metadata";

import { IProject } from "../../../transformers/IProject";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { MetadataHelper } from "./MetadataHelper";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_template =
    ({ tsc, checker }: IProject.IModule) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (meta: Metadata) =>
    (type: ts.Type): boolean => {
        const filter = (flag: ts.TypeFlags) => (type.flags & flag) !== 0;
        if (!filter(tsc.TypeFlags.TemplateLiteral)) return false;

        const template: ts.TemplateLiteralType = type as ts.TemplateLiteralType;
        const row: Metadata[] = [];

        template.texts.forEach((text, i) => {
            // TEXT LITERAL TYPE
            if (text !== "") row.push(MetadataHelper.literal_to_metadata(text));

            // BINDED TEMPLATE TYPE
            const binded: ts.Type | undefined = template.types[i];
            if (binded)
                row.push(
                    explore_metadata({ tsc, checker })(options)(collection)(
                        false,
                    )(binded),
                );
        });
        meta.templates.push(row);

        return true;
    };
