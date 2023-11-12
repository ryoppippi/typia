import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_createAssertEncode_ArraySimpleProtobufOptional =
    _test_protobuf_assertEncode(
        "ArraySimpleProtobufOptional",
    )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
        encode: (input) =>
            typia.protobuf.assertEncode<ArraySimpleProtobufOptional>(input),
        decode: typia.protobuf.createDecode<ArraySimpleProtobufOptional>(),
        message: typia.protobuf.message<ArraySimpleProtobufOptional>(),
    });