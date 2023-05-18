import type ts from "typescript/lib/tsclibrary";

import { Metadata } from "../metadata/Metadata";
import { explore_metadata } from "./internal/metadata/explore_metadata";

import { IProject } from "../transformers/IProject";

import { MetadataCollection } from "./MetadataCollection";

export namespace MetadataFactory {
    export interface IOptions {
        resolve: boolean;
        constant: boolean;
        validate?: (meta: Metadata) => void;
    }

    export const analyze =
        (project: IProject.IModule) =>
        (options: IOptions) =>
        (collection: MetadataCollection) =>
        (type: ts.Type | null): Metadata => {
            // CONSTRUCT SCHEMA WITH OBJECTS
            const metadata: Metadata =
                explore_metadata(project)(options)(collection)(false)(type);

            // FIND RECURSIVE OBJECTS
            for (const object of collection.objects())
                object.recursive = object.properties.some((prop) =>
                    isRecursive(object.name)(prop.value),
                );

            // RETURNS
            return metadata;
        };

    const isRecursive =
        (name: string) =>
        (meta: Metadata): boolean => {
            const similar = (str: string) =>
                name === str ||
                name.indexOf(`<${str},`) !== -1 ||
                name.indexOf(`, ${str}>`) !== -1 ||
                name.indexOf(`, ${str},`) !== -1;
            return (
                meta.objects.some((obj) => similar(obj.name)) ||
                meta.arrays.some((arr) => isRecursive(name)(arr)) ||
                meta.tuples.some((tuple) =>
                    tuple.some((m) => isRecursive(name)(m.rest ?? m)),
                ) ||
                meta.maps.some((map) => isRecursive(name)(map.value))
            );
        };
}
