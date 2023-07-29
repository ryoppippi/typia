import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TagTuple } from "../../structures/TagTuple";

export const test_createIsParse_TagTuple = _test_isParse(
    "TagTuple",
    TagTuple.generate,
    typia.createIsParse<TagTuple>(),
    TagTuple.SPOILERS,
);