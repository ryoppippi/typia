import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ToJsonNull } from "../../../../structures/ToJsonNull";

export const test_application_swagger_ToJsonNull = _test_application("swagger")(
    "ToJsonNull",
    {
        schemas: [
            {
                type: "null",
            },
        ],
        components: {
            schemas: {},
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
