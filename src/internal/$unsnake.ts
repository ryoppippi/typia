import { StringUtil } from "../utils/StringUtil";

export const $unsnake =
  (escaper: (str: string) => string) =>
  (str: string): string => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let prefix: string = "";
    for (let i: number = 0; i < str.length; i++) {
      if (str[i] === "_") prefix += "_";
      else break;
    }
    if (prefix.length !== 0) str = str.substring(prefix.length);

    const indexes: [number, number][] = [];
    for (let i: number = 0; i < str.length; i++) {
      const ch: string = str[i]!;
      if (ch !== "_") continue;

      const last = indexes[indexes.length - 1];
      if (last === undefined || last[0] + last[1] !== i) indexes.push([i, 1]);
      else ++last[1];
    }
    if (indexes.length === 0) return prefix + escaper(str);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let ret: string = "";
    for (let i: number = 0; i < indexes.length; i++) {
      const [first] = indexes[i]!;
      if (i === 0)
        if (first === 0) ret += "_";
        else ret += str.substring(0, first);
      else {
        const [prevFirst, prevLength] = indexes[i - 1]!;
        const piece: string = str.substring(prevFirst + prevLength, first);
        if (piece.length) ret += StringUtil.capitalize(piece);
      }
    }
    const last = indexes[indexes.length - 1]!;
    const piece: string = str.substring(last[0] + last[1]);
    if (last.length) ret += StringUtil.capitalize(piece);
    return prefix + escaper(ret);
  };
