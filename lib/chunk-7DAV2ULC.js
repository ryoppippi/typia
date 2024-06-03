"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/executable/setup/CommandExecutor.ts
var _child_process = require('child_process'); var _child_process2 = _interopRequireDefault(_child_process);
var CommandExecutor;
(function(CommandExecutor2) {
  CommandExecutor2.run = (str) => {
    console.log(`
$ ${str}`);
    _child_process2.default.execSync(str, {
      stdio: "inherit"
    });
  };
})(CommandExecutor || (CommandExecutor = exports.CommandExecutor = {}));



exports.CommandExecutor = CommandExecutor;
//# sourceMappingURL=chunk-7DAV2ULC.js.map