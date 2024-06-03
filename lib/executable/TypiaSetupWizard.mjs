import {
  PluginConfigurator
} from "../chunk-E6XHV2DR.mjs";
import {
  PackageManager
} from "../chunk-GFJEBGDI.mjs";
import {
  ArgumentParser
} from "../chunk-2UAKUTCQ.mjs";
import {
  CommandExecutor
} from "../chunk-CIFJYCM3.mjs";
import "../chunk-WS5NBOYV.mjs";
import {
  __name
} from "../chunk-TX5EWQFG.mjs";

// src/executable/TypiaSetupWizard.ts
import fs from "fs";
var TypiaSetupWizard;
(function(TypiaSetupWizard2) {
  async function setup() {
    console.log("----------------------------------------");
    console.log(" Typia Setup Wizard");
    console.log("----------------------------------------");
    const pack = await PackageManager.mount();
    const args = await ArgumentParser.parse(pack)(inquiry);
    pack.install({
      dev: true,
      modulo: "ts-patch",
      version: "latest"
    });
    pack.install({
      dev: true,
      modulo: "ts-node",
      version: "latest"
    });
    pack.install({
      dev: true,
      modulo: "typescript",
      version: "5.4.2"
    });
    args.project ??= (() => {
      const runner = pack.manager === "npm" ? "npx" : pack.manager;
      CommandExecutor.run(`${runner} tsc --init`);
      return args.project = "tsconfig.json";
    })();
    await pack.save((data) => {
      data.scripts ??= {};
      if (typeof data.scripts.prepare === "string" && data.scripts.prepare.trim().length) {
        if (data.scripts.prepare.indexOf("ts-patch install") === -1 && data.scripts.prepare.indexOf("typia patch") === -1) data.scripts.prepare = "ts-patch install && typia patch && " + data.scripts.prepare;
        else if (data.scripts.prepare.indexOf("ts-patch install") === -1) data.scripts.prepare = "ts-patch install && " + data.scripts.prepare;
        else if (data.scripts.prepare.indexOf("typia patch") === -1) data.scripts.prepare = data.scripts.prepare.replace("ts-patch install", "ts-patch install && typia patch");
      } else data.scripts.prepare = "ts-patch install && typia patch";
      if (typeof data.scripts.postinstall === "string") {
        data.scripts.postinstall = data.scripts.postinstall.split("&&").map((str) => str.trim()).filter((str) => str.indexOf("ts-patch install") === -1).join(" && ");
        if (data.scripts.postinstall.length === 0) delete data.scripts.postinstall;
      }
    });
    await PluginConfigurator.configure(args);
    CommandExecutor.run(`${pack.manager} run prepare`);
  }
  __name(setup, "setup");
  TypiaSetupWizard2.setup = setup;
  const inquiry = /* @__PURE__ */ __name(async (pack, command, prompt, action) => {
    command.option("--manager [manager", "package manager");
    command.option("--project [project]", "tsconfig.json file location");
    const questioned = {
      value: false
    };
    const select = /* @__PURE__ */ __name((name) => (message) => async (choices, filter) => {
      questioned.value = true;
      return (await prompt()({
        type: "list",
        name,
        message,
        choices,
        ...filter ? {
          filter
        } : {}
      }))[name];
    }, "select");
    const configure = /* @__PURE__ */ __name(async () => {
      const fileList = await (await fs.promises.readdir(process.cwd())).filter((str) => str.substring(0, 8) === "tsconfig" && str.substring(str.length - 5) === ".json").sort((x, y) => x === "tsconfig.json" ? -1 : y === "tsconfig.json" ? 1 : x < y ? -1 : 1);
      if (fileList.length === 0) {
        if (process.cwd() !== pack.directory) throw new URIError(`Unable to find "tsconfig.json" file.`);
        return null;
      } else if (fileList.length === 1) return fileList[0];
      return select("tsconfig")("TS Config File")(fileList);
    }, "configure");
    return action(async (options) => {
      pack.manager = options.manager ??= await select("manager")("Package Manager")([
        "npm",
        "pnpm",
        "yarn (berry is not supported)"
      ], (value) => value.split(" ")[0]);
      options.project ??= await configure();
      if (questioned.value) console.log("");
      return options;
    });
  }, "inquiry");
})(TypiaSetupWizard || (TypiaSetupWizard = {}));
export {
  TypiaSetupWizard
};
//# sourceMappingURL=TypiaSetupWizard.mjs.map