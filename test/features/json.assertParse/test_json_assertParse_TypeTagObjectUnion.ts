import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_json_assertParse_TypeTagObjectUnion = _test_json_assertParse(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
    typia.json.assertParse<TypeTagObjectUnion>(input),
);