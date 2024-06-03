import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/executable/setup/PluginConfigurator.ts
import comments from "comment-json";
import fs from "fs";
var PluginConfigurator;
(function(PluginConfigurator2) {
  async function configure(args) {
    const config = comments.parse(await fs.promises.readFile(args.project, "utf8"));
    const compilerOptions = config.compilerOptions;
    if (compilerOptions === void 0) throw new ReferenceError(`${args.project} file does not have "compilerOptions" property.`);
    const plugins = (() => {
      const plugins2 = compilerOptions.plugins;
      if (plugins2 === void 0) return compilerOptions.plugins = [];
      else if (!Array.isArray(plugins2)) throw new TypeError(`"plugins" property of ${args.project} must be array type.`);
      return plugins2;
    })();
    const strict = compilerOptions.strict;
    const strictNullChecks = compilerOptions.strictNullChecks;
    const oldbie = plugins.find((p) => typeof p === "object" && p !== null && p.transform === "typia/lib/transform");
    if (strictNullChecks !== false && (strict === true || strictNullChecks === true) && oldbie !== void 0) return;
    compilerOptions.strictNullChecks = true;
    if (strict === void 0 && strictNullChecks === void 0) compilerOptions.strict = true;
    if (oldbie === void 0) plugins.push(comments.parse(`
                        {
                            "transform": "typia/lib/transform"
                        }`));
    await fs.promises.writeFile(args.project, comments.stringify(config, null, 2));
  }
  __name(configure, "configure");
  PluginConfigurator2.configure = configure;
})(PluginConfigurator || (PluginConfigurator = {}));

export {
  PluginConfigurator
};
//# sourceMappingURL=chunk-E6XHV2DR.mjs.map