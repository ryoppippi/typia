import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataFactory } from "../../MetadataFactory";
import { TypeFactory } from "../../TypeFactory";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_map =
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
    if (name.substring(0, 4) !== "Map<" || generic?.length !== 2) return false;

    const key: ts.Type = generic[0]!;
    const value: ts.Type = generic[1]!;

    ArrayUtil.set(
      meta.maps,
      {
        key: explore_metadata(ctx)(key, {
          ...explore,
          escaped: false,
          aliased: false,
        }),
        value: explore_metadata(ctx)(value, {
          ...explore,
          escaped: false,
          aliased: false,
        }),
      },
      (elem) => `Map<${elem.key.getName()}, ${elem.value.getName()}>`,
    );
    return true;
  };
