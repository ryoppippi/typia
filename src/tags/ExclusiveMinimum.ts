import { TagBase } from "./TagBase";

export type ExclusiveMinimum<Value extends number | bigint> = TagBase<{
  target: Value extends number ? "number" : "bigint";
  kind: "exclusiveMinimum";
  value: Value;
  validate: `${Numeric<Value>} < $input`;
  schema: {
    minimum: Value;
    exclusiveMinimum: true;
  };
  exclusive: ["exclusiveMinimum", "minimum"];
}>;

type Numeric<Value extends number | bigint> = Value extends number
  ? Value
  : `BigInt(${Value})`;
