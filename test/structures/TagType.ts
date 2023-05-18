import { Spoiler } from "../helpers/Spoiler";

export type TagType = TagType.Type[];
export namespace TagType {
    /**
     * Let's test tag type.
     */
    export interface Type {
        /**
         * Integer type.
         *
         * This is to explain {@link int} value in {@link TagType.Type}.
         *
         * @type int
         * @example https://example.com
         */
        int: number;

        /**
         * Unsigned integer type.
         *
         * @type uint
         */
        uint: number;
    }

    export function generate(): Type[] {
        const output: Type[] = [];
        for (const int of [-1, 0, 1])
            for (const uint of [0, 1, 2]) output.push({ int, uint });
        return output;
    }

    export const SPOILERS: Spoiler<TagType>[] = [
        (input) => {
            input[0].int = 0.1;
            return ["$input[0].int"];
        },
        (input) => {
            input[1].uint = -1;
            return ["$input[1].uint"];
        },
        (input) => {
            input[2].uint = 0.5;
            return ["$input[2].uint"];
        },
        (input) => {
            input[3].uint = -0.5;
            return ["$input[3].uint"];
        },
    ];
}
