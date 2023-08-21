import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagDefault } from "../../structures/TagDefault";

export const test_assertEquals_TagDefault = _test_assertEquals(
    "TagDefault",
)<TagDefault>(TagDefault)(typia.createAssertEquals<TagDefault>());