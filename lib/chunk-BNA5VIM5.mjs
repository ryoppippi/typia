import {
  tags_exports
} from "./chunk-EP3KWYIW.mjs";
import {
  protobuf_exports
} from "./chunk-NYKJJAYN.mjs";
import {
  reflect_exports
} from "./chunk-ULUUZHFX.mjs";
import {
  functional_exports
} from "./chunk-SYHW5227.mjs";
import {
  http_exports
} from "./chunk-2XYJ6UQE.mjs";
import {
  json_exports
} from "./chunk-SRIZVGAL.mjs";
import {
  misc_exports
} from "./chunk-KOSSSGHT.mjs";
import {
  notations_exports
} from "./chunk-MGRNGJTC.mjs";
import {
  assert,
  random,
  validate
} from "./chunk-KHA6K6FV.mjs";
import {
  is
} from "./chunk-JL3OMPIR.mjs";
import {
  TypeGuardError
} from "./chunk-ERALXJG2.mjs";
import {
  __export,
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/module.ts
var module_exports = {};
__export(module_exports, {
  TypeGuardError: () => TypeGuardError,
  assert: () => assertPure,
  assertEquals: () => assertEqualsPure,
  assertGuard: () => assertGuardPure,
  assertGuardEquals: () => assertGuardEqualsPure,
  createAssert: () => createAssertPure,
  createAssertEquals: () => createAssertEqualsPure,
  createAssertGuard: () => createAssertGuardPure,
  createAssertGuardEquals: () => createAssertGuardEqualsPure,
  createEquals: () => createEqualsPure,
  createIs: () => createIsPure,
  createRandom: () => createRandomPure,
  createValidate: () => createValidatePure,
  createValidateEquals: () => createValidateEqualsPure,
  equals: () => equalsPure,
  functional: () => functional_exports,
  http: () => http_exports,
  is: () => isPure,
  json: () => json_exports,
  misc: () => misc_exports,
  notations: () => notations_exports,
  protobuf: () => protobuf_exports,
  random: () => randomPure,
  reflect: () => reflect_exports,
  tags: () => tags_exports,
  validate: () => validatePure,
  validateEquals: () => validateEqualsPure
});
function assert2() {
  halt("assert");
}
__name(assert2, "assert");
var assertPure = /* @__PURE__ */ Object.assign(assert2, /* @__PURE__ */ assert("assert"));
function assertGuard() {
  halt("assertGuard");
}
__name(assertGuard, "assertGuard");
var assertGuardPure = /* @__PURE__ */ Object.assign(assertGuard, /* @__PURE__ */ assert("assertGuard"));
function is2() {
  halt("is");
}
__name(is2, "is");
var isPure = /* @__PURE__ */ Object.assign(is2, /* @__PURE__ */ assert("is"));
function validate2() {
  halt("validate");
}
__name(validate2, "validate");
var validatePure = /* @__PURE__ */ Object.assign(validate2, /* @__PURE__ */ validate());
function assertEquals() {
  halt("assertEquals");
}
__name(assertEquals, "assertEquals");
var assertEqualsPure = /* @__PURE__ */ Object.assign(assertEquals, /* @__PURE__ */ assert("assertEquals"));
function assertGuardEquals() {
  halt("assertGuardEquals");
}
__name(assertGuardEquals, "assertGuardEquals");
var assertGuardEqualsPure = /* @__PURE__ */ Object.assign(assertGuardEquals, /* @__PURE__ */ assert("assertGuardEquals"));
function equals() {
  halt("equals");
}
__name(equals, "equals");
var equalsPure = /* @__PURE__ */ Object.assign(equals, /* @__PURE__ */ is());
function validateEquals() {
  halt("validateEquals");
}
__name(validateEquals, "validateEquals");
var validateEqualsPure = /* @__PURE__ */ Object.assign(validateEquals, /* @__PURE__ */ validate());
function random2() {
  halt("random");
}
__name(random2, "random");
var randomPure = /* @__PURE__ */ Object.assign(random2, /* @__PURE__ */ random());
function createAssert() {
  halt("createAssert");
}
__name(createAssert, "createAssert");
var createAssertPure = /* @__PURE__ */ Object.assign(createAssert, assertPure);
function createAssertGuard() {
  halt("createAssertGuard");
}
__name(createAssertGuard, "createAssertGuard");
var createAssertGuardPure = /* @__PURE__ */ Object.assign(createAssertGuard, assertGuardPure);
function createIs() {
  halt("createIs");
}
__name(createIs, "createIs");
var createIsPure = /* @__PURE__ */ Object.assign(createIs, isPure);
function createValidate() {
  halt("createValidate");
}
__name(createValidate, "createValidate");
var createValidatePure = /* @__PURE__ */ Object.assign(createValidate, validatePure);
function createAssertEquals() {
  halt("createAssertEquals");
}
__name(createAssertEquals, "createAssertEquals");
var createAssertEqualsPure = /* @__PURE__ */ Object.assign(createAssertEquals, assertEqualsPure);
function createAssertGuardEquals() {
  halt("createAssertGuardEquals");
}
__name(createAssertGuardEquals, "createAssertGuardEquals");
var createAssertGuardEqualsPure = /* @__PURE__ */ Object.assign(createAssertGuardEquals, assertGuardEqualsPure);
function createEquals() {
  halt("createEquals");
}
__name(createEquals, "createEquals");
var createEqualsPure = /* @__PURE__ */ Object.assign(createEquals, equalsPure);
function createValidateEquals() {
  halt("createValidateEquals");
}
__name(createValidateEquals, "createValidateEquals");
var createValidateEqualsPure = /* @__PURE__ */ Object.assign(createValidateEquals, validateEqualsPure);
function createRandom() {
  halt("createRandom");
}
__name(createRandom, "createRandom");
var createRandomPure = /* @__PURE__ */ Object.assign(createRandom, randomPure);
function halt(name) {
  throw new Error(`Error on typia.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`);
}
__name(halt, "halt");

export {
  assertPure,
  assertGuardPure,
  isPure,
  validatePure,
  assertEqualsPure,
  assertGuardEqualsPure,
  equalsPure,
  validateEqualsPure,
  randomPure,
  createAssertPure,
  createAssertGuardPure,
  createIsPure,
  createValidatePure,
  createAssertEqualsPure,
  createAssertGuardEqualsPure,
  createEqualsPure,
  createValidateEqualsPure,
  createRandomPure,
  module_exports
};
//# sourceMappingURL=chunk-BNA5VIM5.mjs.map