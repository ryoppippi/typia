import {
  __export,
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/utils/RandomGenerator/RandomGenerator.ts
var RandomGenerator_exports = {};
__export(RandomGenerator_exports, {
  array: () => array,
  bigint: () => bigint,
  boolean: () => boolean,
  byte: () => byte,
  date: () => date,
  datetime: () => datetime,
  duration: () => duration,
  email: () => email,
  hostname: () => hostname,
  idnEmail: () => idnEmail,
  idnHostname: () => idnHostname,
  integer: () => integer,
  ipv4: () => ipv4,
  ipv6: () => ipv6,
  iri: () => iri,
  iriReference: () => iriReference,
  jsonPointer: () => jsonPointer,
  length: () => length,
  number: () => number,
  password: () => password,
  pattern: () => pattern,
  pick: () => pick,
  regex: () => regex,
  relativeJsonPointer: () => relativeJsonPointer,
  string: () => string,
  time: () => time,
  uri: () => uri,
  uriReference: () => uriReference,
  uriTemplate: () => uriTemplate,
  url: () => url,
  uuid: () => uuid
});
import RandExp from "randexp";
var ALPHABETS = "abcdefghijklmnopqrstuvwxyz";
var boolean = /* @__PURE__ */ __name(() => Math.random() < 0.5, "boolean");
var integer = /* @__PURE__ */ __name((min, max) => {
  min ??= 0;
  max ??= 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}, "integer");
var bigint = /* @__PURE__ */ __name((min, max) => BigInt(integer(Number(min ?? BigInt(0)), Number(max ?? BigInt(100)))), "bigint");
var number = /* @__PURE__ */ __name((min, max) => {
  min ??= 0;
  max ??= 100;
  return Math.random() * (max - min) + min;
}, "number");
var string = /* @__PURE__ */ __name((length2) => new Array(length2 ?? integer(5, 10)).fill(0).map(() => ALPHABETS[integer(0, ALPHABETS.length - 1)]).join(""), "string");
var array = /* @__PURE__ */ __name((closure, count) => new Array(count ?? length()).fill(0).map((_e, index) => closure(index)), "array");
var pick = /* @__PURE__ */ __name((array2) => array2[integer(0, array2.length - 1)], "pick");
var length = /* @__PURE__ */ __name(() => integer(0, 3), "length");
var pattern = /* @__PURE__ */ __name((regex2) => {
  const r = new RandExp(regex2);
  for (let i = 0; i < 10; ++i) {
    const str = r.gen();
    if (regex2.test(str)) return str;
  }
  return r.gen();
}, "pattern");
var byte = /* @__PURE__ */ __name(() => "vt7ekz4lIoNTTS9sDQYdWKharxIFAR54+z/umIxSgUM=", "byte");
var password = /* @__PURE__ */ __name(() => string(integer(4, 16)), "password");
var regex = /* @__PURE__ */ __name(() => "/^(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)$/", "regex");
var uuid = /* @__PURE__ */ __name(() => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
  const r = Math.random() * 16 | 0;
  const v = c === "x" ? r : r & 3 | 8;
  return v.toString(16);
}), "uuid");
var email = /* @__PURE__ */ __name(() => `${string(10)}@${string(10)}.${string(3)}`, "email");
var hostname = /* @__PURE__ */ __name(() => `${string(10)}.${string(3)}`, "hostname");
var idnEmail = /* @__PURE__ */ __name(() => email(), "idnEmail");
var idnHostname = /* @__PURE__ */ __name(() => hostname(), "idnHostname");
var iri = /* @__PURE__ */ __name(() => url(), "iri");
var iriReference = /* @__PURE__ */ __name(() => url(), "iriReference");
var ipv4 = /* @__PURE__ */ __name(() => array(() => integer(0, 255), 4).join("."), "ipv4");
var ipv6 = /* @__PURE__ */ __name(() => array(() => integer(0, 65535).toString(16), 8).join(":"), "ipv6");
var uri = /* @__PURE__ */ __name(() => url(), "uri");
var uriReference = /* @__PURE__ */ __name(() => url(), "uriReference");
var uriTemplate = /* @__PURE__ */ __name(() => url(), "uriTemplate");
var url = /* @__PURE__ */ __name(() => `https://${string(10)}.${string(3)}`, "url");
var datetime = /* @__PURE__ */ __name((min, max) => new Date(number(min ?? Date.now() - 30 * DAY, max ?? Date.now() + 7 * DAY)).toISOString(), "datetime");
var date = /* @__PURE__ */ __name((min, max) => new Date(number(min ?? 0, max ?? Date.now() * 2)).toISOString().substring(0, 10), "date");
var time = /* @__PURE__ */ __name(() => new Date(number(0, DAY)).toISOString().substring(11), "time");
var duration = /* @__PURE__ */ __name(() => {
  const period = durate([
    [
      "Y",
      integer(0, 100)
    ],
    [
      "M",
      integer(0, 12)
    ],
    [
      "D",
      integer(0, 31)
    ]
  ]);
  const time2 = durate([
    [
      "H",
      integer(0, 24)
    ],
    [
      "M",
      integer(0, 60)
    ],
    [
      "S",
      integer(0, 60)
    ]
  ]);
  if (period.length + time2.length === 0) return "PT0S";
  return `P${period}${time2.length ? "T" : ""}${time2}`;
}, "duration");
var jsonPointer = /* @__PURE__ */ __name(() => `/components/schemas/${string(10)}`, "jsonPointer");
var relativeJsonPointer = /* @__PURE__ */ __name(() => `${integer(0, 10)}#`, "relativeJsonPointer");
var DAY = 864e5;
var durate = /* @__PURE__ */ __name((elements) => elements.filter(([_unit, value]) => value !== 0).map(([unit, value]) => `${value}${unit}`).join(""), "durate");

export {
  boolean,
  integer,
  bigint,
  number,
  string,
  array,
  pick,
  length,
  pattern,
  byte,
  password,
  regex,
  uuid,
  email,
  hostname,
  idnEmail,
  idnHostname,
  iri,
  iriReference,
  ipv4,
  ipv6,
  uri,
  uriReference,
  uriTemplate,
  url,
  datetime,
  date,
  time,
  duration,
  jsonPointer,
  relativeJsonPointer,
  RandomGenerator_exports
};
//# sourceMappingURL=chunk-3TFN5QJ6.mjs.map