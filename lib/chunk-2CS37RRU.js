"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/utils/RandomGenerator/RandomGenerator.ts
var RandomGenerator_exports = {};
_chunkUZ5BS2M3js.__export.call(void 0, RandomGenerator_exports, {
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
var _randexp = require('randexp'); var _randexp2 = _interopRequireDefault(_randexp);
var ALPHABETS = "abcdefghijklmnopqrstuvwxyz";
var boolean = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => Math.random() < 0.5, "boolean");
var integer = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (min, max) => {
  min ??= 0;
  max ??= 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}, "integer");
var bigint = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (min, max) => BigInt(integer(Number(_nullishCoalesce(min, () => ( BigInt(0)))), Number(_nullishCoalesce(max, () => ( BigInt(100)))))), "bigint");
var number = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (min, max) => {
  min ??= 0;
  max ??= 100;
  return Math.random() * (max - min) + min;
}, "number");
var string = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (length2) => new Array(_nullishCoalesce(length2, () => ( integer(5, 10)))).fill(0).map(() => ALPHABETS[integer(0, ALPHABETS.length - 1)]).join(""), "string");
var array = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (closure, count) => new Array(_nullishCoalesce(count, () => ( length()))).fill(0).map((_e, index) => closure(index)), "array");
var pick = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (array2) => array2[integer(0, array2.length - 1)], "pick");
var length = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => integer(0, 3), "length");
var pattern = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (regex2) => {
  const r = new (0, _randexp2.default)(regex2);
  for (let i = 0; i < 10; ++i) {
    const str = r.gen();
    if (regex2.test(str)) return str;
  }
  return r.gen();
}, "pattern");
var byte = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => "vt7ekz4lIoNTTS9sDQYdWKharxIFAR54+z/umIxSgUM=", "byte");
var password = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => string(integer(4, 16)), "password");
var regex = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => "/^(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)$/", "regex");
var uuid = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
  const r = Math.random() * 16 | 0;
  const v = c === "x" ? r : r & 3 | 8;
  return v.toString(16);
}), "uuid");
var email = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => `${string(10)}@${string(10)}.${string(3)}`, "email");
var hostname = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => `${string(10)}.${string(3)}`, "hostname");
var idnEmail = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => email(), "idnEmail");
var idnHostname = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => hostname(), "idnHostname");
var iri = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => url(), "iri");
var iriReference = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => url(), "iriReference");
var ipv4 = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => array(() => integer(0, 255), 4).join("."), "ipv4");
var ipv6 = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => array(() => integer(0, 65535).toString(16), 8).join(":"), "ipv6");
var uri = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => url(), "uri");
var uriReference = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => url(), "uriReference");
var uriTemplate = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => url(), "uriTemplate");
var url = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => `https://${string(10)}.${string(3)}`, "url");
var datetime = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (min, max) => new Date(number(_nullishCoalesce(min, () => ( Date.now() - 30 * DAY)), _nullishCoalesce(max, () => ( Date.now() + 7 * DAY)))).toISOString(), "datetime");
var date = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (min, max) => new Date(number(_nullishCoalesce(min, () => ( 0)), _nullishCoalesce(max, () => ( Date.now() * 2)))).toISOString().substring(0, 10), "date");
var time = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => new Date(number(0, DAY)).toISOString().substring(11), "time");
var duration = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => {
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
var jsonPointer = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => `/components/schemas/${string(10)}`, "jsonPointer");
var relativeJsonPointer = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => `${integer(0, 10)}#`, "relativeJsonPointer");
var DAY = 864e5;
var durate = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (elements) => elements.filter(([_unit, value]) => value !== 0).map(([unit, value]) => `${value}${unit}`).join(""), "durate");


































exports.boolean = boolean; exports.integer = integer; exports.bigint = bigint; exports.number = number; exports.string = string; exports.array = array; exports.pick = pick; exports.length = length; exports.pattern = pattern; exports.byte = byte; exports.password = password; exports.regex = regex; exports.uuid = uuid; exports.email = email; exports.hostname = hostname; exports.idnEmail = idnEmail; exports.idnHostname = idnHostname; exports.iri = iri; exports.iriReference = iriReference; exports.ipv4 = ipv4; exports.ipv6 = ipv6; exports.uri = uri; exports.uriReference = uriReference; exports.uriTemplate = uriTemplate; exports.url = url; exports.datetime = datetime; exports.date = date; exports.time = time; exports.duration = duration; exports.jsonPointer = jsonPointer; exports.relativeJsonPointer = relativeJsonPointer; exports.RandomGenerator_exports = RandomGenerator_exports;
//# sourceMappingURL=chunk-2CS37RRU.js.map