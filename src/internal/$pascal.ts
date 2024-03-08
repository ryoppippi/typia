import { $unsnake } from "./$unsnake";

export const $pascal = (str: string) =>
  $unsnake((str: string) => {
    if (str.length === 0) return str;
    else if (str[0] === str[0]!.toLowerCase())
      return str[0]!.toUpperCase() + str.substring(1);
    else return str;
  })(str);
