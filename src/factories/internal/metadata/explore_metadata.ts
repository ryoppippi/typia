import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { MetadataFactory } from "../../MetadataFactory";
import { emend_metadata_atomics } from "./emend_metadata_atomics";
import { iterate_metadata } from "./iterate_metadata";

/**
 * @internal
 */
export const explore_metadata =
  (ctx: MetadataFactory.IContext) =>
  (type: ts.Type | null, explore: MetadataFactory.IExplore): Metadata => {
    // CONSTRUCT METADATA
    const meta: Metadata = Metadata.initialize(explore.escaped);
    if (type === null) return meta;

    // ITERATE TYPESCRIPT TYPES
    iterate_metadata(ctx)(meta, type, explore);
    emend_metadata_atomics(meta);
    if (meta.escaped) {
      emend_metadata_atomics(meta.escaped.original);
      emend_metadata_atomics(meta.escaped.returns);
    }
    return meta;
  };
