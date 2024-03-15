import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { MetadataArray } from "../../schemas/metadata/MetadataArray";

import { ICheckEntry } from "../helpers/ICheckEntry";
import { ITypiaContext } from "../../transformers/ITypiaContext";

/**
 * @internal
 */
interface IProps {
  array: MetadataArray;
  input: ts.Expression;
}

/**
 * @internal
 */
export const check_array_length =
  (ctx: ITypiaContext) =>
  (p: IProps): ICheckEntry => {
    const conditions: ICheckEntry.ICondition[][] =
      check_string_type_tags(ctx)(p);

    return {
      expected: p.array.getName(),
      expression: null,
      conditions,
    };
  };

/**
 * @internal
 */
const check_string_type_tags =
  (ctx: ITypiaContext) =>
  (p: IProps): ICheckEntry.ICondition[][] =>
    p.array.tags
      .map((row) => row.filter((tag) => !!tag.validate))
      .filter((row) => !!row.length)
      .map((row) =>
        row.map((tag) => ({
          expected: `Array<> & ${tag.name}`,
          expression: (
            tag.predicate ?? ExpressionFactory.transpile(ctx)(tag.validate!)
          )(p.input),
        })),
      );
