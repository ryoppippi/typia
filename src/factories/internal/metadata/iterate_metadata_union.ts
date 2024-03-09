import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { MetadataFactory } from "../../MetadataFactory";
import { iterate_metadata } from "./iterate_metadata";

export const iterate_metadata_union =
  (ctx: MetadataFactory.IContext) =>
  (
    meta: Metadata,
    type: ts.Type,
    explore: MetadataFactory.IExplore,
  ): boolean => {
    if (!type.isUnion()) return false;
    type.types.forEach((t) =>
      iterate_metadata(ctx)(meta, t, {
        ...explore,
        aliased: false,
      }),
    );
    return true;
  };
