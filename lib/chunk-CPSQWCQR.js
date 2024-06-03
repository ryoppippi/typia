"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkXYPLNHI3js = require('./chunk-XYPLNHI3.js');


var _chunkNWMPQT3Jjs = require('./chunk-NWMPQT3J.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunkRV4Y6B6Tjs = require('./chunk-RV4Y6B6T.js');

// src/programmers/functional/FunctionalIsParametersProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);

// src/programmers/functional/FunctionalIsFunctionProgrammer.ts


// src/programmers/functional/FunctionalIsReturnProgrammer.ts

var FunctionalIsReturnProgrammer;
(function(FunctionalIsReturnProgrammer2) {
  FunctionalIsReturnProgrammer2.write = (project) => (modulo) => (equals) => (expression, declaration) => {
    const { async, statements } = FunctionalIsReturnProgrammer2.writeStatements(project)(modulo)(equals)(expression, declaration);
    return _typescript2.default.factory.createArrowFunction(async ? [
      _typescript2.default.factory.createModifier(_typescript2.default.SyntaxKind.AsyncKeyword)
    ] : void 0, void 0, declaration.parameters, FunctionalIsFunctionProgrammer.getReturnTypeNode(declaration, async), void 0, _typescript2.default.factory.createBlock(statements, true));
  };
  FunctionalIsReturnProgrammer2.writeStatements = (project) => (modulo) => (equals) => (expression, declaration) => {
    const { type, async } = _chunkXYPLNHI3js.FunctionalGeneralProgrammer.getReturnType(project.checker)(declaration);
    const caller = _typescript2.default.factory.createCallExpression(expression, void 0, declaration.parameters.map((p) => _typescript2.default.factory.createIdentifier(p.name.getText())));
    const name = _chunkRV4Y6B6Tjs.StringUtil_exports.escapeDuplicate(declaration.parameters.map((p) => p.name.getText()))("result");
    const statements = [
      _chunkTYMSCBZGjs.StatementFactory.constant(name, async ? _typescript2.default.factory.createAwaitExpression(caller) : caller),
      _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createConditionalExpression(_typescript2.default.factory.createCallExpression(_chunkNWMPQT3Jjs.IsProgrammer.write(project)(modulo)(equals)(type), void 0, [
        _typescript2.default.factory.createIdentifier(name)
      ]), void 0, _typescript2.default.factory.createIdentifier(name), void 0, _typescript2.default.factory.createNull()))
    ];
    return {
      async,
      statements
    };
  };
})(FunctionalIsReturnProgrammer || (FunctionalIsReturnProgrammer = exports.FunctionalIsReturnProgrammer = {}));

// src/programmers/functional/FunctionalIsFunctionProgrammer.ts
var FunctionalIsFunctionProgrammer;
(function(FunctionalIsFunctionProgrammer2) {
  FunctionalIsFunctionProgrammer2.write = (project) => (modulo) => (equals) => (expression, declaration) => {
    const { async, statements } = FunctionalIsReturnProgrammer.writeStatements(project)(modulo)(equals)(expression, declaration);
    return _typescript2.default.factory.createArrowFunction(async ? [
      _typescript2.default.factory.createModifier(_typescript2.default.SyntaxKind.AsyncKeyword)
    ] : void 0, void 0, declaration.parameters, FunctionalIsFunctionProgrammer2.getReturnTypeNode(declaration, async), void 0, _typescript2.default.factory.createBlock([
      ...FunctionalIsParametersProgrammer.writeStatements(project)(modulo)(equals)(declaration),
      ...statements
    ], true));
  };
  FunctionalIsFunctionProgrammer2.getReturnTypeNode = (declaration, async) => declaration.type ? async ? !!_optionalChain([declaration, 'access', _ => _.type, 'access', _2 => _2.typeArguments, 'optionalAccess', _3 => _3[0]]) ? _typescript2.default.factory.createTypeReferenceNode("Promise", [
    _typescript2.default.factory.createUnionTypeNode([
      declaration.type.typeArguments[0],
      _typescript2.default.factory.createTypeReferenceNode("null")
    ])
  ]) : void 0 : _typescript2.default.factory.createUnionTypeNode([
    declaration.type,
    _typescript2.default.factory.createTypeReferenceNode("null")
  ]) : void 0;
})(FunctionalIsFunctionProgrammer || (FunctionalIsFunctionProgrammer = exports.FunctionalIsFunctionProgrammer = {}));

// src/programmers/functional/FunctionalIsParametersProgrammer.ts
var FunctionalIsParametersProgrammer;
(function(FunctionalIsParametersProgrammer2) {
  FunctionalIsParametersProgrammer2.write = (project) => (modulo) => (equals) => (expression, declaration) => {
    const { async } = _chunkXYPLNHI3js.FunctionalGeneralProgrammer.getReturnType(project.checker)(declaration);
    return _typescript2.default.factory.createArrowFunction(async ? [
      _typescript2.default.factory.createModifier(_typescript2.default.SyntaxKind.AsyncKeyword)
    ] : void 0, void 0, declaration.parameters, FunctionalIsFunctionProgrammer.getReturnTypeNode(declaration, async), void 0, _typescript2.default.factory.createBlock([
      ...FunctionalIsParametersProgrammer2.writeStatements(project)(modulo)(equals)(declaration),
      _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createCallExpression(expression, void 0, declaration.parameters.map((p) => _typescript2.default.factory.createIdentifier(p.name.getText()))))
    ], true));
  };
  FunctionalIsParametersProgrammer2.writeStatements = (project) => (modulo) => (equals) => (declaration) => declaration.parameters.map((p) => [
    _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createFalse(), _typescript2.default.factory.createCallExpression(_chunkNWMPQT3Jjs.IsProgrammer.write(project)(modulo)(equals)(project.checker.getTypeFromTypeNode(_nullishCoalesce(p.type, () => ( _chunkPK6R5VEJjs.TypeFactory.keyword("any"))))), void 0, [
      _typescript2.default.factory.createIdentifier(p.name.getText())
    ])), _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createNull()))
  ]).flat();
})(FunctionalIsParametersProgrammer || (FunctionalIsParametersProgrammer = exports.FunctionalIsParametersProgrammer = {}));





exports.FunctionalIsParametersProgrammer = FunctionalIsParametersProgrammer; exports.FunctionalIsReturnProgrammer = FunctionalIsReturnProgrammer; exports.FunctionalIsFunctionProgrammer = FunctionalIsFunctionProgrammer;
//# sourceMappingURL=chunk-CPSQWCQR.js.map