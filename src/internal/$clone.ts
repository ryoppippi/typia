import { Primitive } from "../Primitive";

export const $clone = <T>(value: T): Primitive<T> =>
  value !== undefined ? JSON.parse(JSON.stringify(value)) : undefined;
