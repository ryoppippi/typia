"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkUZ5BS2M3js = require('../chunk-UZ5BS2M3.js');

// src/executable/TypiaPatchWizard.ts
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var TypiaPatchWizard;
(function(TypiaPatchWizard2) {
  TypiaPatchWizard2.main = async () => {
    console.log("----------------------------------------");
    console.log(" Typia Setup Wizard");
    console.log("----------------------------------------");
    console.log([
      `Since TypeScript v5.3 update, "tsc" no more parses JSDoc comments.`,
      ``,
      `Therefore, "typia" revives the JSDoc parsing feature by patching "tsc".`,
      ``,
      `This is a temporary feature of "typia", and it would be removed when "ts-patch" being updated.`
    ].join("\n"));
    await TypiaPatchWizard2.patch();
  };
  TypiaPatchWizard2.patch = async () => {
    const location = _chunkUZ5BS2M3js.__require.resolve("typescript/lib/tsc.js");
    const content = await _fs2.default.promises.readFile(location, "utf8");
    if (content.indexOf(FROM_WITH_COMMENT) !== -1) await _fs2.default.promises.writeFile(location, content.replace(FROM_WITH_COMMENT, TO_WITH_COMMENT), "utf8");
    else if (content.indexOf(FROM_ONLY) !== -1) await _fs2.default.promises.writeFile(location, content.replace(FROM_ONLY, TO_ONLY), "utf8");
  };
})(TypiaPatchWizard || (TypiaPatchWizard = exports.TypiaPatchWizard = {}));
var FROM_WITH_COMMENT = `var defaultJSDocParsingMode = 2 /* ParseForTypeErrors */`;
var TO_WITH_COMMENT = `var defaultJSDocParsingMode = 0 /* ParseAll */`;
var FROM_ONLY = `var defaultJSDocParsingMode = 2`;
var TO_ONLY = `var defaultJSDocParsingMode = 0`;


exports.TypiaPatchWizard = TypiaPatchWizard;
//# sourceMappingURL=TypiaPatchWizard.js.map