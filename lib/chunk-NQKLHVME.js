"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/executable/setup/ArgumentParser.ts
var _commander = require('commander'); var _commander2 = _interopRequireDefault(_commander);
var _inquirer = require('inquirer'); var _inquirer2 = _interopRequireDefault(_inquirer);
var ArgumentParser;
(function(ArgumentParser2) {
  ArgumentParser2.parse = (pack) => async (inquiry) => {
    const action = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (closure) => new Promise((resolve, reject) => {
      _commander2.default.program.action(async (options) => {
        try {
          resolve(await closure(options));
        } catch (exp) {
          reject(exp);
        }
      });
      _commander2.default.program.parseAsync().catch(reject);
    }), "action");
    return inquiry(pack, _commander2.default.program, _inquirer2.default.createPromptModule, action);
  };
})(ArgumentParser || (ArgumentParser = exports.ArgumentParser = {}));



exports.ArgumentParser = ArgumentParser;
//# sourceMappingURL=chunk-NQKLHVME.js.map