import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagTuple } from "../../structures/TagTuple";

export const test_assertPrune_TagTuple = _test_assertPrune(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.assertPrune(input),
    TagTuple.SPOILERS,
);