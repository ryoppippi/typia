import {
  __require
} from "../chunk-TX5EWQFG.mjs";

// src/executable/TypiaPatchWizard.ts
import fs from "fs";
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
    const location = __require.resolve("typescript/lib/tsc.js");
    const content = await fs.promises.readFile(location, "utf8");
    if (content.indexOf(FROM_WITH_COMMENT) !== -1) await fs.promises.writeFile(location, content.replace(FROM_WITH_COMMENT, TO_WITH_COMMENT), "utf8");
    else if (content.indexOf(FROM_ONLY) !== -1) await fs.promises.writeFile(location, content.replace(FROM_ONLY, TO_ONLY), "utf8");
  };
})(TypiaPatchWizard || (TypiaPatchWizard = {}));
var FROM_WITH_COMMENT = `var defaultJSDocParsingMode = 2 /* ParseForTypeErrors */`;
var TO_WITH_COMMENT = `var defaultJSDocParsingMode = 0 /* ParseAll */`;
var FROM_ONLY = `var defaultJSDocParsingMode = 2`;
var TO_ONLY = `var defaultJSDocParsingMode = 0`;
export {
  TypiaPatchWizard
};
//# sourceMappingURL=TypiaPatchWizard.mjs.map