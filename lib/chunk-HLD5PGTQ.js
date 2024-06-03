"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkRLBMKEQZjs = require('./chunk-RLBMKEQZ.js');


var _chunkPVOFUC5Zjs = require('./chunk-PVOFUC5Z.js');


var _chunkMLDM7HRVjs = require('./chunk-MLDM7HRV.js');


var _chunkV2NZSRQIjs = require('./chunk-V2NZSRQI.js');


var _chunkHB3DBQ7Jjs = require('./chunk-HB3DBQ7J.js');


var _chunk35SBIVTOjs = require('./chunk-35SBIVTO.js');


var _chunkSGDCE5QXjs = require('./chunk-SGDCE5QX.js');


var _chunkBHZXUKV5js = require('./chunk-BHZXUKV5.js');


var _chunkXY74IV24js = require('./chunk-XY74IV24.js');


var _chunkRJKVVFJ6js = require('./chunk-RJKVVFJ6.js');


var _chunkRBSKP3HFjs = require('./chunk-RBSKP3HF.js');


var _chunkYGQCR4Z7js = require('./chunk-YGQCR4Z7.js');


var _chunkH6DKHRYZjs = require('./chunk-H6DKHRYZ.js');


var _chunkIUSD4H67js = require('./chunk-IUSD4H67.js');


var _chunkTY63SNXCjs = require('./chunk-TY63SNXC.js');


var _chunkQVJLSKTOjs = require('./chunk-QVJLSKTO.js');


var _chunkAAYHETYSjs = require('./chunk-AAYHETYS.js');


var _chunkYF5ITYVCjs = require('./chunk-YF5ITYVC.js');


var _chunkO2ATMSLIjs = require('./chunk-O2ATMSLI.js');


var _chunkUY7RNYQTjs = require('./chunk-UY7RNYQT.js');


var _chunkITVLJRA6js = require('./chunk-ITVLJRA6.js');


var _chunkZQNE2AF5js = require('./chunk-ZQNE2AF5.js');


var _chunkS6PZJ3TSjs = require('./chunk-S6PZJ3TS.js');


var _chunkIFAPD7LKjs = require('./chunk-IFAPD7LK.js');


var _chunkMNFMM65Wjs = require('./chunk-MNFMM65W.js');


var _chunkTGFG7OZ4js = require('./chunk-TGFG7OZ4.js');


var _chunkG7BEANEAjs = require('./chunk-G7BEANEA.js');


var _chunkQB5L6AURjs = require('./chunk-QB5L6AUR.js');


var _chunkHTFOKNL4js = require('./chunk-HTFOKNL4.js');


var _chunkSID55T5Pjs = require('./chunk-SID55T5P.js');


var _chunkKNDAKB7Pjs = require('./chunk-KNDAKB7P.js');


var _chunk2XS3LXJ6js = require('./chunk-2XS3LXJ6.js');


var _chunkVYO2KFBBjs = require('./chunk-VYO2KFBB.js');


var _chunkXZFKZ55Kjs = require('./chunk-XZFKZ55K.js');


var _chunk2THHRMDXjs = require('./chunk-2THHRMDX.js');


var _chunkJXY3ISBHjs = require('./chunk-JXY3ISBH.js');


var _chunkTPCXPWEGjs = require('./chunk-TPCXPWEG.js');


var _chunkEZVFDCCDjs = require('./chunk-EZVFDCCD.js');


var _chunkJICOYV77js = require('./chunk-JICOYV77.js');


var _chunk4FVJJZN7js = require('./chunk-4FVJJZN7.js');


var _chunkEP7OOKVHjs = require('./chunk-EP7OOKVH.js');


var _chunk4F33AEA5js = require('./chunk-4F33AEA5.js');


var _chunkSYYX566Cjs = require('./chunk-SYYX566C.js');


var _chunk5TQSG6PVjs = require('./chunk-5TQSG6PV.js');


var _chunkS3LB2I3Yjs = require('./chunk-S3LB2I3Y.js');


var _chunkQW3RTG5Djs = require('./chunk-QW3RTG5D.js');


var _chunk2DMSCLSSjs = require('./chunk-2DMSCLSS.js');


var _chunkQ6SLZM4Ajs = require('./chunk-Q6SLZM4A.js');


