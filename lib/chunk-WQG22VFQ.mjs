// src/factories/ValueFactory.ts
import ts from "typescript";
var ValueFactory;
(function(ValueFactory2) {
  ValueFactory2.NULL = () => ts.factory.createNull();
  ValueFactory2.UNDEFINED = () => ts.factory.createIdentifier("undefined");
  ValueFactory2.BOOLEAN = (value) => value ? ts.factory.createTrue() : ts.factory.createFalse();
  ValueFactory2.INPUT = (str = "input") => ts.factory.createIdentifier(str);
  ValueFactory2.TYPEOF = (input) => ts.factory.createTypeOfExpression(input);
})(ValueFactory || (ValueFactory = {}));

export {
  ValueFactory
};
//# sourceMappingURL=chunk-WQG22VFQ.mjs.map