import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataTupleType } from "../../../schemas/metadata/MetadataTupleType";

import { Writable } from "../../../typings/Writable";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataFactory } from "../../MetadataFactory";
import { explore_metadata } from "./explore_metadata";

/**
 * @internal
 */
export const emplace_metadata_tuple =
  (ctx: MetadataFactory.IContext) =>
  (
    type: ts.TupleType,
    nullable: boolean,
    explore: MetadataFactory.IExplore,
  ): MetadataTupleType => {
    // CHECK EXISTENCE
    const [tuple, newbie, closure] = ctx.collection.emplaceTuple(
      ctx.checker,
      type,
    );
    ArrayUtil.add(tuple.nullables, nullable);
    if (newbie === false) return tuple;

    // CONSTRUCT ELEMENT TYPES
    const flagList: readonly ts.ElementFlags[] =
      type.elementFlags ?? (type.target as ts.TupleType)?.elementFlags ?? [];
    const elements: Metadata[] = ctx.checker
      .getTypeArguments(type as ts.TypeReference)
      .map((elem, i) => {
        const child: Metadata = explore_metadata(ctx)(elem, {
          ...explore,
          nested: tuple,
          aliased: false,
          escaped: false,
        });

        // CHECK OPTIONAL
        const flag: ts.ElementFlags | undefined = flagList[i];
        if (flag === ts.ElementFlags.Optional) Writable(child).optional = true;

        // REST TYPE
        if (flag !== ts.ElementFlags.Rest) return child;
        const wrapper: Metadata = Metadata.initialize();
        Writable(wrapper).rest = child;
        return wrapper;
      });
    closure(elements);

    return tuple;
  };
