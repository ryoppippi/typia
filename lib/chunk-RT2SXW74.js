"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunkXYPLNHI3js = require('./chunk-XYPLNHI3.js');


var _chunkCK4IX7SCjs = require('./chunk-CK4IX7SC.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunkRV4Y6B6Tjs = require('./chunk-RV4Y6B6T.js');

// src/programmers/functional/FunctionalAssertParametersProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);

// src/programmers/functional/FunctionalAssertFunctionProgrammer.ts


// src/programmers/functional/FunctionalAssertReturnProgrammer.ts

var FunctionAssertReturnProgrammer;
(function(FunctionAssertReturnProgrammer2) {
  FunctionAssertReturnProgrammer2.write = (project) => (modulo) => (equals) => (expression, declaration, init) => {
    const wrapper = FunctionalAssertFunctionProgrammer.errorFactoryWrapper(modulo)(declaration.parameters)(init);
    const { async, returns: statement } = FunctionAssertReturnProgrammer2.returnStatement(project)(modulo)(equals)(expression, declaration, wrapper.name);
    return _typescript2.default.factory.createArrowFunction(async ? [
      _typescript2.default.factory.createModifier(_typescript2.default.SyntaxKind.AsyncKeyword)
    ] : void 0, void 0, declaration.parameters, declaration.type, void 0, _typescript2.default.factory.createBlock([
      wrapper.variable,
      statement
    ], true));
  };
  FunctionAssertReturnProgrammer2.returnStatement = (project) => (modulo) => (equals) => (expression, declaration, wrapper) => {
    const { type, async } = _chunkXYPLNHI3js.FunctionalGeneralProgrammer.getReturnType(project.checker)(declaration);
    const caller = _typescript2.default.factory.createCallExpression(expression, void 0, declaration.parameters.map((p) => _typescript2.default.factory.createIdentifier(p.name.getText())));
    return {
      async,
      returns: _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createCallExpression(_chunkCK4IX7SCjs.AssertProgrammer.write(project)(modulo)(equals)(type, void 0, FunctionalAssertFunctionProgrammer.hookPath({
        wrapper,
        replacer: "$input.return"
      })), void 0, [
        async ? _typescript2.default.factory.createAwaitExpression(caller) : caller
      ]))
    };
  };
})(FunctionAssertReturnProgrammer || (FunctionAssertReturnProgrammer = exports.FunctionAssertReturnProgrammer = {}));

// src/programmers/functional/FunctionalAssertFunctionProgrammer.ts
var FunctionalAssertFunctionProgrammer;
(function(FunctionalAssertFunctionProgrammer2) {
  FunctionalAssertFunctionProgrammer2.write = (project) => (modulo) => (equals) => (expression, declaration, init) => {
    const wrapper = FunctionalAssertFunctionProgrammer2.errorFactoryWrapper(modulo)(declaration.parameters)(init);
    const { async, returns } = FunctionAssertReturnProgrammer.returnStatement(project)(modulo)(equals)(expression, declaration, wrapper.name);
    return _typescript2.default.factory.createArrowFunction(async ? [
      _typescript2.default.factory.createModifier(_typescript2.default.SyntaxKind.AsyncKeyword)
    ] : void 0, void 0, declaration.parameters, declaration.type, void 0, _typescript2.default.factory.createBlock([
      wrapper.variable,
      ...FunctionalAssertParametersProgrammer.argumentExpressions(project)(modulo)(equals)(declaration.parameters, wrapper.name).map(_typescript2.default.factory.createExpressionStatement),
      returns
    ]));
  };
  FunctionalAssertFunctionProgrammer2.errorFactoryWrapper = (modulo) => (paramters) => (init) => {
    const name = _chunkRV4Y6B6Tjs.StringUtil_exports.escapeDuplicate(paramters.map((p) => p.name.getText()))("errorFactoryWrapper");
    const variable = _typescript2.default.factory.createVariableStatement(void 0, _typescript2.default.factory.createVariableDeclarationList([
      _typescript2.default.factory.createVariableDeclaration(name, void 0, _chunkCK4IX7SCjs.AssertProgrammer.Guardian.type(), _nullishCoalesce(init, () => ( _typescript2.default.factory.createPropertyAccessExpression(_typescript2.default.factory.createAsExpression(modulo, _chunkPK6R5VEJjs.TypeFactory.keyword("any")), "errorFactory"))))
    ], _typescript2.default.NodeFlags.Const));
    return {
      name,
      variable
    };
  };
  FunctionalAssertFunctionProgrammer2.hookPath = (props) => _typescript2.default.factory.createArrowFunction(void 0, void 0, [
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("p")
  ], void 0, void 0, _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(props.wrapper), void 0, [
    _typescript2.default.factory.createObjectLiteralExpression([
      _typescript2.default.factory.createSpreadAssignment(_typescript2.default.factory.createIdentifier("p")),
      _typescript2.default.factory.createPropertyAssignment("path", _typescript2.default.factory.createConditionalExpression(_typescript2.default.factory.createPropertyAccessExpression(_typescript2.default.factory.createIdentifier("p"), "path"), void 0, _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createPropertyAccessExpression(_typescript2.default.factory.createPropertyAccessExpression(_typescript2.default.factory.createIdentifier("p"), "path"), "replace"), void 0, [
        _typescript2.default.factory.createStringLiteral("$input"),
        _typescript2.default.factory.createStringLiteral(props.replacer)
      ]), void 0, _typescript2.default.factory.createIdentifier("undefined")))
    ])
  ]));
})(FunctionalAssertFunctionProgrammer || (FunctionalAssertFunctionProgrammer = exports.FunctionalAssertFunctionProgrammer = {}));

