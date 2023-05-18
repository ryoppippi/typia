import type ts from "typescript/lib/tsclibrary";

import { Metadata } from "../../../metadata/Metadata";

import { IProject } from "../../../transformers/IProject";

import { Writable } from "../../../typings/Writable";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { TypeFactory } from "../../TypeFactory";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_resolve =
    (p: IProject.IModule) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (parentResolved: boolean) =>
    (meta: Metadata) =>
    (type: ts.Type): boolean => {
        if (options.resolve === true && parentResolved === false) {
            const resolved: ts.Type | null = TypeFactory.resolve(p)(type);
            if (resolved !== null) {
                Writable(meta).resolved =
                    explore_metadata(p)(options)(collection)(true)(resolved);
                return true;
            }
        }
        return false;
    };
