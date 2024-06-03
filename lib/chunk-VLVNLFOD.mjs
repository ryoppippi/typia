import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";

// src/programmers/functional/internal/FunctionalGeneralProgrammer.ts
var FunctionalGeneralProgrammer;
(function(FunctionalGeneralProgrammer2) {
  FunctionalGeneralProgrammer2.getReturnType = (checker) => (declaration) => {
    const signature = checker.getSignatureFromDeclaration(declaration);
    const type = signature?.getReturnType() ?? checker.getTypeFromTypeNode(TypeFactory.keyword("any"));
    if (type.symbol?.name === "Promise") {
      const generic = checker.getTypeArguments(type);
      return generic.length === 1 ? {
        type: generic[0],
        async: true
      } : {
        type: checker.getTypeFromTypeNode(TypeFactory.keyword("any")),
        async: false
      };
    }
    return {
      type,
      async: false
    };
  };
})(FunctionalGeneralProgrammer || (FunctionalGeneralProgrammer = {}));

export {
  FunctionalGeneralProgrammer
};
//# sourceMappingURL=chunk-VLVNLFOD.mjs.map