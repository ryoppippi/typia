import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataArrayType } from "../../../schemas/metadata/MetadataArrayType";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataFactory } from "../../MetadataFactory";
import { explore_metadata } from "./explore_metadata";

/**
 * @internal
 */
export const emplace_metadata_array_type =
  (ctx: MetadataFactory.IContext) =>
  (
    type: ts.Type,
    nullable: boolean,
    explore: MetadataFactory.IExplore,
  ): MetadataArrayType => {
    // CHECK EXISTENCE
    const [array, newbie, setValue] = ctx.collection.emplaceArray(
      ctx.checker,
      type,
    );
    ArrayUtil.add(array.nullables, nullable);
    if (newbie === false) return array;

    // CONSTRUCT VALUE TYPE
    const value: Metadata = explore_metadata(ctx)(type.getNumberIndexType()!, {
      ...explore,
      escaped: false,
      aliased: false,
    });
    setValue(value);
    return array;
  };
