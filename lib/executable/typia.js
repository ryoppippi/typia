#!/usr/bin/env node
"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }

var _chunkUZ5BS2M3js = require('../chunk-UZ5BS2M3.js');

// src/executable/typia.ts
var USAGE = `Wrong command has been detected. Use like below:

  npx typia setup \\
    --manager (npm|pnpm|yarn) \\
    --project {tsconfig.json file path}

    - npx typia setup
    - npx typia setup --manager pnpm
    - npx typia setup --project tsconfig.test.json

  npx typia generate 
    --input {directory} \\
    --output {directory}

    --npx typia generate --input src/templates --output src/functinoal
`;
var halt = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (desc) => {
  console.error(desc);
  process.exit(-1);
}, "halt");
var main = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, async () => {
  try {
    await Promise.resolve().then(() => _interopRequireWildcard(require("comment-json")));
    await Promise.resolve().then(() => _interopRequireWildcard(require("inquirer")));
    await Promise.resolve().then(() => _interopRequireWildcard(require("commander")));
  } catch (e) {
    halt(`typia has not been installed. Run "npm i typia" before.`);
  }
  const type = process.argv[2];
  if (type === "setup") {
    const { TypiaSetupWizard } = await Promise.resolve().then(() => _interopRequireWildcard(require("./TypiaSetupWizard.js")));
    await TypiaSetupWizard.setup();
  } else if (type === "patch") {
    const { TypiaPatchWizard } = await Promise.resolve().then(() => _interopRequireWildcard(require("./TypiaPatchWizard.js")));
    await TypiaPatchWizard.main();
  } else if (type === "generate") {
    try {
      await Promise.resolve().then(() => _interopRequireWildcard(require("typescript")));
    } catch (e2) {
      halt(`typescript has not been installed. Run "npm i -D typescript" before.`);
    }
    const { TypiaGenerateWizard } = await Promise.resolve().then(() => _interopRequireWildcard(require("./TypiaGenerateWizard.js")));
    await TypiaGenerateWizard.generate();
  } else halt(USAGE);
}, "main");
main().catch((exp) => {
  console.error(exp);
  process.exit(-1);
});
//# sourceMappingURL=typia.js.map