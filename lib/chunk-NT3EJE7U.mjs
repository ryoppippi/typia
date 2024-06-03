import {
  GenericTransformer
} from "./chunk-UGUY3FFG.mjs";
import {
  ProtobufEncodeProgrammer
} from "./chunk-X3KQWW4L.mjs";

// src/transformers/features/protobuf/ProtobufEncodeTransformer.ts
var ProtobufEncodeTransformer;
(function(ProtobufEncodeTransformer2) {
  ProtobufEncodeTransformer2.transform = GenericTransformer.scalar("protobuf.encode")((project) => (modulo) => ProtobufEncodeProgrammer.write(project)(modulo));
})(ProtobufEncodeTransformer || (ProtobufEncodeTransformer = {}));

export {
  ProtobufEncodeTransformer
};
//# sourceMappingURL=chunk-NT3EJE7U.mjs.map