var _chunk6XXSVWM2js = require('./chunk-6XXSVWM2.js');


var _chunk53IZJEK3js = require('./chunk-53IZJEK3.js');


var _chunkOEHDIF4Yjs = require('./chunk-OEHDIF4Y.js');


var _chunkDK52XAWEjs = require('./chunk-DK52XAWE.js');


var _chunk73KFM6BIjs = require('./chunk-73KFM6BI.js');


var _chunk5EGS23ZXjs = require('./chunk-5EGS23ZX.js');


var _chunkBSQGBUDXjs = require('./chunk-BSQGBUDX.js');


var _chunk3LMSDMDPjs = require('./chunk-3LMSDMDP.js');


var _chunkQW4TEGE6js = require('./chunk-QW4TEGE6.js');


var _chunkOUAIHSZMjs = require('./chunk-OUAIHSZM.js');


var _chunk5LTD2YNAjs = require('./chunk-5LTD2YNA.js');


var _chunkZ536S3JPjs = require('./chunk-Z536S3JP.js');


var _chunkDZEFC5PYjs = require('./chunk-DZEFC5PY.js');


var _chunkKB5CFO72js = require('./chunk-KB5CFO72.js');


var _chunk4FPYZOE5js = require('./chunk-4FPYZOE5.js');


var _chunkVKTHWA3Gjs = require('./chunk-VKTHWA3G.js');


var _chunkC42VQUJIjs = require('./chunk-C42VQUJI.js');


var _chunk3ZXRS6BCjs = require('./chunk-3ZXRS6BC.js');


var _chunk2PIG35KTjs = require('./chunk-2PIG35KT.js');


var _chunkGFMWU5E5js = require('./chunk-GFMWU5E5.js');


var _chunkIAJCMAL3js = require('./chunk-IAJCMAL3.js');


var _chunkPIQSF4GGjs = require('./chunk-PIQSF4GG.js');


var _chunkRAGML2QRjs = require('./chunk-RAGML2QR.js');


var _chunkUSUY6U2Ljs = require('./chunk-USUY6U2L.js');


var _chunkIS2EQG3Tjs = require('./chunk-IS2EQG3T.js');


var _chunkXO5RM3RAjs = require('./chunk-XO5RM3RA.js');


var _chunkVLIOL4FBjs = require('./chunk-VLIOL4FB.js');


var _chunkGA4PQANQjs = require('./chunk-GA4PQANQ.js');


var _chunkXTUELXO7js = require('./chunk-XTUELXO7.js');


var _chunkST66HWD3js = require('./chunk-ST66HWD3.js');


var _chunkQLPE344Sjs = require('./chunk-QLPE344S.js');


var _chunk4VXCZ3W2js = require('./chunk-4VXCZ3W2.js');


var _chunkUWVKQAJYjs = require('./chunk-UWVKQAJY.js');


var _chunkY7D55ULAjs = require('./chunk-Y7D55ULA.js');


var _chunkFJJEAJC5js = require('./chunk-FJJEAJC5.js');


var _chunkX7WTZR6Hjs = require('./chunk-X7WTZR6H.js');


var _chunk7V65WCFBjs = require('./chunk-7V65WCFB.js');


var _chunkVP5VKNE2js = require('./chunk-VP5VKNE2.js');


var _chunkQCJLVASNjs = require('./chunk-QCJLVASN.js');


var _chunkSBI4OVNHjs = require('./chunk-SBI4OVNH.js');


var _chunkU2RC546Rjs = require('./chunk-U2RC546R.js');


var _chunkNXVPBO4Tjs = require('./chunk-NXVPBO4T.js');


var _chunkMJHTX3PYjs = require('./chunk-MJHTX3PY.js');


var _chunk2AQF7BRDjs = require('./chunk-2AQF7BRD.js');


var _chunkI44O75OHjs = require('./chunk-I44O75OH.js');




var _chunkRT2SXW74js = require('./chunk-RT2SXW74.js');




var _chunkCPSQWCQRjs = require('./chunk-CPSQWCQR.js');




var _chunkH7IR3MNVjs = require('./chunk-H7IR3MNV.js');


