import { TagBase } from "./TagBase";

export type Maximum<Value extends number | bigint> = TagBase<{
  target: Value extends number ? "number" : "bigint";
  kind: "maximum";
  value: Value;
  validate: `$input <= ${Numeric<Value>}`;
  schema: { maximum: Value };
  exclusive: ["maximum", "exclusiveMaximum"];
  schema: Value extends number
    ? {
        maximum: Value;
      }
    : undefined;
}>;

type Numeric<Value extends number | bigint> = Value extends number
  ? Value
  : `BigInt(${Value})`;
