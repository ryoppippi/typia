import type { ILlmSchema } from "@samchon/openapi";
import type { ILlmFunction } from "@samchon/openapi/lib/structures/ILlmFunction";
import ts from "typescript";

import { LiteralFactory } from "../../../factories/LiteralFactory";
import { MetadataCollection } from "../../../factories/MetadataCollection";
import { MetadataFactory } from "../../../factories/MetadataFactory";

import type { Metadata } from "../../../schemas/metadata/Metadata";

import { LlmModelPredicator } from "../../../programmers/llm/LlmModelPredicator";
import { LlmParametersProgrammer } from "../../../programmers/llm/LlmParametersProgrammer";

import type { ValidationPipe } from "../../../typings/ValidationPipe";

import type { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace LlmParametersTransformer {
  export const transform = (
    props: Omit<ITransformProps, "modulo">,
  ): ts.Expression => {
    // GET GENERIC ARGUMENT
    if (!props.expression.typeArguments?.length)
      throw new TransformerError({
        code: "typia.llm.parameters",
        message: "no generic argument.",
      });

    const top: ts.Node = props.expression.typeArguments[0]!;
    if (ts.isTypeNode(top) === false) return props.expression;

    // GET TYPE
    const model: ILlmSchema.Model = LlmModelPredicator.getModel({
      checker: props.context.checker,
      method: "parameters",
      node: props.expression.typeArguments[1],
    });
    const config: Partial<ILlmSchema.IConfig> = LlmModelPredicator.getConfig({
      context: props.context,
      method: "parameters",
      model,
      node: props.expression.typeArguments[2],
    }) as Partial<ILlmSchema.IConfig>;

    const type: ts.Type = props.context.checker.getTypeFromTypeNode(top);
    const collection: MetadataCollection = new MetadataCollection({
      replace: MetadataCollection.replace,
    });
    const result: ValidationPipe<Metadata, MetadataFactory.IError> =
      MetadataFactory.analyze({
        checker: props.context.checker,
        transformer: props.context.transformer,
        options: {
          escape: true,
          constant: true,
          absorb: false,
          validate: LlmParametersProgrammer.validate({
            model,
            config,
          }),
        },
        collection,
        type,
      });
    if (result.success === false)
      throw TransformerError.from({
        code: "typia.llm.parameters",
        errors: result.errors,
      });

    // GENERATE LLM SCHEMA
    const out: ILlmFunction<any>["parameters"] = LlmParametersProgrammer.write({
      model,
      metadata: result.data,
      config,
    });
    return ts.factory.createAsExpression(
      LiteralFactory.write(out),
      props.context.importer.type({
        file: "@samchon/openapi",
        name: ts.factory.createQualifiedName(
          ts.factory.createIdentifier("ILlmSchema"),
          ts.factory.createIdentifier("IParameters"),
        ),
        arguments: [
          ts.factory.createLiteralTypeNode(
            ts.factory.createStringLiteral(model),
          ),
        ],
      }),
    );
  };
}
