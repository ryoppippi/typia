import { OpenApi, OpenApiV3 } from "@samchon/openapi";

import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { application_plugin } from "./application_plugin";

/**
 * @internal
 */
export const application_string = <Version extends "3.0" | "3.1">(
  atomic: MetadataAtomic,
): Schema<Version>[] =>
  application_plugin(
    {
      type: "string",
    } satisfies Schema<Version>,
    atomic.tags,
  );

/**
 * @internal
 */
type Schema<Version extends "3.0" | "3.1"> = Version extends "3.0"
  ? OpenApiV3.IJsonSchema.IString
  : OpenApi.IJsonSchema.IString;