// src/programmers/functional/FunctionalAssertParametersProgrammer.ts
var FunctionalAssertParametersProgrammer;
(function(FunctionalAssertParametersProgrammer2) {
  FunctionalAssertParametersProgrammer2.write = (project) => (modulo) => (equals) => (expression, declaration, init) => {
    const wrapper = FunctionalAssertFunctionProgrammer.errorFactoryWrapper(modulo)(declaration.parameters)(init);
    const { async } = _chunkXYPLNHI3js.FunctionalGeneralProgrammer.getReturnType(project.checker)(declaration);
    return _typescript2.default.factory.createArrowFunction(async ? [
      _typescript2.default.factory.createModifier(_typescript2.default.SyntaxKind.AsyncKeyword)
    ] : void 0, void 0, declaration.parameters, declaration.type, void 0, _typescript2.default.factory.createBlock([
      wrapper.variable,
      ...FunctionalAssertParametersProgrammer2.argumentExpressions(project)(modulo)(equals)(declaration.parameters, wrapper.name).map(_typescript2.default.factory.createExpressionStatement),
      _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createCallExpression(expression, void 0, declaration.parameters.map((p) => _typescript2.default.factory.createIdentifier(p.name.getText()))))
    ], true));
  };
  FunctionalAssertParametersProgrammer2.argumentExpressions = (project) => (modulo) => (equals) => (parameters, wrapper) => parameters.map((p, i) => _typescript2.default.factory.createCallExpression(_chunkCK4IX7SCjs.AssertProgrammer.write(project)(modulo)(equals)(p.type ? project.checker.getTypeFromTypeNode(p.type) : project.checker.getTypeFromTypeNode(_chunkPK6R5VEJjs.TypeFactory.keyword("any")), void 0, FunctionalAssertFunctionProgrammer.hookPath({
    wrapper,
    replacer: `$input.parameters[${i}]`
  })), void 0, [
    _typescript2.default.factory.createIdentifier(p.name.getText())
  ]));
})(FunctionalAssertParametersProgrammer || (FunctionalAssertParametersProgrammer = exports.FunctionalAssertParametersProgrammer = {}));





exports.FunctionalAssertParametersProgrammer = FunctionalAssertParametersProgrammer; exports.FunctionAssertReturnProgrammer = FunctionAssertReturnProgrammer; exports.FunctionalAssertFunctionProgrammer = FunctionalAssertFunctionProgrammer;
//# sourceMappingURL=chunk-RT2SXW74.js.map