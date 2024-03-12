import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataObject } from "../../../schemas/metadata/MetadataObject";

import { MetadataFactory } from "../../MetadataFactory";

export const iterate_metadata_sort =
  (ctx: MetadataFactory.IContext) => (meta: Metadata) => {
    const visited: Set<Metadata> = new Set();
    for (const array of ctx.collection.arrays())
      iterate(ctx)(visited)(array.value);
    for (const tuple of ctx.collection.tuples())
      for (const element of tuple.elements) iterate(ctx)(visited)(element);
    for (const object of ctx.collection.objects())
      for (const property of object.properties)
        iterate(ctx)(visited)(property.value);
    iterate(ctx)(visited)(meta);
  };

const iterate =
  (ctx: MetadataFactory.IContext) =>
  (visited: Set<Metadata>) =>
  (meta: Metadata) => {
    if (visited.has(meta)) return;
    visited.add(meta);

    // ITERATE CHILDREN
    for (const map of meta.maps) iterate(ctx)(visited)(map.value);
    for (const set of meta.sets) iterate(ctx)(visited)(set);
    if (meta.escaped !== null) iterate(ctx)(visited)(meta.escaped.returns);
    if (meta.rest !== null) iterate(ctx)(visited)(meta.rest);

    // SORT OBJECTS
    if (meta.objects.length > 1) {
      meta.objects.sort((x, y) =>
        MetadataObject.covers(x, y) ? -1 : MetadataObject.covers(y, x) ? 1 : 0,
      );
      meta.union_index = ctx.collection.getUnionIndex(meta);
    }

    // SORT ARRAYS AND TUPLES
    if (meta.arrays.length > 1)
      meta.arrays.sort((x, y) =>
        Metadata.covers(x.type.value, y.type.value)
          ? -1
          : Metadata.covers(y.type.value, x.type.value)
          ? 1
          : 0,
      );
    if (meta.tuples.length > 1)
      meta.tuples.sort((x, y) => {
        const xt: Metadata = Metadata.initialize();
        const yt: Metadata = Metadata.initialize();
        xt.tuples.push(x);
        yt.tuples.push(y);
        return Metadata.covers(xt, yt) ? -1 : Metadata.covers(yt, xt) ? 1 : 0;
      });

    // SORT CONSTANT VALUES
    for (const constant of meta.constants)
      if (constant.type === "string") constant.values.sort();
      else if (constant.type === "number")
        constant.values.sort((a, b) => (a as number) - (b as number));
      else if (constant.type === "bigint")
        constant.values.sort((a, b) =>
          (a as bigint) < (b as bigint) ? -1 : 1,
        );
      else constant.values.sort((a, _b) => (a === false ? -1 : 1));
  };
