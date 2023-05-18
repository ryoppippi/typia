import type ts from "typescript/lib/tsclibrary";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { TemplateFactory } from "../../factories/TemplateFactory";

import { stringify_dynamic_properties } from "../internal/stringify_dynamic_properties";
import { stringify_regular_properties } from "../internal/stringify_regular_properties";
import { FunctionImporter } from "./FunctionImporeter";
import { IExpressionEntry } from "./IExpressionEntry";

export namespace StringifyJoiner {
    export const object =
        (tsc: typeof ts) =>
        (importer: FunctionImporter) =>
        (
            _input: ts.Expression,
            entries: IExpressionEntry<ts.Expression>[],
        ): ts.Expression => {
            // CHECK AND SORT ENTRIES
            if (entries.length === 0)
                return tsc.factory.createStringLiteral("{}");

            // PROPERTIES
            const regular: IExpressionEntry<ts.Expression>[] = entries.filter(
                (entry) => entry.key.isSoleLiteral(),
            );
            const dynamic: IExpressionEntry<ts.Expression>[] = entries.filter(
                (entry) => !entry.key.isSoleLiteral(),
            );
            const expressions: ts.Expression[] = [
                ...stringify_regular_properties(tsc)(regular, dynamic),
                ...(dynamic.length
                    ? [
                          stringify_dynamic_properties(tsc)(
                              dynamic,
                              regular.map((r) => r.key.getSoleLiteral()!),
                          ),
                      ]
                    : []),
            ];

            // POP LAST COMMA, IF REQUIRED
            const filtered: ts.Expression[] =
                (regular.length &&
                    regular[regular.length - 1]!.meta.required &&
                    dynamic.length === 0) ||
                (regular.length === 0 && dynamic.length)
                    ? expressions
                    : [
                          tsc.factory.createCallExpression(
                              importer.use("tail"),
                              undefined,
                              [TemplateFactory.generate(tsc)(expressions)],
                          ),
                      ];

            // RETURNS WITH OBJECT BRACKET
            return TemplateFactory.generate(tsc)([
                tsc.factory.createStringLiteral(`{`),
                ...filtered,
                tsc.factory.createStringLiteral(`}`),
            ]);
        };

    export const array =
        (tsc: typeof ts) =>
        (input: ts.Expression, arrow: ts.ArrowFunction): ts.Expression =>
            TemplateFactory.generate(tsc)([
                tsc.factory.createStringLiteral(`[`),
                tsc.factory.createCallExpression(
                    tsc.factory.createPropertyAccessExpression(
                        tsc.factory.createCallExpression(
                            IdentifierFactory.access(tsc)(input)("map"),
                            undefined,
                            [arrow],
                        ),
                        tsc.factory.createIdentifier("join"),
                    ),
                    undefined,
                    [tsc.factory.createStringLiteral(`,`)],
                ),
                tsc.factory.createStringLiteral(`]`),
            ]);

    export const tuple =
        (tsc: typeof ts) =>
        (
            children: ts.Expression[],
            rest: ts.Expression | null,
        ): ts.Expression => {
            if (children.length === 0)
                return tsc.factory.createStringLiteral("[]");
            if (
                rest === null &&
                children.every((child) => tsc.isStringLiteral(child))
            )
                return tsc.factory.createStringLiteral(
                    "[" +
                        children
                            .map((child) => (child as ts.StringLiteral).text)
                            .join(",") +
                        "]",
                );

            const elements: ts.Expression[] = [
                tsc.factory.createStringLiteral(`[`),
            ];
            children.forEach((child, i) => {
                elements.push(child);
                if (i !== children.length - 1)
                    elements.push(tsc.factory.createStringLiteral(`,`));
            });
            if (rest !== null) elements.push(rest);

            elements.push(tsc.factory.createStringLiteral(`]`));
            return TemplateFactory.generate(tsc)(elements);
        };
}
