import { $unsnake } from "./$unsnake";

export const $camel = (str: string): string =>
  $unsnake((str: string) => {
    if (str.length === 0) return str;
    else if (str[0] === str[0]!.toUpperCase())
      return str[0]!.toLowerCase() + str.substring(1);
    else return str;
  })(str);
