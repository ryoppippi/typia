import { TagBase } from "./TagBase";

export type MaxLength<Value extends number> = TagBase<{
  target: "string";
  kind: "maxLength";
  value: Value;
  validate: `$input.length <= ${Value}`;
  schema: { maxLength: Value };
  exclusive: true;
  schema: {
    maxLength: Value;
  };
}>;
