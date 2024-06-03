import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/executable/setup/ArgumentParser.ts
import commander from "commander";
import inquirer from "inquirer";
var ArgumentParser;
(function(ArgumentParser2) {
  ArgumentParser2.parse = (pack) => async (inquiry) => {
    const action = /* @__PURE__ */ __name((closure) => new Promise((resolve, reject) => {
      commander.program.action(async (options) => {
        try {
          resolve(await closure(options));
        } catch (exp) {
          reject(exp);
        }
      });
      commander.program.parseAsync().catch(reject);
    }), "action");
    return inquiry(pack, commander.program, inquirer.createPromptModule, action);
  };
})(ArgumentParser || (ArgumentParser = {}));

export {
  ArgumentParser
};
//# sourceMappingURL=chunk-2UAKUTCQ.mjs.map