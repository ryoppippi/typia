import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataFactory } from "../../MetadataFactory";
import { TypeFactory } from "../../TypeFactory";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_set =
  (ctx: MetadataFactory.IContext) =>
  (
    meta: Metadata,
    type: ts.Type,
    explore: MetadataFactory.IExplore,
  ): boolean => {
    type = ctx.checker.getApparentType(type);

    const name = TypeFactory.getFullName(ctx.checker)(type, type.getSymbol());
    const generic = type.aliasSymbol
      ? type.aliasTypeArguments
      : ctx.checker.getTypeArguments(type as ts.TypeReference);
    if (name.substring(0, 4) !== "Set<" || generic?.length !== 1) return false;

    const key: ts.Type = generic[0]!;
    ArrayUtil.set(
      meta.sets,
      explore_metadata(ctx)(key, {
        ...explore,
        escaped: false,
        aliased: false,
      }),
      (elem) => elem.getName(),
    );
    return true;
  };
