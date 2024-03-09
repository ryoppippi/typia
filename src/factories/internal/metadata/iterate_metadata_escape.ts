import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataEscaped } from "../../../schemas/metadata/MetadataEscaped";

import { Writable } from "../../../typings/Writable";

import { MetadataFactory } from "../../MetadataFactory";
import { TypeFactory } from "../../TypeFactory";
import { iterate_metadata } from "./iterate_metadata";

export const iterate_metadata_escape =
  (ctx: MetadataFactory.IContext) =>
  (
    meta: Metadata,
    type: ts.Type,
    explore: MetadataFactory.IExplore,
  ): boolean => {
    if (ctx.options.escape === false || explore.escaped === true) return false;

    const escaped: ts.Type | null = TypeFactory.getReturnType(ctx.checker)(
      type,
      "toJSON",
    );
    if (escaped === null) return false;

    if (meta.escaped === null) {
      Writable(meta).escaped = MetadataEscaped.create({
        original: Metadata.initialize(),
        returns: Metadata.initialize(),
      });
    }
    iterate_metadata(ctx)(meta.escaped!.original, type, {
      ...explore,
      escaped: true,
    });
    iterate_metadata(ctx)(meta.escaped!.returns, escaped, {
      ...explore,
      escaped: true,
    });
    return true;
  };
