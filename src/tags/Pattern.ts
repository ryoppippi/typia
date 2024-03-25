import { TagBase } from "./TagBase";

export type Pattern<Value extends string> = TagBase<{
  target: "string";
  kind: "pattern";
  value: Value;
  validate: `/${Value}/.test($input)`;
  schema: { pattern: Value };
  exclusive: ["format", "pattern"];
  schema: {
    pattern: Value;
  };
}>;
