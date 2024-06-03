"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkXYPLNHI3js = require('./chunk-XYPLNHI3.js');


var _chunkOH66G5XYjs = require('./chunk-OH66G5XY.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunkRV4Y6B6Tjs = require('./chunk-RV4Y6B6T.js');

// src/programmers/functional/FunctionalValidateParametersProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);

// src/programmers/functional/FunctionalValidateFunctionProgrammer.ts


// src/programmers/functional/FunctionalValidateReturnProgrammer.ts

var FunctionalValidateReturnProgrammer;
(function(FunctionalValidateReturnProgrammer2) {
  FunctionalValidateReturnProgrammer2.write = (project) => (modulo) => (equals) => (expression, declaration) => {
    const { async, statements } = FunctionalValidateReturnProgrammer2.writeStatements(project)(modulo)(equals)(expression, declaration);
    return _typescript2.default.factory.createArrowFunction(async ? [
      _typescript2.default.factory.createModifier(_typescript2.default.SyntaxKind.AsyncKeyword)
    ] : void 0, void 0, declaration.parameters, FunctionalValidateFunctionProgrammer.getReturnTypeNode(declaration, async), void 0, _typescript2.default.factory.createBlock(statements, true));
  };
  FunctionalValidateReturnProgrammer2.writeStatements = (project) => (modulo) => (equals) => (expression, declaration) => {
    const { type, async } = _chunkXYPLNHI3js.FunctionalGeneralProgrammer.getReturnType(project.checker)(declaration);
    const caller = _typescript2.default.factory.createCallExpression(expression, void 0, declaration.parameters.map((p) => _typescript2.default.factory.createIdentifier(p.name.getText())));
    const name = _chunkRV4Y6B6Tjs.StringUtil_exports.escapeDuplicate(declaration.parameters.map((p) => p.name.getText()))("result");
    const statements = [
      _chunkTYMSCBZGjs.StatementFactory.constant(name, _typescript2.default.factory.createCallExpression(_chunkOH66G5XYjs.ValidateProgrammer.write(project)(modulo)(equals)(type), void 0, [
        async ? _typescript2.default.factory.createAwaitExpression(caller) : caller
      ])),
      _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createPrefixUnaryExpression(_typescript2.default.SyntaxKind.ExclamationToken, _typescript2.default.factory.createPropertyAccessExpression(_typescript2.default.factory.createIdentifier(name), _typescript2.default.factory.createIdentifier("success"))), _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createBinaryExpression(_typescript2.default.factory.createPropertyAccessExpression(_typescript2.default.factory.createIdentifier(name), _typescript2.default.factory.createIdentifier("errors")), _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.EqualsToken), FunctionalValidateFunctionProgrammer.hookErrors({
        expression: _typescript2.default.factory.createPropertyAccessExpression(_typescript2.default.factory.createIdentifier(name), _typescript2.default.factory.createIdentifier("errors")),
        replacer: _typescript2.default.factory.createStringLiteral("$input.return")
      })))),
      _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createIdentifier("result"))
    ];
    return {
      async,
      statements
    };
  };
})(FunctionalValidateReturnProgrammer || (FunctionalValidateReturnProgrammer = exports.FunctionalValidateReturnProgrammer = {}));

// src/programmers/functional/FunctionalValidateFunctionProgrammer.ts
var FunctionalValidateFunctionProgrammer;
(function(FunctionalValidateFunctionProgrammer2) {
  FunctionalValidateFunctionProgrammer2.write = (project) => (modulo) => (equals) => (expression, declaration) => {
    const { async, statements } = FunctionalValidateReturnProgrammer.writeStatements(project)(modulo)(equals)(expression, declaration);
    return _typescript2.default.factory.createArrowFunction(async ? [
      _typescript2.default.factory.createModifier(_typescript2.default.SyntaxKind.AsyncKeyword)
    ] : void 0, void 0, declaration.parameters, FunctionalValidateFunctionProgrammer2.getReturnTypeNode(declaration, async), void 0, _typescript2.default.factory.createBlock([
      ...FunctionalValidateParametersProgrammer.writeStatements(project)(modulo)(equals)(declaration),
      ...statements
    ], true));
  };
  FunctionalValidateFunctionProgrammer2.hookErrors = (props) => _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createPropertyAccessExpression(props.expression, "map"), void 0, [
    _typescript2.default.factory.createArrowFunction(void 0, void 0, [
      _chunkUUZFPK7Njs.IdentifierFactory.parameter("error")
    ], void 0, void 0, _typescript2.default.factory.createObjectLiteralExpression([
      _typescript2.default.factory.createSpreadAssignment(_typescript2.default.factory.createIdentifier("error")),
      _typescript2.default.factory.createPropertyAssignment("path", _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createPropertyAccessExpression(_typescript2.default.factory.createPropertyAccessExpression(_typescript2.default.factory.createIdentifier("error"), "path"), "replace"), void 0, [
        _typescript2.default.factory.createStringLiteral("$input"),
        props.replacer
      ]))
    ], true))
  ]);
  FunctionalValidateFunctionProgrammer2.getReturnTypeNode = (declaration, async) => declaration.type ? async ? !!_optionalChain([declaration, 'access', _ => _.type, 'access', _2 => _2.typeArguments, 'optionalAccess', _3 => _3[0]]) ? _typescript2.default.factory.createTypeReferenceNode("Promise", [
    _typescript2.default.factory.createImportTypeNode(_typescript2.default.factory.createLiteralTypeNode(_typescript2.default.factory.createStringLiteral("typia")), void 0, _typescript2.default.factory.createIdentifier("IValidation"), [
      declaration.type.typeArguments[0]
    ])
  ]) : void 0 : _typescript2.default.factory.createImportTypeNode(_typescript2.default.factory.createLiteralTypeNode(_typescript2.default.factory.createStringLiteral("typia")), void 0, _typescript2.default.factory.createIdentifier("IValidation"), [
    declaration.type
  ]) : void 0;
})(FunctionalValidateFunctionProgrammer || (FunctionalValidateFunctionProgrammer = exports.FunctionalValidateFunctionProgrammer = {}));

