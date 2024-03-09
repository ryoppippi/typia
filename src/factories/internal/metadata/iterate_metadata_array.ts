import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataArray } from "../../../schemas/metadata/MetadataArray";
import { MetadataArrayType } from "../../../schemas/metadata/MetadataArrayType";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataFactory } from "../../MetadataFactory";
import { emplace_metadata_array_type } from "./emplace_metadata_array_type";

/**
 * @internal
 */
export const iterate_metadata_array =
  (ctx: MetadataFactory.IContext) =>
  (
    meta: Metadata,
    type: ts.Type,
    explore: MetadataFactory.IExplore,
  ): boolean => {
    if (!ctx.checker.isArrayType(type)) return false;

    const arrayType: MetadataArrayType = emplace_metadata_array_type(ctx)(
      type,
      meta.nullable,
      explore,
    );
    ArrayUtil.add(
      meta.arrays,
      MetadataArray.create({
        type: arrayType,
        tags: [],
      }),
      (elem) => elem.type.name === arrayType.name,
    );
    return true;
  };
