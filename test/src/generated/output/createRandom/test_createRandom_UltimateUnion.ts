import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_createRandom_UltimateUnion = _test_random(
  "UltimateUnion",
)<UltimateUnion>(UltimateUnion)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (UltimateUnion as any).RANDOM,
  ): import("typia").Resolved<UltimateUnion> => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
      version: "3.1",
      components: $ro1(_recursive, _recursive ? 1 + _depth : _depth),
      schemas: (generator?.array ?? $generator.array)(() =>
        $pick([
          () => $ro3(_recursive, _recursive ? 1 + _depth : _depth),
          () => $ro4(_recursive, _recursive ? 1 + _depth : _depth),
          () => $ro6(_recursive, _recursive ? 1 + _depth : _depth),
          () => $ro5(_recursive, _recursive ? 1 + _depth : _depth),
          () => $ro7(_recursive, _recursive ? 1 + _depth : _depth),
          () => $ro8(_recursive, _recursive ? 1 + _depth : _depth),
          () => $ro9(_recursive, _recursive ? 1 + _depth : _depth),
          () => $ro10(_recursive, _recursive ? 1 + _depth : _depth),
          () => $ro11(_recursive, _recursive ? 1 + _depth : _depth),
          () => $ro13(_recursive, _recursive ? 1 + _depth : _depth),
          () => $ro12(_recursive, _recursive ? 1 + _depth : _depth),
        ])(),
      ),
    });
    const $ro1 = (_recursive: boolean = false, _depth: number = 0): any => ({
      schemas: $ro2(_recursive, _recursive ? 1 + _depth : _depth),
      securitySchemes: $pick([
        () => undefined,
        () => $ro14(_recursive, _recursive ? 1 + _depth : _depth),
      ])(),
    });
    const $ro2 = (_recursive: boolean = true, _depth: number = 0): any => {
      const output = {} as any;
      if (5 >= _depth) {
        (generator?.array ?? $generator.array)(
          () =>
            (output[
              (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)()
            ] = $pick([
              () => $ro3(true, _recursive ? 1 + _depth : _depth),
              () => $ro4(true, _recursive ? 1 + _depth : _depth),
              () => $ro6(true, _recursive ? 1 + _depth : _depth),
              () => $ro5(true, _recursive ? 1 + _depth : _depth),
              () => $ro7(true, _recursive ? 1 + _depth : _depth),
              () => $ro8(true, _recursive ? 1 + _depth : _depth),
              () => $ro9(true, _recursive ? 1 + _depth : _depth),
              () => $ro10(true, _recursive ? 1 + _depth : _depth),
              () => $ro11(true, _recursive ? 1 + _depth : _depth),
              () => $ro13(true, _recursive ? 1 + _depth : _depth),
              () => $ro12(true, _recursive ? 1 + _depth : _depth),
            ])()),
          (generator?.integer ?? $generator.integer)(0, 3),
        );
      }
      return output;
    };
    const $ro3 = (_recursive: boolean = false, _depth: number = 0): any => ({
      const: $pick([
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
      title: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      description: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      deprecated: $pick([
        () => undefined,
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
    });
    const $ro4 = (_recursive: boolean = false, _depth: number = 0): any => ({
      default: $pick([
        () => undefined,
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
      type: "boolean",
      title: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      description: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      deprecated: $pick([
        () => undefined,
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
    });
    const $ro5 = (_recursive: boolean = false, _depth: number = 0): any => ({
      default: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"int32">',
              kind: "type",
              value: "int32",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
      ])(),
      minimum: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"int32">',
              kind: "type",
              value: "int32",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
      ])(),
      maximum: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"int32">',
              kind: "type",
              value: "int32",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
      ])(),
      exclusiveMinimum: $pick([
        () => undefined,
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
      exclusiveMaximum: $pick([
        () => undefined,
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
      multipleOf: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"uint32">',
              kind: "type",
              value: "uint32",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
      ])(),
      type: "integer",
      title: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      description: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      deprecated: $pick([
        () => undefined,
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
    });
    const $ro6 = (_recursive: boolean = false, _depth: number = 0): any => ({
      default: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      ])(),
      minimum: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      ])(),
      maximum: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      ])(),
      exclusiveMinimum: $pick([
        () => undefined,
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
      exclusiveMaximum: $pick([
        () => undefined,
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
      multipleOf: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      ])(),
      type: "number",
      title: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      description: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      deprecated: $pick([
        () => undefined,
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
    });
    const $ro7 = (_recursive: boolean = false, _depth: number = 0): any => ({
      contentMediaType: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      default: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      enum: $pick([
        () => undefined,
        () =>
          (generator?.array ?? $generator.array)(
            () =>
              (generator?.customs ?? $generator.customs)?.string?.([]) ??
              (generator?.string ?? $generator.string)(),
          ),
      ])(),
      format: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      pattern: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      minLength: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"uint32">',
              kind: "type",
              value: "uint32",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
      ])(),
      maxLength: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"uint32">',
              kind: "type",
              value: "uint32",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
      ])(),
      type: "string",
      title: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      description: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      deprecated: $pick([
        () => undefined,
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
    });
    const $ro8 = (_recursive: boolean = true, _depth: number = 0): any => ({
      items: $pick([
        () => $ro3(true, _recursive ? 1 + _depth : _depth),
        () => $ro4(true, _recursive ? 1 + _depth : _depth),
        () => $ro6(true, _recursive ? 1 + _depth : _depth),
        () => $ro5(true, _recursive ? 1 + _depth : _depth),
        () => $ro7(true, _recursive ? 1 + _depth : _depth),
        () => $ro8(true, _recursive ? 1 + _depth : _depth),
        () => $ro9(true, _recursive ? 1 + _depth : _depth),
        () => $ro10(true, _recursive ? 1 + _depth : _depth),
        () => $ro11(true, _recursive ? 1 + _depth : _depth),
        () => $ro13(true, _recursive ? 1 + _depth : _depth),
        () => $ro12(true, _recursive ? 1 + _depth : _depth),
      ])(),
      minItems: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"uint32">',
              kind: "type",
              value: "uint32",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
      ])(),
      maxItems: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"uint32">',
              kind: "type",
              value: "uint32",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
      ])(),
      type: "array",
      title: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      description: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      deprecated: $pick([
        () => undefined,
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
    });
    const $ro9 = (_recursive: boolean = true, _depth: number = 0): any => ({
      properties: $pick([
        () => undefined,
        () => $ro2(true, _recursive ? 1 + _depth : _depth),
      ])(),
      additionalProperties: $pick([
        () => undefined,
        () => (generator?.boolean ?? $generator.boolean)(),
        () => $ro3(true, _recursive ? 1 + _depth : _depth),
        () => $ro4(true, _recursive ? 1 + _depth : _depth),
        () => $ro6(true, _recursive ? 1 + _depth : _depth),
        () => $ro5(true, _recursive ? 1 + _depth : _depth),
        () => $ro7(true, _recursive ? 1 + _depth : _depth),
        () => $ro8(true, _recursive ? 1 + _depth : _depth),
        () => $ro9(true, _recursive ? 1 + _depth : _depth),
        () => $ro10(true, _recursive ? 1 + _depth : _depth),
        () => $ro11(true, _recursive ? 1 + _depth : _depth),
        () => $ro13(true, _recursive ? 1 + _depth : _depth),
        () => $ro12(true, _recursive ? 1 + _depth : _depth),
      ])(),
      required: $pick([
        () => undefined,
        () =>
          _recursive && 5 < _depth
            ? []
            : 5 >= _depth
              ? (generator?.array ?? $generator.array)(
                  () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
                )
              : [],
      ])(),
      type: "object",
      title: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      description: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      deprecated: $pick([
        () => undefined,
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
    });
    const $ro10 = (_recursive: boolean = false, _depth: number = 0): any => ({
      $ref:
        (generator?.customs ?? $generator.customs)?.string?.([]) ??
        (generator?.string ?? $generator.string)(),
      title: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      description: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      deprecated: $pick([
        () => undefined,
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
    });
    const $ro11 = (_recursive: boolean = true, _depth: number = 0): any => ({
      oneOf:
        _recursive && 5 < _depth
          ? []
          : 5 >= _depth
            ? (generator?.array ?? $generator.array)(() =>
                $pick([
                  () => $ro3(true, _recursive ? 1 + _depth : _depth),
                  () => $ro4(true, _recursive ? 1 + _depth : _depth),
                  () => $ro6(true, _recursive ? 1 + _depth : _depth),
                  () => $ro5(true, _recursive ? 1 + _depth : _depth),
                  () => $ro7(true, _recursive ? 1 + _depth : _depth),
                  () => $ro8(true, _recursive ? 1 + _depth : _depth),
                  () => $ro9(true, _recursive ? 1 + _depth : _depth),
                  () => $ro10(true, _recursive ? 1 + _depth : _depth),
                  () => $ro13(true, _recursive ? 1 + _depth : _depth),
                  () => $ro12(true, _recursive ? 1 + _depth : _depth),
                ])(),
              )
            : [],
      title: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      description: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      deprecated: $pick([
        () => undefined,
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
    });
    const $ro12 = (_recursive: boolean = false, _depth: number = 0): any => ({
      type: "null",
      title: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      description: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      deprecated: $pick([
        () => undefined,
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
    });
    const $ro13 = (_recursive: boolean = false, _depth: number = 0): any => ({
      type: undefined,
      title: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      description: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      deprecated: $pick([
        () => undefined,
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
    });
    const $ro14 = (_recursive: boolean = false, _depth: number = 0): any => {
      const output = {} as any;
      (generator?.array ?? $generator.array)(
        () =>
          (output[
            (generator?.customs ?? $generator.customs)?.string?.([]) ??
              (generator?.string ?? $generator.string)()
          ] = $pick([
            () => $ro15(_recursive, _recursive ? 1 + _depth : _depth),
            () => $ro16(_recursive, _recursive ? 1 + _depth : _depth),
            () => $ro17(_recursive, _recursive ? 1 + _depth : _depth),
            () => $ro18(_recursive, _recursive ? 1 + _depth : _depth),
            () => $ro24(_recursive, _recursive ? 1 + _depth : _depth),
          ])()),
        (generator?.integer ?? $generator.integer)(0, 3),
      );
      return output;
    };
    const $ro15 = (_recursive: boolean = false, _depth: number = 0): any => ({
      type: "apiKey",
      in: $pick([
        () => undefined,
        () => "header",
        () => "query",
        () => "cookie",
      ])(),
      name: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      description: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
    });
    const $ro16 = (_recursive: boolean = false, _depth: number = 0): any => ({
      type: "http",
      scheme: "basic",
      description: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
    });
    const $ro17 = (_recursive: boolean = false, _depth: number = 0): any => ({
      type: "http",
      scheme: "bearer",
      bearerFormat: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      description: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
    });
    const $ro18 = (_recursive: boolean = false, _depth: number = 0): any => ({
      type: "oauth2",
      flows: $ro19(_recursive, _recursive ? 1 + _depth : _depth),
      description: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
    });
    const $ro19 = (_recursive: boolean = false, _depth: number = 0): any => ({
      authorizationCode: $pick([
        () => undefined,
        () => $ro20(_recursive, _recursive ? 1 + _depth : _depth),
      ])(),
      implicit: $pick([
        () => undefined,
        () => $ro22(_recursive, _recursive ? 1 + _depth : _depth),
      ])(),
      password: $pick([
        () => undefined,
        () => $ro23(_recursive, _recursive ? 1 + _depth : _depth),
      ])(),
      clientCredentials: $pick([
        () => undefined,
        () => $ro23(_recursive, _recursive ? 1 + _depth : _depth),
      ])(),
    });
    const $ro20 = (_recursive: boolean = false, _depth: number = 0): any => ({
      authorizationUrl: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      tokenUrl: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      refreshUrl: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      scopes: $pick([
        () => undefined,
        () => $ro21(_recursive, _recursive ? 1 + _depth : _depth),
      ])(),
    });
    const $ro21 = (_recursive: boolean = false, _depth: number = 0): any => {
      const output = {} as any;
      (generator?.array ?? $generator.array)(
        () =>
          (output[
            (generator?.customs ?? $generator.customs)?.string?.([]) ??
              (generator?.string ?? $generator.string)()
          ] =
            (generator?.customs ?? $generator.customs)?.string?.([]) ??
            (generator?.string ?? $generator.string)()),
        (generator?.integer ?? $generator.integer)(0, 3),
      );
      return output;
    };
    const $ro22 = (_recursive: boolean = false, _depth: number = 0): any => ({
      authorizationUrl: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      refreshUrl: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      scopes: $pick([
        () => undefined,
        () => $ro21(_recursive, _recursive ? 1 + _depth : _depth),
      ])(),
    });
    const $ro23 = (_recursive: boolean = false, _depth: number = 0): any => ({
      tokenUrl: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      refreshUrl: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      scopes: $pick([
        () => undefined,
        () => $ro21(_recursive, _recursive ? 1 + _depth : _depth),
      ])(),
    });
    const $ro24 = (_recursive: boolean = false, _depth: number = 0): any => ({
      type: "openIdConnect",
      openIdConnectUrl:
        (generator?.customs ?? $generator.customs)?.string?.([]) ??
        (generator?.string ?? $generator.string)(),
      description: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
    });
    return (generator?.array ?? $generator.array)(() => $ro0());
  },
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): UltimateUnion => {
    const __is = (input: any): input is UltimateUnion => {
      const $io0 = (input: any): boolean =>
        "3.1" === input.version &&
        "object" === typeof input.components &&
        null !== input.components &&
        $io1(input.components) &&
        Array.isArray(input.schemas) &&
        input.schemas.every(
          (elem: any) =>
            "object" === typeof elem &&
            null !== elem &&
            false === Array.isArray(elem) &&
            $iu1(elem),
        );
      const $io1 = (input: any): boolean =>
        "object" === typeof input.schemas &&
        null !== input.schemas &&
        false === Array.isArray(input.schemas) &&
        $io2(input.schemas) &&
        (undefined === input.securitySchemes ||
          ("object" === typeof input.securitySchemes &&
            null !== input.securitySchemes &&
            false === Array.isArray(input.securitySchemes) &&
            $io14(input.securitySchemes)));
      const $io2 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          return (
            "object" === typeof value &&
            null !== value &&
            false === Array.isArray(value) &&
            $iu1(value)
          );
        });
      const $io3 = (input: any): boolean =>
        ("string" === typeof input["const"] ||
          ("number" === typeof input["const"] &&
            Number.isFinite(input["const"])) ||
          "boolean" === typeof input["const"]) &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io4 = (input: any): boolean =>
        (undefined === input["default"] ||
          "boolean" === typeof input["default"]) &&
        "boolean" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io5 = (input: any): boolean =>
        (undefined === input["default"] ||
          ("number" === typeof input["default"] &&
            Math.floor(input["default"]) === input["default"] &&
            -2147483648 <= input["default"] &&
            input["default"] <= 2147483647)) &&
        (undefined === input.minimum ||
          ("number" === typeof input.minimum &&
            Math.floor(input.minimum) === input.minimum &&
            -2147483648 <= input.minimum &&
            input.minimum <= 2147483647)) &&
        (undefined === input.maximum ||
          ("number" === typeof input.maximum &&
            Math.floor(input.maximum) === input.maximum &&
            -2147483648 <= input.maximum &&
            input.maximum <= 2147483647)) &&
        (undefined === input.exclusiveMinimum ||
          "boolean" === typeof input.exclusiveMinimum) &&
        (undefined === input.exclusiveMaximum ||
          "boolean" === typeof input.exclusiveMaximum) &&
        (undefined === input.multipleOf ||
          ("number" === typeof input.multipleOf &&
            Math.floor(input.multipleOf) === input.multipleOf &&
            0 <= input.multipleOf &&
            input.multipleOf <= 4294967295)) &&
        "integer" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io6 = (input: any): boolean =>
        (undefined === input["default"] ||
          ("number" === typeof input["default"] &&
            Number.isFinite(input["default"]))) &&
        (undefined === input.minimum ||
          ("number" === typeof input.minimum &&
            Number.isFinite(input.minimum))) &&
        (undefined === input.maximum ||
          ("number" === typeof input.maximum &&
            Number.isFinite(input.maximum))) &&
        (undefined === input.exclusiveMinimum ||
          "boolean" === typeof input.exclusiveMinimum) &&
        (undefined === input.exclusiveMaximum ||
          "boolean" === typeof input.exclusiveMaximum) &&
        (undefined === input.multipleOf ||
          ("number" === typeof input.multipleOf &&
            Number.isFinite(input.multipleOf))) &&
        "number" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io7 = (input: any): boolean =>
        (undefined === input.contentMediaType ||
          "string" === typeof input.contentMediaType) &&
        (undefined === input["default"] ||
          "string" === typeof input["default"]) &&
        (undefined === input["enum"] ||
          (Array.isArray(input["enum"]) &&
            input["enum"].every((elem: any) => "string" === typeof elem))) &&
        (undefined === input.format || "string" === typeof input.format) &&
        (undefined === input.pattern || "string" === typeof input.pattern) &&
        (undefined === input.minLength ||
          ("number" === typeof input.minLength &&
            Math.floor(input.minLength) === input.minLength &&
            0 <= input.minLength &&
            input.minLength <= 4294967295)) &&
        (undefined === input.maxLength ||
          ("number" === typeof input.maxLength &&
            Math.floor(input.maxLength) === input.maxLength &&
            0 <= input.maxLength &&
            input.maxLength <= 4294967295)) &&
        "string" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io8 = (input: any): boolean =>
        "object" === typeof input.items &&
        null !== input.items &&
        false === Array.isArray(input.items) &&
        $iu1(input.items) &&
        (undefined === input.minItems ||
          ("number" === typeof input.minItems &&
            Math.floor(input.minItems) === input.minItems &&
            0 <= input.minItems &&
            input.minItems <= 4294967295)) &&
        (undefined === input.maxItems ||
          ("number" === typeof input.maxItems &&
            Math.floor(input.maxItems) === input.maxItems &&
            0 <= input.maxItems &&
            input.maxItems <= 4294967295)) &&
        "array" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io9 = (input: any): boolean =>
        (undefined === input.properties ||
          ("object" === typeof input.properties &&
            null !== input.properties &&
            false === Array.isArray(input.properties) &&
            $io2(input.properties))) &&
        null !== input.additionalProperties &&
        (undefined === input.additionalProperties ||
          "boolean" === typeof input.additionalProperties ||
          ("object" === typeof input.additionalProperties &&
            null !== input.additionalProperties &&
            false === Array.isArray(input.additionalProperties) &&
            $iu1(input.additionalProperties))) &&
        (undefined === input.required ||
          (Array.isArray(input.required) &&
            input.required.every((elem: any) => "string" === typeof elem))) &&
        "object" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io10 = (input: any): boolean =>
        "string" === typeof input.$ref &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io11 = (input: any): boolean =>
        Array.isArray(input.oneOf) &&
        input.oneOf.every(
          (elem: any) =>
            "object" === typeof elem &&
            null !== elem &&
            false === Array.isArray(elem) &&
            $iu0(elem),
        ) &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io12 = (input: any): boolean =>
        "null" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io13 = (input: any): boolean =>
        null !== input.type &&
        undefined === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io14 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          return "object" === typeof value && null !== value && $iu2(value);
        });
      const $io15 = (input: any): boolean =>
        "apiKey" === input.type &&
        (undefined === input["in"] ||
          "header" === input["in"] ||
          "query" === input["in"] ||
          "cookie" === input["in"]) &&
        (undefined === input.name || "string" === typeof input.name) &&
        (undefined === input.description ||
          "string" === typeof input.description);
      const $io16 = (input: any): boolean =>
        "http" === input.type &&
        "basic" === input.scheme &&
        (undefined === input.description ||
          "string" === typeof input.description);
      const $io17 = (input: any): boolean =>
        "http" === input.type &&
        "bearer" === input.scheme &&
        (undefined === input.bearerFormat ||
          "string" === typeof input.bearerFormat) &&
        (undefined === input.description ||
          "string" === typeof input.description);
      const $io18 = (input: any): boolean =>
        "oauth2" === input.type &&
        "object" === typeof input.flows &&
        null !== input.flows &&
        false === Array.isArray(input.flows) &&
        $io19(input.flows) &&
        (undefined === input.description ||
          "string" === typeof input.description);
      const $io19 = (input: any): boolean =>
        (undefined === input.authorizationCode ||
          ("object" === typeof input.authorizationCode &&
            null !== input.authorizationCode &&
            false === Array.isArray(input.authorizationCode) &&
            $io20(input.authorizationCode))) &&
        (undefined === input.implicit ||
          ("object" === typeof input.implicit &&
            null !== input.implicit &&
            false === Array.isArray(input.implicit) &&
            $io22(input.implicit))) &&
        (undefined === input.password ||
          ("object" === typeof input.password &&
            null !== input.password &&
            false === Array.isArray(input.password) &&
            $io23(input.password))) &&
        (undefined === input.clientCredentials ||
          ("object" === typeof input.clientCredentials &&
            null !== input.clientCredentials &&
            false === Array.isArray(input.clientCredentials) &&
            $io23(input.clientCredentials)));
      const $io20 = (input: any): boolean =>
        (undefined === input.authorizationUrl ||
          "string" === typeof input.authorizationUrl) &&
        (undefined === input.tokenUrl || "string" === typeof input.tokenUrl) &&
        (undefined === input.refreshUrl ||
          "string" === typeof input.refreshUrl) &&
        (undefined === input.scopes ||
          ("object" === typeof input.scopes &&
            null !== input.scopes &&
            false === Array.isArray(input.scopes) &&
            $io21(input.scopes)));
      const $io21 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          return "string" === typeof value;
        });
      const $io22 = (input: any): boolean =>
        (undefined === input.authorizationUrl ||
          "string" === typeof input.authorizationUrl) &&
        (undefined === input.refreshUrl ||
          "string" === typeof input.refreshUrl) &&
        (undefined === input.scopes ||
          ("object" === typeof input.scopes &&
            null !== input.scopes &&
            false === Array.isArray(input.scopes) &&
            $io21(input.scopes)));
      const $io23 = (input: any): boolean =>
        (undefined === input.tokenUrl || "string" === typeof input.tokenUrl) &&
        (undefined === input.refreshUrl ||
          "string" === typeof input.refreshUrl) &&
        (undefined === input.scopes ||
          ("object" === typeof input.scopes &&
            null !== input.scopes &&
            false === Array.isArray(input.scopes) &&
            $io21(input.scopes)));
      const $io24 = (input: any): boolean =>
        "openIdConnect" === input.type &&
        "string" === typeof input.openIdConnectUrl &&
        (undefined === input.description ||
          "string" === typeof input.description);
      const $iu0 = (input: any): any =>
        (() => {
          if (undefined !== input["const"]) return $io3(input);
          else if ("boolean" === input.type) return $io4(input);
          else if ("number" === input.type) return $io6(input);
          else if ("integer" === input.type) return $io5(input);
          else if ("string" === input.type) return $io7(input);
          else if ("array" === input.type) return $io8(input);
          else if ("object" === input.type) return $io9(input);
          else if (undefined !== input.$ref) return $io10(input);
          else if ("null" === input.type) return $io12(input);
          else return $io13(input);
        })();
      const $iu1 = (input: any): any =>
        (() => {
          if (undefined !== input["const"]) return $io3(input);
          else if ("boolean" === input.type) return $io4(input);
          else if ("number" === input.type) return $io6(input);
          else if ("integer" === input.type) return $io5(input);
          else if ("string" === input.type) return $io7(input);
          else if ("array" === input.type) return $io8(input);
          else if ("object" === input.type) return $io9(input);
          else if (undefined !== input.$ref) return $io10(input);
          else if (undefined !== input.oneOf) return $io11(input);
          else if ("null" === input.type) return $io12(input);
          else return $io13(input);
        })();
      const $iu2 = (input: any): any =>
        (() => {
          if ("apiKey" === input.type) return $io15(input);
          else if ("basic" === input.scheme) return $io16(input);
          else if ("bearer" === input.scheme) return $io17(input);
          else if ("oauth2" === input.type) return $io18(input);
          else if ("openIdConnect" === input.type) return $io24(input);
          else return false;
        })();
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        )
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is UltimateUnion => {
        const $guard = (typia.createAssert as any).guard;
        const $join = (typia.createAssert as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("3.1" === input.version ||
            $guard(
              _exceptionable,
              {
                path: _path + ".version",
                expected: '"3.1"',
                value: input.version,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.components &&
            null !== input.components) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".components",
                expected: "OpenApi.IComponents",
                value: input.components,
              },
              errorFactory,
            )) &&
            $ao1(
              input.components,
              _path + ".components",
              true && _exceptionable,
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".components",
                expected: "OpenApi.IComponents",
                value: input.components,
              },
              errorFactory,
            )) &&
          (((Array.isArray(input.schemas) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".schemas",
                expected: "Array<OpenApi.IJsonSchema>",
                value: input.schemas,
              },
              errorFactory,
            )) &&
            input.schemas.every(
              (elem: any, _index2: number) =>
                ((("object" === typeof elem &&
                  null !== elem &&
                  false === Array.isArray(elem)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".schemas[" + _index2 + "]",
                      expected:
                        "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.IUnknown)",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $au1(
                    elem,
                    _path + ".schemas[" + _index2 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".schemas[" + _index2 + "]",
                    expected:
                      "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.IUnknown)",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".schemas",
                expected: "Array<OpenApi.IJsonSchema>",
                value: input.schemas,
              },
              errorFactory,
            ));
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.schemas &&
            null !== input.schemas &&
            false === Array.isArray(input.schemas)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".schemas",
                expected: "Record<string, OpenApi.IJsonSchema>",
                value: input.schemas,
              },
              errorFactory,
            )) &&
            $ao2(input.schemas, _path + ".schemas", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".schemas",
                expected: "Record<string, OpenApi.IJsonSchema>",
                value: input.schemas,
              },
              errorFactory,
            )) &&
          (undefined === input.securitySchemes ||
            ((("object" === typeof input.securitySchemes &&
              null !== input.securitySchemes &&
              false === Array.isArray(input.securitySchemes)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".securitySchemes",
                  expected:
                    "(Record<string, OpenApi.ISecurityScheme> | undefined)",
                  value: input.securitySchemes,
                },
                errorFactory,
              )) &&
              $ao14(
                input.securitySchemes,
                _path + ".securitySchemes",
                true && _exceptionable,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".securitySchemes",
                expected:
                  "(Record<string, OpenApi.ISecurityScheme> | undefined)",
                value: input.securitySchemes,
              },
              errorFactory,
            ));
        const $ao2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            return (
              ((("object" === typeof value &&
                null !== value &&
                false === Array.isArray(value)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected:
                      "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.IUnknown)",
                    value: value,
                  },
                  errorFactory,
                )) &&
                $au1(value, _path + $join(key), true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + $join(key),
                  expected:
                    "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.IUnknown)",
                  value: value,
                },
                errorFactory,
              )
            );
          });
        const $ao3 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input["const"] ||
            ("number" === typeof input["const"] &&
              Number.isFinite(input["const"])) ||
            "boolean" === typeof input["const"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["const"]',
                expected: "(boolean | number | string)",
                value: input["const"],
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            ));
        const $ao4 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input["default"] ||
            "boolean" === typeof input["default"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["default"]',
                expected: "(boolean | undefined)",
                value: input["default"],
              },
              errorFactory,
            )) &&
          ("boolean" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"boolean"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            ));
        const $ao5 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input["default"] ||
            ("number" === typeof input["default"] &&
              ((Math.floor(input["default"]) === input["default"] &&
                -2147483648 <= input["default"] &&
                input["default"] <= 2147483647) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + '["default"]',
                    expected: 'number & Type<"int32">',
                    value: input["default"],
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["default"]',
                expected: '((number & Type<"int32">) | undefined)',
                value: input["default"],
              },
              errorFactory,
            )) &&
          (undefined === input.minimum ||
            ("number" === typeof input.minimum &&
              ((Math.floor(input.minimum) === input.minimum &&
                -2147483648 <= input.minimum &&
                input.minimum <= 2147483647) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".minimum",
                    expected: 'number & Type<"int32">',
                    value: input.minimum,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".minimum",
                expected: '((number & Type<"int32">) | undefined)',
                value: input.minimum,
              },
              errorFactory,
            )) &&
          (undefined === input.maximum ||
            ("number" === typeof input.maximum &&
              ((Math.floor(input.maximum) === input.maximum &&
                -2147483648 <= input.maximum &&
                input.maximum <= 2147483647) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".maximum",
                    expected: 'number & Type<"int32">',
                    value: input.maximum,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".maximum",
                expected: '((number & Type<"int32">) | undefined)',
                value: input.maximum,
              },
              errorFactory,
            )) &&
          (undefined === input.exclusiveMinimum ||
            "boolean" === typeof input.exclusiveMinimum ||
            $guard(
              _exceptionable,
              {
                path: _path + ".exclusiveMinimum",
                expected: "(boolean | undefined)",
                value: input.exclusiveMinimum,
              },
              errorFactory,
            )) &&
          (undefined === input.exclusiveMaximum ||
            "boolean" === typeof input.exclusiveMaximum ||
            $guard(
              _exceptionable,
              {
                path: _path + ".exclusiveMaximum",
                expected: "(boolean | undefined)",
                value: input.exclusiveMaximum,
              },
              errorFactory,
            )) &&
          (undefined === input.multipleOf ||
            ("number" === typeof input.multipleOf &&
              ((Math.floor(input.multipleOf) === input.multipleOf &&
                0 <= input.multipleOf &&
                input.multipleOf <= 4294967295) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".multipleOf",
                    expected: 'number & Type<"uint32">',
                    value: input.multipleOf,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".multipleOf",
                expected: '((number & Type<"uint32">) | undefined)',
                value: input.multipleOf,
              },
              errorFactory,
            )) &&
          ("integer" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"integer"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            ));
        const $ao6 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input["default"] ||
            ("number" === typeof input["default"] &&
              Number.isFinite(input["default"])) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["default"]',
                expected: "(number | undefined)",
                value: input["default"],
              },
              errorFactory,
            )) &&
          (undefined === input.minimum ||
            ("number" === typeof input.minimum &&
              Number.isFinite(input.minimum)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".minimum",
                expected: "(number | undefined)",
                value: input.minimum,
              },
              errorFactory,
            )) &&
          (undefined === input.maximum ||
            ("number" === typeof input.maximum &&
              Number.isFinite(input.maximum)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".maximum",
                expected: "(number | undefined)",
                value: input.maximum,
              },
              errorFactory,
            )) &&
          (undefined === input.exclusiveMinimum ||
            "boolean" === typeof input.exclusiveMinimum ||
            $guard(
              _exceptionable,
              {
                path: _path + ".exclusiveMinimum",
                expected: "(boolean | undefined)",
                value: input.exclusiveMinimum,
              },
              errorFactory,
            )) &&
          (undefined === input.exclusiveMaximum ||
            "boolean" === typeof input.exclusiveMaximum ||
            $guard(
              _exceptionable,
              {
                path: _path + ".exclusiveMaximum",
                expected: "(boolean | undefined)",
                value: input.exclusiveMaximum,
              },
              errorFactory,
            )) &&
          (undefined === input.multipleOf ||
            ("number" === typeof input.multipleOf &&
              Number.isFinite(input.multipleOf)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".multipleOf",
                expected: "(number | undefined)",
                value: input.multipleOf,
              },
              errorFactory,
            )) &&
          ("number" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"number"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            ));
        const $ao7 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input.contentMediaType ||
            "string" === typeof input.contentMediaType ||
            $guard(
              _exceptionable,
              {
                path: _path + ".contentMediaType",
                expected: "(string | undefined)",
                value: input.contentMediaType,
              },
              errorFactory,
            )) &&
          (undefined === input["default"] ||
            "string" === typeof input["default"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["default"]',
                expected: "(string | undefined)",
                value: input["default"],
              },
              errorFactory,
            )) &&
          (undefined === input["enum"] ||
            ((Array.isArray(input["enum"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["enum"]',
                  expected: "(Array<string> | undefined)",
                  value: input["enum"],
                },
                errorFactory,
              )) &&
              input["enum"].every(
                (elem: any, _index3: number) =>
                  "string" === typeof elem ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["enum"][' + _index3 + "]",
                      expected: "string",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["enum"]',
                expected: "(Array<string> | undefined)",
                value: input["enum"],
              },
              errorFactory,
            )) &&
          (undefined === input.format ||
            "string" === typeof input.format ||
            $guard(
              _exceptionable,
              {
                path: _path + ".format",
                expected: "(string | undefined)",
                value: input.format,
              },
              errorFactory,
            )) &&
          (undefined === input.pattern ||
            "string" === typeof input.pattern ||
            $guard(
              _exceptionable,
              {
                path: _path + ".pattern",
                expected: "(string | undefined)",
                value: input.pattern,
              },
              errorFactory,
            )) &&
          (undefined === input.minLength ||
            ("number" === typeof input.minLength &&
              ((Math.floor(input.minLength) === input.minLength &&
                0 <= input.minLength &&
                input.minLength <= 4294967295) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".minLength",
                    expected: 'number & Type<"uint32">',
                    value: input.minLength,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".minLength",
                expected: '((number & Type<"uint32">) | undefined)',
                value: input.minLength,
              },
              errorFactory,
            )) &&
          (undefined === input.maxLength ||
            ("number" === typeof input.maxLength &&
              ((Math.floor(input.maxLength) === input.maxLength &&
                0 <= input.maxLength &&
                input.maxLength <= 4294967295) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".maxLength",
                    expected: 'number & Type<"uint32">',
                    value: input.maxLength,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".maxLength",
                expected: '((number & Type<"uint32">) | undefined)',
                value: input.maxLength,
              },
              errorFactory,
            )) &&
          ("string" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"string"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            ));
        const $ao8 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.items &&
            null !== input.items &&
            false === Array.isArray(input.items)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".items",
                expected:
                  "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.IUnknown)",
                value: input.items,
              },
              errorFactory,
            )) &&
            $au1(input.items, _path + ".items", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".items",
                expected:
                  "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.IUnknown)",
                value: input.items,
              },
              errorFactory,
            )) &&
          (undefined === input.minItems ||
            ("number" === typeof input.minItems &&
              ((Math.floor(input.minItems) === input.minItems &&
                0 <= input.minItems &&
                input.minItems <= 4294967295) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".minItems",
                    expected: 'number & Type<"uint32">',
                    value: input.minItems,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".minItems",
                expected: '((number & Type<"uint32">) | undefined)',
                value: input.minItems,
              },
              errorFactory,
            )) &&
          (undefined === input.maxItems ||
            ("number" === typeof input.maxItems &&
              ((Math.floor(input.maxItems) === input.maxItems &&
                0 <= input.maxItems &&
                input.maxItems <= 4294967295) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".maxItems",
                    expected: 'number & Type<"uint32">',
                    value: input.maxItems,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".maxItems",
                expected: '((number & Type<"uint32">) | undefined)',
                value: input.maxItems,
              },
              errorFactory,
            )) &&
          ("array" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"array"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            ));
        const $ao9 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input.properties ||
            ((("object" === typeof input.properties &&
              null !== input.properties &&
              false === Array.isArray(input.properties)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".properties",
                  expected: "(Record<string, OpenApi.IJsonSchema> | undefined)",
                  value: input.properties,
                },
                errorFactory,
              )) &&
              $ao2(
                input.properties,
                _path + ".properties",
                true && _exceptionable,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".properties",
                expected: "(Record<string, OpenApi.IJsonSchema> | undefined)",
                value: input.properties,
              },
              errorFactory,
            )) &&
          (null !== input.additionalProperties ||
            $guard(
              _exceptionable,
              {
                path: _path + ".additionalProperties",
                expected:
                  "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.IUnknown | boolean | undefined)",
                value: input.additionalProperties,
              },
              errorFactory,
            )) &&
          (undefined === input.additionalProperties ||
            "boolean" === typeof input.additionalProperties ||
            ((("object" === typeof input.additionalProperties &&
              null !== input.additionalProperties &&
              false === Array.isArray(input.additionalProperties)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".additionalProperties",
                  expected:
                    "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.IUnknown | boolean | undefined)",
                  value: input.additionalProperties,
                },
                errorFactory,
              )) &&
              $au1(
                input.additionalProperties,
                _path + ".additionalProperties",
                true && _exceptionable,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".additionalProperties",
                expected:
                  "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.IUnknown | boolean | undefined)",
                value: input.additionalProperties,
              },
              errorFactory,
            )) &&
          (undefined === input.required ||
            ((Array.isArray(input.required) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".required",
                  expected: "(Array<string> | undefined)",
                  value: input.required,
                },
                errorFactory,
              )) &&
              input.required.every(
                (elem: any, _index4: number) =>
                  "string" === typeof elem ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".required[" + _index4 + "]",
                      expected: "string",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".required",
                expected: "(Array<string> | undefined)",
                value: input.required,
              },
              errorFactory,
            )) &&
          ("object" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"object"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            ));
        const $ao10 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.$ref ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$ref",
                expected: "string",
                value: input.$ref,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            ));
        const $ao11 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input.oneOf) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".oneOf",
                expected:
                  "Array<IConstant | IBoolean | IInteger | INumber | IString | IArray | IObject | IReference<string> | INull | IUnknown>",
                value: input.oneOf,
              },
              errorFactory,
            )) &&
            input.oneOf.every(
              (elem: any, _index5: number) =>
                ((("object" === typeof elem &&
                  null !== elem &&
                  false === Array.isArray(elem)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".oneOf[" + _index5 + "]",
                      expected:
                        "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.IUnknown)",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $au0(
                    elem,
                    _path + ".oneOf[" + _index5 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".oneOf[" + _index5 + "]",
                    expected:
                      "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.IUnknown)",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".oneOf",
                expected:
                  "Array<IConstant | IBoolean | IInteger | INumber | IString | IArray | IObject | IReference<string> | INull | IUnknown>",
                value: input.oneOf,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            ));
        const $ao12 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("null" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"null"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            ));
        const $ao13 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (null !== input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: "undefined",
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: "undefined",
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            ));
        const $ao14 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            return (
              ((("object" === typeof value && null !== value) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected:
                      "(OpenApi.ISecurityScheme.IApiKey | OpenApi.ISecurityScheme.IHttpBasic | OpenApi.ISecurityScheme.IHttpBearer | OpenApi.ISecurityScheme.IOAuth2 | OpenApi.ISecurityScheme.IOpenId)",
                    value: value,
                  },
                  errorFactory,
                )) &&
                $au2(value, _path + $join(key), true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + $join(key),
                  expected:
                    "(OpenApi.ISecurityScheme.IApiKey | OpenApi.ISecurityScheme.IHttpBasic | OpenApi.ISecurityScheme.IHttpBearer | OpenApi.ISecurityScheme.IOAuth2 | OpenApi.ISecurityScheme.IOpenId)",
                  value: value,
                },
                errorFactory,
              )
            );
          });
        const $ao15 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("apiKey" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"apiKey"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input["in"] ||
            "header" === input["in"] ||
            "query" === input["in"] ||
            "cookie" === input["in"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["in"]',
                expected: '("cookie" | "header" | "query" | undefined)',
                value: input["in"],
              },
              errorFactory,
            )) &&
          (undefined === input.name ||
            "string" === typeof input.name ||
            $guard(
              _exceptionable,
              {
                path: _path + ".name",
                expected: "(string | undefined)",
                value: input.name,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            ));
        const $ao16 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("http" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"http"',
                value: input.type,
              },
              errorFactory,
            )) &&
          ("basic" === input.scheme ||
            $guard(
              _exceptionable,
              {
                path: _path + ".scheme",
                expected: '"basic"',
                value: input.scheme,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            ));
        const $ao17 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("http" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"http"',
                value: input.type,
              },
              errorFactory,
            )) &&
          ("bearer" === input.scheme ||
            $guard(
              _exceptionable,
              {
                path: _path + ".scheme",
                expected: '"bearer"',
                value: input.scheme,
              },
              errorFactory,
            )) &&
          (undefined === input.bearerFormat ||
            "string" === typeof input.bearerFormat ||
            $guard(
              _exceptionable,
              {
                path: _path + ".bearerFormat",
                expected: "(string | undefined)",
                value: input.bearerFormat,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            ));
        const $ao18 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("oauth2" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"oauth2"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.flows &&
            null !== input.flows &&
            false === Array.isArray(input.flows)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".flows",
                expected: "OpenApi.ISecurityScheme.IOAuth2.IFlowSet",
                value: input.flows,
              },
              errorFactory,
            )) &&
            $ao19(input.flows, _path + ".flows", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".flows",
                expected: "OpenApi.ISecurityScheme.IOAuth2.IFlowSet",
                value: input.flows,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            ));
        const $ao19 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input.authorizationCode ||
            ((("object" === typeof input.authorizationCode &&
              null !== input.authorizationCode &&
              false === Array.isArray(input.authorizationCode)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".authorizationCode",
                  expected:
                    "(OpenApi.ISecurityScheme.IOAuth2.IFlow | undefined)",
                  value: input.authorizationCode,
                },
                errorFactory,
              )) &&
              $ao20(
                input.authorizationCode,
                _path + ".authorizationCode",
                true && _exceptionable,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".authorizationCode",
                expected: "(OpenApi.ISecurityScheme.IOAuth2.IFlow | undefined)",
                value: input.authorizationCode,
              },
              errorFactory,
            )) &&
          (undefined === input.implicit ||
            ((("object" === typeof input.implicit &&
              null !== input.implicit &&
              false === Array.isArray(input.implicit)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".implicit",
                  expected:
                    '(Omit<OpenApi.ISecurityScheme.IOAuth2.IFlow, "tokenUrl"> | undefined)',
                  value: input.implicit,
                },
                errorFactory,
              )) &&
              $ao22(
                input.implicit,
                _path + ".implicit",
                true && _exceptionable,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".implicit",
                expected:
                  '(Omit<OpenApi.ISecurityScheme.IOAuth2.IFlow, "tokenUrl"> | undefined)',
                value: input.implicit,
              },
              errorFactory,
            )) &&
          (undefined === input.password ||
            ((("object" === typeof input.password &&
              null !== input.password &&
              false === Array.isArray(input.password)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".password",
                  expected:
                    '(Omit<OpenApi.ISecurityScheme.IOAuth2.IFlow, "authorizationUrl"> | undefined)',
                  value: input.password,
                },
                errorFactory,
              )) &&
              $ao23(
                input.password,
                _path + ".password",
                true && _exceptionable,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".password",
                expected:
                  '(Omit<OpenApi.ISecurityScheme.IOAuth2.IFlow, "authorizationUrl"> | undefined)',
                value: input.password,
              },
              errorFactory,
            )) &&
          (undefined === input.clientCredentials ||
            ((("object" === typeof input.clientCredentials &&
              null !== input.clientCredentials &&
              false === Array.isArray(input.clientCredentials)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".clientCredentials",
                  expected:
                    '(Omit<OpenApi.ISecurityScheme.IOAuth2.IFlow, "authorizationUrl"> | undefined)',
                  value: input.clientCredentials,
                },
                errorFactory,
              )) &&
              $ao23(
                input.clientCredentials,
                _path + ".clientCredentials",
                true && _exceptionable,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".clientCredentials",
                expected:
                  '(Omit<OpenApi.ISecurityScheme.IOAuth2.IFlow, "authorizationUrl"> | undefined)',
                value: input.clientCredentials,
              },
              errorFactory,
            ));
        const $ao20 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input.authorizationUrl ||
            "string" === typeof input.authorizationUrl ||
            $guard(
              _exceptionable,
              {
                path: _path + ".authorizationUrl",
                expected: "(string | undefined)",
                value: input.authorizationUrl,
              },
              errorFactory,
            )) &&
          (undefined === input.tokenUrl ||
            "string" === typeof input.tokenUrl ||
            $guard(
              _exceptionable,
              {
                path: _path + ".tokenUrl",
                expected: "(string | undefined)",
                value: input.tokenUrl,
              },
              errorFactory,
            )) &&
          (undefined === input.refreshUrl ||
            "string" === typeof input.refreshUrl ||
            $guard(
              _exceptionable,
              {
                path: _path + ".refreshUrl",
                expected: "(string | undefined)",
                value: input.refreshUrl,
              },
              errorFactory,
            )) &&
          (undefined === input.scopes ||
            ((("object" === typeof input.scopes &&
              null !== input.scopes &&
              false === Array.isArray(input.scopes)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".scopes",
                  expected: "(Record<string, string> | undefined)",
                  value: input.scopes,
                },
                errorFactory,
              )) &&
              $ao21(input.scopes, _path + ".scopes", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".scopes",
                expected: "(Record<string, string> | undefined)",
                value: input.scopes,
              },
              errorFactory,
            ));
        const $ao21 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            return (
              "string" === typeof value ||
              $guard(
                _exceptionable,
                {
                  path: _path + $join(key),
                  expected: "string",
                  value: value,
                },
                errorFactory,
              )
            );
          });
        const $ao22 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input.authorizationUrl ||
            "string" === typeof input.authorizationUrl ||
            $guard(
              _exceptionable,
              {
                path: _path + ".authorizationUrl",
                expected: "(string | undefined)",
                value: input.authorizationUrl,
              },
              errorFactory,
            )) &&
          (undefined === input.refreshUrl ||
            "string" === typeof input.refreshUrl ||
            $guard(
              _exceptionable,
              {
                path: _path + ".refreshUrl",
                expected: "(string | undefined)",
                value: input.refreshUrl,
              },
              errorFactory,
            )) &&
          (undefined === input.scopes ||
            ((("object" === typeof input.scopes &&
              null !== input.scopes &&
              false === Array.isArray(input.scopes)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".scopes",
                  expected: "(Record<string, string> | undefined)",
                  value: input.scopes,
                },
                errorFactory,
              )) &&
              $ao21(input.scopes, _path + ".scopes", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".scopes",
                expected: "(Record<string, string> | undefined)",
                value: input.scopes,
              },
              errorFactory,
            ));
        const $ao23 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input.tokenUrl ||
            "string" === typeof input.tokenUrl ||
            $guard(
              _exceptionable,
              {
                path: _path + ".tokenUrl",
                expected: "(string | undefined)",
                value: input.tokenUrl,
              },
              errorFactory,
            )) &&
          (undefined === input.refreshUrl ||
            "string" === typeof input.refreshUrl ||
            $guard(
              _exceptionable,
              {
                path: _path + ".refreshUrl",
                expected: "(string | undefined)",
                value: input.refreshUrl,
              },
              errorFactory,
            )) &&
          (undefined === input.scopes ||
            ((("object" === typeof input.scopes &&
              null !== input.scopes &&
              false === Array.isArray(input.scopes)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".scopes",
                  expected: "(Record<string, string> | undefined)",
                  value: input.scopes,
                },
                errorFactory,
              )) &&
              $ao21(input.scopes, _path + ".scopes", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".scopes",
                expected: "(Record<string, string> | undefined)",
                value: input.scopes,
              },
              errorFactory,
            ));
        const $ao24 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("openIdConnect" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"openIdConnect"',
                value: input.type,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.openIdConnectUrl ||
            $guard(
              _exceptionable,
              {
                path: _path + ".openIdConnectUrl",
                expected: "string",
                value: input.openIdConnectUrl,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            ));
        const $au0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          (() => {
            if (undefined !== input["const"])
              return $ao3(input, _path, true && _exceptionable);
            else if ("boolean" === input.type)
              return $ao4(input, _path, true && _exceptionable);
            else if ("number" === input.type)
              return $ao6(input, _path, true && _exceptionable);
            else if ("integer" === input.type)
              return $ao5(input, _path, true && _exceptionable);
            else if ("string" === input.type)
              return $ao7(input, _path, true && _exceptionable);
            else if ("array" === input.type)
              return $ao8(input, _path, true && _exceptionable);
            else if ("object" === input.type)
              return $ao9(input, _path, true && _exceptionable);
            else if (undefined !== input.$ref)
              return $ao10(input, _path, true && _exceptionable);
            else if ("null" === input.type)
              return $ao12(input, _path, true && _exceptionable);
            else return $ao13(input, _path, true && _exceptionable);
          })();
        const $au1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          (() => {
            if (undefined !== input["const"])
              return $ao3(input, _path, true && _exceptionable);
            else if ("boolean" === input.type)
              return $ao4(input, _path, true && _exceptionable);
            else if ("number" === input.type)
              return $ao6(input, _path, true && _exceptionable);
            else if ("integer" === input.type)
              return $ao5(input, _path, true && _exceptionable);
            else if ("string" === input.type)
              return $ao7(input, _path, true && _exceptionable);
            else if ("array" === input.type)
              return $ao8(input, _path, true && _exceptionable);
            else if ("object" === input.type)
              return $ao9(input, _path, true && _exceptionable);
            else if (undefined !== input.$ref)
              return $ao10(input, _path, true && _exceptionable);
            else if (undefined !== input.oneOf)
              return $ao11(input, _path, true && _exceptionable);
            else if ("null" === input.type)
              return $ao12(input, _path, true && _exceptionable);
            else return $ao13(input, _path, true && _exceptionable);
          })();
        const $au2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          (() => {
            if ("apiKey" === input.type)
              return $ao15(input, _path, true && _exceptionable);
            else if ("basic" === input.scheme)
              return $ao16(input, _path, true && _exceptionable);
            else if ("bearer" === input.scheme)
              return $ao17(input, _path, true && _exceptionable);
            else if ("oauth2" === input.type)
              return $ao18(input, _path, true && _exceptionable);
            else if ("openIdConnect" === input.type)
              return $ao24(input, _path, true && _exceptionable);
            else
              return $guard(
                _exceptionable,
                {
                  path: _path,
                  expected:
                    "(OpenApi.ISecurityScheme.IApiKey | OpenApi.ISecurityScheme.IHttpBasic | OpenApi.ISecurityScheme.IHttpBearer | OpenApi.ISecurityScheme.IOAuth2 | OpenApi.ISecurityScheme.IOpenId)",
                  value: input,
                },
                errorFactory,
              );
          })();
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "UltimateUnion",
                value: input,
              },
              errorFactory,
            )) &&
            input.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(
                    true,
                    {
                      path: _path + "[" + _index1 + "]",
                      expected: "IJsonApplication.IV3_1",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "[" + _index1 + "]",
                    expected: "IJsonApplication.IV3_1",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "UltimateUnion",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