// src/programmers/functional/FunctionalValidateParametersProgrammer.ts
var FunctionalValidateParametersProgrammer;
(function(FunctionalValidateParametersProgrammer2) {
  FunctionalValidateParametersProgrammer2.write = (project) => (modulo) => (equals) => (expression, declaration) => {
    const { async } = _chunkXYPLNHI3js.FunctionalGeneralProgrammer.getReturnType(project.checker)(declaration);
    const caller = _typescript2.default.factory.createCallExpression(expression, void 0, declaration.parameters.map((p) => _typescript2.default.factory.createIdentifier(p.name.getText())));
    return _typescript2.default.factory.createArrowFunction(async ? [
      _typescript2.default.factory.createModifier(_typescript2.default.SyntaxKind.AsyncKeyword)
    ] : void 0, void 0, declaration.parameters, FunctionalValidateFunctionProgrammer.getReturnTypeNode(declaration, async), void 0, _typescript2.default.factory.createBlock([
      ...FunctionalValidateParametersProgrammer2.writeStatements(project)(modulo)(equals)(declaration),
      _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createObjectLiteralExpression([
        _typescript2.default.factory.createPropertyAssignment("success", _typescript2.default.factory.createTrue()),
        _typescript2.default.factory.createPropertyAssignment("data", async ? _typescript2.default.factory.createAwaitExpression(caller) : caller),
        _typescript2.default.factory.createPropertyAssignment("errors", _typescript2.default.factory.createArrayLiteralExpression([]))
      ], true))
    ], true));
  };
  FunctionalValidateParametersProgrammer2.writeStatements = (project) => (modulo) => (equals) => (declaration) => {
    const resultName = _chunkRV4Y6B6Tjs.StringUtil_exports.escapeDuplicate(declaration.parameters.map((p) => p.name.getText()))("paramResults");
    const validationResultArray = _typescript2.default.factory.createArrayLiteralExpression(declaration.parameters.map((p) => _typescript2.default.factory.createAsExpression(_typescript2.default.factory.createCallExpression(_chunkOH66G5XYjs.ValidateProgrammer.write(project)(modulo)(equals)(project.checker.getTypeFromTypeNode(_nullishCoalesce(p.type, () => ( _chunkPK6R5VEJjs.TypeFactory.keyword("any"))))), void 0, [
      _typescript2.default.factory.createIdentifier(p.name.getText())
    ]), _typescript2.default.factory.createImportTypeNode(_typescript2.default.factory.createLiteralTypeNode(_typescript2.default.factory.createStringLiteral("typia")), void 0, _typescript2.default.factory.createQualifiedName(_typescript2.default.factory.createIdentifier("IValidation"), _typescript2.default.factory.createIdentifier("IFailure")), void 0, false))), true);
    const failures = _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createPropertyAccessExpression(validationResultArray, "filter"), void 0, [
      _typescript2.default.factory.createArrowFunction(void 0, void 0, [
        _chunkUUZFPK7Njs.IdentifierFactory.parameter("r")
      ], void 0, void 0, _typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createFalse(), _typescript2.default.factory.createPropertyAccessExpression(_typescript2.default.factory.createIdentifier("r"), "success")))
    ]);
    const errorMatrix = _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createPropertyAccessExpression(_typescript2.default.factory.createIdentifier(resultName), "map"), void 0, [
      _typescript2.default.factory.createArrowFunction(void 0, void 0, [
        _chunkUUZFPK7Njs.IdentifierFactory.parameter("r"),
        _chunkUUZFPK7Njs.IdentifierFactory.parameter("i")
      ], void 0, void 0, FunctionalValidateFunctionProgrammer.hookErrors({
        expression: _typescript2.default.factory.createPropertyAccessExpression(_typescript2.default.factory.createIdentifier("r"), "errors"),
        replacer: _typescript2.default.factory.createTemplateExpression(_typescript2.default.factory.createTemplateHead("$input.parameters["), [
          _typescript2.default.factory.createTemplateSpan(_typescript2.default.factory.createIdentifier("i"), _typescript2.default.factory.createTemplateTail("]"))
        ])
      }))
    ]);
    return [
      _chunkTYMSCBZGjs.StatementFactory.constant(resultName, failures),
      _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createBinaryExpression(_typescript2.default.factory.createPropertyAccessExpression(_typescript2.default.factory.createIdentifier(resultName), "length"), _typescript2.default.SyntaxKind.GreaterThanToken, _typescript2.default.factory.createNumericLiteral("0")), _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createObjectLiteralExpression([
        _typescript2.default.factory.createPropertyAssignment("success", _typescript2.default.factory.createFalse()),
        _typescript2.default.factory.createPropertyAssignment("errors", _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createPropertyAccessExpression(errorMatrix, "flat"), void 0, void 0))
      ], true)))
    ];
  };
})(FunctionalValidateParametersProgrammer || (FunctionalValidateParametersProgrammer = exports.FunctionalValidateParametersProgrammer = {}));





exports.FunctionalValidateParametersProgrammer = FunctionalValidateParametersProgrammer; exports.FunctionalValidateReturnProgrammer = FunctionalValidateReturnProgrammer; exports.FunctionalValidateFunctionProgrammer = FunctionalValidateFunctionProgrammer;
//# sourceMappingURL=chunk-H7IR3MNV.js.map