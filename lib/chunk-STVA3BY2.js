"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunk7JAU2LSIjs = require('./chunk-7JAU2LSI.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/transform.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var transform = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (program, options, extras) => {
  const compilerOptions = program.getCompilerOptions();
  const strict = compilerOptions.strictNullChecks !== void 0 ? !!compilerOptions.strictNullChecks : !!compilerOptions.strict;
  if (strict === false) extras.addDiagnostic({
    category: _typescript2.default.DiagnosticCategory.Error,
    code: "(typia)",
    file: void 0,
    start: void 0,
    length: void 0,
    messageText: "strict mode is required."
  });
  return _chunk7JAU2LSIjs.FileTransformer.transform({
    program,
    compilerOptions,
    checker: program.getTypeChecker(),
    printer: _typescript2.default.createPrinter(),
    options: _nullishCoalesce(options, () => ( {})),
    extras
  });
}, "transform");
var transform_default = transform;




exports.transform = transform; exports.transform_default = transform_default;
//# sourceMappingURL=chunk-STVA3BY2.js.map