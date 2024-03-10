const call = <T extends string>(name: T) =>
  `$importSpecific("typia/lib/internal/$is_format_${name}", "$is_format_${name}")($input)` as const;

export const FormatCheatSheet = {
  // SPECIAL CHARACTERS
  byte: call("$byte"),
  password: call("$password"),
  regex: call("$regex"),
  uuid: call("$uuid"),

  // ADDRESSES
  email: call("$email"),
  hostname: call("$hostname"),
  "idn-email": call("$idn_email"),
  "idn-hostname": call("$idn_hostname"),
  iri: call("$iri"),
  "iri-reference": call("$iri_reference"),
  ipv4: call("$ipv4"),
  ipv6: call("$ipv6"),
  uri: call("$uri"),
  "uri-reference": call("$uri_reference"),
  "uri-template": call("$uri_template"),
  url: call("$url"),

  // TIMESTAMPS
  "date-time": call("$date_time"),
  date: call("$date"),
  time: call("$time"),
  duration: call("$duration"),

  // POINTERS
  "json-pointer": call("$json_pointer"),
  "json-pointer-uri-fragment": call("$json_pointer_uri_fragment"),
  "relative-json-pointer": call("$relative_json_pointer"),
} as const;
