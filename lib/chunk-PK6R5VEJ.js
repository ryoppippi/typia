"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/factories/TypeFactory.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var TypeFactory;
(function(TypeFactory2) {
  TypeFactory2.isFunction = (type) => getFunction(type) !== null;
  const getFunction = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (type) => {
    const node = _optionalChain([type, 'access', _ => _.symbol, 'optionalAccess', _2 => _2.declarations, 'optionalAccess', _3 => _3[0]]);
    if (node === void 0) return null;
    return _typescript2.default.isFunctionLike(node) ? node : _typescript2.default.isPropertyAssignment(node) || _typescript2.default.isPropertyDeclaration(node) ? _typescript2.default.isFunctionLike(node.initializer) ? node.initializer : null : null;
  }, "getFunction");
  TypeFactory2.getReturnType = (checker) => (type) => (name) => {
    const symbol = type.getProperty(name);
    if (!symbol) return null;
    else if (!symbol.valueDeclaration) return null;
    const functor = checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration);
    const signature = checker.getSignaturesOfType(functor, _typescript2.default.SignatureKind.Call)[0];
    return signature ? signature.getReturnType() : null;
  };
  TypeFactory2.getFullName = (checker) => (type, symbol) => {
    symbol ??= _nullishCoalesce(type.aliasSymbol, () => ( type.getSymbol()));
    if (symbol === void 0) return checker.typeToString(type);
    if (type.aliasSymbol === void 0 && type.isUnionOrIntersection()) {
      const joiner = type.isIntersection() ? " & " : " | ";
      return type.types.map((child) => TypeFactory2.getFullName(checker)(child)).join(joiner);
    }
    const name = get_name(symbol);
    const generic = type.aliasSymbol ? type.aliasTypeArguments || [] : checker.getTypeArguments(type);
    return generic.length ? name === "Promise" ? TypeFactory2.getFullName(checker)(generic[0]) : `${name}<${generic.map((child) => TypeFactory2.getFullName(checker)(child)).join(", ")}>` : name;
  };
  const explore_name = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (decl) => (name) => _typescript2.default.isModuleBlock(decl) ? explore_name(decl.parent.parent)(`${decl.parent.name.getFullText().trim()}.${name}`) : name, "explore_name");
  const get_name = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (symbol) => {
    const parent = _optionalChain([symbol, 'access', _4 => _4.getDeclarations, 'call', _5 => _5(), 'optionalAccess', _6 => _6[0], 'optionalAccess', _7 => _7.parent]);
    return parent ? explore_name(parent)(symbol.escapedName.toString()) : "__type";
  }, "get_name");
  TypeFactory2.keyword = (type) => {
    return _typescript2.default.factory.createKeywordTypeNode(type === "void" ? _typescript2.default.SyntaxKind.VoidKeyword : type === "any" ? _typescript2.default.SyntaxKind.AnyKeyword : type === "unknown" ? _typescript2.default.SyntaxKind.UnknownKeyword : type === "boolean" ? _typescript2.default.SyntaxKind.BooleanKeyword : type === "number" ? _typescript2.default.SyntaxKind.NumberKeyword : type === "bigint" ? _typescript2.default.SyntaxKind.BigIntKeyword : _typescript2.default.SyntaxKind.StringKeyword);
  };
})(TypeFactory || (TypeFactory = exports.TypeFactory = {}));



exports.TypeFactory = TypeFactory;
//# sourceMappingURL=chunk-PK6R5VEJ.js.map