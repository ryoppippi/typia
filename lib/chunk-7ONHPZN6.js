"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/executable/setup/FileRetriever.ts
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var FileRetriever;
(function(FileRetriever2) {
  FileRetriever2.directory = (name) => (dir, depth = 0) => {
    const location = _path2.default.join(dir, name);
    if (_fs2.default.existsSync(location)) return dir;
    else if (depth > 2) return null;
    return FileRetriever2.directory(name)(_path2.default.join(dir, ".."), depth + 1);
  };
  FileRetriever2.file = (name) => (directory, depth = 0) => {
    const location = _path2.default.join(directory, name);
    if (_fs2.default.existsSync(location)) return location;
    else if (depth > 2) return null;
    return FileRetriever2.file(name)(_path2.default.join(directory, ".."), depth + 1);
  };
})(FileRetriever || (FileRetriever = exports.FileRetriever = {}));



exports.FileRetriever = FileRetriever;
//# sourceMappingURL=chunk-7ONHPZN6.js.map