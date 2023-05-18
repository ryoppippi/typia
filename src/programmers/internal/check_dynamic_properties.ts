import type ts from "typescript/lib/tsclibrary";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { IExpressionEntry } from "../helpers/IExpressionEntry";
import { check_everything } from "./check_everything";
import { check_object } from "./check_object";
import { metadata_to_pattern } from "./metadata_to_pattern";

/**
 * @internal
 */
export const check_dynamic_properties =
    (tsc: typeof ts) =>
    (props: check_object.IProps) =>
    (importer: FunctionImporter) =>
    (
        input: ts.Expression,
        regular: IExpressionEntry<ts.Expression>[],
        dynamic: IExpressionEntry<ts.Expression>[],
    ): ts.Expression => {
        const length = IdentifierFactory.access(tsc)(
            tsc.factory.createCallExpression(
                tsc.factory.createIdentifier("Object.keys"),
                undefined,
                [input],
            ),
        )("length");
        const left: ts.Expression | null =
            props.equals === true && dynamic.length === 0
                ? props.undefined === true ||
                  regular.every((r) => r.meta.required)
                    ? tsc.factory.createStrictEquality(
                          tsc.factory.createNumericLiteral(
                              regular.filter((r) => r.meta.required).length,
                          ),
                          length,
                      )
                    : tsc.factory.createCallExpression(
                          importer.use("is_between"),
                          [],
                          [
                              length,
                              tsc.factory.createNumericLiteral(
                                  regular.filter((r) => r.meta.required).length,
                              ),
                              tsc.factory.createNumericLiteral(regular.length),
                          ],
                      )
                : null;
        if (
            props.undefined === false &&
            left !== null &&
            regular.every((r) => r.meta.required)
        )
            return left;

        const criteria = props.entries
            ? tsc.factory.createCallExpression(props.entries, undefined, [
                  tsc.factory.createCallExpression(
                      tsc.factory.createIdentifier("Object.keys"),
                      undefined,
                      [input],
                  ),
                  check_dynamic_property(tsc)(props)(input, regular, dynamic),
              ])
            : tsc.factory.createCallExpression(
                  IdentifierFactory.access(tsc)(
                      tsc.factory.createCallExpression(
                          tsc.factory.createIdentifier("Object.keys"),
                          undefined,
                          [input],
                      ),
                  )(props.assert ? "every" : "map"),
                  undefined,
                  [check_dynamic_property(tsc)(props)(input, regular, dynamic)],
              );
        const right: ts.Expression = (props.halt || ((elem) => elem))(
            props.assert ? criteria : check_everything(tsc)(criteria),
        );
        return left
            ? (props.undefined
                  ? tsc.factory.createLogicalOr
                  : tsc.factory.createLogicalAnd)(left, right)
            : right;
    };

const check_dynamic_property =
    (tsc: typeof ts) =>
    (props: check_object.IProps) =>
    (
        input: ts.Expression,
        regular: IExpressionEntry<ts.Expression>[],
        dynamic: IExpressionEntry<ts.Expression>[],
    ) => {
        //----
        // IF CONDITIONS
        //----
        // PREPARE ASSETS
        const key = tsc.factory.createIdentifier("key");
        const value = tsc.factory.createIdentifier("value");

        const statements: ts.Statement[] = [];
        const add = (exp: ts.Expression, output: ts.Expression) =>
            statements.push(
                tsc.factory.createIfStatement(
                    exp,
                    tsc.factory.createReturnStatement(output),
                ),
            );

        // GATHER CONDITIONS
        if (props.equals === true && regular.length)
            add(is_regular_property(tsc)(regular), props.positive);
        statements.push(
            StatementFactory.constant(tsc)(
                "value",
                tsc.factory.createElementAccessExpression(input, key),
            ),
        );
        if (props.undefined === true)
            add(
                tsc.factory.createStrictEquality(
                    tsc.factory.createIdentifier("undefined"),
                    value,
                ),
                props.positive,
            );

        for (const entry of dynamic)
            add(
                tsc.factory.createCallExpression(
                    tsc.factory.createIdentifier(
                        `RegExp(/${metadata_to_pattern(true)(
                            entry.key,
                        )}/).test`,
                    ),
                    undefined,
                    [key],
                ),
                entry.expression,
            );

        //----
        // FUNCTION BODY
        //----
        // CLOSURE BLOCK
        const block: ts.Block = tsc.factory.createBlock(
            [
                ...statements,
                tsc.factory.createReturnStatement(
                    props.equals === true
                        ? props.superfluous(value)
                        : props.positive,
                ),
            ],
            true,
        );

        // RETURNS
        return tsc.factory.createArrowFunction(
            undefined,
            undefined,
            [IdentifierFactory.parameter(tsc)("key")],
            undefined,
            undefined,
            block,
        );
    };

const is_regular_property = (tsc: typeof ts) => (regular: IExpressionEntry[]) =>
    tsc.factory.createCallExpression(
        IdentifierFactory.access(tsc)(
            tsc.factory.createArrayLiteralExpression(
                regular.map((entry) =>
                    tsc.factory.createStringLiteral(
                        entry.key.getSoleLiteral()!,
                    ),
                ),
            ),
        )("some"),
        undefined,
        [
            tsc.factory.createArrowFunction(
                undefined,
                undefined,
                [IdentifierFactory.parameter(tsc)("prop")],
                undefined,
                undefined,
                tsc.factory.createStrictEquality(
                    tsc.factory.createIdentifier("key"),
                    tsc.factory.createIdentifier("prop"),
                ),
            ),
        ],
    );
