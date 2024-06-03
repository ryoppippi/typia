"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/factories/ValueFactory.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var ValueFactory;
(function(ValueFactory2) {
  ValueFactory2.NULL = () => _typescript2.default.factory.createNull();
  ValueFactory2.UNDEFINED = () => _typescript2.default.factory.createIdentifier("undefined");
  ValueFactory2.BOOLEAN = (value) => value ? _typescript2.default.factory.createTrue() : _typescript2.default.factory.createFalse();
  ValueFactory2.INPUT = (str = "input") => _typescript2.default.factory.createIdentifier(str);
  ValueFactory2.TYPEOF = (input) => _typescript2.default.factory.createTypeOfExpression(input);
})(ValueFactory || (ValueFactory = exports.ValueFactory = {}));



exports.ValueFactory = ValueFactory;
//# sourceMappingURL=chunk-ISRAPRZN.js.map