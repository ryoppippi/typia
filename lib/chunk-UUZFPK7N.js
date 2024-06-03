"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkMCMQ56RXjs = require('./chunk-MCMQ56RX.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');

// src/factories/IdentifierFactory.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var IdentifierFactory;
(function(IdentifierFactory2) {
  IdentifierFactory2.identifier = (name) => _chunkMCMQ56RXjs.Escaper.variable(name) ? _typescript2.default.factory.createIdentifier(name) : _typescript2.default.factory.createStringLiteral(name);
  IdentifierFactory2.access = (target) => (property) => {
    const postfix = IdentifierFactory2.identifier(property);
    return _typescript2.default.isStringLiteral(postfix) ? _typescript2.default.factory.createElementAccessExpression(target, postfix) : _typescript2.default.factory.createPropertyAccessExpression(target, postfix);
  };
  IdentifierFactory2.getName = (input) => {
    const value = _optionalChain([input, 'access', _ => _.escapedText, 'optionalAccess', _2 => _2.toString, 'call', _3 => _3()]);
    if (typeof value === "string") return value;
    if (_typescript2.default.isPropertyAccessExpression(input)) return `${IdentifierFactory2.getName(input.expression)}.${input.name.escapedText.toString()}`;
    else if (_typescript2.default.isElementAccessExpression(input)) return `${IdentifierFactory2.getName(input.expression)}[${IdentifierFactory2.getName(input.argumentExpression)}]`;
    return "uknown";
  };
  IdentifierFactory2.postfix = (str) => _chunkMCMQ56RXjs.Escaper.variable(str) ? `".${str}"` : `"[${JSON.stringify(str).split('"').join('\\"')}]"`;
  IdentifierFactory2.parameter = (name, type, init) => {
    if (_typescript2.default.getDecorators !== void 0) return _typescript2.default.factory.createParameterDeclaration(void 0, void 0, name, _optionalChain([init, 'optionalAccess', _4 => _4.kind]) === _typescript2.default.SyntaxKind.QuestionToken ? _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.QuestionToken) : void 0, _nullishCoalesce(type, () => ( _chunkPK6R5VEJjs.TypeFactory.keyword("any"))), init && init.kind !== _typescript2.default.SyntaxKind.QuestionToken ? init : void 0);
    return _typescript2.default.factory.createParameterDeclaration(void 0, void 0, void 0, name, _optionalChain([init, 'optionalAccess', _5 => _5.kind]) === _typescript2.default.SyntaxKind.QuestionToken ? _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.QuestionToken) : void 0, type, init && init.kind !== _typescript2.default.SyntaxKind.QuestionToken ? init : void 0);
  };
})(IdentifierFactory || (IdentifierFactory = exports.IdentifierFactory = {}));



exports.IdentifierFactory = IdentifierFactory;
//# sourceMappingURL=chunk-UUZFPK7N.js.map