var _chunkI6WYJFF2js = require('./chunk-I6WYJFF2.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/transformers/CallExpressionTransformer.ts
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var CallExpressionTransformer;
(function(CallExpressionTransformer2) {
  CallExpressionTransformer2.transform = (project) => (expression) => {
    const declaration = _optionalChain([project, 'access', _ => _.checker, 'access', _2 => _2.getResolvedSignature, 'call', _3 => _3(expression), 'optionalAccess', _4 => _4.declaration]);
    if (!declaration) return expression;
    const location = _path2.default.resolve(declaration.getSourceFile().fileName);
    if (isTarget(location) === false) return expression;
    const module = location.split(_path2.default.sep).at(-1).split(".")[0];
    const { name } = project.checker.getTypeAtLocation(declaration).symbol;
    const functor = _optionalChain([FUNCTORS, 'access', _5 => _5[module], 'optionalAccess', _6 => _6[name]]);
    if (functor === void 0) return expression;
    const result = functor()(project)(expression.expression)(expression);
    return _nullishCoalesce(result, () => ( expression));
  };
  const isTarget = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (location) => {
    const files = Object.keys(FUNCTORS);
    return files.some((f) => location.includes(_path2.default.join("typia", "lib", `${f}.d.ts`)));
  }, "isTarget");
})(CallExpressionTransformer || (CallExpressionTransformer = exports.CallExpressionTransformer = {}));
var FUNCTORS = {
  module: {
    // BASIC
    assert: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkQCJLVASNjs.AssertTransformer.transform({
      equals: false,
      guard: false
    }), "assert"),
    assertGuard: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkQCJLVASNjs.AssertTransformer.transform({
      equals: false,
      guard: true
    }), "assertGuard"),
    assertType: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkQCJLVASNjs.AssertTransformer.transform({
      equals: false,
      guard: false
    }), "assertType"),
    is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk2AQF7BRDjs.IsTransformer.transform(false), "is"),
    validate: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkVP5VKNE2js.ValidateTransformer.transform(false), "validate"),
    // STRICT
    assertEquals: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkQCJLVASNjs.AssertTransformer.transform({
      equals: true,
      guard: false
    }), "assertEquals"),
    assertGuardEquals: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkQCJLVASNjs.AssertTransformer.transform({
      equals: true,
      guard: true
    }), "assertGuardEquals"),
    equals: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk2AQF7BRDjs.IsTransformer.transform(true), "equals"),
    validateEquals: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkVP5VKNE2js.ValidateTransformer.transform(true), "validateEquals"),
    // RANDOM + INTERNAL
    random: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkI44O75OHjs.RandomTransformer.transform, "random"),
    metadata: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkBHZXUKV5js.ReflectMetadataTransformer.transform, "metadata"),
    // FACTORIES
    createAssert: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkSBI4OVNHjs.CreateAssertTransformer.transform({
      equals: false,
      guard: false
    }), "createAssert"),
    createAssertGuard: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkSBI4OVNHjs.CreateAssertTransformer.transform({
      equals: false,
      guard: true
    }), "createAssertGuard"),
    createAssertType: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkSBI4OVNHjs.CreateAssertTransformer.transform({
      equals: false,
      guard: false
    }), "createAssertType"),
    createIs: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkU2RC546Rjs.CreateIsTransformer.transform(false), "createIs"),
    createValidate: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkMJHTX3PYjs.CreateValidateTransformer.transform(false), "createValidate"),
    createAssertEquals: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkSBI4OVNHjs.CreateAssertTransformer.transform({
      equals: true,
      guard: false
    }), "createAssertEquals"),
    createAssertGuardEquals: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkSBI4OVNHjs.CreateAssertTransformer.transform({
      equals: true,
      guard: true
    }), "createAssertGuardEquals"),
    createEquals: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkU2RC546Rjs.CreateIsTransformer.transform(true), "createEquals"),
    createValidateEquals: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkMJHTX3PYjs.CreateValidateTransformer.transform(true), "createValidateEquals"),
    createRandom: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkNXVPBO4Tjs.CreateRandomTransformer.transform, "createRandom")
  },
  functional: {
    // ASSERTIONS
    assertFunction: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkUWVKQAJYjs.FunctionalGenericTransformer.transform({
      method: "assertFunction",
      equals: false,
      programmer: _chunkRT2SXW74js.FunctionalAssertFunctionProgrammer.write
    }), "assertFunction"),
    assertParameters: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkUWVKQAJYjs.FunctionalGenericTransformer.transform({
      method: "assertParameters",
      equals: false,
      programmer: _chunkRT2SXW74js.FunctionalAssertParametersProgrammer.write
    }), "assertParameters"),
    assertReturn: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkUWVKQAJYjs.FunctionalGenericTransformer.transform({
      method: "assertReturn",
      equals: false,
      programmer: _chunkRT2SXW74js.FunctionAssertReturnProgrammer.write
    }), "assertReturn"),
    assertEqualsFunction: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkUWVKQAJYjs.FunctionalGenericTransformer.transform({
      method: "assertEqualsFunction",
      equals: true,
      programmer: _chunkRT2SXW74js.FunctionalAssertFunctionProgrammer.write
    }), "assertEqualsFunction"),
    assertEqualsParameters: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkUWVKQAJYjs.FunctionalGenericTransformer.transform({
      method: "assertEqualsParameters",
      equals: true,
      programmer: _chunkRT2SXW74js.FunctionalAssertParametersProgrammer.write
    }), "assertEqualsParameters"),
    assertEqualsReturn: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkUWVKQAJYjs.FunctionalGenericTransformer.transform({
      method: "assertEqualsReturn",
      equals: true,
      programmer: _chunkRT2SXW74js.FunctionAssertReturnProgrammer.write
    }), "assertEqualsReturn"),
    // IS
    isFunction: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkUWVKQAJYjs.FunctionalGenericTransformer.transform({
      method: "isFunction",
      equals: false,
      programmer: _chunkCPSQWCQRjs.FunctionalIsFunctionProgrammer.write
    }), "isFunction"),
    isParameters: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkUWVKQAJYjs.FunctionalGenericTransformer.transform({
      method: "isParameters",
      equals: false,
      programmer: _chunkCPSQWCQRjs.FunctionalIsParametersProgrammer.write
    }), "isParameters"),
    isReturn: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkUWVKQAJYjs.FunctionalGenericTransformer.transform({
      method: "isReturn",
      equals: false,
      programmer: _chunkCPSQWCQRjs.FunctionalIsReturnProgrammer.write
    }), "isReturn"),
    equalsFunction: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkUWVKQAJYjs.FunctionalGenericTransformer.transform({
      method: "equalsFunction",
      equals: true,
      programmer: _chunkCPSQWCQRjs.FunctionalIsFunctionProgrammer.write
    }), "equalsFunction"),
    equalsParameters: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkUWVKQAJYjs.FunctionalGenericTransformer.transform({
      method: "equalsParameters",
      equals: true,
      programmer: _chunkCPSQWCQRjs.FunctionalIsParametersProgrammer.write
    }), "equalsParameters"),
    equalsReturn: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkUWVKQAJYjs.FunctionalGenericTransformer.transform({
      method: "equalsReturn",
      equals: true,
      programmer: _chunkCPSQWCQRjs.FunctionalIsReturnProgrammer.write
    }), "equalsReturn"),
    // VALIDATIONS
    validateFunction: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkUWVKQAJYjs.FunctionalGenericTransformer.transform({
      method: "validateFunction",
      equals: false,
      programmer: _chunkH7IR3MNVjs.FunctionalValidateFunctionProgrammer.write
    }), "validateFunction"),
    validateParameters: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkUWVKQAJYjs.FunctionalGenericTransformer.transform({
      method: "validateParameters",
      equals: false,
      programmer: _chunkH7IR3MNVjs.FunctionalValidateParametersProgrammer.write
    }), "validateParameters"),
    validateReturn: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkUWVKQAJYjs.FunctionalGenericTransformer.transform({
      method: "validateReturn",
      equals: false,
      programmer: _chunkH7IR3MNVjs.FunctionalValidateReturnProgrammer.write
    }), "validateReturn"),
    validateEqualsFunction: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkUWVKQAJYjs.FunctionalGenericTransformer.transform({
      method: "validateEqualsFunction",
      equals: true,
      programmer: _chunkH7IR3MNVjs.FunctionalValidateFunctionProgrammer.write
    }), "validateEqualsFunction"),
    validateEqualsParameters: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkUWVKQAJYjs.FunctionalGenericTransformer.transform({
      method: "validateEqualsParameters",
      equals: true,
      programmer: _chunkH7IR3MNVjs.FunctionalValidateParametersProgrammer.write
    }), "validateEqualsParameters"),
    validateEqualsReturn: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkUWVKQAJYjs.FunctionalGenericTransformer.transform({
      method: "validateEqualsReturn",
      equals: true,
      programmer: _chunkH7IR3MNVjs.FunctionalValidateReturnProgrammer.write
    }), "validateEqualsReturn")
  },
  http: {
    // FORM-DATA
    formData: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkIAJCMAL3js.HttpFormDataTransformer.transform, "formData"),
    isFormData: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkRAGML2QRjs.HttpIsFormDataTransformer.transform, "isFormData"),
    assertFormData: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk3ZXRS6BCjs.HttpAssertFormDataTransformer.transform, "assertFormData"),
    validateFormData: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkZ536S3JPjs.HttpValidateFormDataTransformer.transform, "validateFormData"),
    // HEADERS
    headers: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkPIQSF4GGjs.HttpHeadersTransformer.transform, "headers"),
    isHeaders: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkUSUY6U2Ljs.HttpIsHeadersTransformer.transform, "isHeaders"),
    assertHeaders: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk2PIG35KTjs.HttpAssertHeadersTransformer.transform, "assertHeaders"),
    validateHeaders: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkDZEFC5PYjs.HttpValidateHeadersTransformer.transform, "validateHeaders"),
    // PARAMETER
    parameter: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkOUAIHSZMjs.HttpParameterTransformer.transform, "parameter"),
    // QUERY
    query: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk5LTD2YNAjs.HttpQueryTransformer.transform, "query"),
    isQuery: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkQW4TEGE6js.HttpIsQueryTransformer.transform, "isQuery"),
    assertQuery: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkGFMWU5E5js.HttpAssertQueryTransformer.transform, "assertQuery"),
    validateQuery: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkKB5CFO72js.HttpValidateQueryTransformer.transform, "validateQuery"),
    // FACTORIES
    createFormData: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk7V65WCFBjs.CreateHttpFormDataTransformer.transform, "createFormData"),
    createIsFormData: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkXO5RM3RAjs.CreateHttpIsFormDataTransformer.transform, "createIsFormData"),
    createAssertFormData: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkY7D55ULAjs.CreateHttpAssertFormDataTransformer.transform, "createAssertFormData"),
    createValidateFormData: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkQLPE344Sjs.CreateHttpValidateFormDataTransformer.transform, "createValidateFormData"),
    createHeaders: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkIS2EQG3Tjs.CreateHttpHeadersTransformer.transform, "createHeaders"),
    createIsHeaders: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkVLIOL4FBjs.CreateHttpIsHeadersTransformer.transform, "createIsHeaders"),
    createAssertHeaders: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkFJJEAJC5js.CreateHttpAssertHeadersTransformer.transform, "createAssertHeaders"),
    createValidateHeaders: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk4VXCZ3W2js.CreateHttpValidateHeadersTransformer.transform, "createValidateHeaders"),
    createParameter: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkXTUELXO7js.CreateHttpParameterTransformer.transform, "createParameter"),
    createQuery: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkST66HWD3js.CreateHttpQueryTransformer.transform, "createQuery"),
    createIsQuery: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkGA4PQANQjs.CreateHttpIsQueryTransformer.transform, "createIsQuery"),
    createAssertQuery: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkX7WTZR6Hjs.CreateHttpAssertQueryTransformer.transform, "createAssertQuery"),
    createValidateQuery: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkC42VQUJIjs.CreateHttpValidateQueryTransformer.transform, "createValidateQuery")
  },
  json: {
    // SCHEMA
    application: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => (P) => () => _chunkQ6SLZM4Ajs.JsonApplicationTransformer.transform(P), "application"),
    // PARSER
    isParse: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkTGFG7OZ4js.JsonIsParseTransformer.transform, "isParse"),
    assertParse: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkVYO2KFBBjs.JsonAssertParseTransformer.transform, "assertParse"),
    validateParse: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkHTFOKNL4js.JsonValidateParseTransformer.transform, "validateParse"),
    // STRINGIFY
    stringify: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkQB5L6AURjs.JsonStringifyTransformer.transform, "stringify"),
    assertStringify: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkXZFKZ55Kjs.JsonAssertStringifyTransformer.transform, "assertStringify"),
    isStringify: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkG7BEANEAjs.JsonIsStringifyTransformer.transform, "isStringify"),
    validateStringify: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkSID55T5Pjs.JsonValidateStringifyTransformer.transform, "validateStringify"),
    // FACTORIES
    createIsParse: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkTPCXPWEGjs.JsonCreateIsParseTransformer.transform, "createIsParse"),
    createAssertParse: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk2THHRMDXjs.JsonCreateAssertParseTransformer.transform, "createAssertParse"),
    createValidateParse: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk4FVJJZN7js.JsonCreateValidateParseTransformer.transform, "createValidateParse"),
    createStringify: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkJICOYV77js.JsonCreateStringifyTransformer.transform, "createStringify"),
    createAssertStringify: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkJXY3ISBHjs.JsonCreateAssertStringifyTransformer.transform, "createAssertStringify"),
    createIsStringify: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkEZVFDCCDjs.JsonCreateIsStringifyTransformer.transform, "createIsStringify"),
    createValidateStringify: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkMNFMM65Wjs.JsonCreateValidateStringifyTransformer.transform, "createValidateStringify")
  },
  protobuf: {
    // SCHEMA
    message: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkH6DKHRYZjs.ProtobufMessageTransformer.transform, "message"),
    // ENCODE
    encode: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkRJKVVFJ6js.ProtobufEncodeTransformer.transform, "encode"),
    assertEncode: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk2XS3LXJ6js.ProtobufAssertEncodeTransformer.transform, "assertEncode"),
    isEncode: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkYGQCR4Z7js.ProtobufIsEncodeTransformer.transform, "isEncode"),
    validateEncode: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkTY63SNXCjs.ProtobufValidateEncodeTransformer.transform, "validateEncode"),
    // DECODE
    decode: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkXY74IV24js.ProtobufDecodeTransformer.transform, "decode"),
    assertDecode: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkKNDAKB7Pjs.ProtobufAssertDecodeTransformer.transform, "assertDecode"),
    isDecode: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkRBSKP3HFjs.ProtobufIsDecodeTransformer.transform, "isDecode"),
    validateDecode: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkIUSD4H67js.ProtobufValidateDecodeTransformer.transform, "validateDecode"),
    // FACTORIES
    createEncode: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkUY7RNYQTjs.ProtobufCreateEncodeTransformer.transform, "createEncode"),
    createAssertEncode: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkYF5ITYVCjs.ProtobufCreateAssertEncodeTransformer.transform, "createAssertEncode"),
    createIsEncode: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkZQNE2AF5js.ProtobufCreateIsEncodeTransformer.transform, "createIsEncode"),
    createValidateEncode: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkIFAPD7LKjs.ProtobufCreateValidateEncodeTransformer.transform, "createValidateEncode"),
    createDecode: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkO2ATMSLIjs.ProtobufCreateDecodeTransformer.transform, "createDecode"),
    createAssertDecode: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkAAYHETYSjs.ProtobufCreateAssertDecodeTransformer.transform, "createAssertDecode"),
    createIsDecode: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkITVLJRA6js.ProtobufCreateIsDecodeTransformer.transform, "createIsDecode"),
    createValidateDecode: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkS6PZJ3TSjs.ProtobufCreateValidateDecodeTransformer.transform, "createValidateDecode")
  },
  reflect: {
    metadata: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkBHZXUKV5js.ReflectMetadataTransformer.transform, "metadata")
  },
  misc: {
    literals: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => (project) => () => _chunk5TQSG6PVjs.MiscLiteralsTransformer.transform(project), "literals"),
    // CLONE
    clone: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk6XXSVWM2js.MiscCloneTransformer.transform, "clone"),
    assertClone: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk4FPYZOE5js.MiscAssertCloneTransformer.transform, "assertClone"),
    isClone: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk4F33AEA5js.MiscIsCloneTransformer.transform, "isClone"),
    validateClone: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkQW3RTG5Djs.MiscValidateCloneTransformer.transform, "validateClone"),
    // PRUNE
    prune: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkS3LB2I3Yjs.MiscPruneTransformer.transform, "prune"),
    assertPrune: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkVKTHWA3Gjs.MiscAssertPruneTransformer.transform, "assertPrune"),
    isPrune: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkSYYX566Cjs.MiscIsPruneTransformer.transform, "isPrune"),
    validatePrune: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk2DMSCLSSjs.MiscValidatePruneTransformer.transform, "validatePrune"),
    // FACTORIES
    createClone: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkDK52XAWEjs.MiscCreateCloneTransformer.transform, "createClone"),
    createAssertClone: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk53IZJEK3js.MiscCreateAssertCloneTransformer.transform, "createAssertClone"),
    createIsClone: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk73KFM6BIjs.MiscCreateIsCloneTransformer.transform, "createIsClone"),
    createValidateClone: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk3LMSDMDPjs.MiscCreateValidateCloneTransformer.transform, "createValidateClone"),
    createPrune: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkBSQGBUDXjs.MiscCreatePruneTransformer.transform, "createPrune"),
    createAssertPrune: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkOEHDIF4Yjs.MiscCreateAssertPruneTransformer.transform, "createAssertPrune"),
    createIsPrune: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk5EGS23ZXjs.MiscCreateIsPruneTransformer.transform, "createIsPrune"),
    createValidatePrune: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkEP7OOKVHjs.MiscCreateValidatePruneTransformer.transform, "createValidatePrune")
  },
  notations: {
    // CAMEL
    camel: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkHB3DBQ7Jjs.NotationGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.camel), "camel"),
    assertCamel: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkQVJLSKTOjs.NotationAssertGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.camel), "assertCamel"),
    isCamel: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk35SBIVTOjs.NotationIsGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.camel), "isCamel"),
    validateCamel: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkSGDCE5QXjs.NotationValidateGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.camel), "validateCamel"),
    // PASCAL
    pascal: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkHB3DBQ7Jjs.NotationGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.pascal), "pascal"),
    assertPascal: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkQVJLSKTOjs.NotationAssertGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.pascal), "assertPascal"),
    isPascal: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk35SBIVTOjs.NotationIsGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.pascal), "isPascal"),
    validatePascal: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkSGDCE5QXjs.NotationValidateGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.pascal), "validatePascal"),
    // SNAKE
    snake: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkHB3DBQ7Jjs.NotationGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.snake), "snake"),
    assertSnake: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkQVJLSKTOjs.NotationAssertGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.snake), "assertSnake"),
    isSnake: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunk35SBIVTOjs.NotationIsGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.snake), "isSnake"),
    validateSnake: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkSGDCE5QXjs.NotationValidateGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.snake), "validateSnake"),
    // FACTORIES
    createCamel: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkPVOFUC5Zjs.NotationCreateGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.camel), "createCamel"),
    createAssertCamel: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkRLBMKEQZjs.NotationCreateAssertGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.camel), "createAssertCamel"),
    createIsCamel: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkMLDM7HRVjs.NotationCreateIsGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.camel), "createIsCamel"),
    createValidateCamel: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkV2NZSRQIjs.NotationCreateValidateGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.camel), "createValidateCamel"),
    createPascal: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkPVOFUC5Zjs.NotationCreateGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.pascal), "createPascal"),
    createAssertPascal: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkRLBMKEQZjs.NotationCreateAssertGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.pascal), "createAssertPascal"),
    createIsPascal: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkMLDM7HRVjs.NotationCreateIsGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.pascal), "createIsPascal"),
    createValidatePascal: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkV2NZSRQIjs.NotationCreateValidateGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.pascal), "createValidatePascal"),
    createSnake: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkPVOFUC5Zjs.NotationCreateGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.snake), "createSnake"),
    createAssertSnake: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkRLBMKEQZjs.NotationCreateAssertGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.snake), "createAssertSnake"),
    createIsSnake: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkMLDM7HRVjs.NotationCreateIsGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.snake), "createIsSnake"),
    createValidateSnake: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _chunkV2NZSRQIjs.NotationCreateValidateGeneralTransformer.transform(_chunkI6WYJFF2js.NamingConvention_exports.snake), "createValidateSnake")
  }
};



exports.CallExpressionTransformer = CallExpressionTransformer;
//# sourceMappingURL=chunk-HLD5PGTQ.js.map