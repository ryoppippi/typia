import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";

import { IExpressionEntry } from "../helpers/IExpressionEntry";
import { check_dynamic_key } from "./check_dynamic_key";
import { check_everything } from "./check_everything";
import { check_object } from "./check_object";
import { ITypiaContext } from "../../transformers/ITypiaContext";

/**
 * @internal
 */
interface IProps {
  input: ts.Expression;
  regular: IExpressionEntry<ts.Expression>[];
  dynamic: IExpressionEntry<ts.Expression>[];
}

/**
 * @internal
 */
export const check_dynamic_properties =
  (config: check_object.IConfig) =>
  (ctx: ITypiaContext) =>
  (p: IProps): ts.Expression => {
    const length = IdentifierFactory.access(
      ts.factory.createCallExpression(
        ts.factory.createIdentifier("Object.keys"),
        undefined,
        [p.input],
      ),
    )("length");
    const left: ts.Expression | null =
      config.equals === true && p.dynamic.length === 0
        ? config.undefined === true ||
          p.regular.every((r) => r.meta.isRequired())
          ? ts.factory.createStrictEquality(
              ExpressionFactory.number(
                p.regular.filter((r) => r.meta.isRequired()).length,
              ),
              length,
            )
          : ts.factory.createCallExpression(
              ctx.importer.internal("$is_between"),
              [],
              [
                length,
                ExpressionFactory.number(
                  p.regular.filter((r) => r.meta.isRequired()).length,
                ),
                ExpressionFactory.number(p.regular.length),
              ],
            )
        : null;
    if (
      config.undefined === false &&
      left !== null &&
      p.regular.every((r) => r.meta.isRequired())
    )
      return left;

    const criteria = config.entries
      ? ts.factory.createCallExpression(config.entries, undefined, [
          ts.factory.createCallExpression(
            ts.factory.createIdentifier("Object.keys"),
            undefined,
            [p.input],
          ),
          check_dynamic_property(config)(ctx)(p),
        ])
      : ts.factory.createCallExpression(
          IdentifierFactory.access(
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("Object.keys"),
              undefined,
              [p.input],
            ),
          )(config.assert ? "every" : "map"),
          undefined,
          [check_dynamic_property(config)(ctx)(p)],
        );
    const right: ts.Expression = (config.halt || ((elem) => elem))(
      config.assert ? criteria : check_everything(criteria),
    );
    return left
      ? (config.undefined
          ? ts.factory.createLogicalOr
          : ts.factory.createLogicalAnd)(left, right)
      : right;
  };

/**
 * @internal
 */
const check_dynamic_property =
  (config: check_object.IConfig) => (ctx: ITypiaContext) => (p: IProps) => {
    //----
    // IF CONDITIONS
    //----
    // PREPARE ASSETS
    const key = ts.factory.createIdentifier("key");
    const value = ts.factory.createIdentifier("value");

    const statements: ts.Statement[] = [];
    const add = (exp: ts.Expression, output: ts.Expression) =>
      statements.push(
        ts.factory.createIfStatement(
          exp,
          ts.factory.createReturnStatement(output),
        ),
      );
    const broken = { value: false };

    // GATHER CONDITIONS
    if (p.regular.length) add(is_regular_property(p.regular), config.positive);
    statements.push(
      StatementFactory.constant(
        "value",
        ts.factory.createElementAccessExpression(p.input, key),
      ),
    );
    if (config.undefined === true)
      add(
        ts.factory.createStrictEquality(
          ts.factory.createIdentifier("undefined"),
          value,
        ),
        config.positive,
      );

    for (const entry of p.dynamic) {
      const condition: ts.Expression = check_dynamic_key(ctx)({
        input: key,
        metadata: entry.key,
      });
      if (condition.kind === ts.SyntaxKind.TrueKeyword) {
        statements.push(ts.factory.createReturnStatement(entry.expression));
        broken.value = true;
        break;
      } else add(condition, entry.expression);
    }

    //----
    // FUNCTION BODY
    //----
    // CLOSURE BLOCK
    const block: ts.Block = ts.factory.createBlock(
      [
        ...statements,
        ...(broken.value
          ? []
          : [
              ts.factory.createReturnStatement(
                config.equals === true
                  ? config.superfluous(value)
                  : config.positive,
              ),
            ]),
      ],
      true,
    );

    // RETURNS
    return ts.factory.createArrowFunction(
      undefined,
      undefined,
      [IdentifierFactory.parameter("key")],
      undefined,
      undefined,
      block,
    );
  };

/**
 * @internal
 */
const is_regular_property = (regular: IExpressionEntry[]) =>
  ts.factory.createCallExpression(
    IdentifierFactory.access(
      ts.factory.createArrayLiteralExpression(
        regular.map((entry) =>
          ts.factory.createStringLiteral(entry.key.getSoleLiteral()!),
        ),
      ),
    )("some"),
    undefined,
    [
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("prop")],
        undefined,
        undefined,
        ts.factory.createStrictEquality(
          ts.factory.createIdentifier("key"),
          ts.factory.createIdentifier("prop"),
        ),
      ),
    ],
  );
