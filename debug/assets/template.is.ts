input => {
    const $io0 = input => "string" === typeof input.pure && (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\/[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(input.pure) || RegExp(/(.*)\x2d(.*)/).test(input.pure)) && ("string" === typeof input.sole && RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\/[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(input.sole)) && ("string" === typeof input.union && (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\/[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(input.union) || RegExp(/(.*)\x2d(.*)/).test(input.union))) && ("string" === typeof input.mixed && (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\/[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(input.mixed) || RegExp(/(.*)\x2d(.*)/).test(input.mixed) || RegExp(/(.*)\|\|[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(input.mixed))) && (null !== input.boolean_and_number_and_template && undefined !== input.boolean_and_number_and_template && ("number" === typeof input.boolean_and_number_and_template || "boolean" === typeof input.boolean_and_number_and_template || "string" === typeof input.boolean_and_number_and_template && RegExp(/^prefix_(.*)/).test(input.boolean_and_number_and_template)));
    return "object" === typeof input && null !== input && $io0(input);
}