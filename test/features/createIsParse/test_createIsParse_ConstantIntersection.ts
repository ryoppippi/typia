import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createIsParse_ConstantIntersection = _test_isParse(
    "ConstantIntersection",
    ConstantIntersection.generate,
    typia.createIsParse<ConstantIntersection>(),
    ConstantIntersection.SPOILERS,
);