import { TagBase } from "./TagBase";

export type MaxItems<Value extends number> = TagBase<{
  target: "array";
  kind: "maxItems";
  value: Value;
  validate: `$input.length <= ${Value}`;
  schema: { maxItems: Value };
  exclusive: true;
  schema: {
    maxItems: Value;
  };
}>;
