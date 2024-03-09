import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { MetadataFactory } from "../../MetadataFactory";
import { TypeFactory } from "../../TypeFactory";
import { iterate_metadata_alias } from "./iterate_metadata_alias";
import { iterate_metadata_array } from "./iterate_metadata_array";
import { iterate_metadata_atomic } from "./iterate_metadata_atomic";
import { iterate_metadata_coalesce } from "./iterate_metadata_coalesce";
import { iterate_metadata_constant } from "./iterate_metadata_constant";
import { iterate_metadata_intersection } from "./iterate_metadata_intersection";
import { iterate_metadata_map } from "./iterate_metadata_map";
import { iterate_metadata_native } from "./iterate_metadata_native";
import { iterate_metadata_object } from "./iterate_metadata_object";
import { iterate_metadata_escape } from "./iterate_metadata_escape";
import { iterate_metadata_set } from "./iterate_metadata_set";
import { iterate_metadata_template } from "./iterate_metadata_template";
import { iterate_metadata_tuple } from "./iterate_metadata_tuple";
import { iterate_metadata_union } from "./iterate_metadata_union";

export const iterate_metadata =
  (ctx: MetadataFactory.IContext) =>
  (meta: Metadata, type: ts.Type, explore: MetadataFactory.IExplore): void => {
    if (type.isTypeParameter() === true) {
      ctx.errors.push({
        name: TypeFactory.getFullName(ctx.checker)(type),
        explore: { ...explore },
        messages: ["non-specified generic argument found."],
      });
      return;
    }
    // CHECK SPECIAL CASES
    else if (
      (explore.aliased !== true &&
        iterate_metadata_alias(ctx)(meta, type, explore)) ||
      iterate_metadata_intersection(ctx)(meta, type, explore) ||
      iterate_metadata_union(ctx)(meta, type, explore) ||
      iterate_metadata_escape(ctx)(meta, type, explore)
    )
      return;

    // ITERATE CASES
    iterate_metadata_coalesce(meta, type) ||
      iterate_metadata_constant(ctx)(meta, type) ||
      iterate_metadata_template(ctx)(meta, type, explore) ||
      iterate_metadata_atomic(meta, type) ||
      iterate_metadata_tuple(ctx)(meta, type as ts.TupleType, explore) ||
      iterate_metadata_array(ctx)(meta, type, explore) ||
      iterate_metadata_native(ctx)(meta, type) ||
      iterate_metadata_map(ctx)(meta, type, explore) ||
      iterate_metadata_set(ctx)(meta, type, explore) ||
      iterate_metadata_object(ctx)(meta, type);
  };
