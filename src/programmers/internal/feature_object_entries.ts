import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { MetadataObject } from "../../schemas/metadata/MetadataObject";

import { Escaper } from "../../utils/Escaper";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { ITypiaContext } from "../../transformers/ITypiaContext";

/**
 * @internal
 */
export const feature_object_entries =
  <Output extends ts.ConciseBody>(
    config: Pick<
      FeatureProgrammer.IConfig<Output>,
      "decoder" | "path" | "trace"
    >,
  ) =>
  (ctx: ITypiaContext) =>
  (p: {
    obj: MetadataObject;
    input: ts.Expression;
    from?: "object" | "top" | "array";
  }) =>
    p.obj.properties.map((prop) => {
      const sole: string | null = prop.key.getSoleLiteral();
      const propInput =
        sole === null
          ? ts.factory.createIdentifier("value")
          : Escaper.variable(sole)
          ? ts.factory.createPropertyAccessExpression(
              p.input,
              ts.factory.createIdentifier(sole),
            )
          : ts.factory.createElementAccessExpression(
              p.input,
              ts.factory.createStringLiteral(sole),
            );

      return {
        key: prop.key,
        value: prop.value,
        expression: config.decoder()({
          input: propInput,
          target: prop.value,
          explore: {
            tracable: config.path || config.trace,
            source: "function",
            from: p.from ?? "object",
            postfix: config.trace
              ? sole !== null
                ? IdentifierFactory.postfix(sole)
                : ctx.importer.internal("$json_stringify_join").text
              : "",
          },
        }),
        input: propInput,
      };
    });
