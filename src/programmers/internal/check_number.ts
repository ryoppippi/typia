import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { ICheckEntry } from "../helpers/ICheckEntry";
import { OptionPredicator } from "../helpers/OptionPredicator";
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
export const check_number =
  (numeric: boolean) =>
  (ctx: ITypiaContext) =>
  (p: IProps): ICheckEntry => {
    const base = ts.factory.createStrictEquality(
      ts.factory.createStringLiteral("number"),
      ts.factory.createTypeOfExpression(p.input),
    );
    const addition: ts.Expression | null =
      numeric === true
        ? OptionPredicator.finite(ctx.options)
          ? ts.factory.createCallExpression(
              ts.factory.createIdentifier("Number.isFinite"),
              undefined,
              [p.input],
            )
          : OptionPredicator.numeric(ctx.options)
          ? ts.factory.createLogicalNot(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("Number.isNaN"),
                undefined,
                [p.input],
              ),
            )
          : null
        : null;

    const conditions: ICheckEntry.ICondition[][] = check_numeric_type_tags(ctx)(
      p,
      addition,
    );

    return {
      expected: p.atomic.getName(),
      expression:
        addition !== null && conditions.length === 0
          ? ts.factory.createLogicalAnd(base, addition)
          : base,
      conditions,
    };
  };

/**
 * @internal
 */
const check_numeric_type_tags =
  (ctx: ITypiaContext) =>
  (p: IProps, addition: ts.Expression | null): ICheckEntry.ICondition[][] =>
    p.atomic.tags
      .map((row) => row.filter((tag) => !!tag.validate))
      .filter((row) => !!row.length)
      .map((row) => [
        ...(addition === null
          ? []
          : row.some(
              (tag) =>
                tag.kind === "type" &&
                (tag.value === "int32" ||
                  tag.value === "uint32" ||
                  tag.value === "int64" ||
                  tag.value === "uint64" ||
                  tag.value === "float"),
            ) ||
            row.some(
              (tag) =>
                tag.kind === "multipleOf" && typeof tag.value === "number",
            ) ||
            (row.some(
              (tag) =>
                (tag.kind === "minimum" || tag.kind === "exclusiveMinimum") &&
                typeof tag.value === "number",
            ) &&
              row.some(
                (tag) =>
                  (tag.kind === "maximum" || tag.kind === "exclusiveMaximum") &&
                  typeof tag.value === "number",
              ))
          ? []
          : [
              {
                expected: "number",
                expression: addition!,
              },
            ]),
        ...row.map((tag) => ({
          expected: `number & ${tag.name}`,
          expression: (
            tag.predicate ?? ExpressionFactory.transpile(ctx)(tag.validate!)
          )(p.input),
        })),
      ]);
