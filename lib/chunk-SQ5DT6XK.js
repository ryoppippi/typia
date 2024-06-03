"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunk7DAV2ULCjs = require('./chunk-7DAV2ULC.js');


var _chunk7ONHPZN6js = require('./chunk-7ONHPZN6.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/executable/setup/PackageManager.ts
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var PackageManager = class _PackageManager {
  static {
    _chunkUZ5BS2M3js.__name.call(void 0, this, "PackageManager");
  }
  
  
  
  get file() {
    return _path2.default.join(this.directory, "package.json");
  }
  static async mount() {
    const location = await _chunk7ONHPZN6js.FileRetriever.directory("package.json")(process.cwd());
    if (location === null) throw new URIError(`Unable to find "package.json" file`);
    return new _PackageManager(location, await this.load(_path2.default.join(location, "package.json")));
  }
  async save(modifier) {
    const content = await _fs2.default.promises.readFile(this.file, "utf8");
    this.data = JSON.parse(content);
    modifier(this.data);
    return _fs2.default.promises.writeFile(this.file, JSON.stringify(this.data, null, 2), "utf8");
  }
  install(props) {
    const middle = this.manager === "yarn" ? `add${props.dev ? " -D" : ""}` : `install ${props.dev ? "--save-dev" : "--save"}`;
    _chunk7DAV2ULCjs.CommandExecutor.run(`${this.manager} ${middle} ${props.modulo}${props.version ? `@${props.version}` : ""}`);
    return true;
  }
  constructor(directory, data) {
    this.directory = directory;
    this.data = data;
    this.manager = "npm";
  }
  static async load(file) {
    const content = await _fs2.default.promises.readFile(file, "utf8");
    return JSON.parse(content);
  }
};



exports.PackageManager = PackageManager;
//# sourceMappingURL=chunk-SQ5DT6XK.js.map