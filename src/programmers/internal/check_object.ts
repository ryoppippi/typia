import ts from "typescript";

import { IExpressionEntry } from "../helpers/IExpressionEntry";
import { check_dynamic_properties } from "./check_dynamic_properties";
import { check_everything } from "./check_everything";
import { ITypiaContext } from "../../transformers/ITypiaContext";

/**
 * @internal
 */
export const check_object =
  (config: check_object.IConfig) =>
  (ctx: ITypiaContext) =>
  (p: { input: ts.Expression; entries: IExpressionEntry<ts.Expression>[] }) => {
    // PREPARE ASSETS
    const regular = p.entries.filter((entry) => entry.key.isSoleLiteral());
    const dynamic = p.entries.filter((entry) => !entry.key.isSoleLiteral());
    const flags: ts.Expression[] = regular.map((entry) => entry.expression);

    // REGULAR WITHOUT DYNAMIC PROPERTIES
    if (config.equals === false && dynamic.length === 0)
      return regular.length === 0 ? config.positive : reduce(config)(flags);

    // CHECK DYNAMIC PROPERTIES
    flags.push(
      check_dynamic_properties(config)(ctx)({
        input: p.input,
        regular,
        dynamic,
      }),
    );
    return reduce(config)(flags);
  };

/**
 * @internal
 */
export namespace check_object {
  export interface IConfig {
    equals: boolean;
    assert: boolean;
    undefined: boolean;
    halt?: undefined | ((exp: ts.Expression) => ts.Expression);
    reduce: (a: ts.Expression, b: ts.Expression) => ts.Expression;
    positive: ts.Expression;
    superfluous: (value: ts.Expression) => ts.Expression;
    entries?: undefined | ts.Identifier;
  }
}

/**
 * @internal
 */
const reduce =
  (config: check_object.IConfig) => (expressions: ts.Expression[]) =>
    config.assert
      ? expressions.reduce(config.reduce)
      : check_everything(ts.factory.createArrayLiteralExpression(expressions));
