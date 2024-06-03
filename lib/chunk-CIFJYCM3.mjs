// src/executable/setup/CommandExecutor.ts
import cp from "child_process";
var CommandExecutor;
(function(CommandExecutor2) {
  CommandExecutor2.run = (str) => {
    console.log(`
$ ${str}`);
    cp.execSync(str, {
      stdio: "inherit"
    });
  };
})(CommandExecutor || (CommandExecutor = {}));

export {
  CommandExecutor
};
//# sourceMappingURL=chunk-CIFJYCM3.mjs.map