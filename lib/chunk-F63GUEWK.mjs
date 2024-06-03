import {
  Escaper
} from "./chunk-DISTKAQW.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";

// src/factories/IdentifierFactory.ts
import ts from "typescript";
var IdentifierFactory;
(function(IdentifierFactory2) {
  IdentifierFactory2.identifier = (name) => Escaper.variable(name) ? ts.factory.createIdentifier(name) : ts.factory.createStringLiteral(name);
  IdentifierFactory2.access = (target) => (property) => {
    const postfix = IdentifierFactory2.identifier(property);
    return ts.isStringLiteral(postfix) ? ts.factory.createElementAccessExpression(target, postfix) : ts.factory.createPropertyAccessExpression(target, postfix);
  };
  IdentifierFactory2.getName = (input) => {
    const value = input.escapedText?.toString();
    if (typeof value === "string") return value;
    if (ts.isPropertyAccessExpression(input)) return `${IdentifierFactory2.getName(input.expression)}.${input.name.escapedText.toString()}`;
    else if (ts.isElementAccessExpression(input)) return `${IdentifierFactory2.getName(input.expression)}[${IdentifierFactory2.getName(input.argumentExpression)}]`;
    return "uknown";
  };
  IdentifierFactory2.postfix = (str) => Escaper.variable(str) ? `".${str}"` : `"[${JSON.stringify(str).split('"').join('\\"')}]"`;
  IdentifierFactory2.parameter = (name, type, init) => {
    if (ts.getDecorators !== void 0) return ts.factory.createParameterDeclaration(void 0, void 0, name, init?.kind === ts.SyntaxKind.QuestionToken ? ts.factory.createToken(ts.SyntaxKind.QuestionToken) : void 0, type ?? TypeFactory.keyword("any"), init && init.kind !== ts.SyntaxKind.QuestionToken ? init : void 0);
    return ts.factory.createParameterDeclaration(void 0, void 0, void 0, name, init?.kind === ts.SyntaxKind.QuestionToken ? ts.factory.createToken(ts.SyntaxKind.QuestionToken) : void 0, type, init && init.kind !== ts.SyntaxKind.QuestionToken ? init : void 0);
  };
})(IdentifierFactory || (IdentifierFactory = {}));

export {
  IdentifierFactory
};
//# sourceMappingURL=chunk-F63GUEWK.mjs.map