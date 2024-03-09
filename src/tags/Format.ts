import type { TagBase } from "./TagBase";
import type { FormatCheatSheet } from "./internal/FormatCheatSheet";

/**
 * @reference https://github.dev/ajv-validator/ajv-formats/blob/master/src/formats.ts
 */
export type Format<Value extends keyof typeof FormatCheatSheet> = TagBase<{
  target: "string";
  kind: "format";
  value: Value;
  validate: (typeof FormatCheatSheet)[Value];
  exclusive: ["format", "pattern"];
}>;
