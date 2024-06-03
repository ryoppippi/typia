import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/factories/TypeFactory.ts
import ts from "typescript";
var TypeFactory;
(function(TypeFactory2) {
  TypeFactory2.isFunction = (type) => getFunction(type) !== null;
  const getFunction = /* @__PURE__ */ __name((type) => {
    const node = type.symbol?.declarations?.[0];
    if (node === void 0) return null;
    return ts.isFunctionLike(node) ? node : ts.isPropertyAssignment(node) || ts.isPropertyDeclaration(node) ? ts.isFunctionLike(node.initializer) ? node.initializer : null : null;
  }, "getFunction");
  TypeFactory2.getReturnType = (checker) => (type) => (name) => {
    const symbol = type.getProperty(name);
    if (!symbol) return null;
    else if (!symbol.valueDeclaration) return null;
    const functor = checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration);
    const signature = checker.getSignaturesOfType(functor, ts.SignatureKind.Call)[0];
    return signature ? signature.getReturnType() : null;
  };
  TypeFactory2.getFullName = (checker) => (type, symbol) => {
    symbol ??= type.aliasSymbol ?? type.getSymbol();
    if (symbol === void 0) return checker.typeToString(type);
    if (type.aliasSymbol === void 0 && type.isUnionOrIntersection()) {
      const joiner = type.isIntersection() ? " & " : " | ";
      return type.types.map((child) => TypeFactory2.getFullName(checker)(child)).join(joiner);
    }
    const name = get_name(symbol);
    const generic = type.aliasSymbol ? type.aliasTypeArguments || [] : checker.getTypeArguments(type);
    return generic.length ? name === "Promise" ? TypeFactory2.getFullName(checker)(generic[0]) : `${name}<${generic.map((child) => TypeFactory2.getFullName(checker)(child)).join(", ")}>` : name;
  };
  const explore_name = /* @__PURE__ */ __name((decl) => (name) => ts.isModuleBlock(decl) ? explore_name(decl.parent.parent)(`${decl.parent.name.getFullText().trim()}.${name}`) : name, "explore_name");
  const get_name = /* @__PURE__ */ __name((symbol) => {
    const parent = symbol.getDeclarations()?.[0]?.parent;
    return parent ? explore_name(parent)(symbol.escapedName.toString()) : "__type";
  }, "get_name");
  TypeFactory2.keyword = (type) => {
    return ts.factory.createKeywordTypeNode(type === "void" ? ts.SyntaxKind.VoidKeyword : type === "any" ? ts.SyntaxKind.AnyKeyword : type === "unknown" ? ts.SyntaxKind.UnknownKeyword : type === "boolean" ? ts.SyntaxKind.BooleanKeyword : type === "number" ? ts.SyntaxKind.NumberKeyword : type === "bigint" ? ts.SyntaxKind.BigIntKeyword : ts.SyntaxKind.StringKeyword);
  };
})(TypeFactory || (TypeFactory = {}));

export {
  TypeFactory
};
//# sourceMappingURL=chunk-DDMKXAY2.mjs.map