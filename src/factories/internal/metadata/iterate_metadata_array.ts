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
    if (ctx.checker.isArrayType(type) === false) {
      const array: ts.Type | null = find_array_extended(ctx.checker)(
        type, new Map()
      );
      if (array !== null)
        return iterate_metadata_array(ctx)(
          meta,
          array,
          explore,
        );
      return false;
    }

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

const find_array_extended =
  (checker: ts.TypeChecker) =>
  (type: ts.Type , memory: Map<ts.Type, ts.Type | null>): ts.Type | null => {
    const cached = memory.get(type);
    if (cached !== undefined) return null;

    memory.set(type, null);
    const res: ts.Type | null = (() => {
      if (type.isClassOrInterface() === false) return null;
      for (const t of type.resolvedBaseTypes ?? [])
        if (checker.isArrayType(t)) return t;
        else {
          const res: ts.Type | null = find_array_extended(checker)(t, memory);
          if (res !== null) return res;
        }
      return null;
    })();
    memory.set(type, res);
    return res;
  };
