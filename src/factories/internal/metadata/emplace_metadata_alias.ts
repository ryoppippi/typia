import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataAlias } from "../../../schemas/metadata/MetadataAlias";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataFactory } from "../../MetadataFactory";
import { explore_metadata } from "./explore_metadata";

/**
 * @internal
 */
export const emplace_metadata_alias =
  (ctx: MetadataFactory.IContext) =>
  (
    type: ts.Type,
    nullable: boolean,
    explore: MetadataFactory.IExplore,
  ): MetadataAlias => {
    // CHECK EXISTENCE
    const [alias, newbie, closure] = ctx.collection.emplaceAlias(
      ctx.checker,
      type,
      type.aliasSymbol!,
    );
    ArrayUtil.add(alias.nullables, nullable);
    if (newbie === false) return alias;

    // CONSTRUCT VALUE TYPE
    const value: Metadata = explore_metadata(ctx)(type, {
      ...explore,
      escaped: false,
      aliased: true,
    });
    closure(value);
    return alias;
  };
