import { $random_integer } from "./$random_integer";

export const $random_format_duration = (): string => {
  const period: string = durate([
    ["Y", $random_integer(0, 100)],
    ["M", $random_integer(0, 12)],
    ["D", $random_integer(0, 31)],
  ]);
  const time: string = durate([
    ["H", $random_integer(0, 24)],
    ["M", $random_integer(0, 60)],
    ["S", $random_integer(0, 60)],
  ]);
  if (period.length + time.length === 0) return "PT0S";
  return `P${period}${time.length ? "T" : ""}${time}`;
};
const durate = (elements: [string, number][]) =>
  elements
    .filter(([_unit, value]) => value !== 0)
    .map(([unit, value]) => `${value}${unit}`)
    .join("");
