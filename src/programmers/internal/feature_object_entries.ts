import type ts from "typescript/lib/tsclibrary";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { MetadataObject } from "../../metadata/MetadataObject";

import { Escaper } from "../../utils/Escaper";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporeter";

/**
 * @internal
 */
export const feature_object_entries =
    (tsc: typeof ts) =>
    <Output extends ts.ConciseBody>(
        config: Pick<
            FeatureProgrammer.IConfig<Output>,
            "decoder" | "path" | "trace"
        >,
    ) =>
    (importer: FunctionImporter) =>
    (obj: MetadataObject) =>
    (input: ts.Expression) =>
        obj.properties.map((prop) => {
            const sole: string | null = prop.key.getSoleLiteral();
            const propInput =
                sole === null
                    ? tsc.factory.createIdentifier("value")
                    : Escaper.variable(sole)
                    ? tsc.factory.createPropertyAccessExpression(
                          input,
                          tsc.factory.createIdentifier(sole),
                      )
                    : tsc.factory.createElementAccessExpression(
                          input,
                          tsc.factory.createStringLiteral(sole),
                      );

            return {
                input: propInput,
                key: prop.key,
                meta: prop.value,
                expression: config.decoder(
                    propInput,
                    prop.value,
                    {
                        tracable: config.path || config.trace,
                        source: "object",
                        from: "object",
                        postfix:
                            sole !== null
                                ? IdentifierFactory.postfix(sole)
                                : (() => {
                                      importer.use("join");
                                      return `$join(key)`;
                                  })(),
                    },
                    prop.tags,
                    prop.jsDocTags,
                ),
            };
        });
