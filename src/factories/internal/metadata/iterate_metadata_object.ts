import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataObject } from "../../../schemas/metadata/MetadataObject";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataFactory } from "../../MetadataFactory";
import { emplace_metadata_object } from "./emplace_metadata_object";

export const iterate_metadata_object =
  (ctx: MetadataFactory.IContext) =>
  (meta: Metadata, type: ts.Type, ensure: boolean = false): boolean => {
    if (ensure === false) {
      const filter = (flag: ts.TypeFlags) => (type.getFlags() & flag) !== 0;
      if (
        !filter(ts.TypeFlags.Object) &&
        !type.isIntersection() &&
        (type as any).intrinsicName !== "object"
      )
        return false;
    }

    const obj: MetadataObject = emplace_metadata_object(ctx)(
      type,
      meta.nullable,
    );
    ArrayUtil.add(meta.objects, obj, (elem) => elem.name === obj.name);
    return true;
  };
