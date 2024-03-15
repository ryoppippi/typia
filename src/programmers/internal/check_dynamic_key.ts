import ts from "typescript";

import { Metadata } from "../../schemas/metadata/Metadata";

import { ICheckEntry } from "../helpers/ICheckEntry";
import { check_bigint } from "./check_bigint";
import { check_number } from "./check_number";
import { check_string } from "./check_string";
import { check_template } from "./check_template";
import { ITypiaContext } from "../../transformers/ITypiaContext";

/**
 * @internal
 */
interface IProps {
  input: ts.Expression;
  metadata: Metadata;
}

/**
 * @internal
 */
export const check_dynamic_key =
  (ctx: ITypiaContext) =>
  (p: IProps): ts.Expression => {
    // IF PURE STRING EXISTS, THEN SKIP VALIDATION
    if (
      (p.metadata.atomics.length !== 0 &&
        p.metadata.atomics.some(
          (a) =>
            a.type === "string" &&
            a.tags.filter((row) => row.every((t) => t.validate !== undefined))
              .length === 0,
        )) ||
      (p.metadata.natives.length !== 0 &&
        p.metadata.natives.some((type) => type === "String"))
    )
      return ts.factory.createTrue();

    const conditions: ts.Expression[] = [];

    // NULLISH COALESCING
    if (p.metadata.nullable === true)
      conditions.push(
        ts.factory.createStrictEquality(
          ts.factory.createStringLiteral("null"),
          p.input,
        ),
      );
    if (p.metadata.isRequired() === false)
      conditions.push(
        ts.factory.createStrictEquality(
          ts.factory.createStringLiteral("undefined"),
          p.input,
        ),
      );

    // ATOMICS
    for (const atom of p.metadata.atomics)
      if (atom.type === "boolean")
        conditions.push(
          ts.factory.createLogicalOr(
            ts.factory.createStrictEquality(
              ts.factory.createStringLiteral("false"),
              p.input,
            ),
            ts.factory.createStrictEquality(
              ts.factory.createStringLiteral("true"),
              p.input,
            ),
          ),
        );
      else if (atom.type === "bigint")
        conditions.push(
          ts.factory.createLogicalAnd(
            ts.factory.createCallExpression(
              ctx.importer.internal("$is_bigint_string"),
              undefined,
              [p.input],
            ),
            atomist(
              check_bigint(ctx)({
                atomic: atom,
                input: ts.factory.createCallExpression(
                  ts.factory.createIdentifier("BigInt"),
                  undefined,
                  [p.input],
                ),
              }),
            ),
          ),
        );
      else if (atom.type === "number")
        conditions.push(
          atomist(
            check_number(true)(ctx)({
              atomic: atom,
              input: ts.factory.createCallExpression(
                ts.factory.createIdentifier("Number"),
                undefined,
                [p.input],
              ),
            }),
          ),
        );
      else
        conditions.push(
          atomist(
            check_string(ctx)({
              atomic: atom,
              input: p.input,
            }),
          ),
        );

    // CONSTANTS
    for (const constant of p.metadata.constants)
      for (const value of constant.values)
        conditions.push(
          ts.factory.createStrictEquality(
            ts.factory.createStringLiteral(String(value)),
            p.input,
          ),
        );

    // TEMPLATES
    if (!!p.metadata.templates.length)
      conditions.push(
        atomist(
          check_template({
            templates: p.metadata.templates,
            input: p.input,
          }),
        ),
      );

    // NATIVES
    for (const native of p.metadata.natives)
      if (native === "Boolean")
        conditions.push(
          ts.factory.createLogicalOr(
            ts.factory.createStrictEquality(
              ts.factory.createStringLiteral("false"),
              p.input,
            ),
            ts.factory.createStrictEquality(
              ts.factory.createStringLiteral("true"),
              p.input,
            ),
          ),
        );
      else if (native === "BigInt")
        conditions.push(
          ts.factory.createCallExpression(
            ctx.importer.internal("$is_bigint_string"),
            undefined,
            [p.input],
          ),
        );
      else if (native === "Number")
        conditions.push(
          ts.factory.createStrictEquality(
            ts.factory.createFalse(),
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("Number.isNaN"),
              undefined,
              [
                ts.factory.createCallExpression(
                  ts.factory.createIdentifier("Number"),
                  undefined,
                  [p.input],
                ),
              ],
            ),
          ),
        );

    return conditions.length === 0
      ? ts.factory.createTrue()
      : conditions.length === 1
      ? conditions[0]!
      : conditions.reduce(ts.factory.createLogicalOr);
  };

/**
 * @internal
 */
const atomist = (entry: ICheckEntry) =>
  [
    ...(entry.expression ? [entry.expression] : []),
    ...(entry.conditions.length === 0
      ? []
      : [
          entry.conditions
            .map((set) =>
              set
                .map((s) => s.expression)
                .reduce((a, b) => ts.factory.createLogicalAnd(a, b)),
            )
            .reduce((a, b) => ts.factory.createLogicalOr(a, b)),
        ]),
  ].reduce((x, y) => ts.factory.createLogicalAnd(x, y));
