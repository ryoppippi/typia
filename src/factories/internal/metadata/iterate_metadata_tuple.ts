import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataTuple } from "../../../schemas/metadata/MetadataTuple";
import { MetadataTupleType } from "../../../schemas/metadata/MetadataTupleType";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataFactory } from "../../MetadataFactory";
import { emplace_metadata_tuple } from "./emplace_metadata_tuple";

export const iterate_metadata_tuple =
  (ctx: MetadataFactory.IContext) =>
  (
    meta: Metadata,
    type: ts.TupleType,
    explore: MetadataFactory.IExplore,
  ): boolean => {
    if (!ctx.checker.isTupleType(type)) return false;

    const tupleType: MetadataTupleType = emplace_metadata_tuple(ctx)(
      type,
      meta.nullable,
      explore,
    );
    ArrayUtil.add(
      meta.tuples,
      MetadataTuple.create({
        type: tupleType,
        tags: [],
      }),
      (elem) => elem.type.name === tupleType.name,
    );
    return true;
  };
