import {
  $throws
} from "./chunk-RFZBHBM7.mjs";
import {
  is
} from "./chunk-JL3OMPIR.mjs";
import {
  $ProtobufSizer
} from "./chunk-ITV5LOEO.mjs";
import {
  $strlen
} from "./chunk-QTYWQFMH.mjs";
import {
  $ProtobufWriter
} from "./chunk-WX5VYP4B.mjs";
import {
  $ProtobufReader
} from "./chunk-IV3WS3BG.mjs";
import {
  __export,
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/functional/Namespace/protobuf.ts
var protobuf_exports = {};
__export(protobuf_exports, {
  decode: () => decode,
  encode: () => encode
});
var decode = /* @__PURE__ */ __name((method) => ({
  ...is(),
  Reader: $ProtobufReader,
  throws: $throws(`protobuf.${method}`)
}), "decode");
var encode = /* @__PURE__ */ __name((method) => ({
  ...is(),
  Sizer: $ProtobufSizer,
  Writer: $ProtobufWriter,
  strlen: $strlen,
  throws: $throws(method)
}), "encode");

export {
  decode,
  encode,
  protobuf_exports
};
//# sourceMappingURL=chunk-YCB4JQWK.mjs.map