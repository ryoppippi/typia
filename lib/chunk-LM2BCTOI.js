"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/executable/setup/PluginConfigurator.ts
var _commentjson = require('comment-json'); var _commentjson2 = _interopRequireDefault(_commentjson);
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var PluginConfigurator;
(function(PluginConfigurator2) {
  async function configure(args) {
    const config = _commentjson2.default.parse(await _fs2.default.promises.readFile(args.project, "utf8"));
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
    if (oldbie === void 0) plugins.push(_commentjson2.default.parse(`
                        {
                            "transform": "typia/lib/transform"
                        }`));
    await _fs2.default.promises.writeFile(args.project, _commentjson2.default.stringify(config, null, 2));
  }
  _chunkUZ5BS2M3js.__name.call(void 0, configure, "configure");
  PluginConfigurator2.configure = configure;
})(PluginConfigurator || (PluginConfigurator = exports.PluginConfigurator = {}));



exports.PluginConfigurator = PluginConfigurator;
//# sourceMappingURL=chunk-LM2BCTOI.js.map