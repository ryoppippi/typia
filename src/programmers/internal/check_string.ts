import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { ICheckEntry } from "../helpers/ICheckEntry";
import { ITypiaContext } from "../../transformers/ITypiaContext";

/**
 * @internal
 */
interface IProps {
  atomic: MetadataAtomic;
  input: ts.Expression;
}

/**
 * @internal
 */
export const check_string =
  (ctx: ITypiaContext) =>
  (p: IProps): ICheckEntry => {
    const conditions: ICheckEntry.ICondition[][] =
      check_string_type_tags(ctx)(p);
    return {
      expected: p.atomic.getName(),
      expression: ts.factory.createStrictEquality(
        ts.factory.createStringLiteral("string"),
        ts.factory.createTypeOfExpression(p.input),
      ),
      conditions,
    };
  };

/**
 * @internal
 */
const check_string_type_tags =
  (ctx: ITypiaContext) =>
  (p: IProps): ICheckEntry.ICondition[][] =>
    p.atomic.tags
      .map((row) => row.filter((tag) => !!tag.validate))
      .filter((row) => !!row.length)
      .map((row) =>
        row.map((tag) => ({
          expected: `string & ${tag.name}`,
          expression: (
            tag.predicate ?? ExpressionFactory.transpile(ctx)(tag.validate!)
          )(p.input),
        })),
      );
